// app/modules/reactions/ReactionActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var12;
    var1 = function checkReactionResponse(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var1 = arg3;
            var2 = var3.headers;
            var6 = var3.status;
            var3 = var3.body;
            var5 = 429;
            if(!(var5 !== var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = 403;
            if(!(var5 !== var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var1.isRetry;
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = undefined;
            var5 = var4.bind(var5)();
            var5 = false;
            return var5;
case 4:
            var5 = var3;
            if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var3.code;
case 8:
            var3 = _closure1_slot7;
            var3 = var3.TOO_MANY_REACTIONS;
            if(!(var3 !== var5)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = _closure1_slot7;
            var3 = var3.REACTION_BLOCKED;
            if(!(var3 === var5)) { _fun0001_ip = 6; continue _fun0001 }
case 12:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 8;
            var5 = var5[var3];
            var3 = undefined;
            var3 = var6.bind(var3)(var5);
            var8 = var3.ComponentDispatch;
            var6 = var8.dispatch;
            var3 = _closure1_slot9;
            var5 = var3.SHAKE_APP;
            var3 = {'duration': 200, 'intensity': 2};
            var3 = var6.bind(var8)(var5, var3);
            _fun0001_ip = 6; continue _fun0001;
case 10:
            var5 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 6;
            var3 = var12[var3];
            var11 = undefined;
            var6 = var5.bind(var11)(var3);
            var5 = var6.show;
            var3 = {};
            var10 = _closure1_slot0;
            var7 = 7;
            var8 = var12[var7];
            var8 = var10.bind(var11)(var8);
            var13 = var8.intl;
            var9 = var13.string;
            var8 = var12[var7];
            var8 = var10.bind(var11)(var8);
            var8 = var8.t;
            var8 = var8.lFddsR;
            var8 = var9.bind(var13)(var8);
            var3['title'] = var8;
            var8 = var12[var7];
            var8 = var10.bind(var11)(var8);
            var13 = var8.intl;
            var9 = var13.string;
            var8 = var12[var7];
            var8 = var10.bind(var11)(var8);
            var8 = var8.t;
            var8 = var8.h27eIm;
            var8 = var9.bind(var13)(var8);
            var3['body'] = var8;
            var8 = var12[var7];
            var8 = var10.bind(var11)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var12[var7];
            var7 = var10.bind(var11)(var7);
            var7 = var7.t;
            var7 = var7.BddRzS;
            var7 = var8.bind(var9)(var7);
            var3['confirmText'] = var7;
            var3 = var5.bind(var6)(var3);
case 6:
            var3 = true;
            return var3;
case 2:
            var1 = var1.isRetry;
            if(var1) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var1 = global;
            var5 = var1.parseInt;
            var2 = var2.retry-after;
            var3 = undefined;
            var5 = var5.bind(var3)(var2);
            var2 = var1.isNaN;
            var2 = var2.bind(var3)(var5);
            if(var2) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var2 = var1.setTimeout;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 5;
            var1 = var7[var1];
            var1 = var6.bind(var3)(var1);
            var1 = var1.Millis;
            var1 = var1.SECOND;
            var1 = var5 * var1;
            var1 = var2.bind(var3)(var4, var1);
case 15:
            var1 = false;
            return var1;
case 13:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function optimisticDispatch(arg1, arg2, arg3, arg4, arg5) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg5;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var7 = arg1;
            var2['type'] = var7;
            var7 = arg2;
            var2['channelId'] = var7;
            var7 = arg3;
            var2['messageId'] = var7;
            var7 = null;
            var9 = var7 == var5;
            var8 = undefined;
            if(var9) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var8 = var5.userId;
case 17:
            if(!(var7 == var8)) { _fun0002_ip = 19; continue _fun0002 }
case 9:
            var10 = _closure1_slot4;
            var9 = var10.getId;
            var8 = var9.bind(var10)();
case 19:
            var2['userId'] = var8;
            var8 = arg4;
            var2['emoji'] = var8;
            var8 = true;
            var2['optimistic'] = var8;
            var9 = var7 == var5;
            var8 = undefined;
            if(var9) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var8 = var5.colors;
case 20:
            if(!(var7 == var8)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var8 = new Array(0);
case 22:
            var2['colors'] = var8;
            if(!(var7 != var5)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var5 = var5.burst;
            if(var5) { _fun0002_ip = 26; continue _fun0002 }
case 24:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 10;
            var5 = var8[var5];
            var5 = var7.bind(var1)(var5);
            var5 = var5.ReactionTypes;
            var5 = var5.NORMAL;
            _fun0002_ip = 27; continue _fun0002;
case 26:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 10;
            var6 = var8[var6];
            var6 = var7.bind(var1)(var6);
            var6 = var6.ReactionTypes;
            var5 = var6.BURST;
case 27:
            var2['reactionType'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function makeURL(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var6 = var2.channelId;
            var5 = var2.messageId;
            var3 = var2.emoji;
            var8 = var2.userId;
            var1 = var2.useTypeEndpoint;
            var9 = undefined;
            if(!(var1 === var9)) { _fun0003_ip = 3; continue _fun0003 }
case 28:
            var1 = false;
case 3:
            var7 = var2.type;
            if(!(var7 === var9)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 10;
            var2 = var10[var2];
            var2 = var4.bind(var9)(var2);
            var2 = var2.ReactionTypes;
            var7 = var2.NORMAL;
case 29:
            var4 = var3.id;
            var2 = null;
            if(!(var2 == var4)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var4 = var3.name;
            _fun0003_ip = 33; continue _fun0003;
case 31:
            var12 = var3.name;
            var11 = var3.id;
            var3 = global;
            var3 = var3.HermesInternal;
            var10 = var3.concat;
            var9 = '';
            var3 = ':';
            var4 = var10.bind(var9)(var12, var3, var11);
case 33:
            if(!(var2 != var8)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var3 = _closure1_slot10;
            if(var1) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var1 = var3.REACTION;
            var18 = var3;
            var17 = var6;
            var16 = var5;
            var15 = var4;
            var14 = var8;
            var1 = var18[var1](var17, var16, var15, var14, var13);
            _fun0003_ip = 38; continue _fun0003;
case 36:
            var2 = var3.REACTION_WITH_TYPE;
            var18 = var3;
            var17 = var6;
            var16 = var5;
            var15 = var4;
            var14 = var8;
            var13 = var7;
            var1 = var18[var2](var17, var16, var15, var14, var13, var12);
case 38:
            _fun0003_ip = 39; continue _fun0003;
case 34:
            var3 = _closure1_slot10;
            var2 = var3.REACTIONS;
            var1 = var2.bind(var3)(var6, var5, var4);
case 39:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _getReactors() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                    var11 = var2.channelId;
                    var10 = var2.messageId;
                    var9 = var2.emoji;
                    var18 = var2.limit;
                    var17 = var2.after;
                    var8 = var2.type;
                    var7 = undefined;
                    SaveGenerator(address=51);
case 42:
                    return var7;
case 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 44; continue _fun0004 }
case 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var12 = 10;
                    var3 = var3[var12];
                    var3 = var4.bind(var7)(var3);
                    var3 = var3.ReactionTypes;
                    var3 = var3.VOTE;
                    if(!(var8 !== var3)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
                    var4 = _closure1_slot14;
                    var3 = {};
                    var3['channelId'] = var11;
                    var3['messageId'] = var10;
                    var3['emoji'] = var9;
                    var16 = var4.bind(var7)(var3);
                    _fun0004_ip = 47; continue _fun0004;
case 45:
                    var6 = var9.id;
                    var3 = null;
                    if(!(var3 == var6)) { _fun0004_ip = 48; continue _fun0004 }
case 49:
                    var6 = var9.name;
case 48:
                    var4 = _closure1_slot10;
                    var3 = var4.POLL_ANSWER_VOTERS;
                    var16 = var3.bind(var4)(var11, var10, var6);
case 47:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var13 = 11;
                    var3 = var15[var13];
                    var3 = var14.bind(var7)(var3);
                    var6 = var3.HTTP;
                    var4 = var6.get;
                    var3 = {};
                    var3['url'] = var16;
                    var16 = {};
                    var16['limit'] = var18;
                    var16['after'] = var17;
                    var16['type'] = var8;
                    var3['query'] = var16;
                    var16 = true;
                    var3['oldFormErrors'] = var16;
                    var13 = var15[var13];
                    var14 = var14.bind(var7)(var13);
                    var13 = var14.rejectWithMigratedError;
                    var13 = var13.bind(var14)();
                    var3['rejectWithError'] = var13;
                    var3 = var4.bind(var6)(var3);
                    SaveGenerator(address=253);
case 50:
                    return var3;
case 51:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 2; continue _fun0004 }
case 52:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var12];
                    var4 = var6.bind(var7)(var4);
                    var4 = var4.ReactionTypes;
                    var4 = var4.VOTE;
                    if(!(var8 !== var4)) { _fun0004_ip = 53; continue _fun0004 }
case 54:
                    var4 = var3.body;
                    _fun0004_ip = 55; continue _fun0004;
case 53:
                    var6 = var3.body;
                    var4 = var6.users;
case 55:
                    var6 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var5 = 9;
                    var5 = var12[var5];
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var12 = 'MESSAGE_REACTION_ADD_USERS';
                    var5['type'] = var12;
                    var5['channelId'] = var11;
                    var5['messageId'] = var10;
                    var5['users'] = var4;
                    var5['emoji'] = var9;
                    var5['reactionType'] = var8;
                    var5 = var6.bind(var7)(var5);
                    return var4;
case 2:
                    return var3;
case 44:
                    return var2;
case 40:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var8 = function addReaction() {
        var1 = undefined;
        var4 = _closure1_slot17;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var8;
    var1 = function _addReaction() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var18 = arg1;
                    var17 = arg2;
                    var16 = arg3;
                    var14 = arguments[3];
                    var4 = arguments[4];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 56; continue _fun0005 }
case 57:
                    var _closure4_slot0 = var18;
                    var _closure4_slot1 = var17;
                    var _closure4_slot2 = var16;
                    var11 = undefined;
                    if(!(var14 === var11)) { _fun0005_ip = 58; continue _fun0005 }
case 59:
                    var2 = _closure1_slot11;
                    var14 = var2.MESSAGE;
case 58:
                    var _closure4_slot3 = var14;
                    var _closure4_slot4 = var11;
                    var _closure4_slot5 = var11;
                    SaveGenerator(address=74);
case 17:
                    return var11;
case 60:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 61; continue _fun0005 }
case 62:
                    var3 = null;
                    var13 = var3 != var4;
                    if(!var13) { _fun0005_ip = 63; continue _fun0005 }
case 64:
                    var6 = var4.burst;
                    var6 = !var6;
                    var13 = !var6;
case 63:
                    _closure4_slot4 = var13;
                    var3 = var3 != var4;
                    if(!var3) { _fun0005_ip = 23; continue _fun0005 }
case 12:
                    var4 = var4.isRetry;
                    var4 = !var4;
                    var3 = !var4;
case 23:
                    _closure4_slot5 = var3;
                    if(var3) { _fun0005_ip = 65; continue _fun0005 }
case 66:
                    var3 = _closure1_slot26;
                    var24 = undefined;
                    var23 = var18;
                    var22 = var17;
                    var21 = var16;
                    var20 = var13;
                    var3 = var24[var3](var23, var22, var21, var20, var19);
                    if(!var3) { _fun0005_ip = 65; continue _fun0005 }
case 67:
                    var4 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var3 = 6;
                    var3 = var12[var3];
                    var6 = var4.bind(var11)(var3);
                    var4 = var6.show;
                    var3 = {};
                    var10 = _closure1_slot0;
                    var7 = 7;
                    var8 = var12[var7];
                    var8 = var10.bind(var11)(var8);
                    var15 = var8.intl;
                    var9 = var15.string;
                    var8 = var12[var7];
                    var8 = var10.bind(var11)(var8);
                    var8 = var8.t;
                    var8 = var8.uaUU/g;
                    var8 = var9.bind(var15)(var8);
                    var3['title'] = var8;
                    var8 = var12[var7];
                    var8 = var10.bind(var11)(var8);
                    var15 = var8.intl;
                    var9 = var15.string;
                    var8 = var12[var7];
                    var8 = var10.bind(var11)(var8);
                    var8 = var8.t;
                    var8 = var8.psMorl;
                    var8 = var9.bind(var15)(var8);
                    var3['body'] = var8;
                    var8 = var12[var7];
                    var8 = var10.bind(var11)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var12[var7];
                    var7 = var10.bind(var11)(var7);
                    var7 = var7.t;
                    var7 = var7.NX+WJN;
                    var7 = var8.bind(var9)(var7);
                    var3['confirmText'] = var7;
                    var3 = var4.bind(var6)(var3);
                    return var11;
case 65:
                    var3 = _closure1_slot24;
                    var3 = var3.bind(var11)(var16, var13);
                    SaveGenerator(address=377);
case 68:
                    return var3;
case 69:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 70; continue _fun0005 }
case 71:
                    var7 = _closure1_slot13;
                    var6 = {};
                    var6['burst'] = var13;
                    var6['colors'] = var3;
                    var23 = 'MESSAGE_REACTION_ADD';
                    var24 = undefined;
                    var22 = var18;
                    var21 = var17;
                    var20 = var16;
                    var19 = var6;
                    var4 = var24[var7](var23, var22, var21, var20, var19, var18);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 12;
                    var4 = var7[var4];
                    var6 = var6.bind(var11)(var4);
                    var4 = var6.unarchiveThreadIfNecessary;
                    var4 = var4.bind(var6)(var18);
                    SaveGenerator(address=458);
case 72:
                    return var4;
case 73:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 74; continue _fun0005 }
case 75:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var12 = 11;
                    var6 = var6[var12];
                    var6 = var7.bind(var11)(var6);
                    var8 = var6.HTTP;
                    var7 = var8.put;
                    var6 = {};
                    var15 = _closure1_slot14;
                    var10 = {};
                    var10['channelId'] = var18;
                    var10['messageId'] = var17;
                    var10['emoji'] = var16;
                    var16 = '@me';
                    var10['userId'] = var16;
                    var10 = var15.bind(var11)(var10);
                    var6['url'] = var10;
                    var10 = {};
                    var10['location'] = var14;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var14 = 10;
                    var14 = var16[var14];
                    var14 = var15.bind(var11)(var14);
                    var14 = var14.ReactionTypes;
                    if(var13) { _fun0005_ip = 76; continue _fun0005 }
case 77:
                    var13 = var14.NORMAL;
                    _fun0005_ip = 78; continue _fun0005;
case 76:
                    var13 = var14.BURST;
case 78:
                    var10['type'] = var13;
                    var6['query'] = var10;
                    var10 = true;
                    var6['oldFormErrors'] = var10;
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var12];
                    var10 = var10.bind(var11)(var9);
                    var9 = var10.rejectWithMigratedError;
                    var9 = var9.bind(var10)();
                    var6['rejectWithError'] = var9;
                    var8 = var7.bind(var8)(var6);
                    var7 = var8.then;
                    var6 = function() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var2 = _closure4_slot3;
                            var1 = 'Message Shortcut';
                            if(!(var1 === var2)) { _fun0006_ip = 79; continue _fun0006 }
case 80:
                            var2 = _closure1_slot5;
                            var1 = var2.getChannel;
                            var7 = _closure4_slot0;
                            var8 = var1.bind(var2)(var7);
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 13;
                            var1 = var3[var1];
                            var9 = undefined;
                            var4 = var2.bind(var9)(var1);
                            var3 = var4.track;
                            var1 = _closure1_slot8;
                            var2 = var1.MESSAGE_SHORTCUT_ACTION_SENT;
                            var1 = {};
                            var1['channel_id'] = var7;
                            var7 = null;
                            var11 = var7 == var8;
                            var10 = undefined;
                            if(var11) { _fun0006_ip = 31; continue _fun0006 }
case 81:
                            var10 = var8.guild_id;
case 31:
                            var1['guild_id'] = var10;
                            var10 = _closure4_slot1;
                            var1['original_message_id'] = var10;
                            var10 = _closure4_slot2;
                            var10 = var10.id;
                            if(!(var7 == var10)) { _fun0006_ip = 82; continue _fun0006 }
case 83:
                            var11 = _closure4_slot2;
                            var10 = var11.name;
case 82:
                            var1['emoji_id'] = var10;
                            var10 = 'react';
                            var1['action'] = var10;
                            var12 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var10 = 14;
                            var11 = var11[var10];
                            var12 = var12.bind(var9)(var11);
                            var11 = var12.collectGuildAnalyticsMetadata;
                            var13 = var7 == var8;
                            var7 = undefined;
                            if(var13) { _fun0006_ip = 84; continue _fun0006 }
case 85:
                            var7 = var8.guild_id;
case 84:
                            var14 = var11.bind(var12)(var7);
                            var15 = var1;
                            var7 = copyDataProperties(var15, var14);
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var10];
                            var7 = var7.bind(var9)(var6);
                            var6 = var7.collectChannelAnalyticsMetadata;
                            var14 = var6.bind(var7)(var8);
                            var15 = var1;
                            var6 = copyDataProperties(var15, var14);
                            var1 = var3.bind(var4)(var2, var1);
case 79:
                            var6 = _closure4_slot4;
                            var9 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 15;
                            var3 = var4[var1];
                            var1 = undefined;
                            var3 = var9.bind(var1)(var3);
                            var8 = var3.AccessibilityAnnouncer;
                            var7 = var8.announce;
                            var3 = 7;
                            var10 = var4[var3];
                            var10 = var9.bind(var1)(var10);
                            var11 = var10.intl;
                            var10 = var11.formatToPlainString;
                            var3 = var4[var3];
                            var3 = var9.bind(var1)(var3);
                            var3 = var3.t;
                            if(var6) { _fun0006_ip = 86; continue _fun0006 }
case 87:
                            var9 = var3.ol4acF;
                            var6 = {};
                            var12 = _closure4_slot2;
                            var12 = var12.name;
                            var6['name'] = var12;
                            var6 = var10.bind(var11)(var9, var6);
                            var6 = var7.bind(var8)(var6);
                            _fun0006_ip = 88; continue _fun0006;
case 86:
                            var9 = var3.RJlG+R;
                            var3 = {};
                            var6 = _closure4_slot2;
                            var12 = var6.name;
                            var3['name'] = var12;
                            var3 = var10.bind(var11)(var9, var3);
                            var3 = var7.bind(var8)(var3);
                            var3 = _closure1_slot1;
                            var2 = 16;
                            var2 = var4[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.triggerFullscreenAnimation;
                            var2 = {};
                            var7 = _closure4_slot0;
                            var2['channelId'] = var7;
                            var5 = _closure4_slot1;
                            var2['messageId'] = var5;
                            var5 = {};
                            var15 = var5;
                            var14 = var6;
                            var6 = copyDataProperties(var15, var14);
                            var7 = false;
                            var6 = 'animated';
                            var5[5] = var7;
                            var2['emoji'] = var5;
                            var2 = var3.bind(var4)(var2);
case 88:
                            return var1;
                        }
                    };
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.catch;
                    var5 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var6 = _closure1_slot12;
                            var5 = {};
                            var1 = _closure4_slot5;
                            var5['isRetry'] = var1;
                            var1 = undefined;
                            var4 = arg1;
                            var3 = function() {
                                var7 = _closure1_slot16;
                                var12 = _closure4_slot0;
                                var11 = _closure4_slot1;
                                var10 = _closure4_slot2;
                                var9 = _closure4_slot3;
                                var2 = {};
                                var1 = _closure4_slot4;
                                var2['burst'] = var1;
                                var1 = true;
                                var2['isRetry'] = var1;
                                var13 = undefined;
                                var8 = var2;
                                var1 = var13[var7](var12, var11, var10, var9, var8, var7);
                                return var1;
                            };
                            var3 = var6.bind(var1)(var4, var3, var5);
                            if(!var3) { _fun0007_ip = 89; continue _fun0007 }
case 90:
                            var9 = _closure1_slot13;
                            var14 = _closure4_slot0;
                            var13 = _closure4_slot1;
                            var12 = _closure4_slot2;
                            var4 = {};
                            var3 = _closure4_slot4;
                            var4['burst'] = var3;
                            var15 = 'MESSAGE_REACTION_REMOVE';
                            var16 = undefined;
                            var11 = var4;
                            var3 = var16[var9](var15, var14, var13, var12, var11, var10);
                            var5 = _closure4_slot4;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var2 = 15;
                            var2 = var10[var2];
                            var2 = var9.bind(var1)(var2);
                            var4 = var2.AccessibilityAnnouncer;
                            var3 = var4.announce;
                            var2 = 7;
                            var6 = var10[var2];
                            var6 = var9.bind(var1)(var6);
                            var7 = var6.intl;
                            var6 = var7.formatToPlainString;
                            var2 = var10[var2];
                            var2 = var9.bind(var1)(var2);
                            var2 = var2.t;
                            if(var5) { _fun0007_ip = 91; continue _fun0007 }
case 92:
                            var9 = var2.UUn5V+;
                            var5 = {};
                            var10 = _closure4_slot2;
                            var10 = var10.name;
                            var5['name'] = var10;
                            var5 = var6.bind(var7)(var9, var5);
                            var5 = var3.bind(var4)(var5);
                            _fun0007_ip = 89; continue _fun0007;
case 91:
                            var5 = var2.fJeu87;
                            var2 = {};
                            var8 = _closure4_slot2;
                            var8 = var8.name;
                            var2['name'] = var8;
                            var2 = var6.bind(var7)(var5, var2);
                            var2 = var3.bind(var4)(var2);
case 89:
                            return var1;
                        }
                    };
                    var5 = var6.bind(var7)(var5);
                    return var5;
case 74:
                    return var4;
case 70:
                    return var3;
case 61:
                    return var2;
case 56:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var6 = function removeAllReactions() {
        var1 = undefined;
        var4 = _closure1_slot19;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var6;
    var1 = function _removeAllReactions() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var14 = arg1;
                    var13 = arg2;
                    var5 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 27; continue _fun0008 }
case 93:
                    var _closure4_slot0 = var14;
                    var _closure4_slot1 = var13;
                    var3 = undefined;
                    var _closure4_slot2 = var3;
                    var2 = null;
                    var2 = var2 != var5;
                    if(!var2) { _fun0008_ip = 94; continue _fun0008 }
case 95:
                    var5 = var5.isRetry;
                    var5 = !var5;
                    var2 = !var5;
case 94:
                    _closure4_slot2 = var2;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 12;
                    var2 = var6[var2];
                    var5 = var5.bind(var3)(var2);
                    var2 = var5.unarchiveThreadIfNecessary;
                    var2 = var2.bind(var5)(var14);
                    SaveGenerator(address=98);
case 96:
                    return var2;
case 11:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0008_ip = 97; continue _fun0008 }
case 63:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 11;
                    var5 = var10[var8];
                    var5 = var9.bind(var3)(var5);
                    var7 = var5.HTTP;
                    var6 = var7.del;
                    var5 = {};
                    var12 = _closure1_slot10;
                    var11 = var12.REMOVE_REACTIONS;
                    var11 = var11.bind(var12)(var14, var13);
                    var5['url'] = var11;
                    var11 = true;
                    var5['oldFormErrors'] = var11;
                    var8 = var10[var8];
                    var9 = var9.bind(var3)(var8);
                    var8 = var9.rejectWithMigratedError;
                    var8 = var8.bind(var9)();
                    var5['rejectWithError'] = var8;
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.catch;
                    var4 = function(arg1) {
                        var5 = _closure1_slot12;
                        var4 = {};
                        var1 = _closure4_slot2;
                        var4['isRetry'] = var1;
                        var1 = undefined;
                        var3 = arg1;
                        var2 = function() {
                            var5 = _closure1_slot18;
                            var4 = _closure4_slot0;
                            var3 = _closure4_slot1;
                            var2 = {};
                            var1 = true;
                            var2['isRetry'] = var1;
                            var1 = undefined;
                            var1 = var5.bind(var1)(var4, var3, var2);
                            return var1;
                        };
                        var2 = var5.bind(var1)(var3, var2, var4);
                        return var1;
                    };
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 97:
                    return var2;
case 27:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot19 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var1;
    var5 = function removeEmojiReactions() {
        var1 = undefined;
        var4 = _closure1_slot21;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var5;
    var1 = function _removeEmojiReactions() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    var15 = arg1;
                    var14 = arg2;
                    var5 = arg3;
                    var6 = arg4;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 98; continue _fun0009 }
case 99:
                    var _closure4_slot0 = var15;
                    var _closure4_slot1 = var14;
                    var _closure4_slot2 = var5;
                    var3 = undefined;
                    var _closure4_slot3 = var3;
                    var7 = null;
                    var2 = var7 != var6;
                    if(!var2) { _fun0009_ip = 100; continue _fun0009 }
case 43:
                    var6 = var6.isRetry;
                    var6 = !var6;
                    var2 = !var6;
case 100:
                    _closure4_slot3 = var2;
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 12;
                    var2 = var8[var2];
                    var6 = var6.bind(var3)(var2);
                    var2 = var6.unarchiveThreadIfNecessary;
                    var2 = var2.bind(var6)(var15);
                    SaveGenerator(address=105);
case 101:
                    return var2;
case 102:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0009_ip = 103; continue _fun0009 }
case 104:
                    var6 = var5.id;
                    if(!(var7 !== var6)) { _fun0009_ip = 105; continue _fun0009 }
case 20:
                    var10 = var5.name;
                    var9 = var5.id;
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var8 = var6.concat;
                    var7 = '';
                    var6 = ':';
                    var13 = var8.bind(var7)(var10, var6, var9);
                    _fun0009_ip = 67; continue _fun0009;
case 105:
                    var13 = var5.name;
case 67:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 11;
                    var5 = var10[var8];
                    var5 = var9.bind(var3)(var5);
                    var7 = var5.HTTP;
                    var6 = var7.del;
                    var5 = {};
                    var12 = _closure1_slot10;
                    var11 = var12.REMOVE_EMOJI_REACTIONS;
                    var11 = var11.bind(var12)(var15, var14, var13);
                    var5['url'] = var11;
                    var11 = true;
                    var5['oldFormErrors'] = var11;
                    var8 = var10[var8];
                    var9 = var9.bind(var3)(var8);
                    var8 = var9.rejectWithMigratedError;
                    var8 = var8.bind(var9)();
                    var5['rejectWithError'] = var8;
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.catch;
                    var4 = function(arg1) {
                        var5 = _closure1_slot12;
                        var4 = {};
                        var1 = _closure4_slot3;
                        var4['isRetry'] = var1;
                        var1 = undefined;
                        var3 = arg1;
                        var2 = function() {
                            var6 = _closure1_slot20;
                            var10 = _closure4_slot0;
                            var9 = _closure4_slot1;
                            var8 = _closure4_slot2;
                            var2 = {};
                            var1 = true;
                            var2['isRetry'] = var1;
                            var11 = undefined;
                            var7 = var2;
                            var1 = var11[var6](var10, var9, var8, var7, var6);
                            return var1;
                        };
                        var2 = var5.bind(var1)(var3, var2, var4);
                        return var1;
                    };
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 103:
                    return var2;
case 98:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot21 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var4 = function removeReaction() {
        var1 = undefined;
        var4 = _closure1_slot23;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot22 = var4;
    var1 = function _removeReaction() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 106; continue _fun0010 }
case 107:
                    var19 = var2.channelId;
                    var _closure4_slot0 = var19;
                    var18 = var2.messageId;
                    var _closure4_slot1 = var18;
                    var17 = var2.emoji;
                    var _closure4_slot2 = var17;
                    var14 = var2.location;
                    var4 = undefined;
                    if(!(var14 === var4)) { _fun0010_ip = 18; continue _fun0010 }
case 108:
                    var6 = _closure1_slot11;
                    var14 = var6.MESSAGE;
case 18:
                    var _closure4_slot3 = var14;
                    var16 = var2.userId;
                    var _closure4_slot4 = var16;
                    var6 = var2.options;
                    var _closure4_slot5 = var6;
                    var _closure4_slot6 = var4;
                    var _closure4_slot7 = var4;
                    SaveGenerator(address=101);
case 46:
                    return var4;
case 109:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 110; continue _fun0010 }
case 111:
                    var10 = null;
                    var13 = var10 != var6;
                    if(!var13) { _fun0010_ip = 22; continue _fun0010 }
