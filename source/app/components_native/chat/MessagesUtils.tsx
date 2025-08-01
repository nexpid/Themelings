// app/components_native/chat/MessagesUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
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
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
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
            var9 = _closure1_slot25;
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
            var7 = _closure1_slot25;
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
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot24 = var1;
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
    var _closure1_slot25 = var1;
    var7 = function getVisibleMessages(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var15 = var1.firstVisibleMessageRowIndex;
            var14 = var1.lastVisibleMessageRowIndex;
            var13 = var1.firstVisibleMessagePercentVisible;
            var12 = var1.lastVisibleMessagePercentVisible;
            var11 = var1.chatManager;
            var10 = var1.channelId;
            var9 = null;
            if(!(var9 != var15)) { _fun0004_ip = 344; continue _fun0004 }
 47:
            if(!(var9 != var14)) { _fun0004_ip = 344; continue _fun0004 }
 54:
            var1 = 0;
            if(!(!(var15 < var1))) { _fun0004_ip = 344; continue _fun0004 }
 63:
            if(!(!(var14 < var1))) { _fun0004_ip = 344; continue _fun0004 }
 70:
            var1 = var11._rows;
            if(!(var9 != var1)) { _fun0004_ip = 344; continue _fun0004 }
 83:
            var1 = var11._messages;
            if(!(var9 != var1)) { _fun0004_ip = 344; continue _fun0004 }
 96:
            var1 = new Array(0);
            var16 = var15 >= var14;
            var6 = 1;
            var5 = var15;
            var4 = undefined;
            var3 = undefined;
            var2 = undefined;
            if(!var16) { _fun0004_ip = 342; continue _fun0004 }
 125:
            var16 = var11._rows;
            var19 = var16[var5];
            var18 = var4;
            var17 = var3;
            var16 = var2;
            if(!(var9 != var19)) { _fun0004_ip = 323; continue _fun0004 }
 151:
            var21 = var19.type;
            var20 = _closure1_slot21;
            var20 = var20.MESSAGE;
            var18 = var4;
            var17 = var3;
            var16 = var2;
            if(!(var21 === var20)) { _fun0004_ip = 323; continue _fun0004 }
 182:
            var21 = var19.message;
            var22 = var9 == var21;
            var20 = undefined;
            if(var22) { _fun0004_ip = 201; continue _fun0004 }
 196:
            var20 = var21.id;
 201:
            var18 = var21;
            var17 = var3;
            var16 = var2;
            if(!(var9 != var20)) { _fun0004_ip = 323; continue _fun0004 }
 214:
            if(!(var5 === var15)) { _fun0004_ip = 225; continue _fun0004 }
 218:
            var20 = var13;
            if(!(var9 == var20)) { _fun0004_ip = 245; continue _fun0004 }
 225:
            var22 = var5 === var14;
            if(!var22) { _fun0004_ip = 236; continue _fun0004 }
 232:
            var22 = var9 != var12;
 236:
            var20 = var6;
            if(!var22) { _fun0004_ip = 245; continue _fun0004 }
 242:
            var20 = var12;
 245:
            var19 = var19.message;
            var23 = var19.id;
            var22 = _closure1_slot9;
            var19 = var22.getMessage;
            var19 = var19.bind(var22)(var10, var23);
            var18 = var21;
            var17 = var20;
            var16 = var19;
            if(!(var9 != var16)) { _fun0004_ip = 323; continue _fun0004 }
 284:
            var23 = var1.push;
            var22 = {};
            var22['message'] = var19;
            var22['percentVisible'] = var20;
            var24 = var19.state;
            var22['state'] = var24;
            var22 = var23.bind(var1)(var22);
            var18 = var21;
            var17 = var20;
            var16 = var19;
 323:
            var5 = var5 - 1;
            var4 = var18;
            var3 = var17;
            var2 = var16;
            if(var5 >= var14) { _fun0004_ip = 125; continue _fun0004 }
 342:
            return var1;
 344:
            var1 = new Array(0);
            return var1;
        }
    };
    var _closure1_slot26 = var7;
    var6 = function shouldJumpToOriginalPost(arg1, arg2, arg3, arg4) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var1 = var2.isForumPost;
            var1 = var1.bind(var2)();
            if(!var1) { _fun0005_ip = 68; continue _fun0005 }
 16:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 33;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.castChannelIdAsMessageId;
            var2 = arg2;
            var3 = var3.bind(var4)(var2);
            var2 = arg3;
            var2 = var2.jumpTargetId;
            var1 = var3 === var2;
 68:
            if(!var1) { _fun0005_ip = 77; continue _fun0005 }
 71:
            var2 = arg4;
            var1 = !var2;
 77:
            return var1;
        }
    };
    var _closure1_slot27 = var6;
    var5 = function recordTimings(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg2;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 36;
            var3 = var3[var1];
            var1 = undefined;
            var7 = var4.bind(var1)(var3);
            var6 = var7.recordMessageRender;
            var4 = var2.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var5 = var4.bind(var2)(var3);
            var4 = var2.hasFetched;
            if(var4) { _fun0006_ip = 83; continue _fun0006 }
 62:
            var3 = var2.ready;
            if(!var3) { _fun0006_ip = 80; continue _fun0006 }
 71:
            var8 = var2.cached;
            var3 = !var8;
 80:
            var4 = var3;
 83:
            var9 = var2.hasMoreAfter;
            var12 = arg1;
            var13 = var7;
            var11 = var5;
            var10 = var4;
            var2 = var13[var6](var12, var11, var10, var9, var8);
            return var1;
        }
    };
    var _closure1_slot28 = var5;
    var4 = function getMessage(arg1, arg2) {
        var5 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 37;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.find;
        var2 = var5.toArray;
        var2 = var2.bind(var5)();
        var1 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = arg1;
                var4 = var1.id;
                var3 = var1.nonce;
                var1 = _closure2_slot0;
                var1 = var4 === var1;
                if(var1) { _fun0007_ip = 36; continue _fun0007 }
 28:
                var2 = _closure2_slot0;
                var1 = var3 === var2;
 36:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot29 = var4;
    var1 = function _handleTapNavBar() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    StartGenerator();
                    var3 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 392; continue _fun0008 }
 15:
                    var2 = undefined;
                    var _closure4_slot0 = var2;
                    var _closure4_slot1 = var2;
                    var9 = var3.channel;
                    var11 = var3.useReducedMotion;
                    _closure4_slot0 = var11;
                    var5 = var3.isNearTop;
                    var10 = var3.messages;
                    var8 = var3.findMessageIndex;
                    var6 = var3.scrollToTop;
                    _closure4_slot1 = var6;
                    var3 = var3.chatRef;
                    var6 = var9.isForumPost;
                    var6 = var6.bind(var9)();
                    if(!var6) { _fun0008_ip = 389; continue _fun0008 }
 90:
                    if(var5) { _fun0008_ip = 389; continue _fun0008 }
 96:
                    var6 = _closure1_slot29;
                    var13 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var12 = 33;
                    var5 = var5[var12];
                    var14 = var13.bind(var2)(var5);
                    var13 = var14.castChannelIdAsMessageId;
                    var5 = var9.id;
                    var5 = var13.bind(var14)(var5);
                    var5 = var6.bind(var2)(var10, var5);
                    var6 = null;
                    if(!(var6 != var5)) { _fun0008_ip = 277; continue _fun0008 }
 154:
                    var10 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var12];
                    var12 = var10.bind(var2)(var5);
                    var10 = var12.castChannelIdAsMessageId;
                    var5 = var9.id;
                    var5 = var10.bind(var12)(var5);
                    var5 = var8.bind(var2)(var5);
                    if(!(var6 != var5)) { _fun0008_ip = 274; continue _fun0008 }
 196:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 44;
                    var6 = var10[var6];
                    var10 = var8.bind(var2)(var6);
                    var8 = var10.scrollTo;
                    var6 = var3.current;
                    var3 = {};
                    var11 = !var11;
                    var3['animated'] = var11;
                    var3 = var8.bind(var10)(var6, var5, var3);
                    var3 = global;
                    var6 = var3.setTimeout;
                    var3 = 10;
                    var5 = var3 * var5;
                    var3 = function() {
                        var3 = _closure4_slot1;
                        var1 = _closure4_slot0;
                        var2 = !var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3 = var6.bind(var2)(var3, var5);
                    _fun0008_ip = 389; continue _fun0008;
 274:
                    return var2;
 277:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 45;
                    var3 = var6[var3];
                    var6 = var5.bind(var2)(var3);
                    var5 = var6.fetchMessages;
                    var3 = {};
                    var8 = var9.id;
                    var3['channelId'] = var8;
                    var8 = {};
                    var9 = var9.id;
                    var8['messageId'] = var9;
                    var9 = false;
                    var8['flash'] = var9;
                    var3['jump'] = var8;
                    var7 = _closure1_slot18;
                    var3['limit'] = var7;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=354);
 352:
                    return var3;
 354:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0008_ip = 386; continue _fun0008 }
 360:
                    var5 = global;
                    var6 = var5.setTimeout;
                    var5 = function() {
                        var3 = _closure4_slot1;
                        var1 = _closure4_slot0;
                        var2 = !var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var4 = 50;
                    var4 = var6.bind(var2)(var5, var4);
                    _fun0008_ip = 389; continue _fun0008;
 386:
                    return var3;
 389:
                    return var2;
 392:
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
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var8);
    var1 = 0;
    var8 = var10[var1];
    var1 = undefined;
    var8 = var11.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.updateShouldShowJumpToPresentButton;
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = 9;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot12 = var8;
    var8 = 10;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot13 = var8;
    var8 = 11;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var11 = var8.AnalyticEvents;
    var _closure1_slot14 = var11;
    var11 = var8.MessageEmbedTypes;
    var _closure1_slot15 = var11;
    var11 = var8.MessageTypes;
    var _closure1_slot16 = var11;
    var11 = var8.Permissions;
    var _closure1_slot17 = var11;
    var11 = var8.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot18 = var11;
    var11 = var8.MessageFlags;
    var _closure1_slot19 = var11;
    var8 = var8.ChannelTypes;
    var _closure1_slot20 = var8;
    var8 = 12;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var11 = var8.RowType;
    var _closure1_slot21 = var11;
    var11 = var8.Changeset;
    var _closure1_slot22 = var11;
    var8 = var8.SeparatorType;
    var _closure1_slot23 = var8;
    var8 = 51;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'components_native/chat/MessagesUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function getLongPressSelectedMedia(arg1, arg2, arg3, arg4, arg5) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var9 = arg1;
            var6 = arg2;
            var1 = arg3;
            var12 = arg4;
            var7 = arg5;
            var4 = var9.type;
            var2 = _closure1_slot16;
            var3 = var2.THREAD_STARTER_MESSAGE;
            var2 = var9;
            if(!(var4 === var3)) { _fun0009_ip = 93; continue _fun0009 }
 42:
            var3 = var9.messageReference;
            var4 = null;
            var2 = var9;
            if(!(var4 != var3)) { _fun0009_ip = 93; continue _fun0009 }
 57:
            var11 = _closure1_slot5;
            var10 = var11.getMessageByReference;
            var3 = var9.messageReference;
            var3 = var10.bind(var11)(var3);
            var3 = var3.message;
            var2 = var9;
            if(!(var4 != var3)) { _fun0009_ip = 93; continue _fun0009 }
 90:
            var2 = var3;
 93:
            var3 = 'attachment';
            if(!(var3 !== var1)) { _fun0009_ip = 618; continue _fun0009 }
 104:
            var4 = 'embed';
            if(!(var4 !== var1)) { _fun0009_ip = 343; continue _fun0009 }
 115:
            var10 = 'component';
            if(!(var10 !== var1)) { _fun0009_ip = 127; continue _fun0009 }
 123:
            var1 = null;
            return var1;
 127:
            var1 = null;
            if(!(var1 != var12)) { _fun0009_ip = 341; continue _fun0009 }
 136:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 14;
            var4 = var11[var4];
            var11 = undefined;
            var13 = var9.bind(var11)(var4);
            var9 = var13.flattenComponents;
            var4 = var2.components;
            var9 = var9.bind(var13)(var4);
            var4 = var9.get;
            var9 = var4.bind(var9)(var12);
            if(!(var1 != var9)) { _fun0009_ip = 339; continue _fun0009 }
 192:
            var12 = var9.type;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var4 = 15;
            var4 = var14[var4];
            var4 = var13.bind(var11)(var4);
            var4 = var4.ComponentType;
            var4 = var4.MEDIA_GALLERY;
            if(!(var12 !== var4)) { _fun0009_ip = 235; continue _fun0009 }
 233:
            return var1;
 235:
            if(!(var1 != var7)) { _fun0009_ip = 337; continue _fun0009 }
 239:
            var4 = var9.items;
            var4 = var4[var7];
            if(!(var1 != var4)) { _fun0009_ip = 335; continue _fun0009 }
 253:
            var7 = var4.media;
            var4 = {};
            var4['sourceType'] = var10;
            var4['source'] = var9;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 13;
            var9 = var12[var9];
            var11 = var10.bind(var11)(var9);
            var10 = var11.isVideoContentType;
            var9 = var7.contentType;
            var10 = var10.bind(var11)(var9);
            var9 = 'image';
            if(!var10) { _fun0009_ip = 318; continue _fun0009 }
 314:
            var9 = 'video';
 318:
            var4['mediaType'] = var9;
            var7 = var7.url;
            var4['mediaUrl'] = var7;
            return var4;
 335:
            return var1;
 337:
            return var1;
 339:
            return var1;
 341:
            return var1;
 343:
            var1 = var2.embeds;
            var4 = var1[var6];
            var _closure2_slot0 = var4;
            var1 = null;
            if(!(var1 != var4)) { _fun0009_ip = 616; continue _fun0009 }
 366:
            var9 = function getEmbedMedia(arg1, arg2, arg3) {
                var1 = {};
                var2 = 'embed';
                var1['sourceType'] = var2;
                var2 = _closure2_slot0;
                var1['source'] = var2;
                var2 = arg1;
                var1['mediaType'] = var2;
                var2 = arg2;
                var1['mediaUrl'] = var2;
                var2 = arg3;
                var1['contentType'] = var2;
                return var1;
            };
            var7 = var4.type;
            var5 = _closure1_slot15;
            var5 = var5.IMAGE;
            if(!(var7 === var5)) { _fun0009_ip = 404; continue _fun0009 }
 392:
            var5 = var4.url;
            if(!(var1 == var5)) { _fun0009_ip = 597; continue _fun0009 }
 404:
            var7 = var4.type;
            var5 = _closure1_slot15;
            var5 = var5.GIFV;
            if(!(var7 === var5)) { _fun0009_ip = 435; continue _fun0009 }
 423:
            var5 = var4.url;
            if(!(var1 == var5)) { _fun0009_ip = 578; continue _fun0009 }
 435:
            var7 = var4.type;
            var5 = _closure1_slot15;
            var5 = var5.RICH;
            if(!(var7 === var5)) { _fun0009_ip = 504; continue _fun0009 }
 454:
            var7 = var4.image;
            var10 = var1 == var7;
            var11 = undefined;
            var5 = undefined;
            if(var10) { _fun0009_ip = 476; continue _fun0009 }
 471:
            var5 = var7.url;
 476:
            if(!(var1 == var5)) { _fun0009_ip = 542; continue _fun0009 }
 480:
            var7 = var4.video;
            var10 = var1 == var7;
            var5 = undefined;
            if(var10) { _fun0009_ip = 500; continue _fun0009 }
 495:
            var5 = var7.url;
 500:
            if(!(var1 == var5)) { _fun0009_ip = 506; continue _fun0009 }
 504:
            return var1;
 506:
            var5 = var4.video;
            var10 = var5.url;
            var5 = var4.video;
            var7 = var5.contentType;
            var5 = 'video';
            var5 = var9.bind(var11)(var5, var10, var7);
            return var5;
 542:
            var5 = var4.image;
            var10 = var5.url;
            var5 = var4.image;
            var7 = var5.contentType;
            var5 = 'image';
            var5 = var9.bind(var11)(var5, var10, var7);
            return var5;
 578:
            var10 = var4.url;
            var7 = undefined;
            var5 = 'video';
            var5 = var9.bind(var7)(var5, var10);
            return var5;
 597:
            var7 = var4.url;
            var5 = undefined;
            var4 = 'image';
            var4 = var9.bind(var5)(var4, var7);
            return var4;
 616:
            return var1;
 618:
            var1 = var2.attachments;
            var4 = var1[var6];
            var5 = null;
            if(!(var5 == var4)) { _fun0009_ip = 666; continue _fun0009 }
 634:
            var1 = var2.getContentMessage;
            var2 = var1.bind(var2)();
            var7 = var5 == var2;
            var1 = undefined;
            if(var7) { _fun0009_ip = 663; continue _fun0009 }
 653:
            var2 = var2.attachments;
            var1 = var2[var6];
 663:
            var4 = var1;
 666:
            var2 = var5 == var4;
            var1 = null;
            if(var2) { _fun0009_ip = 868; continue _fun0009 }
 678:
            var2 = {};
            var2['sourceType'] = var3;
            var2['source'] = var4;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var10 = 13;
            var6 = var3[var10];
            var3 = undefined;
            var9 = var7.bind(var3)(var6);
            var7 = var9.isVideoFile;
            var6 = var4.filename;
            var7 = var7.bind(var9)(var6);
            var6 = 'video';
            if(var7) { _fun0009_ip = 827; continue _fun0009 }
 735:
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var10];
            var11 = var9.bind(var3)(var7);
            var9 = var11.isAudioFile;
            var7 = var4.filename;
            var9 = var9.bind(var11)(var7);
            var7 = 'audio';
            if(var9) { _fun0009_ip = 824; continue _fun0009 }
 776:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var10 = var9.bind(var3)(var8);
            var9 = var10.isImageFile;
            var8 = var4.filename;
            var9 = var9.bind(var10)(var8);
            var8 = 'file';
            if(!var9) { _fun0009_ip = 821; continue _fun0009 }
 817:
            var8 = 'image';
 821:
            var7 = var8;
 824:
            var6 = var7;
 827:
            var2['mediaType'] = var6;
            var6 = var4.url;
            var2['mediaUrl'] = var6;
            var4 = var4.content_type;
            var5 = var5 != var4;
            var3 = undefined;
            if(!var5) { _fun0009_ip = 860; continue _fun0009 }
 857:
            var3 = var4;
 860:
            var2['contentType'] = var3;
            var1 = var2;
 868:
            return var1;
        }
    };
    var3['getLongPressSelectedMedia'] = var8;
    var8 = function toObscuredMedia(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var3 = arg1;
            var2 = var3.sourceType;
            var1 = 'attachment';
            if(!(var1 !== var2)) { _fun0010_ip = 91; continue _fun0010 }
 17:
            var4 = var3.sourceType;
            var2 = 'embed';
            var1 = null;
            if(!(var2 === var4)) { _fun0010_ip = 89; continue _fun0010 }
 33:
            var2 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 16;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var4 = var4.ObscuredMediaTypes;
            var4 = var4.Embed;
            var2['type'] = var4;
            var4 = var3.source;
            var2['media'] = var4;
            var1 = var2;
 89:
            _fun0010_ip = 147; continue _fun0010;
 91:
            var2 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 16;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var4 = var4.ObscuredMediaTypes;
            var4 = var4.Attachment;
            var2['type'] = var4;
            var3 = var3.source;
            var2['media'] = var3;
            var1 = var2;
 147:
            return var1;
        }
    };
    var3['toObscuredMedia'] = var8;
    var8 = function handleAddOrRemoveReaction(arg1, arg2, arg3) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var10 = arg1;
            var7 = arg2;
            var9 = arg3;
            var8 = arguments[3];
            var6 = arguments[4];
            var1 = undefined;
            if(!(var8 === var1)) { _fun0011_ip = 23; continue _fun0011 }
 21:
            var8 = false;
 23:
            if(!(var6 === var1)) { _fun0011_ip = 62; continue _fun0011 }
 27:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 17;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var2 = var2.ReactionLocations;
            var6 = var2.MESSAGE;
 62:
            var2 = var7.getGuildId;
            var16 = var2.bind(var7)();
            var3 = _closure1_slot13;
            var2 = var3.getCurrentUser;
            var14 = var2.bind(var3)();
            var2 = null;
            var3 = var2 == var14;
            var15 = undefined;
            if(var3) { _fun0011_ip = 104; continue _fun0011 }
 99:
            var15 = var14.id;
 104:
            var11 = var2 != var16;
            if(!var11) { _fun0011_ip = 126; continue _fun0011 }
 111:
            var4 = _closure1_slot8;
            var3 = var4.canChatInGuild;
            var11 = var3.bind(var4)(var16);
 126:
            var3 = var2 != var16;
            if(!var3) { _fun0011_ip = 164; continue _fun0011 }
 133:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 18;
            var4 = var13[var4];
            var12 = var12.bind(var1)(var4);
            var4 = var12.shouldShowMembershipVerificationGate;
            var3 = var4.bind(var12)(var16);
 164:
            var4 = var2 != var16;
            var13 = null;
            if(!var4) { _fun0011_ip = 198; continue _fun0011 }
 173:
            var4 = var2 != var15;
            var13 = null;
            if(!var4) { _fun0011_ip = 198; continue _fun0011 }
 182:
            var12 = _closure1_slot7;
            var4 = var12.getMember;
            var13 = var4.bind(var12)(var16, var15);
 198:
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var4 = 19;
            var4 = var15[var4];
            var12 = var12.bind(var1)(var4);
            var4 = var12.isMemberCommunicationDisabled;
            var4 = var4.bind(var12)(var13);
            var12 = var7.isArchivedLockedThread;
            var12 = var12.bind(var7)();
            if(var12) { _fun0011_ip = 752; continue _fun0011 }
 245:
            if(!(var2 == var9)) { _fun0011_ip = 306; continue _fun0011 }
 249:
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var12 = 23;
            var12 = var15[var12];
            var15 = var13.bind(var1)(var12);
            var13 = var15.handleAddNewReactions;
            var12 = {};
            var12['burst'] = var8;
            var22 = var15;
            var21 = var7;
            var20 = var10;
            var19 = var6;
            var18 = var12;
            var12 = var22[var13](var21, var20, var19, var18, var17);
            _fun0011_ip = 908; continue _fun0011;
 306:
            if(!var8) { _fun0011_ip = 390; continue _fun0011 }
 309:
            var12 = var9.me_burst;
            var13 = !var12;
            var12 = true;
            if(!(var12 === var13)) { _fun0011_ip = 390; continue _fun0011 }
 324:
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var12 = 24;
            var12 = var15[var12];
            var13 = var13.bind(var1)(var12);
            var12 = var13.isPremium;
            var12 = var12.bind(var13)(var14);
            if(var12) { _fun0011_ip = 390; continue _fun0011 }
 358:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 23;
            var12 = var14[var12];
            var13 = var13.bind(var1)(var12);
            var12 = var13.handleOutOfSuperReactions;
            var12 = var12.bind(var13)();
            return var12;
 390:
            var12 = var9.me;
            var13 = true;
            if(!(var13 !== var12)) { _fun0011_ip = 631; continue _fun0011 }
 405:
            if(!var8) { _fun0011_ip = 421; continue _fun0011 }
 408:
            var12 = var9.me_burst;
            if(!(var13 !== var12)) { _fun0011_ip = 631; continue _fun0011 }
 421:
            if(var3) { _fun0011_ip = 575; continue _fun0011 }
 427:
            var12 = var7.isPrivate;
            var12 = var12.bind(var7)();
            if(var12) { _fun0011_ip = 446; continue _fun0011 }
 440:
            if(!var11) { _fun0011_ip = 575; continue _fun0011 }
 446:
            if(var4) { _fun0011_ip = 575; continue _fun0011 }
 452:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 17;
            var4 = var12[var4];
            var14 = var11.bind(var1)(var4);
            var13 = var14.addReaction;
            var21 = var7.id;
            var19 = var9.emoji;
            var4 = {};
            var4['burst'] = var8;
            var22 = var14;
            var20 = var10;
            var18 = var6;
            var17 = var4;
            var4 = var22[var13](var21, var20, var19, var18, var17, var16);
            var4 = var8;
            if(var4) { _fun0011_ip = 571; continue _fun0011 }
 518:
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 25;
            var11 = var15[var11];
            var13 = var12.bind(var1)(var11);
            var12 = var13.triggerHapticFeedback;
            var14 = _closure1_slot1;
            var11 = 26;
            var11 = var15[var11];
            var11 = var14.bind(var1)(var11);
            var11 = var11.IMPACT_LIGHT;
            var4 = var12.bind(var13)(var11);
 571:
            var4 = undefined;
            return var4;
 575:
            if(!var3) { _fun0011_ip = 908; continue _fun0011 }
 581:
            var3 = var7.getGuildId;
            var4 = var3.bind(var7)();
            if(!(var2 != var4)) { _fun0011_ip = 908; continue _fun0011 }
 598:
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 27;
            var2 = var11[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.openMemberVerificationModal;
            var2 = var2.bind(var3)(var4);
            return var2;
 631:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 25;
            var2 = var4[var2];
            var12 = var3.bind(var1)(var2);
            var11 = var12.triggerHapticFeedback;
            var13 = _closure1_slot1;
            var2 = 26;
            var2 = var4[var2];
            var2 = var13.bind(var1)(var2);
            var2 = var2.IMPACT_LIGHT;
            var2 = var11.bind(var12)(var2);
            var2 = 17;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.removeReaction;
            var2 = {};
            var11 = var7.id;
            var2['channelId'] = var11;
            var2['messageId'] = var10;
            var9 = var9.emoji;
            var2['emoji'] = var9;
            var2['location'] = var6;
            var6 = {};
            var6['burst'] = var8;
            var2['options'] = var6;
            var2 = var3.bind(var4)(var2);
            var2 = undefined;
            return var2;
 752:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 20;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.open;
            var2 = {};
            var6 = 'ARCHIVED_POST_REACTIONS_DISABLED_TOAST';
            var2['key'] = var6;
            var6 = var7.isForumPost;
            var6 = var6.bind(var7)();
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 21;
            var8 = var11[var7];
            var8 = var10.bind(var1)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var1)(var7);
            var7 = var7.t;
            if(var6) { _fun0011_ip = 862; continue _fun0011 }
 847:
            var6 = var7.X2L3OT;
            var6 = var8.bind(var9)(var6);
            _fun0011_ip = 875; continue _fun0011;
 862:
            var7 = var7.EJQrFh;
            var6 = var8.bind(var9)(var7);
 875:
            var2['content'] = var6;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 22;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var2['icon'] = var5;
            var2 = var3.bind(var4)(var2);
 908:
            return var1;
        }
    };
    var3['handleAddOrRemoveReaction'] = var8;
    var8 = function handleToggleFollowForumPost(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var5 = arg1;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 25;
            var3 = var4[var1];
            var1 = undefined;
            var7 = var6.bind(var1)(var3);
            var6 = var7.triggerHapticFeedback;
            var3 = _closure1_slot1;
            var2 = 26;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var2 = var2.IMPACT_LIGHT;
            var2 = var6.bind(var7)(var2);
            var2 = 28;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var2 = arg2;
            if(var2) { _fun0012_ip = 99; continue _fun0012 }
 79:
            var3 = var4.joinThread;
            var2 = 'iOS Forum Toolbar';
            var2 = var3.bind(var4)(var5, var2);
            _fun0012_ip = 117; continue _fun0012;
 99:
            var3 = var4.leaveThread;
            var2 = 'iOS Forum Toolbar';
            var2 = var3.bind(var4)(var5, var2);
 117:
            return var1;
        }
    };
    var3['handleToggleFollowForumPost'] = var8;
    var8 = function handleCopyLinkForumPost(arg1, arg2, arg3) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var9 = arg2;
            var6 = _closure1_slot6;
            var1 = var6.getChannel;
            var8 = var1.bind(var6)(var9);
            var5 = var6.getChannel;
            var3 = null;
            var7 = var3 == var8;
            var1 = undefined;
            var4 = undefined;
            if(var7) { _fun0013_ip = 44; continue _fun0013 }
 38:
            var4 = var8.parent_id;
 44:
            var7 = var5.bind(var6)(var4);
            var5 = var3 == var7;
            var4 = undefined;
            if(var5) { _fun0013_ip = 68; continue _fun0013 }
 58:
            var5 = var7.isMediaChannel;
            var4 = var5.bind(var7)();
 68:
            var10 = var3 != var4;
            if(!var10) { _fun0013_ip = 78; continue _fun0013 }
 75:
            var10 = var4;
 78:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 29;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.trackForumPostLinkCopied;
            var4 = {};
            var4['postId'] = var9;
            var11 = arg3;
            var4['location'] = var11;
            var4 = var5.bind(var6)(var4);
            if(!var10) { _fun0013_ip = 175; continue _fun0013 }
 126:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 30;
            var4 = var6[var4];
            var11 = var5.bind(var1)(var4);
            var6 = var11.trackWithMetadata;
            var4 = _closure1_slot14;
            var5 = var4.MEDIA_POST_SHARE_PROMPT_CLICKED;
            var4 = {};
            var4['media_post_id'] = var9;
            var4 = var6.bind(var11)(var5, var4);
 175:
            var5 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 25;
            var4 = var12[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.triggerHapticFeedback;
            var11 = _closure1_slot1;
            var4 = 26;
            var4 = var12[var4];
            var4 = var11.bind(var1)(var4);
            var4 = var4.IMPACT_LIGHT;
            var4 = var5.bind(var6)(var4);
            if(!(var3 != var8)) { _fun0013_ip = 289; continue _fun0013 }
 232:
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 31;
            var3 = var11[var3];
            var5 = var6.bind(var1)(var3);
            var4 = var5.copy;
            var3 = 32;
            var3 = var11[var3];
            var6 = var6.bind(var1)(var3);
            var3 = var6.getChannelLinkToCopy;
            var3 = var3.bind(var6)(var8, var7);
            var3 = var4.bind(var5)(var3);
            _fun0013_ip = 387; continue _fun0013;
 289:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 31;
            var3 = var7[var3];
            var5 = var6.bind(var1)(var3);
            var4 = var5.copy;
            var3 = 32;
            var3 = var7[var3];
            var8 = var6.bind(var1)(var3);
            var7 = var8.getChannelPermalink;
            var3 = true;
            var6 = undefined;
            if(!(var3 === var10)) { _fun0013_ip = 372; continue _fun0013 }
 341:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 33;
            var3 = var11[var3];
            var10 = var10.bind(var1)(var3);
            var3 = var10.castChannelIdAsMessageId;
            var6 = var3.bind(var10)(var9);
 372:
            var3 = arg1;
            var3 = var7.bind(var8)(var3, var9, var6);
            var3 = var4.bind(var5)(var3);
 387:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 34;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.presentLinkCopied;
            var2 = var2.bind(var3)();
            return var1;
        }
    };
    var3['handleCopyLinkForumPost'] = var8;
    var8 = function findMessageIndex(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var4 = arg2;
            var1 = null;
            if(!(var1 == var4)) { _fun0014_ip = 13; continue _fun0014 }
 9:
            var1 = undefined;
            return var1;
 13:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 35;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.findMessageRowIndex;
            var1 = arg1;
            var1 = var2.bind(var3)(var1, var4);
            return var1;
        }
    };
    var3['findMessageIndex'] = var8;
    var3['getVisibleMessages'] = var7;
    var3['shouldJumpToOriginalPost'] = var6;
    var3['recordTimings'] = var5;
    var5 = function findMessageIndexInRows(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 == var4)) { _fun0015_ip = 13; continue _fun0015 }
 9:
            var1 = undefined;
            return var1;
 13:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 35;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.findMessageRowIndex;
            var1 = arg2;
            var1 = var2.bind(var3)(var1, var4);
            return var1;
        }
    };
    var3['findMessageIndexInRows'] = var5;
    var3['getMessage'] = var4;
    var4 = function isLoadingAtTop(arg1, arg2) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg2;
            if(var1) { _fun0016_ip = 10; continue _fun0016 }
 6:
            var1 = false;
            return var1;
 10:
            var2 = _closure1_slot24;
            var5 = undefined;
            var1 = arg1;
            var4 = var2.bind(var5)(var1);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = var2;
            if(var1) { _fun0016_ip = 98; continue _fun0016 }
 42:
            var1 = var3.value;
            var7 = var1.changeType;
            var2 = _closure1_slot22;
            var2 = var2.INSERT;
            if(!(var7 !== var2)) { _fun0016_ip = 84; continue _fun0016 }
 67:
            var7 = var4.bind(var5)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0016_ip = 98; continue _fun0016 }
 82:
            _fun0016_ip = 42; continue _fun0016;
 84:
            var2 = var1.index;
            var1 = 1;
            var1 = var2 <= var1;
            return var1;
 98:
            var1 = false;
            return var1;
        }
    };
    var3['isLoadingAtTop'] = var4;
    var4 = function handleTapTableView(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 38;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var2 = var4.isIOS;
            var2 = var2.bind(var4)();
            if(!var2) { _fun0017_ip = 77; continue _fun0017 }
 38:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 39;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var3 = var3.KeyboardTypes;
            var4 = var3.SYSTEM;
            var3 = arg2;
            var2 = var3 !== var4;
 77:
            if(!var2) { _fun0017_ip = 104; continue _fun0017 }
 80:
            var2 = arg1;
            var3 = var2.current;
            var2 = null;
            if(!(var2 != var3)) { _fun0017_ip = 104; continue _fun0017 }
 94:
            var2 = var3.closeCustomKeyboard;
            var2 = var2.bind(var3)();
 104:
            return var1;
        }
    };
    var3['handleTapTableView'] = var4;
    var4 = function handleTapShowAltText(arg1) {
        var5 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 40;
        var4 = var2[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var4 = _closure1_slot0;
        var3 = 42;
        var3 = var2[var3];
        var4 = var4.bind(var1)(var3);
        var3 = 41;
        var3 = var2[var3];
        var2 = var2.paths;
        var4 = var4.bind(var1)(var3, var2);
        var3 = {};
        var2 = arg1;
        var3['description'] = var2;
        var2 = true;
        var3['showBackdrop'] = var2;
        var2 = 'MediaViewerAltTextSheet';
        var2 = var5.bind(var6)(var4, var2, var3);
        return var1;
    };
    var3['handleTapShowAltText'] = var4;
    var4 = function handleMediaPlayFinishedAnalytics(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var7 = arg1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 43;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot14;
            var3 = var2.MEDIA_PLAY_FINISHED;
            var2 = {};
            var8 = var7.playWallTimeMs;
            var2['play_time_sec'] = var8;
            var8 = var7.playWallTimeMs;
            var2['play_wall_time_ms'] = var8;
            var8 = var7.firstPlayWaitingMs;
            var2['first_play_waiting_ms'] = var8;
            var8 = var7.stallCount;
            var2['stall_count'] = var8;
            var8 = var7.stallMs;
            var2['stall_ms'] = var8;
            var8 = var7.seekCount;
            var2['seek_count'] = var8;
            var8 = null;
            var2['seek_waiting_ms'] = var8;
            var9 = var7.mediaSource;
            var2['media_source'] = var9;
            var10 = var7.mimeType;
            var11 = var8 != var10;
            var9 = 'video';
            if(!var11) { _fun0018_ip = 149; continue _fun0018 }
 146:
            var9 = var10;
 149:
            var2['mime_type'] = var9;
            var2['file_size'] = var8;
            var7 = var7.fileDurationSec;
            var2['file_duration_sec'] = var7;
            var7 = _closure1_slot10;
            var6 = var7.getType;
            var6 = var6.bind(var7)();
            var2['connection_type'] = var6;
            var6 = var7.getEffectiveConnectionSpeed;
            var6 = var6.bind(var7)();
            var2['effective_connection_speed'] = var6;
            var6 = var7.getServiceProvider;
            var6 = var6.bind(var7)();
            var2['service_provider'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['handleMediaPlayFinishedAnalytics'] = var4;
    var4 = function scrollToBottom(arg1, arg2, arg3) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var5 = arguments[3];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0019_ip = 11; continue _fun0019 }
 9:
            var5 = true;
 11:
            var3 = {};
            var2 = true;
            var3['isAtBottom'] = var2;
            var2 = arg3;
            var2 = var2.bind(var1)(var3);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 44;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.scrollToBottom;
            var2 = arg1;
            var2 = var2.current;
            if(!var5) { _fun0019_ip = 74; continue _fun0019 }
 68:
            var6 = arg2;
            var5 = !var6;
 74:
            var2 = var3.bind(var4)(var2, var5);
            return var1;
        }
    };
    var3['scrollToBottom'] = var4;
    var4 = function scrollToTop(arg1, arg2) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var5 = arguments[2];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0020_ip = 11; continue _fun0020 }
 9:
            var5 = true;
 11:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 44;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.scrollToTop;
            var2 = arg1;
            var2 = var2.current;
            if(!var5) { _fun0020_ip = 57; continue _fun0020 }
 51:
            var6 = arg2;
            var5 = !var6;
 57:
            var2 = var3.bind(var4)(var2, var5);
            return var1;
        }
    };
    var3['scrollToTop'] = var4;
    var4 = function scrollToRelativeOffset(arg1, arg2, arg3) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var6 = arguments[3];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0021_ip = 11; continue _fun0021 }
 9:
            var6 = true;
 11:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 44;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.scrollToRelativeOffset;
            var2 = arg1;
            var3 = var2.current;
            if(!var6) { _fun0021_ip = 57; continue _fun0021 }
 51:
            var2 = arg2;
            var6 = !var2;
 57:
            var2 = arg3;
            var2 = var4.bind(var5)(var3, var2, var6);
            return var1;
        }
    };
    var3['scrollToRelativeOffset'] = var4;
    var4 = function scrollToTopMessage(arg1, arg2) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var2 = arg2;
            var1 = var2.getPreviousRows;
            var1 = var1.bind(var2)();
            var3 = var1.length;
            var2 = 0;
            if(!(var3 > var2)) { _fun0022_ip = 81; continue _fun0022 }
 24:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 44;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.scrollTo;
            var2 = arg1;
            var2 = var2.current;
            var5 = var1.length;
            var1 = 1;
            var1 = var5 - var1;
            var1 = var3.bind(var4)(var2, var1);
 81:
            var1 = undefined;
            return var1;
        }
    };
    var3['scrollToTopMessage'] = var4;
    var4 = function canAddNewReactions(arg1, arg2) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
            var3 = arg1;
            var1 = arg2;
            if(!var1) { _fun0023_ip = 38; continue _fun0023 }
 9:
            var5 = _closure1_slot11;
            var4 = var5.can;
            var2 = _closure1_slot17;
            var2 = var2.ADD_REACTIONS;
            var1 = var4.bind(var5)(var2, var3);
 38:
            if(var1) { _fun0023_ip = 51; continue _fun0023 }
 41:
            var2 = var3.isPrivate;
            var1 = var2.bind(var3)();
 51:
            return var1;
        }
    };
    var3['canAddNewReactions'] = var4;
    var4 = function loadMoreBefore(arg1, arg2, arg3) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
            var7 = arg2;
            var3 = arg3;
            var1 = undefined;
            var2 = true;
            var2 = var3.bind(var1)(var2);
            var2 = var7.hasMoreBefore;
            if(!var2) { _fun0024_ip = 33; continue _fun0024 }
 24:
            var3 = var7.loadingMore;
            var2 = !var3;
 33:
            if(!var2) { _fun0024_ip = 118; continue _fun0024 }
 36:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 45;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.fetchMessages;
            var2 = {};
            var6 = arg1;
            var2['channelId'] = var6;
            var6 = var7.first;
            var7 = var6.bind(var7)();
            var6 = null;
            var8 = var6 == var7;
            var6 = undefined;
            if(var8) { _fun0024_ip = 100; continue _fun0024 }
 95:
            var6 = var7.id;
 100:
            var2['before'] = var6;
            var5 = _closure1_slot18;
            var2['limit'] = var5;
            var2 = var3.bind(var4)(var2);
 118:
            return var1;
        }
    };
    var3['loadMoreBefore'] = var4;
    var4 = function loadMoreAfter(arg1, arg2, arg3) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
            var7 = arg2;
            var3 = arg3;
            var1 = undefined;
            var2 = true;
            var2 = var3.bind(var1)(var2);
            var2 = var7.hasMoreAfter;
            if(!var2) { _fun0025_ip = 33; continue _fun0025 }
 24:
            var3 = var7.loadingMore;
            var2 = !var3;
 33:
            if(!var2) { _fun0025_ip = 118; continue _fun0025 }
 36:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 45;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.fetchMessages;
            var2 = {};
            var6 = arg1;
            var2['channelId'] = var6;
            var6 = var7.last;
            var7 = var6.bind(var7)();
            var6 = null;
            var8 = var6 == var7;
            var6 = undefined;
            if(var8) { _fun0025_ip = 100; continue _fun0025 }
 95:
            var6 = var7.id;
 100:
            var2['after'] = var6;
            var5 = _closure1_slot18;
            var2['limit'] = var5;
            var2 = var3.bind(var4)(var2);
 118:
            return var1;
        }
    };
    var3['loadMoreAfter'] = var4;
    var4 = function clearRows(arg1, arg2, arg3, arg4, arg5) {
        var3 = arg2;
        var4 = {'animated': false, 'hasHandledScroll': false, 'isNearBottom': false, 'isAtBottom': false, 'isNearTop': false, 'decelerating': false, 'dragging': false, 'hasMoreMessagesAfterForLastUpdate': false, 'pendingUpdatesQueue': null, '_loaded': false, 'animatingStickerMessageId': null};
        var6 = false;
        var1 = new Array(0);
        var4['pendingUpdatesQueue'] = var1;
        var2 = arg5;
        var1 = undefined;
        var2 = var2.bind(var1)(var4);
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var5 = _closure1_slot4;
        var4 = arg3;
        var3 = arg4;
        var3 = var5.bind(var1)(var4, var3, var6);
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 44;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.clearRows;
        var2 = arg1;
        var2 = var2.current;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearRows'] = var4;
    var4 = function handleFirstLayout(arg1, arg2, arg3, arg4, arg5) {
        var3 = {};
        var1 = arg2;
        var3['firstVisibleMessageRowIndex'] = var1;
        var1 = arg3;
        var3['lastVisibleMessageRowIndex'] = var1;
        var1 = arg4;
        var3['firstVisibleMessagePercentVisible'] = var1;
        var1 = arg5;
        var3['lastVisibleMessagePercentVisible'] = var1;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 46;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var2 = var2.QuestsVisibleMessagesChangedSource;
        var2 = var2.FIRST_LAYOUT;
        var3['source'] = var2;
        var2 = arg1;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var3['handleFirstLayout'] = var4;
    var4 = function handleMessageVisibilityChanged(arg1, arg2, arg3, arg4, arg5) {
        var3 = {};
        var1 = arg2;
        var3['firstVisibleMessageRowIndex'] = var1;
        var1 = arg3;
        var3['lastVisibleMessageRowIndex'] = var1;
        var1 = arg4;
        var3['firstVisibleMessagePercentVisible'] = var1;
        var1 = arg5;
        var3['lastVisibleMessagePercentVisible'] = var1;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 46;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var2 = var2.QuestsVisibleMessagesChangedSource;
        var2 = var2.VISIBILITY_CHANGED;
        var3['source'] = var2;
        var2 = arg1;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var3['handleMessageVisibilityChanged'] = var4;
    var4 = function handleLongPressSticker(arg1, arg2, arg3) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
            var3 = arg1;
            var4 = arg2;
            var1 = global;
            var5 = var1.Set;
            var1 = new Array(1);
            var1[0] = var3;
            var2 = var5.prototype;
            var2 = Object.create(var2, {constructor: {value: var5}});
            var7 = var2;
            var6 = var1;
            var1 = new var7[var5](var6, var5);
            var2 = var1 instanceof Object ? var1 : var2;
            var1 = null;
            if(!(var1 != var4)) { _fun0026_ip = 61; continue _fun0026 }
 51:
            var5 = var2.add;
            var5 = var5.bind(var2)(var4);
 61:
            var1 = null;
            if(!(var4 !== var3)) { _fun0026_ip = 70; continue _fun0026 }
 67:
            var1 = var3;
 70:
            var4 = {};
            var3 = true;
            var4['forced'] = var3;
            var4['updateMessageIds'] = var2;
            var3 = arg3;
            var2 = undefined;
            var2 = var3.bind(var2)(var4);
            return var1;
        }
    };
    var3['handleLongPressSticker'] = var4;
    var4 = function handleTapNavBar() {
        var1 = undefined;
        var4 = _closure1_slot30;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['handleTapNavBar'] = var4;
    var4 = function jumpToPresent(arg1, arg2, arg3) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
            var1 = arg1;
            var5 = arg2;
            var6 = var1.jumpReturnTargetId;
            var2 = null;
            if(!(var2 != var6)) { _fun0027_ip = 78; continue _fun0027 }
 18:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 45;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.jumpToMessage;
            var2 = {};
            var7 = var5.id;
            var2['channelId'] = var7;
            var2['messageId'] = var6;
            var6 = true;
            var2['flash'] = var6;
            var2 = var3.bind(var4)(var2);
            _fun0027_ip = 176; continue _fun0027;
 78:
            var2 = var1.loadingMore;
            if(var2) { _fun0027_ip = 176; continue _fun0027 }
 87:
            var1 = var1.hasMoreAfter;
            if(var1) { _fun0027_ip = 107; continue _fun0027 }
 96:
            var2 = arg3;
            var1 = undefined;
            var1 = var2.bind(var1)();
            _fun0027_ip = 176; continue _fun0027;
 107:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 45;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.fetchMessages;
            var1 = {};
            var5 = var5.id;
            var1['channelId'] = var5;
            var4 = _closure1_slot18;
            var1['limit'] = var4;
            var4 = {};
            var5 = true;
            var4['present'] = var5;
            var1['jump'] = var4;
            var1 = var2.bind(var3)(var1);
 176:
            var1 = undefined;
            return var1;
        }
    };
    var3['jumpToPresent'] = var4;
    var4 = function scrollToNewMessages(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
            var1 = arg1;
            var6 = var1.channel;
            var8 = var1.channelId;
            var11 = var1.messages;
            var7 = var1.hasJumpedToOriginalPost;
            var10 = var1.useReducedMotion;
            var9 = var1.oldestUnreadMessageId;
            var14 = var1.chatManagerRows;
            var5 = var1.findMessageIndex;
            var4 = var1.chatRef;
            var3 = var1.loadMoreBefore;
            var13 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 47;
            var12 = var12[var1];
            var1 = undefined;
            var15 = var13.bind(var1)(var12);
            var13 = var15.getCurrentConfig;
            var12 = {};
            var16 = 'Messages';
            var12['location'] = var16;
            var12 = var13.bind(var15)(var12);
            var12 = var12.enabled;
            if(var12) { _fun0028_ip = 399; continue _fun0028 }
 118:
            var5 = var5.bind(var1)(var9);
            var9 = null;
            if(!(var9 != var5)) { _fun0028_ip = 494; continue _fun0028 }
 132:
            var15 = var5 + 1;
            var5 = var14.length;
            var9 = var15;
            if(!(var15 < var5)) { _fun0028_ip = 275; continue _fun0028 }
 150:
            var5 = var14[var15];
            var12 = var5.type;
            var5 = _closure1_slot21;
            var5 = var5.SEPARATOR;
            var9 = var15;
            if(!(var12 === var5)) { _fun0028_ip = 275; continue _fun0028 }
 176:
            var5 = var14[var15];
            var12 = var5.id;
            var5 = _closure1_slot23;
            var5 = var5.UNREAD;
            var13 = var15;
            var9 = var13;
            if(!(var12 !== var5)) { _fun0028_ip = 275; continue _fun0028 }
 205:
            var15 = var13 + 1;
            var5 = var14.length;
            var9 = var15;
            if(!(var15 < var5)) { _fun0028_ip = 275; continue _fun0028 }
 220:
            var5 = var14[var15];
            var12 = var5.type;
            var5 = _closure1_slot21;
            var5 = var5.SEPARATOR;
            var9 = var15;
            if(!(var12 === var5)) { _fun0028_ip = 275; continue _fun0028 }
 246:
            var5 = var14[var15];
            var12 = var5.id;
            var5 = _closure1_slot23;
            var5 = var5.UNREAD;
            var13 = var15;
            var9 = var13;
            if(var12 !== var5) { _fun0028_ip = 205; continue _fun0028 }
 275:
            var5 = _closure1_slot27;
            var21 = undefined;
            var20 = var6;
            var19 = var8;
            var18 = var11;
            var17 = var7;
            var5 = var21[var5](var20, var19, var18, var17, var16);
            if(var5) { _fun0028_ip = 393; continue _fun0028 }
 300:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 44;
            var5 = var8[var5];
            var8 = var7.bind(var1)(var5);
            var7 = var8.scrollTo;
            var5 = var4.current;
            var4 = {};
            if(var10) { _fun0028_ip = 378; continue _fun0028 }
 336:
            var12 = var11.jumpType;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 48;
            var11 = var14[var11];
            var11 = var13.bind(var1)(var11);
            var11 = var11.JumpTypes;
            var11 = var11.INSTANT;
            var10 = var12 === var11;
 378:
            var10 = !var10;
            var4['animated'] = var10;
            var4 = var7.bind(var8)(var5, var9, var4);
 393:
            var3 = var3.bind(var1)();
            _fun0028_ip = 494; continue _fun0028;
 399:
            var5 = _closure1_slot12;
            var4 = var5.ackMessageId;
            var3 = var6.id;
            var5 = var4.bind(var5)(var3);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 45;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.jumpToMessage;
            var2 = {};
            var7 = var6.id;
            var2['channelId'] = var7;
            var7 = null;
            if(!(var7 == var5)) { _fun0028_ip = 467; continue _fun0028 }
 462:
            var5 = var6.id;
 467:
            var2['messageId'] = var5;
            var5 = 1;
            var2['offset'] = var5;
            var5 = 'Mark As Read';
            var2['context'] = var5;
            var2 = var3.bind(var4)(var2);
 494:
            return var1;
        }
    };
    var3['scrollToNewMessages'] = var4;
    var4 = function syncMessageDisplay(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
            var5 = arg1;
            var4 = var5.messages;
            var _closure2_slot0 = var4;
            var2 = var5.isMessagesReady;
            var9 = var5.oldestUnreadMessageId;
            var _closure2_slot1 = var9;
            var3 = var5.channelId;
            var10 = var5.updateRows;
            var5 = var5.scrollToMessageId;
            var _closure2_slot2 = var5;
            if(var2) { _fun0029_ip = 69; continue _fun0029 }
 55:
            var6 = undefined;
            var2 = {};
            var2 = var10.bind(var6)(var2);
            _fun0029_ip = 256; continue _fun0029;
 69:
            var7 = {};
            var2 = var4.jumpTargetId;
            var7['scrollToMessageId'] = var2;
            var2 = var4.jumpTargetId;
            var7['jumpTargetId'] = var2;
            var12 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 48;
            var11 = var2[var8];
            var2 = undefined;
            var11 = var12.bind(var2)(var11);
            var11 = var11.JumpTypes;
            var11 = var11.INSTANT;
            var7['jumpType'] = var11;
            var11 = var4.focusTargetId;
            var7['focusTargetId'] = var11;
            var7 = var10.bind(var2)(var7);
            var10 = var4.jumpTargetId;
            var7 = null;
            if(!(var7 == var10)) { _fun0029_ip = 193; continue _fun0029 }
 163:
            if(!(var7 != var9)) { _fun0029_ip = 256; continue _fun0029 }
 167:
            var7 = global;
            var9 = var7.setTimeout;
            var7 = function() {
                var3 = _closure2_slot2;
                var2 = {};
                var4 = _closure2_slot1;
                var2['scrollToMessageId'] = var4;
                var1 = _closure2_slot0;
                var1 = var1.jumpTargetId;
                var2['jumpTargetId'] = var1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 48;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var4 = var4.JumpTypes;
                var4 = var4.INSTANT;
                var2['jumpType'] = var4;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = 50;
            var1 = var9.bind(var2)(var7, var1);
            _fun0029_ip = 256; continue _fun0029;
 193:
            var1 = {};
            var7 = var4.jumpTargetId;
            var1['scrollToMessageId'] = var7;
            var7 = var4.jumpTargetId;
            var1['jumpTargetId'] = var7;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var7.bind(var2)(var6);
            var6 = var6.JumpTypes;
            var6 = var6.INSTANT;
            var1['jumpType'] = var6;
            var1 = var5.bind(var2)(var1);
 256:
            var2 = _closure1_slot28;
            var1 = undefined;
            var2 = var2.bind(var1)(var3, var4);
            return var1;
        }
    };
    var3['syncMessageDisplay'] = var4;
    var4 = function getChatRef(arg1) {
        var1 = arg1;
        return var1;
    };
    var3['getChatRef'] = var4;
    var4 = function maybeRescrollToMessageId(arg1, arg2) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
            var4 = arg1;
            var3 = arg2;
            var _closure2_slot0 = var4;
            var1 = var3.chatRef;
            var _closure2_slot1 = var1;
            var1 = var3.findMessageIndex;
            var _closure2_slot2 = var1;
            var1 = var3.updateRows;
            var _closure2_slot3 = var1;
            var6 = var3.updateRowsEnabled;
            var1 = undefined;
            var5 = var1 !== var6;
            if(!var5) { _fun0030_ip = 60; continue _fun0030 }
 57:
            var5 = var6;
 60:
            var _closure2_slot4 = var5;
            var3 = var3.jumpType;
            if(!(var1 === var3)) { _fun0030_ip = 109; continue _fun0030 }
 74:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 48;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var5 = var5.JumpTypes;
            var3 = var5.INSTANT;
 109:
            var _closure2_slot5 = var3;
            var3 = null;
            if(!(var3 != var4)) { _fun0030_ip = 143; continue _fun0030 }
 119:
            var3 = global;
            var4 = var3.setTimeout;
            var3 = function() {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var3 = null;
                    if(!(var3 != var6)) { _fun0031_ip = 231; continue _fun0031 }
 27:
                    var2 = _closure2_slot1;
                    var2 = var2.current;
                    if(!(var3 != var2)) { _fun0031_ip = 231; continue _fun0031 }
 43:
                    var3 = _closure2_slot4;
                    var2 = false;
                    if(!var3) { _fun0031_ip = 140; continue _fun0031 }
 52:
                    var5 = _closure2_slot3;
                    var4 = {};
                    var3 = _closure2_slot0;
                    var4['scrollToMessageId'] = var3;
                    var4['jumpTargetId'] = var3;
                    var7 = _closure2_slot5;
                    var4['jumpType'] = var7;
                    var4['focusTargetId'] = var3;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 48;
                    var3 = var9[var3];
                    var3 = var7.bind(var1)(var3);
                    var3 = var3.JumpTypes;
                    var3 = var3.INSTANT;
                    var4['overrideScrollJumpType'] = var3;
                    var3 = true;
                    var4['isRescrolling'] = var3;
                    var4 = var5.bind(var1)(var4);
                    var2 = true;
 140:
                    if(var2) { _fun0031_ip = 231; continue _fun0031 }
 143:
                    var3 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 44;
                    var2 = var10[var2];
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.scrollTo;
                    var2 = _closure2_slot1;
                    var3 = var2.current;
                    var2 = {};
                    var8 = _closure2_slot5;
                    var9 = _closure1_slot0;
                    var7 = 48;
                    var7 = var10[var7];
                    var7 = var9.bind(var1)(var7);
                    var7 = var7.JumpTypes;
                    var7 = var7.ANIMATED;
                    var7 = var8 === var7;
                    var2['animated'] = var7;
                    var2 = var4.bind(var5)(var3, var6, var2);
 231:
                    return var1;
                }
            };
            var2 = 50;
            var2 = var4.bind(var1)(var3, var2);
 143:
            return var1;
        }
    };
    var3['maybeRescrollToMessageId'] = var4;
    var2 = function handleVisibleMessagesChange(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
            var1 = arg1;
            var15 = var1.firstVisibleMessageRowIndex;
            var13 = var1.firstVisibleMessagePercentVisible;
            var14 = var1.lastVisibleMessageRowIndex;
            var12 = var1.lastVisibleMessagePercentVisible;
            var11 = var1.source;
            var10 = var1.chatManager;
            var7 = var1.shouldTrackAnnouncementMessageViews;
            var5 = var1.guildId;
            var _closure2_slot0 = var5;
            var9 = var1.channelId;
            var _closure2_slot1 = var9;
            var1 = var1.channel;
            var _closure2_slot2 = var1;
            var1 = undefined;
            var _closure2_slot3 = var1;
            var4 = null;
            if(!(var4 != var15)) { _fun0032_ip = 268; continue _fun0032 }
 88:
            if(!(var4 != var14)) { _fun0032_ip = 268; continue _fun0032 }
 95:
            if(!(var4 != var13)) { _fun0032_ip = 268; continue _fun0032 }
 102:
            if(!(var4 != var12)) { _fun0032_ip = 268; continue _fun0032 }
 109:
            var8 = _closure1_slot26;
            var6 = {};
            var6['firstVisibleMessageRowIndex'] = var15;
            var6['lastVisibleMessageRowIndex'] = var14;
            var6['firstVisibleMessagePercentVisible'] = var13;
            var6['lastVisibleMessagePercentVisible'] = var12;
            var6['chatManager'] = var10;
            var6['channelId'] = var9;
            var6 = var8.bind(var1)(var6);
            var9 = var6.length;
            var8 = 0;
            if(!(!(var9 <= var8))) { _fun0032_ip = 268; continue _fun0032 }
 163:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 49;
            var8 = var10[var8];
            var10 = var9.bind(var1)(var8);
            var9 = var10.questsVisibleMobileMessagesChanged;
            var8 = {};
            var8['visibleMessages'] = var6;
            var8['source'] = var11;
            var8 = var9.bind(var10)(var8);
            if(!var7) { _fun0032_ip = 268; continue _fun0032 }
 208:
            if(!(var4 != var5)) { _fun0032_ip = 268; continue _fun0032 }
 212:
            var4 = new Array(0);
            _closure2_slot3 = var4;
            var5 = var6.forEach;
            var3 = function(arg1) {
                _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.message;
                    var5 = var2.messageReference;
                    var4 = null;
                    var6 = var4 == var5;
                    var1 = undefined;
                    var3 = undefined;
                    if(var6) { _fun0033_ip = 32; continue _fun0033 }
 27:
                    var3 = var5.guild_id;
 32:
                    var3 = var4 != var3;
                    if(!var3) { _fun0033_ip = 49; continue _fun0033 }
 39:
                    var5 = var2.webhookId;
                    var3 = var4 != var5;
 49:
                    if(!var3) { _fun0033_ip = 76; continue _fun0033 }
 52:
                    var6 = var2.hasFlag;
                    var5 = _closure1_slot19;
                    var5 = var5.IS_CROSSPOST;
                    var3 = var6.bind(var2)(var5);
 76:
                    var7 = var2.hasFlag;
                    var6 = _closure1_slot19;
                    var6 = var6.EPHEMERAL;
                    var6 = var7.bind(var2)(var6);
                    if(var6) { _fun0033_ip = 290; continue _fun0033 }
 106:
                    var6 = _closure2_slot2;
                    var6 = var6.type;
                    var5 = _closure1_slot20;
                    var5 = var5.GUILD_ANNOUNCEMENT;
                    if(!(var6 !== var5)) { _fun0033_ip = 138; continue _fun0033 }
 132:
                    if(!var3) { _fun0033_ip = 290; continue _fun0033 }
 138:
                    if(!var3) { _fun0033_ip = 151; continue _fun0033 }
 141:
                    var5 = var2.messageReference;
                    if(!(var4 == var5)) { _fun0033_ip = 157; continue _fun0033 }
 151:
                    var6 = _closure2_slot1;
                    _fun0033_ip = 168; continue _fun0033;
 157:
                    var5 = var2.messageReference;
                    var6 = var5.channel_id;
 168:
                    if(!var3) { _fun0033_ip = 195; continue _fun0033 }
 171:
                    var8 = var2.messageReference;
                    var9 = var4 == var8;
                    var5 = undefined;
                    if(var9) { _fun0033_ip = 191; continue _fun0033 }
 186:
                    var5 = var8.guild_id;
 191:
                    if(!(var4 == var5)) { _fun0033_ip = 201; continue _fun0033 }
 195:
                    var5 = _closure2_slot0;
                    _fun0033_ip = 212; continue _fun0033;
 201:
                    var8 = var2.messageReference;
                    var5 = var8.guild_id;
 212:
                    if(!var3) { _fun0033_ip = 225; continue _fun0033 }
 215:
                    var3 = var2.messageReference;
                    if(!(var4 == var3)) { _fun0033_ip = 232; continue _fun0033 }
 225:
                    var8 = var2.id;
                    _fun0033_ip = 244; continue _fun0033;
 232:
                    var2 = var2.messageReference;
                    var8 = var2.message_id;
 244:
                    var4 = _closure2_slot3;
                    var3 = var4.push;
                    var2 = {};
                    var2['messageId'] = var8;
                    var8 = _closure2_slot1;
                    var2['channelId'] = var8;
                    var7 = _closure2_slot0;
                    var2['guildId'] = var7;
                    var2['sourceChannelId'] = var6;
                    var2['sourceGuildId'] = var5;
                    var2 = var3.bind(var4)(var2);
 290:
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var3);
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 50;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.handleMessageListVisibilityChange;
            var2 = var2.bind(var3)(var4);
 268:
            return var1;
        }
    };
    var3['handleVisibleMessagesChange'] = var2;
    return var1;
})();