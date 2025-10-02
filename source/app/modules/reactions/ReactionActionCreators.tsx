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
            var8 = var8.lFddsb;
            var8 = var9.bind(var13)(var8);
            var3['title'] = var8;
            var8 = var12[var7];
            var8 = var10.bind(var11)(var8);
            var13 = var8.intl;
            var9 = var13.string;
            var8 = var12[var7];
            var8 = var10.bind(var11)(var8);
            var8 = var8.t;
            var8 = var8.h27eIi;
            var8 = var9.bind(var13)(var8);
            var3['body'] = var8;
            var8 = var12[var7];
            var8 = var10.bind(var11)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var12[var7];
            var7 = var10.bind(var11)(var7);
            var7 = var7.t;
            var7 = var7.BddRzc;
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
            if(!(var1 === var9)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var1 = false;
case 28:
            var7 = var2.type;
            if(!(var7 === var9)) { _fun0003_ip = 8; continue _fun0003 }
case 30:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 10;
            var2 = var10[var2];
            var2 = var4.bind(var9)(var2);
            var2 = var2.ReactionTypes;
            var7 = var2.NORMAL;
case 8:
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
                    var15 = var2.limit;
                    var14 = var2.after;
                    var8 = var2.type;
                    var7 = undefined;
                    SaveGenerator(address=50);
case 5:
                    return var7;
case 42:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var12 = 10;
                    var3 = var3[var12];
                    var3 = var4.bind(var7)(var3);
                    var3 = var3.ReactionTypes;
                    var3 = var3.VOTE;
                    if(!(var8 !== var3)) { _fun0004_ip = 45; continue _fun0004 }
case 11:
                    var4 = _closure1_slot14;
                    var3 = {};
                    var3['channelId'] = var11;
                    var3['messageId'] = var10;
                    var3['emoji'] = var9;
                    var13 = var4.bind(var7)(var3);
                    _fun0004_ip = 46; continue _fun0004;
case 45:
                    var6 = var9.id;
                    var3 = null;
                    if(!(var3 == var6)) { _fun0004_ip = 47; continue _fun0004 }
case 48:
                    var6 = var9.name;
case 47:
                    var4 = _closure1_slot10;
                    var3 = var4.POLL_ANSWER_VOTERS;
                    var13 = var3.bind(var4)(var11, var10, var6);
case 46:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 11;
                    var3 = var6[var3];
                    var3 = var4.bind(var7)(var3);
                    var6 = var3.HTTP;
                    var4 = var6.get;
                    var3 = {};
                    var3['url'] = var13;
                    var13 = {};
                    var13['limit'] = var15;
                    var13['after'] = var14;
                    var13['type'] = var8;
                    var3['query'] = var13;
                    var13 = true;
                    var3['oldFormErrors'] = var13;
                    var13 = false;
                    var3['rejectWithError'] = var13;
                    var3 = var4.bind(var6)(var3);
                    SaveGenerator(address=234);
case 49:
                    return var3;
case 50:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 51; continue _fun0004 }
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
case 51:
                    return var3;
case 43:
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
                    var17 = arg1;
                    var16 = arg2;
                    var15 = arg3;
                    var12 = arguments[3];
                    var4 = arguments[4];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 56; continue _fun0005 }
case 57:
                    var _closure4_slot0 = var17;
                    var _closure4_slot1 = var16;
                    var _closure4_slot2 = var15;
                    var13 = undefined;
                    if(!(var12 === var13)) { _fun0005_ip = 58; continue _fun0005 }
case 59:
                    var2 = _closure1_slot11;
                    var12 = var2.MESSAGE;
case 58:
                    var _closure4_slot3 = var12;
                    var _closure4_slot4 = var13;
                    var _closure4_slot5 = var13;
                    SaveGenerator(address=74);
case 17:
                    return var13;
case 60:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 61; continue _fun0005 }
case 62:
                    var3 = null;
                    var10 = var3 != var4;
                    if(!var10) { _fun0005_ip = 63; continue _fun0005 }
case 32:
                    var6 = var4.burst;
                    var6 = !var6;
                    var10 = !var6;