case 112:
                    var3 = var6.burst;
                    var3 = !var3;
                    var13 = !var3;
case 22:
                    _closure4_slot6 = var13;
                    var3 = var10 != var6;
                    if(!var3) { _fun0010_ip = 113; continue _fun0010 }
case 35:
                    var6 = var6.isRetry;
                    var6 = !var6;
                    var3 = !var6;
case 113:
                    _closure4_slot7 = var3;
                    var7 = _closure1_slot13;
                    var6 = {};
                    var6['userId'] = var16;
                    var6['burst'] = var13;
                    var24 = 'MESSAGE_REACTION_REMOVE';
                    var25 = undefined;
                    var23 = var19;
                    var22 = var18;
                    var21 = var17;
                    var20 = var6;
                    var3 = var25[var7](var24, var23, var22, var21, var20, var19);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 12;
                    var3 = var7[var3];
                    var6 = var6.bind(var4)(var3);
                    var3 = var6.unarchiveThreadIfNecessary;
                    var3 = var3.bind(var6)(var19);
                    SaveGenerator(address=233);
case 89:
                    return var3;
case 114:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0010_ip = 115; continue _fun0010 }
case 79:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var11 = 11;
                    var6 = var6[var11];
                    var6 = var7.bind(var4)(var6);
                    var8 = var6.HTTP;
                    var7 = var8.del;
                    var6 = {};
                    var15 = _closure1_slot14;
                    var12 = {};
                    var12['channelId'] = var19;
                    var12['messageId'] = var18;
                    var12['emoji'] = var17;
                    var17 = var10 != var16;
                    var10 = '@me';
                    if(!var17) { _fun0010_ip = 55; continue _fun0010 }
