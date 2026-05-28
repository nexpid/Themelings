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
case 0:
            var1 = _closure1_slot19;
            var2 = var1.PrivateOnly;
            var1 = arg2;
            var1 = var1 === var2;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = arg1;
            var3 = var2.isPrivate;
            var2 = null;
            var2 = var2 != var3;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3;
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot20 = var5;
    var1 = function trimToLength(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var2 = var5.length;
            var1 = var5;
            if(!(var2 > var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var5.substring;
            var2 = 0;
            var3 = var3.bind(var5)(var2, var4);
            var2 = '...';
            var1 = var3 + var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var4 = function getDefaultThreadName(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var6 = arg2;
            var8 = null;
            var1 = var8 == var6;
            var5 = null;
            if(var1) { _fun0003_ip = 5; continue _fun0003 }
case 8:
            var4 = _closure1_slot9;
            var3 = var4.getMessage;
            var1 = var2.id;
            var5 = var3.bind(var4)(var1, var6);
case 5:
            var1 = var8 == var5;
            var4 = undefined;
            var6 = undefined;
            if(var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var1 = var5.getContentMessage;
            var6 = var1.bind(var5)();
case 9:
            var3 = var8 == var6;
            var1 = undefined;
            if(var3) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var7 = var6.embeds;
            var3 = var8 == var7;
            var1 = undefined;
            if(var3) { _fun0003_ip = 11; continue _fun0003 }
case 13:
            var3 = 0;
            var3 = var7[var3];
            var7 = var8 == var3;
            var1 = undefined;
            if(var7) { _fun0003_ip = 11; continue _fun0003 }
case 14:
            var1 = var3.rawTitle;
case 11:
            var7 = var8 != var1;
            var10 = '';
            var3 = var10;
            if(!var7) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var3 = var1;
case 15:
            var7 = var8 == var5;
            var1 = undefined;
            if(var7) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var5 = var5.poll;
            var7 = var8 == var5;
            var1 = undefined;
            if(var7) { _fun0003_ip = 17; continue _fun0003 }
case 19:
            var5 = var5.question;
            var7 = var8 == var5;
            var1 = undefined;
            if(var7) { _fun0003_ip = 17; continue _fun0003 }
case 20:
            var1 = var5.text;
case 17:
            var7 = var8 != var1;
            var5 = var10;
            if(!var7) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var5 = var1;
case 21:
            if(!(var10 === var3)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            if(!(var10 === var5)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 12;
            var7 = var11[var7];
            var11 = var9.bind(var4)(var7);
            var7 = var11.unparse;
            var12 = var8 == var6;
            var9 = undefined;
            if(var12) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var9 = var6.content;
case 27:
            var12 = var8 != var9;
            var6 = var10;
            if(!var12) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var6 = var9;
case 29:
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
case 31:
            var9 = var6.match;
            var7 = /(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/;
            var9 = var9.bind(var6)(var7);
            var7 = var6;
            if(!(var8 != var9)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var11 = var9.index;
            if(!(var8 != var11)) { _fun0003_ip = 32; continue _fun0003 }
case 34:
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
            _fun0003_ip = 31; continue _fun0003;
case 32:
            var6 = var10.push;
            var6 = var6.bind(var10)(var7);
            var8 = var10[var2];
            var6 = var10.length;
            var9 = 1;
            var7 = var9 < var6;
            var6 = 40;
            var2 = var8;
            if(!var7) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var7 = var10[var9];
            var11 = var8 + var7;
            var7 = var11.length;
            var2 = var8;
            if(!(!(var7 > var6))) { _fun0003_ip = 35; continue _fun0003 }
case 37:
            var9 = var9 + 1;
            var7 = var10.length;
            var8 = var11;
            var2 = var8;
            if(var9 < var7) { _fun0003_ip = 36; continue _fun0003 }
case 35:
            var1 = _closure1_slot21;
            var1 = var1.bind(var4)(var2, var6);
            return var1;
case 25:
            var2 = _closure1_slot21;
            var1 = 80;
            var1 = var2.bind(var4)(var5, var1);
            return var1;
case 23:
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
case 0:
                    StartGenerator();
                    var25 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                    var11 = var25;
                    var20 = arg2;
                    var17 = arg3;
                    var5 = arg4;
                    var6 = undefined;
                    var28 = undefined;
                    var _closure4_slot0 = var6;
                    var8 = undefined;
                    var9 = undefined;
                    var21 = undefined;
                    var12 = undefined;
                    var24 = undefined;
                    var15 = undefined;
                    var16 = undefined;
                    var22 = undefined;
                    var7 = undefined;
                    var10 = undefined;
                    var14 = undefined;
                    var13 = undefined;
                    var19 = undefined;
                    var18 = undefined;
                    var3 = undefined;
                    var23 = var25.isForumLikeChannel;
                    var8 = var23.bind(var25)();
case 40: // try_start_0
                    var5 = var5.bind(var6)();
                    SaveGenerator(address=83);
case 41:
                    return var5;
case 42:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=22);
                    if(var23) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                    var28 = var5;
                    _closure4_slot0 = var5;
                    var25 = var5.body;
                    var23 = null;
                    if(!(var23 != var25)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
                    var26 = _closure1_slot1;
                    var23 = _closure1_slot2;
                    var25 = 27;
                    var27 = var23[var25];
                    var31 = var26.bind(var6)(var27);
                    var30 = var31.dispatch;
                    var27 = {};
                    var32 = 'SLOWMODE_RESET_COOLDOWN';
                    var27['type'] = var32;
                    var32 = _closure1_slot10;
                    var32 = var32.CreateThread;
                    var27['slowmodeType'] = var32;
                    var32 = var11;
                    var32 = var32.id;
                    var27['channelId'] = var32;
                    var27 = var30.bind(var31)(var27);
                    var25 = var23[var25];
                    var27 = var26.bind(var6)(var25);
                    var26 = var27.dispatch;
                    var25 = {};
                    var30 = 'THREAD_CREATE_LOCAL';
                    var25['type'] = var30;
                    var28 = var28.body;
                    var28 = var28.id;
                    var25['channelId'] = var28;
                    var25 = var26.bind(var27)(var25);
                    var27 = _closure1_slot0;
                    var25 = 28;
                    var25 = var23[var25];
                    var25 = var27.bind(var6)(var25);
                    var26 = var25.AccessibilityAnnouncer;
                    var25 = var26.announce;
                    var31 = 14;
                    var23 = var23[var31];
                    var23 = var27.bind(var6)(var23);
                    var28 = var23.intl;
                    var27 = var28.string;
                    var23 = var8;
                    var30 = _closure1_slot0;
                    var29 = _closure1_slot2;
                    var29 = var29[var31];
                    var29 = var30.bind(var6)(var29);
                    var29 = var29.t;
                    if(var23) { _fun0004_ip = 47; continue _fun0004 }
case 48:
                    var23 = var29.XkUoBb;
                    _fun0004_ip = 49; continue _fun0004;
case 47:
                    var23 = var29.zDAG2N;
case 49:
                    var23 = var27.bind(var28)(var23);
                    var23 = var25.bind(var26)(var23);
                    _fun0004_ip = 50; continue _fun0004;
case 45:
                    var25 = _closure1_slot1;
                    var31 = _closure1_slot2;
                    var23 = 26;
                    var23 = var31[var23];
                    var26 = var25.bind(var6)(var23);
                    var25 = var26.show;
                    var23 = {};
                    var30 = _closure1_slot0;
                    var27 = 14;
                    var28 = var31[var27];
                    var28 = var30.bind(var6)(var28);
                    var32 = var28.intl;
                    var29 = var32.string;
                    var28 = var31[var27];
                    var28 = var30.bind(var6)(var28);
                    var28 = var28.t;
                    var28 = var28.j2d6Km;
                    var28 = var29.bind(var32)(var28);
                    var23['title'] = var28;
                    var28 = var31[var27];
                    var28 = var30.bind(var6)(var28);
                    var29 = var28.intl;
                    var28 = var29.string;
                    var27 = var31[var27];
                    var27 = var30.bind(var6)(var27);
                    var27 = var27.t;
                    var27 = var27.fEptJP;
                    var27 = var28.bind(var29)(var27);
                    var23['body'] = var27;
                    var23 = var25.bind(var26)(var23);
case 50: // try_end0
                    _fun0004_ip = 51; continue _fun0004;
case 43:
                    return var5;
case 36: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = var5;
                    var _closure4_slot1 = var5;
                    var23 = var5.body;
                    var9 = var23;
                    var5 = null;
                    var23 = var5 == var23;
                    var25 = undefined;
                    if(var23) { _fun0004_ip = 52; continue _fun0004 }
case 53:
                    var25 = var9.code;
case 52:
                    var23 = _closure1_slot13;
                    var23 = var23.TOO_MANY_THREADS;
                    if(!(var25 !== var23)) { _fun0004_ip = 54; continue _fun0004 }
case 55:
                    var23 = var4;
                    var23 = var23.body;
                    var21 = var23;
                    var25 = var5 == var23;
                    var23 = undefined;
                    if(var25) { _fun0004_ip = 56; continue _fun0004 }
case 57:
                    var23 = var21.code;
case 56:
                    var21 = _closure1_slot13;
                    var21 = var21.TOO_MANY_ANNOUNCEMENT_THREADS;
                    if(!(var23 !== var21)) { _fun0004_ip = 58; continue _fun0004 }
case 59:
                    var21 = var4;
                    var21 = var21.body;
                    var12 = var21;
                    var23 = var5 == var21;
                    var21 = undefined;
                    if(var23) { _fun0004_ip = 60; continue _fun0004 }
case 61:
                    var21 = var12.code;
case 60:
                    var12 = _closure1_slot13;
                    var12 = var12.SLOWMODE_RATE_LIMITED;
                    if(!(var21 !== var12)) { _fun0004_ip = 62; continue _fun0004 }
case 63:
                    var12 = var4;
                    var21 = var12.status;
                    var12 = 429;
                    if(!(var12 !== var21)) { _fun0004_ip = 64; continue _fun0004 }
case 65:
                    var23 = _closure1_slot11;
                    var21 = var23.has;
                    var12 = var4;
                    var12 = var12.body;
                    var24 = var12;
                    var25 = var5 == var12;
                    var12 = undefined;
                    if(var25) { _fun0004_ip = 66; continue _fun0004 }
case 67:
                    var12 = var24.code;
case 66:
                    var21 = var21.bind(var23)(var12);
                    var12 = var4;
                    if(var21) { _fun0004_ip = 68; continue _fun0004 }
case 69:
                    var21 = var12.body;
                    var15 = var21;
                    var23 = var5 == var21;
                    var21 = undefined;
                    if(var23) { _fun0004_ip = 70; continue _fun0004 }
case 71:
                    var21 = var15.code;
case 70:
                    var15 = _closure1_slot13;
                    var15 = var15.INVALID_FORM_BODY;
                    if(!(var21 === var15)) { _fun0004_ip = 72; continue _fun0004 }
case 73:
                    var15 = var4;
                    var15 = var15.body;
                    var16 = var15;
                    var21 = var5 == var15;
                    var15 = undefined;
                    if(var21) { _fun0004_ip = 74; continue _fun0004 }
case 75:
                    var21 = var16;
                    var21 = var21.errors;
                    var16 = var21;
                    var21 = var5 == var21;
                    var15 = undefined;
                    if(var21) { _fun0004_ip = 74; continue _fun0004 }
case 76:
                    var15 = var16.name;
case 74:
                    if(!(var5 == var15)) { _fun0004_ip = 77; continue _fun0004 }
case 72:
                    var21 = _closure1_slot12;
                    var16 = var21.has;
                    var15 = var4;
                    var15 = var15.body;
                    var22 = var15;
                    var23 = var5 == var15;
                    var15 = undefined;
                    if(var23) { _fun0004_ip = 78; continue _fun0004 }
case 79:
                    var15 = var22.code;
case 78:
                    var15 = var16.bind(var21)(var15);
                    if(var15) { _fun0004_ip = 80; continue _fun0004 }
case 81:
                    var16 = _closure1_slot1;
                    var26 = _closure1_slot2;
                    var15 = 26;
                    var15 = var26[var15];
                    var21 = var16.bind(var6)(var15);
                    var16 = var21.show;
                    var15 = {};
                    var25 = _closure1_slot0;
                    var22 = 14;
                    var23 = var26[var22];
                    var23 = var25.bind(var6)(var23);
                    var27 = var23.intl;
                    var24 = var27.string;
                    var23 = var26[var22];
                    var23 = var25.bind(var6)(var23);
                    var23 = var23.t;
                    var23 = var23.j2d6Km;
                    var23 = var24.bind(var27)(var23);
                    var15['title'] = var23;
                    var23 = var26[var22];
                    var23 = var25.bind(var6)(var23);
                    var24 = var23.intl;
                    var23 = var24.string;
                    var22 = var26[var22];
                    var22 = var25.bind(var6)(var22);
                    var22 = var22.t;
                    var22 = var22.fEptJP;
                    var22 = var23.bind(var24)(var22);
                    var15['body'] = var22;
                    var15 = var16.bind(var21)(var15);
                    _fun0004_ip = 51; continue _fun0004;
case 80:
                    var15 = var17;
                    if(!(var5 != var15)) { _fun0004_ip = 82; continue _fun0004 }
case 83:
                    var15 = var4;
                    var15 = var15.body;
                    var14 = var15;
                    var16 = var5 == var15;
                    var15 = undefined;
                    if(var16) { _fun0004_ip = 84; continue _fun0004 }
case 85:
                    var15 = var14.code;
case 84:
                    var14 = _closure1_slot13;
                    var14 = var14.EXPLICIT_CONTENT;
                    if(!(var15 !== var14)) { _fun0004_ip = 86; continue _fun0004 }
case 87:
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var14 = 23;
                    var14 = var16[var14];
                    var16 = var15.bind(var6)(var14);
                    var15 = var16.handleUploadMessageAttachmentsErrors;
                    var14 = {};
                    var14['file'] = var17;
                    var21 = var11;
                    var17 = var21.getGuildId;
                    var17 = var17.bind(var21)();
                    var14['guildId'] = var17;
                    var17 = var20;
                    if(!(var5 == var17)) { _fun0004_ip = 88; continue _fun0004 }
case 89:
                    var17 = new Array(0);
                    _fun0004_ip = 90; continue _fun0004;
case 88:
                    var17 = var20;
case 90:
                    var14['analyticsLocations'] = var17;
                    var17 = var4;
                    var17 = var17.body;
                    var19 = var17;
                    var20 = var5 == var17;
                    var17 = undefined;
                    if(var20) { _fun0004_ip = 91; continue _fun0004 }
case 92:
                    var17 = var19.code;
case 91:
                    var14['code'] = var17;
                    var17 = var4;
                    var17 = var17.body;
                    var18 = var17;
                    var19 = var5 == var17;
                    var17 = undefined;
                    if(var19) { _fun0004_ip = 93; continue _fun0004 }
case 94:
                    var17 = var18.reason;
case 93:
                    var14['reason'] = var17;
                    var14 = var15.bind(var16)(var14);
                    _fun0004_ip = 82; continue _fun0004;
case 86:
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var14 = 30;
                    var14 = var16[var14];
                    var15 = var15.bind(var6)(var14);
                    var14 = var15.createNonce;
                    var13 = var14.bind(var15)();
                    var15 = var4;
                    var15 = var15.body;
                    var15 = var15.attachments;
                    var15 = var5 != var15;
                    var14 = var15;
                    if(!var15) { _fun0004_ip = 95; continue _fun0004 }
case 96:
                    var15 = var4;
                    var15 = var15.body;
                    var15 = var15.attachments;
                    var16 = var15.length;
                    var15 = 0;
                    var14 = var16 > var15;
case 95:
                    if(!var14) { _fun0004_ip = 82; continue _fun0004 }
case 97:
                    var16 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var14 = 27;
                    var14 = var17[var14];
                    var19 = var16.bind(var6)(var14);
                    var18 = var19.dispatch;
                    var14 = {};
                    var15 = 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE';
                    var14['type'] = var15;
                    var15 = var13;
                    var14['messageId'] = var15;
                    var13 = var11;
                    var20 = var13.id;
                    var14['channelId'] = var20;
                    var20 = var4;
                    var20 = var20.body;
                    var20 = var20.attachments;
                    var14['attachments'] = var20;
                    var14 = var18.bind(var19)(var14);
                    var14 = 31;
                    var14 = var17[var14];
                    var14 = var16.bind(var6)(var14);
                    var13 = var13.id;
                    var13 = var14.bind(var6)(var13, var15);
case 82:
                    var13 = global;
                    var15 = var13.Promise;
                    var13 = var15.prototype;
                    var14 = Object.create(var13, {constructor: {value: var15}});
                    var34 = function(arg1, arg2) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var3 = arg2;
                            var2 = arg1;
                            var _closure5_slot0 = var2;
                            var _closure5_slot1 = var3;
                            var2 = _closure4_slot1;
                            var4 = var2.body;
                            var2 = null;
                            if(!(var2 == var4)) { _fun0005_ip = 98; continue _fun0005 }
case 99:
                            var2 = undefined;
                            var2 = var3.bind(var2)();
case 98:
                            var3 = _closure1_slot6;
                            var2 = var3.addConditionalChangeListener;
                            var1 = function() {
                                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                    var4 = _closure1_slot6;
                                    var3 = var4.getAndDeleteMostRecentUserCreatedThreadId;
                                    var5 = var3.bind(var4)();
                                    var3 = null;
                                    if(!(var3 == var5)) { _fun0006_ip = 100; continue _fun0006 }
case 101:
                                    var3 = undefined;
                                    return var3;
case 100:
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
case 0:
                                            var3 = _closure6_slot0;
                                            var2 = null;
                                            if(!(var2 != var3)) { _fun0007_ip = 102; continue _fun0007 }
case 103:
                                            var3 = _closure5_slot0;
                                            var2 = _closure6_slot0;
                                            var1 = undefined;
                                            var1 = var3.bind(var1)(var2);
                                            _fun0007_ip = 104; continue _fun0007;
case 102:
                                            var2 = _closure5_slot1;
                                            var1 = undefined;
                                            var1 = var2.bind(var1)();
case 104:
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
                    var35 = var14;
                    var13 = new var35[var15](var34, var33);
                    var13 = var13 instanceof Object ? var13 : var14;
                    return var13;
case 77:
                    var13 = var4;
                    throw var13;
case 68:
                    throw var12;
case 64:
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
                    if(var15) { _fun0004_ip = 105; continue _fun0004 }
case 106:
                    var15 = var16["1KEdvB"];
                    var15 = var17.bind(var18)(var15);
                    _fun0004_ip = 107; continue _fun0004;
case 105:
                    var16 = var16.vWNFkx;
                    var15 = var17.bind(var18)(var16);
case 107:
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
                    var15 = var15.Whhv4w;
                    var15 = var16.bind(var17)(var15);
                    var12['body'] = var15;
                    var12 = var13.bind(var14)(var12);
                    _fun0004_ip = 51; continue _fun0004;
case 62:
                    var4 = var4.body;
                    var4 = var4.retry_after;
                    var7 = var4;
                    var12 = var5 != var4;
                    var5 = 0;
                    var4 = 0;
                    if(!var12) { _fun0004_ip = 108; continue _fun0004 }
case 109:
                    var4 = var7;
case 108:
                    var10 = var4;
                    if(!(var4 > var5)) { _fun0004_ip = 51; continue _fun0004 }
case 110:
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
                    var10 = 29;
                    var10 = var13[var10];
                    var10 = var12.bind(var6)(var10);
                    var10 = var10.Millis;
                    var10 = var10.SECOND;
                    var10 = var11 * var10;
                    var4['cooldownMs'] = var10;
                    var4 = var5.bind(var7)(var4);
                    _fun0004_ip = 51; continue _fun0004;
case 58:
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
                    var11 = var11["1KEdvB"];
                    var11 = var12.bind(var15)(var11);
                    var4['title'] = var11;
                    var11 = var14[var10];
                    var11 = var13.bind(var6)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var10 = var14[var10];
                    var10 = var13.bind(var6)(var10);
                    var10 = var10.t;
                    var10 = var10.jDMxz2;
                    var10 = var11.bind(var12)(var10);
                    var4['body'] = var10;
                    var4 = var5.bind(var7)(var4);
                    _fun0004_ip = 51; continue _fun0004;
case 54:
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
                    if(var10) { _fun0004_ip = 111; continue _fun0004 }
case 112:
                    var10 = var11["1KEdvB"];
                    var10 = var12.bind(var14)(var10);
                    _fun0004_ip = 113; continue _fun0004;
case 111:
                    var11 = var11.vWNFkx;
                    var10 = var12.bind(var14)(var11);
case 113:
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
                    if(var8) { _fun0004_ip = 114; continue _fun0004 }
case 115:
                    var8 = var9.P0wT5S;
                    var8 = var10.bind(var11)(var8);
                    _fun0004_ip = 116; continue _fun0004;
case 114:
                    var9 = var9.KGaiEK;
                    var8 = var10.bind(var11)(var9);
case 116:
                    var4['body'] = var8;
                    var4 = var5.bind(var7)(var4);
case 51:
                    var4 = global;
                    var5 = var4.Promise;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var34 = function(arg1, arg2) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var2 = arg1;
                            var _closure5_slot0 = var2;
                            var2 = _closure4_slot0;
                            var3 = var2.body;
                            var2 = null;
                            if(!(var2 == var3)) { _fun0008_ip = 117; continue _fun0008 }
case 101:
                            var3 = arg2;
                            var2 = undefined;
                            var2 = var3.bind(var2)();
case 117:
                            var3 = _closure1_slot7;
                            var2 = var3.addConditionalChangeListener;
                            var1 = function() {
                                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                    var5 = _closure1_slot7;
                                    var4 = var5.getChannel;
                                    var3 = _closure4_slot0;
                                    var3 = var3.body;
                                    var3 = var3.id;
                                    var4 = var4.bind(var5)(var3);
                                    var _closure6_slot0 = var4;
                                    var3 = null;
                                    if(!(var3 == var4)) { _fun0009_ip = 118; continue _fun0009 }
case 104:
                                    var3 = undefined;
                                    return var3;
case 118:
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
                    var35 = var4;
                    var2 = new var35[var5](var34, var33);
                    var2 = var2 instanceof Object ? var2 : var4;
                    SaveGenerator(address=2068);
case 119:
                    return var2;
case 120:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 121; continue _fun0004 }
case 122:
                    var3 = var2;
case 123: // try_start_1
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
                    SaveGenerator(address=2137);
case 124:
                    return var4;
case 125:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 126; continue _fun0004 }
case 127: // try_end1
                    _fun0004_ip = 128; continue _fun0004;
case 126:
                    return var4;
case 129: // catch_target1
                    CatchBlockStart(arg_register=3);
case 128:
                    return var3;
case 121:
                    return var2;
case 38:
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
    var7 = 32;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/threads/ThreadCreationHooks.tsx';
    var7 = var8.bind(var9)(var7);
    var3['PrivateThreadMode'] = var6;
    var6 = function usePrivateThreadMode(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
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
            if(var1) { _fun0010_ip = 130; continue _fun0010 }
case 131:
            var1 = var3.Disabled;
            _fun0010_ip = 132; continue _fun0010;
case 130:
            if(var2) { _fun0010_ip = 133; continue _fun0010 }
case 134:
            var2 = var3.PrivateOnly;
            _fun0010_ip = 135; continue _fun0010;
case 133:
            var2 = var3.Enabled;
case 135:
            var1 = var2;
case 132:
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
case 0:
                        StartGenerator();
                        var9 = arg1;
                        var8 = arg2;
                        var7 = arg3;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0011_ip = 136; continue _fun0011 }
case 137:
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
                        if(!var13) { _fun0011_ip = 138; continue _fun0011 }
case 139:
                        var6 = var12;
case 138:
                        _closure5_slot1 = var6;
                        if(!(var11 === var6)) { _fun0011_ip = 140; continue _fun0011 }
case 141:
                        var6 = _closure2_slot6;
                        if(!var6) { _fun0011_ip = 140; continue _fun0011 }
case 142:
                        var13 = _closure1_slot22;
                        var12 = _closure2_slot0;
                        var6 = _closure2_slot1;
                        var6 = var13.bind(var3)(var12, var6);
                        if(!(var11 === var6)) { _fun0011_ip = 143; continue _fun0011 }
case 15:
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
                        var11 = var11["7Xm5QI"];
                        var6 = var12.bind(var13)(var11);
case 143:
                        _closure5_slot1 = var6;
case 140:
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
case 0:
                                var2 = _closure2_slot1;
                                var1 = null;
                                if(!(var1 == var2)) { _fun0012_ip = 6; continue _fun0012 }
case 103:
                                var3 = _closure1_slot15;
                                var2 = var3.CHANNEL_THREADS;
                                var1 = _closure2_slot0;
                                var1 = var1.id;
                                var4 = var2.bind(var3)(var1);
                                _fun0012_ip = 130; continue _fun0012;
case 6:
                                var6 = _closure1_slot15;
                                var3 = var6.CHANNEL_MESSAGE_THREADS;
                                var1 = _closure2_slot0;
                                var2 = var1.id;
                                var1 = _closure2_slot1;
                                var4 = var3.bind(var6)(var2, var1);
case 130:
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
                                if(var7) { _fun0012_ip = 140; continue _fun0012 }
case 144:
                                var7 = _closure2_slot0;
                                var9 = var7.type;
                                var7 = _closure1_slot14;
                                var7 = var7.GUILD_ANNOUNCEMENT;
                                if(!(var9 !== var7)) { _fun0012_ip = 145; continue _fun0012 }
case 146:
                                var7 = _closure1_slot14;
                                var7 = var7.PUBLIC_THREAD;
                                _fun0012_ip = 21; continue _fun0012;
case 145:
                                var9 = _closure1_slot14;
                                var7 = var9.ANNOUNCEMENT_THREAD;
case 21:
                                _fun0012_ip = 147; continue _fun0012;
case 140:
                                var8 = _closure1_slot14;
                                var7 = var8.PRIVATE_THREAD;
case 147:
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
case 148:
                        return var2;
case 149:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=10);
                        if(var11) { _fun0011_ip = 150; continue _fun0011 }
case 151:
                        if(!(var2 !== var6)) { _fun0011_ip = 152; continue _fun0011 }
case 153:
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
                        if(!(var10 != var6)) { _fun0011_ip = 154; continue _fun0011 }
case 155:
                        var6 = _closure2_slot5;
                        var6 = var6.bind(var3)(var2);
case 154:
                        var6 = _closure2_slot7;
                        if(!(var10 != var6)) { _fun0011_ip = 156; continue _fun0011 }
case 157:
                        if(!(var10 != var7)) { _fun0011_ip = 156; continue _fun0011 }
case 158:
                        var12 = var7.length;
                        var11 = 0;
                        if(!(!(var12 > var11))) { _fun0011_ip = 159; continue _fun0011 }
case 156:
                        if(!(var10 != var8)) { _fun0011_ip = 160; continue _fun0011 }
case 161:
                        var11 = var8.length;
                        var10 = 0;
                        if(!(!(var11 > var10))) { _fun0011_ip = 162; continue _fun0011 }
case 160:
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
                        _fun0011_ip = 152; continue _fun0011;
case 162:
                        var11 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var10 = 25;
                        var10 = var15[var10];
                        var14 = var11.bind(var3)(var10);
                        var13 = var14.sendStickers;
                        var12 = var2.id;
                        var10 = 12;
                        var10 = var15[var10];
                        var11 = var11.bind(var3)(var10);
                        var10 = var11.parse;
                        var20 = var10.bind(var11)(var2, var9);
                        var10 = {};
                        var15 = _closure1_slot18;
                        var15 = var15.THREAD_CREATION;
                        var10['location'] = var15;
                        var23 = var14;
                        var22 = var12;
                        var21 = var8;
                        var19 = var10;
                        var10 = var23[var13](var22, var21, var20, var19, var18);
                        _fun0011_ip = 152; continue _fun0011;
case 159:
                        var23 = undefined;
                        var22 = var2;
                        var21 = var7;
                        var20 = var9;
                        var19 = var8;
                        var6 = var23[var6](var22, var21, var20, var19, var18);
case 152:
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
case 150:
                        return var2;
case 136:
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
case 0:
                        StartGenerator();
                        var13 = arg1;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0013_ip = 71; continue _fun0013 }
case 39:
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
                        if(!var9) { _fun0013_ip = 163; continue _fun0013 }
case 164:
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
case 163:
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
                        if(!(var14 !== var17)) { _fun0013_ip = 165; continue _fun0013 }
case 166:
                        var16 = var17;
case 165:
                        var15['flags'] = var16;
                        var13['message'] = var15;
                        var12 = var13;
                        _closure5_slot1 = var13;
                        var13 = var4;
                        if(!(var10 != var13)) { _fun0013_ip = 167; continue _fun0013 }
case 168:
                        var13 = var4;
                        var13 = var13.length;
                        if(!(var13 > var14)) { _fun0013_ip = 167; continue _fun0013 }
case 169: // try_start_0
                        var13 = _closure2_slot5;
                        var4 = var13.bind(var5)(var4);
                        SaveGenerator(address=312);
case 170:
                        return var4;
case 171:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=12);
                        if(var13) { _fun0013_ip = 172; continue _fun0013 }
case 173:
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
case 167: // try_end0
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
case 174:
                        return var8;
case 175:
                        ResumeGenerator(result_out_reg=7, return_bool_out_reg=10);
                        if(var11) { _fun0013_ip = 176; continue _fun0013 }
case 177:
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
                        if(!(var10 != var11)) { _fun0013_ip = 178; continue _fun0013 }
case 179:
                        var11 = _closure2_slot4;
                        var11 = var11.bind(var5)(var8);
case 178:
                        return var8;
case 176:
                        return var8;
case 172:
                        return var4;
case 180: // catch_target0
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
                        if(!(var10 == var8)) { _fun0013_ip = 181; continue _fun0013 }
case 66:
                        var8 = new Array(0);
                        _fun0013_ip = 182; continue _fun0013;
case 181:
                        var8 = _closure2_slot3;
case 182:
                        var3['analyticsLocations'] = var8;
                        var3['code'] = var7;
                        var3['reason'] = var6;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 71:
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