case 63:
                    _closure4_slot4 = var10;
                    var3 = var3 != var4;
                    if(!var3) { _fun0005_ip = 64; continue _fun0005 }
case 12:
                    var4 = var4.isRetry;
                    var4 = !var4;
                    var3 = !var4;
case 64:
                    _closure4_slot5 = var3;
                    if(var3) { _fun0005_ip = 65; continue _fun0005 }
case 33:
                    var3 = _closure1_slot26;
                    var24 = undefined;
                    var23 = var17;
                    var22 = var16;
                    var21 = var15;
                    var20 = var10;
                    var3 = var24[var3](var23, var22, var21, var20, var19);
                    if(!var3) { _fun0005_ip = 65; continue _fun0005 }
case 66:
                    var4 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var3 = 6;
                    var3 = var14[var3];
                    var6 = var4.bind(var13)(var3);
                    var4 = var6.show;
                    var3 = {};
                    var11 = _closure1_slot0;
                    var7 = 7;
                    var8 = var14[var7];
                    var8 = var11.bind(var13)(var8);
                    var18 = var8.intl;
                    var9 = var18.string;
                    var8 = var14[var7];
                    var8 = var11.bind(var13)(var8);
                    var8 = var8.t;
                    var8 = var8.uaUU/v;
                    var8 = var9.bind(var18)(var8);
                    var3['title'] = var8;
                    var8 = var14[var7];
                    var8 = var11.bind(var13)(var8);
                    var18 = var8.intl;
                    var9 = var18.string;
                    var8 = var14[var7];
                    var8 = var11.bind(var13)(var8);
                    var8 = var8.t;
                    var8 = var8.psMorq;
                    var8 = var9.bind(var18)(var8);
                    var3['body'] = var8;
                    var8 = var14[var7];
                    var8 = var11.bind(var13)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var14[var7];
                    var7 = var11.bind(var13)(var7);
                    var7 = var7.t;
                    var7 = var7.NX+WJC;
                    var7 = var8.bind(var9)(var7);
                    var3['confirmText'] = var7;
                    var3 = var4.bind(var6)(var3);
                    return var13;
case 65:
                    var3 = _closure1_slot24;
                    var3 = var3.bind(var13)(var15, var10);
                    SaveGenerator(address=377);
case 67:
                    return var3;
case 68:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 69; continue _fun0005 }
case 70:
                    var7 = _closure1_slot13;
                    var6 = {};
                    var6['burst'] = var10;
                    var6['colors'] = var3;
                    var23 = 'MESSAGE_REACTION_ADD';
                    var24 = undefined;
                    var22 = var17;
                    var21 = var16;
                    var20 = var15;
                    var19 = var6;
                    var4 = var24[var7](var23, var22, var21, var20, var19, var18);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 12;
                    var4 = var7[var4];
                    var6 = var6.bind(var13)(var4);
                    var4 = var6.unarchiveThreadIfNecessary;
                    var4 = var4.bind(var6)(var17);
                    SaveGenerator(address=458);
case 71:
                    return var4;
case 72:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 73; continue _fun0005 }
case 74:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 11;
                    var6 = var8[var6];
                    var6 = var7.bind(var13)(var6);
                    var8 = var6.HTTP;
                    var7 = var8.put;
                    var6 = {};
                    var14 = _closure1_slot14;
                    var9 = {};
                    var9['channelId'] = var17;
                    var9['messageId'] = var16;
                    var9['emoji'] = var15;
                    var15 = '@me';
                    var9['userId'] = var15;
                    var9 = var14.bind(var13)(var9);
                    var6['url'] = var9;
                    var9 = {};
                    var9['location'] = var12;
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var11 = 10;
                    var11 = var14[var11];
                    var11 = var12.bind(var13)(var11);
                    var11 = var11.ReactionTypes;
                    if(var10) { _fun0005_ip = 75; continue _fun0005 }
case 76:
                    var10 = var11.NORMAL;
                    _fun0005_ip = 77; continue _fun0005;
case 75:
                    var10 = var11.BURST;