case 116:
                    var10 = var16;
case 55:
                    var12['userId'] = var10;
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var10 = 10;
                    var10 = var17[var10];
                    var10 = var16.bind(var4)(var10);
                    var16 = var10.ReactionTypes;
                    if(var13) { _fun0010_ip = 117; continue _fun0010 }
case 118:
                    var10 = var16.NORMAL;
                    _fun0010_ip = 119; continue _fun0010;
case 117:
                    var10 = var16.BURST;
case 119:
                    var12['type'] = var10;
                    var10 = true;
                    var12['useTypeEndpoint'] = var10;
                    var12 = var15.bind(var4)(var12);
                    var6['url'] = var12;
                    var12 = {};
                    var12['location'] = var14;
                    var12['burst'] = var13;
                    var6['query'] = var12;
                    var6['oldFormErrors'] = var10;
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var11];
                    var10 = var10.bind(var4)(var9);
                    var9 = var10.rejectWithMigratedError;
                    var9 = var9.bind(var10)();
                    var6['rejectWithError'] = var9;
                    var8 = var7.bind(var8)(var6);
                    var7 = var8.then;
                    var6 = function() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var2 = _closure4_slot5;
                            var1 = null;
                            if(!(var1 != var2)) { _fun0011_ip = 120; continue _fun0011 }
case 41:
                            var1 = _closure4_slot5;
                            var1 = var1.burst;
                            if(var1) { _fun0011_ip = 82; continue _fun0011 }
case 120:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var1 = 15;
                            var1 = var9[var1];
                            var4 = undefined;
                            var1 = var8.bind(var4)(var1);
                            var3 = var1.AccessibilityAnnouncer;
                            var2 = var3.announce;
                            var1 = 7;
                            var5 = var9[var1];
                            var5 = var8.bind(var4)(var5);
                            var6 = var5.intl;
                            var5 = var6.formatToPlainString;
                            var1 = var9[var1];
                            var1 = var8.bind(var4)(var1);
                            var1 = var1.t;
                            var4 = var1.DQxi+7;
                            var1 = {};
                            var8 = _closure4_slot2;
                            var8 = var8.name;
                            var1['name'] = var8;
                            var1 = var5.bind(var6)(var4, var1);
                            var1 = var2.bind(var3)(var1);
                            _fun0011_ip = 79; continue _fun0011;
case 82:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var1 = 15;
                            var1 = var9[var1];
                            var4 = undefined;
                            var1 = var8.bind(var4)(var1);
                            var3 = var1.AccessibilityAnnouncer;
                            var2 = var3.announce;
                            var1 = 7;
                            var5 = var9[var1];
                            var5 = var8.bind(var4)(var5);
                            var6 = var5.intl;
                            var5 = var6.formatToPlainString;
                            var1 = var9[var1];
                            var1 = var8.bind(var4)(var1);
                            var1 = var1.t;
                            var4 = var1["3l9f6u"];
                            var1 = {};
                            var7 = _closure4_slot2;
                            var7 = var7.name;
                            var1['name'] = var7;
                            var1 = var5.bind(var6)(var4, var1);
                            var1 = var2.bind(var3)(var1);