case 77:
                    var9['type'] = var10;
                    var6['query'] = var9;
                    var9 = true;
                    var6['oldFormErrors'] = var9;
                    var9 = false;
                    var6['rejectWithError'] = var9;
                    var8 = var7.bind(var8)(var6);
                    var7 = var8.then;
                    var6 = function() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var2 = _closure4_slot3;
                            var1 = 'Message Shortcut';
                            if(!(var1 === var2)) { _fun0006_ip = 78; continue _fun0006 }
case 79:
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
                            if(var11) { _fun0006_ip = 80; continue _fun0006 }
case 81:
                            var10 = var8.guild_id;
case 80:
                            var1['guild_id'] = var10;
                            var10 = _closure4_slot1;
                            var1['original_message_id'] = var10;
                            var10 = _closure4_slot2;
                            var10 = var10.id;
                            if(!(var7 == var10)) { _fun0006_ip = 82; continue _fun0006 }
case 23:
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
                            if(var13) { _fun0006_ip = 83; continue _fun0006 }
case 10:
                            var7 = var8.guild_id;
case 83:
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
case 78:
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
                            if(var6) { _fun0006_ip = 84; continue _fun0006 }
case 85:
                            var9 = var3.ol4acH;
                            var6 = {};
                            var12 = _closure4_slot2;
                            var12 = var12.name;
                            var6['name'] = var12;
                            var6 = var10.bind(var11)(var9, var6);
                            var6 = var7.bind(var8)(var6);
                            _fun0006_ip = 86; continue _fun0006;
case 84:
                            var9 = var3.RJlG+f;
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
                            var5[var6] = var7;
                            var2['emoji'] = var5;
                            var2 = var3.bind(var4)(var2);
case 86:
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
                            if(!var3) { _fun0007_ip = 87; continue _fun0007 }
case 30:
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
                            if(var5) { _fun0007_ip = 88; continue _fun0007 }
case 89:
                            var9 = var2.UUn5V1;
                            var5 = {};
                            var10 = _closure4_slot2;
                            var10 = var10.name;
                            var5['name'] = var10;
                            var5 = var6.bind(var7)(var9, var5);
                            var5 = var3.bind(var4)(var5);
                            _fun0007_ip = 87; continue _fun0007;
case 88:
                            var5 = var2.fJeu8/;
                            var2 = {};
                            var8 = _closure4_slot2;
                            var8 = var8.name;
                            var2['name'] = var8;
                            var2 = var6.bind(var7)(var5, var2);
                            var2 = var3.bind(var4)(var2);
case 87:
                            return var1;
                        }
                    };
                    var5 = var6.bind(var7)(var5);
                    return var5;
case 73:
                    return var4;
case 69:
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
                    var11 = arg1;
                    var10 = arg2;
                    var5 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 90; continue _fun0008 }
case 91:
                    var _closure4_slot0 = var11;
                    var _closure4_slot1 = var10;
                    var3 = undefined;
                    var _closure4_slot2 = var3;
                    var2 = null;
                    var2 = var2 != var5;
                    if(!var2) { _fun0008_ip = 92; continue _fun0008 }
case 93:
                    var5 = var5.isRetry;
                    var5 = !var5;
                    var2 = !var5;
case 92:
                    _closure4_slot2 = var2;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 12;
                    var2 = var6[var2];
                    var5 = var5.bind(var3)(var2);
                    var2 = var5.unarchiveThreadIfNecessary;
                    var2 = var2.bind(var5)(var11);
                    SaveGenerator(address=98);
case 94:
                    return var2;
case 11:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0008_ip = 95; continue _fun0008 }
case 63:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 11;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var7 = var5.HTTP;
                    var6 = var7.del;
                    var5 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var9 = _closure1_slot10;
                    var8 = var9.REMOVE_REACTIONS;
                    var8 = var8.bind(var9)(var11, var10);
                    var5['url'] = var8;
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
case 95:
                    return var2;
case 90:
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
                    var12 = arg1;
                    var11 = arg2;
                    var5 = arg3;
                    var6 = arg4;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 96; continue _fun0009 }