case 79:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.catch;
                    var5 = function() {
                        var4 = _closure1_slot3;
                        var3 = undefined;
                        var2 = function* (arg1) {
                            var1 = function* anon_0_(arg1) {
                                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0012_ip = 6; continue _fun0012 }
case 121:
                                    var7 = _closure1_slot12;
                                    var6 = {};
                                    var2 = _closure4_slot7;
                                    var6['isRetry'] = var2;
                                    var3 = undefined;
                                    var5 = arg1;
                                    var2 = function() {
                                        var3 = _closure1_slot22;
                                        var2 = {};
                                        var1 = _closure4_slot0;
                                        var2['channelId'] = var1;
                                        var1 = _closure4_slot1;
                                        var2['messageId'] = var1;
                                        var1 = _closure4_slot2;
                                        var2['emoji'] = var1;
                                        var1 = _closure4_slot3;
                                        var2['location'] = var1;
                                        var1 = _closure4_slot4;
                                        var2['userId'] = var1;
                                        var1 = {};
                                        var4 = _closure4_slot6;
                                        var1['burst'] = var4;
                                        var4 = true;
                                        var1['isRetry'] = var4;
                                        var2['options'] = var1;
                                        var1 = undefined;
                                        var1 = var3.bind(var1)(var2);
                                        return var1;
                                    };
                                    var2 = var7.bind(var3)(var5, var2, var6);
                                    if(!var2) { _fun0012_ip = 122; continue _fun0012 }
case 94:
                                    var6 = _closure1_slot24;
                                    var5 = _closure4_slot2;
                                    var2 = _closure4_slot6;
                                    var2 = var6.bind(var3)(var5, var2);
                                    SaveGenerator(address=78);
case 9:
                                    return var2;
case 123:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                    if(var5) { _fun0012_ip = 124; continue _fun0012 }
case 125:
                                    var11 = _closure1_slot13;
                                    var16 = _closure4_slot0;
                                    var15 = _closure4_slot1;
                                    var14 = _closure4_slot2;
                                    var6 = {};
                                    var5 = _closure4_slot4;
                                    var6['userId'] = var5;
                                    var5 = _closure4_slot6;
                                    var6['burst'] = var5;
                                    var6['colors'] = var2;
                                    var17 = 'MESSAGE_REACTION_ADD';
                                    var18 = undefined;
                                    var13 = var6;
                                    var5 = var18[var11](var17, var16, var15, var14, var13, var12);
                                    var6 = _closure4_slot5;
                                    var5 = null;
                                    if(!(var5 != var6)) { _fun0012_ip = 126; continue _fun0012 }
case 127:
                                    var5 = _closure4_slot5;
                                    var5 = var5.burst;
                                    if(var5) { _fun0012_ip = 128; continue _fun0012 }
case 126:
                                    var8 = _closure1_slot0;
                                    var12 = _closure1_slot2;
                                    var5 = 15;
                                    var5 = var12[var5];
                                    var5 = var8.bind(var3)(var5);
                                    var7 = var5.AccessibilityAnnouncer;
                                    var6 = var7.announce;
                                    var5 = 7;
                                    var9 = var12[var5];
                                    var9 = var8.bind(var3)(var9);
                                    var11 = var9.intl;
                                    var9 = var11.formatToPlainString;
                                    var5 = var12[var5];
                                    var5 = var8.bind(var3)(var5);
                                    var5 = var5.t;
                                    var8 = var5.tD9+b+;
                                    var5 = {};
                                    var12 = _closure4_slot2;
                                    var12 = var12.name;
                                    var5['name'] = var12;
                                    var5 = var9.bind(var11)(var8, var5);
                                    var5 = var6.bind(var7)(var5);
                                    _fun0012_ip = 122; continue _fun0012;
case 128:
                                    var7 = _closure1_slot0;
                                    var11 = _closure1_slot2;
                                    var4 = 15;
                                    var4 = var11[var4];
                                    var4 = var7.bind(var3)(var4);
                                    var6 = var4.AccessibilityAnnouncer;
                                    var5 = var6.announce;
                                    var4 = 7;
                                    var8 = var11[var4];
                                    var8 = var7.bind(var3)(var8);
                                    var9 = var8.intl;
                                    var8 = var9.formatToPlainString;
                                    var4 = var11[var4];
                                    var4 = var7.bind(var3)(var4);
                                    var4 = var4.t;
                                    var7 = var4.OamVbV;
                                    var4 = {};
                                    var10 = _closure4_slot2;
                                    var10 = var10.name;
                                    var4['name'] = var10;
                                    var4 = var8.bind(var9)(var7, var4);
                                    var4 = var5.bind(var6)(var4);
case 122:
                                    return var3;
case 124:
                                    return var2;
case 6:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var2 = var4.bind(var3)(var2);
                        var _closure5_slot0 = var2;
                        var1 = function() {
                            var1 = undefined;
                            var4 = _closure5_slot0;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        return var1;
                    };
                    var5 = var5.bind(var4)();
                    var5 = var6.bind(var7)(var5);
                    return var4;
case 115:
                    return var3;
case 110:
                    return var2;
case 106:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = function getOptimisticEmojiColors() {
        var1 = undefined;
        var4 = _closure1_slot25;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function _getOptimisticEmojiColors() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0013_ip = 129; continue _fun0013 }
case 130:
                    var3 = arg1;
                    var2 = new Array(0);
                    var4 = arg2;
                    if(!var4) { _fun0013_ip = 9; continue _fun0013 }
case 80: // try_start_0
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 17;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.getEmojiColors;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=60);
case 58:
                    return var3;
case 7:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0013_ip = 131; continue _fun0013 }
case 132:
                    var2 = var3;
case 133: // try_end0
                    _fun0013_ip = 9; continue _fun0013;
case 131:
                    return var3;
case 60: // catch_target0
                    CatchBlockStart(arg_register=2);
case 9:
                    return var2;
case 129:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot25 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot25 = var1;
    var2 = function hasUserAlreadyReacted(arg1, arg2, arg3, arg4) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var4 = _closure1_slot6;
            var3 = var4.getMessage;
            var2 = arg1;
            var1 = arg2;
            var5 = var3.bind(var4)(var2, var1);
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0014_ip = 108; continue _fun0014 }
case 134:
            var4 = var5.userHasReactedWithEmoji;
            var3 = arg3;
            var2 = arg4;
            var1 = var4.bind(var5)(var3, var2);
case 108:
            return var1;
        }
    };
    var _closure1_slot26 = var2;
    var1 = global;
    var14 = var1.Object;
    var13 = var14.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var9);
    var1 = 0;
    var9 = var12[var1];
    var1 = undefined;
    var9 = var10.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 1;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 2;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 3;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 4;
    var9 = var12[var9];
    var9 = var11.bind(var1)(var9);
    var10 = var9.AbortCodes;
    var _closure1_slot7 = var10;
    var10 = var9.AnalyticEvents;
    var _closure1_slot8 = var10;
    var10 = var9.ComponentActions;
    var _closure1_slot9 = var10;
    var9 = var9.Endpoints;
    var _closure1_slot10 = var9;
    var9 = {};
    var10 = 'Message';
    var9['MESSAGE'] = var10;
    var10 = 'Forum Toolbar';
    var9['FORUM_TOOLBAR'] = var10;
    var10 = 'Mobile Media Viewer';
    var9['MOBILE_MEDIA_VIEWER'] = var10;
    var10 = 'Message Hover Bar';
    var9['MESSAGE_HOVER_BAR'] = var10;
    var10 = 'Message Inline Button';
    var9['MESSAGE_INLINE_BUTTON'] = var10;
    var10 = 'Message Context Menu';
    var9['MESSAGE_CONTEXT_MENU'] = var10;
    var10 = 'Message Reaction Picker';
    var9['MESSAGE_REACTION_PICKER'] = var10;
    var10 = 'Message Shortcut';
    var9['MESSAGE_SHORTCUT'] = var10;
    var10 = 'Double Tap';
    var9['DOUBLE_TAP'] = var10;
    var10 = 'In App Notification';
    var9['IN_APP_NOTIFICATION'] = var10;
    var _closure1_slot11 = var9;
    var10 = 18;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/reactions/ReactionActionCreators.tsx';
    var10 = var11.bind(var12)(var10);
    var3['ReactionLocations'] = var9;
    var9 = function getReactors() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getReactors'] = var9;
    var3['addReaction'] = var8;
    var7 = function playBurstReaction(arg1) {
        var1 = arg1;
        var8 = var1.channelId;
        var7 = var1.messageId;
        var6 = var1.emoji;
        var5 = var1.key;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var9 = 'BURST_REACTION_EFFECT_PLAY';
        var2['type'] = var9;
        var2['channelId'] = var8;
        var2['messageId'] = var7;
        var2['emoji'] = var6;
        var2['key'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['playBurstReaction'] = var7;
    var3['removeAllReactions'] = var6;
    var3['removeEmojiReactions'] = var5;
    var3['removeReaction'] = var4;
    var3['hasUserAlreadyReacted'] = var2;
    return var1;
})();