case 97:
                    var _closure4_slot0 = var12;
                    var _closure4_slot1 = var11;
                    var _closure4_slot2 = var5;
                    var3 = undefined;
                    var _closure4_slot3 = var3;
                    var7 = null;
                    var2 = var7 != var6;
                    if(!var2) { _fun0009_ip = 98; continue _fun0009 }
case 99:
                    var6 = var6.isRetry;
                    var6 = !var6;
                    var2 = !var6;
case 98:
                    _closure4_slot3 = var2;
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 12;
                    var2 = var9[var2];
                    var6 = var6.bind(var3)(var2);
                    var2 = var6.unarchiveThreadIfNecessary;
                    var2 = var2.bind(var6)(var12);
                    SaveGenerator(address=105);
case 100:
                    return var2;
case 101:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0009_ip = 102; continue _fun0009 }
case 103:
                    var6 = var5.id;
                    if(!(var7 !== var6)) { _fun0009_ip = 104; continue _fun0009 }
case 45:
                    var13 = var5.name;
                    var10 = var5.id;
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var9 = var6.concat;
                    var7 = '';
                    var6 = ':';
                    var10 = var9.bind(var7)(var13, var6, var10);
                    _fun0009_ip = 66; continue _fun0009;
case 104:
                    var10 = var5.name;
case 66:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 11;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var7 = var5.HTTP;
                    var6 = var7.del;
                    var5 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var9 = _closure1_slot10;
                    var8 = var9.REMOVE_EMOJI_REACTIONS;
                    var8 = var8.bind(var9)(var12, var11, var10);
                    var5['url'] = var8;
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
case 102:
                    return var2;
case 96:
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
                    if(var3) { _fun0010_ip = 105; continue _fun0010 }
case 106:
                    var18 = var2.channelId;
                    var _closure4_slot0 = var18;
                    var17 = var2.messageId;
                    var _closure4_slot1 = var17;
                    var16 = var2.emoji;
                    var _closure4_slot2 = var16;
                    var12 = var2.location;
                    var4 = undefined;
                    if(!(var12 === var4)) { _fun0010_ip = 107; continue _fun0010 }
case 108:
                    var6 = _closure1_slot11;
                    var12 = var6.MESSAGE;
case 107:
                    var _closure4_slot3 = var12;
                    var15 = var2.userId;
                    var _closure4_slot4 = var15;
                    var6 = var2.options;
                    var _closure4_slot5 = var6;
                    var _closure4_slot6 = var4;
                    var _closure4_slot7 = var4;
                    SaveGenerator(address=100);
case 11:
                    return var4;
case 80:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 109; continue _fun0010 }
case 110:
                    var14 = null;
                    var11 = var14 != var6;
                    if(!var11) { _fun0010_ip = 22; continue _fun0010 }
case 111:
                    var3 = var6.burst;
                    var3 = !var3;
                    var11 = !var3;
case 22:
                    _closure4_slot6 = var11;
                    var3 = var14 != var6;
                    if(!var3) { _fun0010_ip = 112; continue _fun0010 }
case 35:
                    var6 = var6.isRetry;
                    var6 = !var6;
                    var3 = !var6;
case 112:
                    _closure4_slot7 = var3;
                    var7 = _closure1_slot13;
                    var6 = {};
                    var6['userId'] = var15;
                    var6['burst'] = var11;
                    var23 = 'MESSAGE_REACTION_REMOVE';
                    var24 = undefined;
                    var22 = var18;
                    var21 = var17;
                    var20 = var16;
                    var19 = var6;
                    var3 = var24[var7](var23, var22, var21, var20, var19, var18);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 12;
                    var3 = var7[var3];
                    var6 = var6.bind(var4)(var3);
                    var3 = var6.unarchiveThreadIfNecessary;
                    var3 = var3.bind(var6)(var18);
                    SaveGenerator(address=232);
case 113:
                    return var3;
case 49:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0010_ip = 114; continue _fun0010 }
case 78:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 11;
                    var6 = var8[var6];
                    var6 = var7.bind(var4)(var6);
                    var8 = var6.HTTP;
                    var7 = var8.del;
                    var6 = {};
                    var13 = _closure1_slot14;
                    var10 = {};
                    var10['channelId'] = var18;
                    var10['messageId'] = var17;
                    var10['emoji'] = var16;
                    var16 = var14 != var15;
                    var14 = '@me';
                    if(!var16) { _fun0010_ip = 115; continue _fun0010 }
case 116:
                    var14 = var15;
case 115:
                    var10['userId'] = var14;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var9 = 10;
                    var9 = var15[var9];
                    var9 = var14.bind(var4)(var9);
                    var14 = var9.ReactionTypes;
                    if(var11) { _fun0010_ip = 117; continue _fun0010 }
case 118:
                    var9 = var14.NORMAL;
                    _fun0010_ip = 119; continue _fun0010;
case 117:
                    var9 = var14.BURST;
case 119:
                    var10['type'] = var9;
                    var9 = true;
                    var10['useTypeEndpoint'] = var9;
                    var10 = var13.bind(var4)(var10);
                    var6['url'] = var10;
                    var10 = {};
                    var10['location'] = var12;
                    var10['burst'] = var11;
                    var6['query'] = var10;
                    var6['oldFormErrors'] = var9;
                    var9 = false;
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
                            var4 = var1.DQxi+/;
                            var1 = {};
                            var8 = _closure4_slot2;
                            var8 = var8.name;
                            var1['name'] = var8;
                            var1 = var5.bind(var6)(var4, var1);
                            var1 = var2.bind(var3)(var1);
                            _fun0011_ip = 121; continue _fun0011;
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
                            var4 = var1.3l9f6u;
                            var1 = {};
                            var7 = _closure4_slot2;
                            var7 = var7.name;
                            var1['name'] = var7;
                            var1 = var5.bind(var6)(var4, var1);
                            var1 = var2.bind(var3)(var1);
case 121:
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
case 122:
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
                                    if(!var2) { _fun0012_ip = 123; continue _fun0012 }
case 92:
                                    var6 = _closure1_slot24;
                                    var5 = _closure4_slot2;
                                    var2 = _closure4_slot6;
                                    var2 = var6.bind(var3)(var5, var2);
                                    SaveGenerator(address=78);
case 9:
                                    return var2;
case 124:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                    if(var5) { _fun0012_ip = 125; continue _fun0012 }
case 126:
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
                                    if(!(var5 != var6)) { _fun0012_ip = 127; continue _fun0012 }
case 128:
                                    var5 = _closure4_slot5;
                                    var5 = var5.burst;
                                    if(var5) { _fun0012_ip = 129; continue _fun0012 }
case 127:
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
                                    var8 = var5.tD9+b2;
                                    var5 = {};
                                    var12 = _closure4_slot2;
                                    var12 = var12.name;
                                    var5['name'] = var12;
                                    var5 = var9.bind(var11)(var8, var5);
                                    var5 = var6.bind(var7)(var5);
                                    _fun0012_ip = 123; continue _fun0012;
case 129:
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
                                    var7 = var4.OamVbW;
                                    var4 = {};
                                    var10 = _closure4_slot2;
                                    var10 = var10.name;
                                    var4['name'] = var10;
                                    var4 = var8.bind(var9)(var7, var4);
                                    var4 = var5.bind(var6)(var4);
case 123:
                                    return var3;
case 125:
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
case 114:
                    return var3;
case 109:
                    return var2;
case 105:
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
                    if(var4) { _fun0013_ip = 130; continue _fun0013 }
case 131:
                    var3 = arg1;
                    var2 = new Array(0);
                    var4 = arg2;
                    if(!var4) { _fun0013_ip = 9; continue _fun0013 }
case 79: // try_start_0
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
                    if(var4) { _fun0013_ip = 132; continue _fun0013 }
case 107:
                    var2 = var3;
case 133: // try_end0
                    _fun0013_ip = 9; continue _fun0013;
case 132:
                    return var3;
case 60: // catch_target0
                    CatchBlockStart(arg_register=2);
case 9:
                    return var2;
case 130:
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
            if(!var1) { _fun0014_ip = 134; continue _fun0014 }
case 135:
            var4 = var5.userHasReactedWithEmoji;
            var3 = arg3;
            var2 = arg4;
            var1 = var4.bind(var5)(var3, var2);
case 134:
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