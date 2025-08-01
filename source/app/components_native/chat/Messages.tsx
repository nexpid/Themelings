// app/components_native/chat/Messages.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
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
            var9 = _closure1_slot79;
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
            var7 = _closure1_slot79;
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
    var _closure1_slot78 = var1;
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
    var _closure1_slot79 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
 72: // try_end0
            _fun0004_ip = 76; continue _fun0004;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot80 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot80 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.findNodeHandle;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot17 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot18 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.updateShouldShowJumpToPresentButton;
    var _closure1_slot19 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot20 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot21 = var4;
    var4 = 19;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot22 = var4;
    var4 = 20;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot23 = var4;
    var4 = 21;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot24 = var4;
    var4 = 22;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot25 = var4;
    var4 = 23;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot26 = var4;
    var4 = 24;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot27 = var4;
    var4 = 25;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot28 = var4;
    var4 = 26;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot29 = var4;
    var4 = 27;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot30 = var4;
    var4 = 28;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot31 = var4;
    var4 = 29;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot32 = var4;
    var4 = 30;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useChannelPollInteractions;
    var _closure1_slot33 = var4;
    var4 = 31;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot34 = var4;
    var4 = 32;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot35 = var4;
    var4 = 33;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot36 = var4;
    var4 = 34;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot37 = var4;
    var4 = 35;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot38 = var4;
    var4 = 36;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot39 = var4;
    var4 = 37;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot40 = var4;
    var4 = 38;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot41 = var4;
    var4 = 39;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot42 = var4;
    var4 = 40;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot43 = var4;
    var4 = 41;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot44 = var4;
    var4 = 42;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot45 = var4;
    var4 = 43;
    var9 = var6[var4];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot46 = var9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getUserCommunicationDisabledVersion;
    var _closure1_slot47 = var4;
    var4 = 44;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot48 = var4;
    var4 = 45;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot49 = var4;
    var4 = 46;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot50 = var4;
    var4 = 47;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot51 = var4;
    var4 = 48;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot52 = var4;
    var4 = 49;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot53 = var4;
    var4 = 50;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot54 = var4;
    var4 = 51;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot55 = var4;
    var4 = 52;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot56 = var4;
    var4 = 53;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot57 = var4;
    var4 = 54;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot58 = var4;
    var4 = 55;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.AnalyticEvents;
    var _closure1_slot59 = var9;
    var9 = var4.ChannelTypes;
    var _closure1_slot60 = var9;
    var9 = var4.ChannelTypesSets;
    var _closure1_slot61 = var9;
    var9 = var4.GuildFeatures;
    var _closure1_slot62 = var9;
    var9 = var4.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot63 = var9;
    var9 = var4.ME;
    var _closure1_slot64 = var9;
    var9 = var4.MessageFlags;
    var _closure1_slot65 = var9;
    var9 = var4.MessageTypes;
    var _closure1_slot66 = var9;
    var4 = var4.Permissions;
    var _closure1_slot67 = var4;
    var4 = 56;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.Changeset;
    var _closure1_slot68 = var9;
    var9 = var4.RowType;
    var _closure1_slot69 = var9;
    var4 = var4.SeparatorType;
    var _closure1_slot70 = var4;
    var4 = 57;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot71 = var9;
    var4 = var4.PremiumTypes;
    var _closure1_slot72 = var4;
    var4 = 58;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot73 = var9;
    var9 = var4.Fragment;
    var _closure1_slot74 = var9;
    var4 = var4.jsxs;
    var _closure1_slot75 = var4;
    var4 = 59;
    var4 = var6[var4];
    var9 = var8.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var12 = 'Messages';
    var13 = var8;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot76 = var4;
    var8 = var7.Component;
    var4 = function(arg1) {
        var4 = function Messages(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot5;
                var4 = _closure2_slot0;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot8;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot7;
                var1 = _closure1_slot80;
                var1 = var1.bind(var5)();
                if(var1) { _fun0005_ip = 86; continue _fun0005 }
 73:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0005_ip = 120; continue _fun0005;
 86:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot8;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
 120:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var6 = false;
                var1['animated'] = var6;
                var1['hasHandledScroll'] = var6;
                var1['isAtBottom'] = var6;
                var1['isNearBottom'] = var6;
                var1['isNearTop'] = var6;
                var1['decelerating'] = var6;
                var1['dragging'] = var6;
                var1['hasMoreMessagesAfterForLastUpdate'] = var6;
                var4 = new Array(0);
                var1['pendingUpdatesQueue'] = var4;
                var4 = null;
                var1['animatingStickerMessageId'] = var4;
                var1['_loaded'] = var6;
                var7 = _closure1_slot10;
                var6 = var7.createRef;
                var6 = var6.bind(var7)();
                var1['_chatRef'] = var6;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 60;
                var6 = var8[var6];
                var6 = var7.bind(var5)(var6);
                var10 = var6.ChatUpdatesQueue;
                var6 = var10.prototype;
                var7 = Object.create(var6, {constructor: {value: var10}});
                var14 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var1 = _closure3_slot0;
                        var1 = var1._chatRef;
                        var3 = var1.current;
                        var1 = null;
                        if(!(var1 !== var3)) { _fun0006_ip = 53; continue _fun0006 }
 24:
                        var4 = _closure1_slot11;
                        var2 = _closure3_slot0;
                        var2 = var2._chatRef;
                        var3 = var2.current;
                        var2 = undefined;
                        var1 = var4.bind(var2)(var3);
 53:
                        return var1;
                    }
                };
                var13 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.applyNativeRowsUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var15 = var7;
                var6 = new var15[var10](var14, var13, var12);
                var6 = var6 instanceof Object ? var6 : var7;
                var1['_chatUpdatesQueue'] = var6;
                var6 = {'shouldForceRender': false, 'hasJumpedToOriginalPost': false};
                var1['state'] = var6;
                var7 = _closure1_slot1;
                var6 = 61;
                var6 = var8[var6];
                var6 = var7.bind(var5)(var6);
                var9 = var6.prototype;
                var9 = Object.create(var9, {constructor: {value: var6}});
                var15 = var9;
                var6 = new var15[var6](var14);
                var6 = var6 instanceof Object ? var6 : var9;
                var1['chatManager'] = var6;
                var6 = 62;
                var6 = var8[var6];
                var6 = var7.bind(var5)(var6);
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var15 = var7;
                var6 = new var15[var6](var14);
                var6 = var6 instanceof Object ? var6 : var7;
                var1['rowGenerator'] = var6;
                var1['handlers'] = var4;
                var4 = function(arg1) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 63;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.find;
                    var2 = _closure3_slot0;
                    var2 = var2.props;
                    var5 = var2.messages;
                    var2 = var5.toArray;
                    var2 = var2.bind(var5)();
                    var1 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var1 = arg1;
                            var4 = var1.id;
                            var3 = var1.nonce;
                            var1 = _closure4_slot0;
                            var1 = var4 === var1;
                            if(var1) { _fun0007_ip = 36; continue _fun0007 }
 28:
                            var2 = _closure4_slot0;
                            var1 = var3 === var2;
 36:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1['getMessage'] = var4;
                var4 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var3 = var1.channel;
                        var1 = var3.isForumPost;
                        var1 = var1.bind(var3)();
                        if(!var1) { _fun0008_ip = 101; continue _fun0008 }
 30:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 64;
                        var4 = var4[var3];
                        var3 = undefined;
                        var6 = var5.bind(var3)(var4);
                        var5 = var6.castChannelIdAsMessageId;
                        var3 = _closure3_slot0;
                        var4 = var3.props;
                        var4 = var4.channelId;
                        var4 = var5.bind(var6)(var4);
                        var3 = var3.props;
                        var3 = var3.messages;
                        var3 = var3.jumpTargetId;
                        var1 = var4 === var3;
 101:
                        if(!var1) { _fun0008_ip = 122; continue _fun0008 }
 104:
                        var2 = _closure3_slot0;
                        var2 = var2.state;
                        var2 = var2.hasJumpedToOriginalPost;
                        var1 = !var2;
 122:
                        return var1;
                    }
                };
                var1['shouldJumpToOriginalPost'] = var4;
                var4 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var4 = arg1;
                        var5 = arguments[1];
                        var3 = arguments[2];
                        var _closure4_slot0 = var4;
                        var1 = undefined;
                        if(!(var5 === var1)) { _fun0009_ip = 23; continue _fun0009 }
 21:
                        var5 = false;
 23:
                        var _closure4_slot1 = var5;
                        if(!(var3 === var1)) { _fun0009_ip = 66; continue _fun0009 }
 31:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 65;
                        var5 = var7[var5];
                        var5 = var6.bind(var1)(var5);
                        var5 = var5.JumpTypes;
                        var3 = var5.INSTANT;
 66:
                        var _closure4_slot2 = var3;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0009_ip = 100; continue _fun0009 }
 76:
                        var3 = global;
                        var4 = var3.setTimeout;
                        var3 = function() {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                                var4 = _closure3_slot0;
                                var3 = var4.findMessageIndex;
                                var2 = _closure4_slot0;
                                var5 = var3.bind(var4)(var2);
                                var3 = null;
                                if(!(var3 != var5)) { _fun0010_ip = 260; continue _fun0010 }
 34:
                                var2 = _closure3_slot0;
                                var2 = var2._chatRef;
                                var2 = var2.current;
                                if(!(var3 != var2)) { _fun0010_ip = 260; continue _fun0010 }
 56:
                                var3 = _closure4_slot1;
                                var2 = false;
                                if(!var3) { _fun0010_ip = 161; continue _fun0010 }
 65:
                                var8 = _closure3_slot0;
                                var6 = var8.updateRows;
                                var4 = {};
                                var3 = _closure4_slot0;
                                var4['scrollToMessageId'] = var3;
                                var4['jumpTargetId'] = var3;
                                var9 = _closure4_slot2;
                                var4['jumpType'] = var9;
                                var4['focusTargetId'] = var3;
                                var10 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var3 = 65;
                                var9 = var9[var3];
                                var3 = undefined;
                                var3 = var10.bind(var3)(var9);
                                var3 = var3.JumpTypes;
                                var3 = var3.INSTANT;
                                var4['overrideScrollJumpType'] = var3;
                                var3 = true;
                                var4['isRescrolling'] = var3;
                                var4 = var6.bind(var8)(var4);
                                var2 = true;
 161:
                                if(var2) { _fun0010_ip = 260; continue _fun0010 }
 164:
                                var3 = _closure1_slot1;
                                var10 = _closure1_slot2;
                                var2 = 66;
                                var2 = var10[var2];
                                var9 = undefined;
                                var4 = var3.bind(var9)(var2);
                                var3 = var4.scrollTo;
                                var1 = _closure3_slot0;
                                var1 = var1._chatRef;
                                var2 = var1.current;
                                var1 = {};
                                var7 = _closure4_slot2;
                                var8 = _closure1_slot0;
                                var6 = 65;
                                var6 = var10[var6];
                                var6 = var8.bind(var9)(var6);
                                var6 = var6.JumpTypes;
                                var6 = var6.ANIMATED;
                                var6 = var7 === var6;
                                var1['animated'] = var6;
                                var1 = var3.bind(var4)(var2, var5, var1);
 260:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = 50;
                        var2 = var4.bind(var1)(var3, var2);
 100:
                        return var1;
                    }
                };
                var1['maybeRescrollToMessageId'] = var4;
                var4 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var3 = arg1;
                        var2 = _closure3_slot0;
                        var2 = var2._chatUpdatesQueue;
                        var2 = var2.isBlocking;
                        if(var2) { _fun0011_ip = 99; continue _fun0011 }
 25:
                        var2 = var3.isLoadingAtTop;
                        if(!var2) { _fun0011_ip = 60; continue _fun0011 }
 34:
                        var2 = _closure3_slot0;
                        var2 = var2.decelerating;
                        if(var2) { _fun0011_ip = 77; continue _fun0011 }
 47:
                        var2 = _closure3_slot0;
                        var2 = var2.dragging;
                        if(var2) { _fun0011_ip = 77; continue _fun0011 }
 60:
                        var4 = _closure3_slot0;
                        var2 = var4.applyNativeRowsUpdate;
                        var2 = var2.bind(var4)(var3);
                        _fun0011_ip = 119; continue _fun0011;
 77:
                        var2 = _closure3_slot0;
                        var4 = var2._chatUpdatesQueue;
                        var2 = var4.add;
                        var2 = var2.bind(var4)(var3);
                        _fun0011_ip = 119; continue _fun0011;
 99:
                        var1 = _closure3_slot0;
                        var2 = var1._chatUpdatesQueue;
                        var1 = var2.add;
                        var1 = var1.bind(var2)(var3);
 119:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['updateNativeRows'] = var4;
                var4 = function(arg1) {
                    var1 = arg1;
                    var8 = var1.rows;
                    var3 = var1.hasMoreMessagesAfter;
                    var10 = var1.scrollData;
                    var9 = var1.HACK_iOSForceAnimations;
                    var2 = _closure3_slot0;
                    var5 = var2.isLoadingAtTop;
                    var4 = var1.rows;
                    var1 = var2.hasMoreMessagesAfterForLastUpdate;
                    var11 = var5.bind(var2)(var4, var1);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 66;
                    var4 = var4[var1];
                    var1 = undefined;
                    var7 = var5.bind(var1)(var4);
                    var6 = var7.updateRows;
                    var4 = var2._chatRef;
                    var5 = var4.current;
                    var4 = {};
                    var4['isLoadingAtTop'] = var11;
                    var4['scrollData'] = var10;
                    var4['HACK_iOSForceAnimations'] = var9;
                    var4 = var6.bind(var7)(var5, var8, var4);
                    var2['hasMoreMessagesAfterForLastUpdate'] = var3;
                    return var1;
                };
                var1['applyNativeRowsUpdate'] = var4;
                var4 = function(arg1, arg2) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var1 = arg2;
                        if(var1) { _fun0012_ip = 10; continue _fun0012 }
 6:
                        var1 = false;
                        return var1;
 10:
                        var2 = _closure1_slot78;
                        var5 = undefined;
                        var1 = arg1;
                        var4 = var2.bind(var5)(var1);
                        var2 = var4.bind(var5)();
                        var1 = var2.done;
                        var3 = var2;
                        if(var1) { _fun0012_ip = 98; continue _fun0012 }
 42:
                        var1 = var3.value;
                        var7 = var1.changeType;
                        var2 = _closure1_slot68;
                        var2 = var2.INSERT;
                        if(!(var7 !== var2)) { _fun0012_ip = 84; continue _fun0012 }
 67:
                        var7 = var4.bind(var5)();
                        var2 = var7.done;
                        var3 = var7;
                        if(var2) { _fun0012_ip = 98; continue _fun0012 }
 82:
                        _fun0012_ip = 42; continue _fun0012;
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
                var1['isLoadingAtTop'] = var4;
                var4 = function() {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                        var2 = arguments[0];
                        var1 = undefined;
                        if(!(var2 === var1)) { _fun0013_ip = 11; continue _fun0013 }
 9:
                        var2 = {};
 11:
                        var15 = var2.forced;
                        if(!(var15 === var1)) { _fun0013_ip = 23; continue _fun0013 }
 21:
                        var15 = false;
 23:
                        var11 = var2.updateMessageIds;
                        if(!(var11 === var1)) { _fun0013_ip = 61; continue _fun0013 }
 33:
                        var3 = global;
                        var3 = var3.Set;
                        var4 = var3.prototype;
                        var4 = Object.create(var4, {constructor: {value: var3}});
                        var22 = var4;
                        var3 = new var22[var3](var21);
                        var11 = var3 instanceof Object ? var3 : var4;
 61:
                        var14 = var2.scrollToMessageId;
                        if(!(var14 === var1)) { _fun0013_ip = 73; continue _fun0013 }
 71:
                        var14 = null;
 73:
                        var13 = var2.jumpTargetId;
                        if(!(var13 === var1)) { _fun0013_ip = 85; continue _fun0013 }
 83:
                        var13 = null;
 85:
                        var18 = var2.jumpType;
                        if(!(var18 === var1)) { _fun0013_ip = 130; continue _fun0013 }
 95:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 65;
                        var3 = var5[var3];
                        var3 = var4.bind(var1)(var3);
                        var3 = var3.JumpTypes;
                        var18 = var3.ANIMATED;
 130:
                        var8 = var2.focusTargetId;
                        if(!(var8 === var1)) { _fun0013_ip = 142; continue _fun0013 }
 140:
                        var8 = null;
 142:
                        var9 = var2.ignoreEmbedDescriptionCache;
                        if(!(var9 === var1)) { _fun0013_ip = 154; continue _fun0013 }
 152:
                        var9 = false;
 154:
                        var7 = var2.messagesNewlyLoaded;
                        if(!(var7 === var1)) { _fun0013_ip = 166; continue _fun0013 }
 164:
                        var7 = false;
 166:
                        var10 = var2.shouldInitialScroll;
                        if(!(var10 === var1)) { _fun0013_ip = 178; continue _fun0013 }
 176:
                        var10 = false;
 178:
                        var17 = var2.minimizeScrolling;
                        if(!(var17 === var1)) { _fun0013_ip = 190; continue _fun0013 }
 188:
                        var17 = false;
 190:
                        var16 = var2.isRescrolling;
                        if(!(var16 === var1)) { _fun0013_ip = 202; continue _fun0013 }
 200:
                        var16 = false;
 202:
                        var6 = var2.overrideScrollJumpType;
                        var2 = _closure3_slot0;
                        var2 = var2._chatRef;
                        var2 = var2.current;
                        var12 = null;
                        if(!(var12 != var2)) { _fun0013_ip = 960; continue _fun0013 }
 235:
                        var2 = _closure3_slot0;
                        var5 = var2.createRows;
                        var4 = {};
                        var4['forced'] = var15;
                        var4['updateMessageIds'] = var11;
                        var4['ignoreEmbedDescriptionCache'] = var9;
                        var11 = var5.bind(var2)(var4);
                        var5 = var2._loaded;
                        var2 = var2.props;
                        var2 = var2.selectedSummary;
                        var4 = var12 != var2;
                        var9 = undefined;
                        if(!var4) { _fun0013_ip = 340; continue _fun0013 }
 293:
                        var2 = var2.startId;
                        var9 = undefined;
                        if(!(var2 === var14)) { _fun0013_ip = 340; continue _fun0013 }
 305:
                        var4 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var2 = 66;
                        var2 = var15[var2];
                        var2 = var4.bind(var1)(var2);
                        var2 = var2.ChatScrollPosition;
                        var9 = var2.MIDDLE;
 340:
                        if(!(var12 != var11)) { _fun0013_ip = 358; continue _fun0013 }
 344:
                        var4 = var11.length;
                        var2 = 0;
                        if(!(!(var4 > var2))) { _fun0013_ip = 661; continue _fun0013 }
 358:
                        var2 = _closure3_slot0;
                        var2 = var2._loaded;
                        if(!var2) { _fun0013_ip = 397; continue _fun0013 }
 371:
                        var2 = _closure3_slot0;
                        var4 = var2._chatUpdatesQueue;
                        var2 = var4.hasUpdates;
                        var2 = var2.bind(var4)();
                        if(var2) { _fun0013_ip = 636; continue _fun0013 }
 397:
                        var2 = _closure3_slot0;
                        var2 = var2._loaded;
                        if(var2) { _fun0013_ip = 479; continue _fun0013 }
 410:
                        if(!(var12 != var11)) { _fun0013_ip = 479; continue _fun0013 }
 414:
                        var4 = var11.length;
                        var2 = 0;
                        if(!(var2 === var4)) { _fun0013_ip = 479; continue _fun0013 }
 425:
                        var4 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var2 = 66;
                        var2 = var15[var2];
                        var15 = var4.bind(var1)(var2);
                        var4 = var15.fadeIn;
                        var2 = _closure3_slot0;
                        var2 = var2._chatRef;
                        var2 = var2.current;
                        var2 = var4.bind(var15)(var2);
                        _fun0013_ip = 886; continue _fun0013;
 479:
                        if(!(var12 != var14)) { _fun0013_ip = 552; continue _fun0013 }
 483:
                        var4 = _closure3_slot0;
                        var2 = var4.shouldJumpToOriginalPost;
                        var2 = var2.bind(var4)();
                        if(var2) { _fun0013_ip = 552; continue _fun0013 }
 500:
                        var15 = _closure3_slot0;
                        var4 = var15.scrollToMessageId;
                        var2 = {};
                        var2['scrollToMessageId'] = var14;
                        var2['jumpTargetId'] = var13;
                        var2['jumpType'] = var18;
                        var2['scrollPosition'] = var9;
                        var2['minimizeScrolling'] = var17;
                        var2['isRescrolling'] = var16;
                        var2 = var4.bind(var15)(var2);
                        _fun0013_ip = 886; continue _fun0013;
 552:
                        if(!(var12 != var8)) { _fun0013_ip = 886; continue _fun0013 }
 559:
                        var4 = _closure3_slot0;
                        var2 = var4.findMessageIndex;
                        var16 = var2.bind(var4)(var8);
                        if(!(var12 != var16)) { _fun0013_ip = 886; continue _fun0013 }
 581:
                        var4 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var2 = 66;
                        var2 = var15[var2];
                        var15 = var4.bind(var1)(var2);
                        var4 = var15.focus;
                        var2 = _closure3_slot0;
                        var2 = var2._chatRef;
                        var2 = var2.current;
                        var2 = var4.bind(var15)(var2, var16);
                        _fun0013_ip = 886; continue _fun0013;
 636:
                        var2 = _closure3_slot0;
                        var4 = var2._chatUpdatesQueue;
                        var2 = var4.tryFlush;
                        var2 = var2.bind(var4)();
                        _fun0013_ip = 886; continue _fun0013;
 661:
                        var4 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var2 = 67;
                        var2 = var15[var2];
                        var4 = var4.bind(var1)(var2);
                        var2 = {};
                        var15 = _closure3_slot0;
                        var16 = var15.chatManager;
                        var15 = var16.getPreviousRows;
                        var15 = var15.bind(var16)();
                        var2['rows'] = var15;
                        var2['scrollToMessageId'] = var14;
                        var2['jumpTargetId'] = var13;
                        if(!(var12 == var6)) { _fun0013_ip = 746; continue _fun0013 }
 725:
                        var12 = _closure3_slot0;
                        var12 = var12.props;
                        var12 = var12.messages;
                        var6 = var12.jumpType;
 746:
                        var2['jumpType'] = var6;
                        var6 = _closure3_slot0;
                        var6 = var6._loaded;
                        var6 = !var6;
                        if(var6) { _fun0013_ip = 770; continue _fun0013 }
 767:
                        var6 = var10;
 770:
                        var2['shouldInitialScroll'] = var6;
                        var6 = _closure3_slot0;
                        var10 = var6.animated;
                        var2['animated'] = var10;
                        var2['scrollPosition'] = var9;
                        var2['focusTargetId'] = var8;
                        var8 = var4.bind(var1)(var2);
                        var2 = true;
                        var6['_loaded'] = var2;
                        var4 = var6.updateNativeRows;
                        var2 = {};
                        var2['rows'] = var11;
                        var9 = var6.props;
                        var9 = var9.messages;
                        var9 = var9.hasMoreAfter;
                        var2['hasMoreMessagesAfter'] = var9;
                        var10 = var6.isLoadingAtTop;
                        var9 = var6.hasMoreMessagesAfterForLastUpdate;
                        var9 = var10.bind(var6)(var11, var9);
                        var2['isLoadingAtTop'] = var9;
                        var2['scrollData'] = var8;
                        var2['HACK_iOSForceAnimations'] = var7;
                        var2 = var4.bind(var6)(var2);
 886:
                        var2 = _closure3_slot0;
                        var2 = var2._loaded;
                        if(!var2) { _fun0013_ip = 913; continue _fun0013 }
 899:
                        var4 = _closure3_slot0;
                        var4 = var4._loaded;
                        var2 = var4 !== var5;
 913:
                        if(!var2) { _fun0013_ip = 931; continue _fun0013 }
 916:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var2 = var3.isResourceChannel;
 931:
                        if(!var2) { _fun0013_ip = 960; continue _fun0013 }
 934:
                        var2 = global;
                        var4 = var2.setTimeout;
                        var3 = function() {
                            var2 = _closure3_slot0;
                            var1 = var2.scrollToTopMessage;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var2 = 100;
                        var2 = var4.bind(var1)(var3, var2);
 960:
                        return var1;
                    }
                };
                var1['updateRows'] = var4;
                var4 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                        var3 = arg1;
                        var10 = var3.scrollToMessageId;
                        var _closure4_slot0 = var10;
                        var9 = var3.jumpTargetId;
                        var1 = undefined;
                        if(!(var9 === var1)) { _fun0014_ip = 29; continue _fun0014 }
 27:
                        var9 = null;
 29:
                        var _closure4_slot1 = var9;
                        var11 = var3.jumpType;
                        if(!(var11 === var1)) { _fun0014_ip = 78; continue _fun0014 }
 43:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 65;
                        var4 = var6[var4];
                        var4 = var5.bind(var1)(var4);
                        var4 = var4.JumpTypes;
                        var11 = var4.ANIMATED;
 78:
                        var8 = var3.scrollPosition;
                        if(!(var8 === var1)) { _fun0014_ip = 123; continue _fun0014 }
 88:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 66;
                        var4 = var6[var4];
                        var4 = var5.bind(var1)(var4);
                        var4 = var4.ChatScrollPosition;
                        var8 = var4.TOP;
 123:
                        var5 = var3.minimizeScrolling;
                        if(!(var5 === var1)) { _fun0014_ip = 135; continue _fun0014 }
 133:
                        var5 = false;
 135:
                        var6 = var3.isRescrolling;
                        if(!(var6 === var1)) { _fun0014_ip = 147; continue _fun0014 }
 145:
                        var6 = false;
 147:
                        var _closure4_slot2 = var1;
                        var _closure4_slot3 = var1;
                        var4 = _closure3_slot0;
                        var4 = var4.props;
                        var4 = var4.useReducedMotion;
                        if(var4) { _fun0014_ip = 215; continue _fun0014 }
 176:
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var7 = 65;
                        var7 = var13[var7];
                        var7 = var12.bind(var1)(var7);
                        var7 = var7.JumpTypes;
                        var7 = var7.INSTANT;
                        var4 = var11 === var7;
 215:
                        var11 = !var4;
                        _closure4_slot2 = var11;
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var7 = 68;
                        var7 = var13[var7];
                        var12 = var12.bind(var1)(var7);
                        var7 = var12.isIOS;
                        var7 = var7.bind(var12)();
                        if(!var7) { _fun0014_ip = 325; continue _fun0014 }
 258:
                        if(var6) { _fun0014_ip = 325; continue _fun0014 }
 261:
                        var13 = _closure3_slot0;
                        var12 = var13.maybeRescrollToMessageId;
                        var7 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var6 = 65;
                        var6 = var14[var6];
                        var6 = var7.bind(var1)(var6);
                        var6 = var6.JumpTypes;
                        if(var11) { _fun0014_ip = 308; continue _fun0014 }
 300:
                        var7 = var6.INSTANT;
                        _fun0014_ip = 314; continue _fun0014;
 308:
                        var7 = var6.ANIMATED;
 314:
                        var6 = true;
                        var6 = var12.bind(var13)(var10, var6, var7);
                        _fun0014_ip = 447; continue _fun0014;
 325:
                        var7 = _closure3_slot0;
                        var6 = var7.findMessageIndex;
                        var7 = var6.bind(var7)(var10);
                        _closure4_slot3 = var7;
                        var6 = null;
                        if(!(var6 != var7)) { _fun0014_ip = 447; continue _fun0014 }
 350:
                        if(var5) { _fun0014_ip = 423; continue _fun0014 }
 353:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 66;
                        var4 = var6[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.scrollTo;
                        var3 = _closure3_slot0;
                        var3 = var3._chatRef;
                        var4 = var3.current;
                        var3 = {};
                        var3['animated'] = var11;
                        var9 = var9 === var10;
                        var3['highlight'] = var9;
                        var3['position'] = var8;
                        var3 = var5.bind(var6)(var4, var7, var3);
                        _fun0014_ip = 447; continue _fun0014;
 423:
                        var3 = global;
                        var4 = var3.setTimeout;
                        var3 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 66;
                            var2 = var2[var1];
                            var1 = undefined;
                            var6 = var3.bind(var1)(var2);
                            var5 = var6.scrollIntoView;
                            var2 = _closure3_slot0;
                            var2 = var2._chatRef;
                            var4 = var2.current;
                            var3 = _closure4_slot3;
                            var2 = {};
                            var8 = _closure4_slot2;
                            var2['animated'] = var8;
                            var8 = _closure4_slot1;
                            var7 = _closure4_slot0;
                            var7 = var8 === var7;
                            var2['highlight'] = var7;
                            var2 = var5.bind(var6)(var4, var3, var2);
                            return var1;
                        };
                        var2 = 5;
                        var2 = var4.bind(var1)(var3, var2);
 447:
                        return var1;
                    }
                };
                var1['scrollToMessageId'] = var4;
                var4 = function(arg1) {
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
                        var1 = 67;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.findMessageRowIndex;
                        var1 = _closure3_slot0;
                        var5 = var1.chatManager;
                        var1 = var5.getPreviousRows;
                        var1 = var1.bind(var5)();
                        var1 = var2.bind(var3)(var1, var4);
                        return var1;
                    }
                };
                var1['findMessageIndex'] = var4;
                var4 = function(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var14 = var1.isAtBottom;
                        var13 = var1.isNearBottom;
                        var12 = var1.isNearTop;
                        var11 = var1.dragging;
                        var10 = var1.decelerating;
                        var9 = var1.shouldShowJumpToPresent;
                        var8 = var1.isFirstMessageVisible;
                        var6 = var1.firstVisibleMessageIndex;
                        var17 = var1.firstVisibleMessagePercentVisible;
                        var5 = var1.lastVisibleMessageIndex;
                        var20 = var1.changesetUpdateId;
                        var16 = var1.lastVisibleMessagePercentVisible;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 69;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var2);
                        var4 = var7.getChangesetIdForChat;
                        var3 = _closure3_slot0;
                        var3 = var3._chatRef;
                        var3 = var3.current;
                        var19 = var4.bind(var7)(var3);
                        if(!(var20 !== var19)) { _fun0016_ip = 207; continue _fun0016 }
 138:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.isStaff;
                        if(!var3) { _fun0016_ip = 379; continue _fun0016 }
 159:
                        var18 = _closure1_slot76;
                        var7 = var18.log;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var23 = var3.channelId;
                        var24 = 'STAFF-ACK-LOG: Ignoring outdated scroll event.';
                        var25 = var18;
                        var22 = var20;
                        var21 = var19;
                        var3 = var25[var7](var24, var23, var22, var21, var20);
                        _fun0016_ip = 379; continue _fun0016;
 207:
                        var7 = _closure3_slot0;
                        var2 = var7.props;
                        var4 = var2.visibleMessagesWindowHandler;
                        var3 = var7.handleVisibleMessagesChange;
                        var2 = {};
                        var2['firstVisibleMessageRowIndex'] = var6;
                        var2['lastVisibleMessageRowIndex'] = var5;
                        var2['firstVisibleMessagePercentVisible'] = var17;
                        var2['lastVisibleMessagePercentVisible'] = var16;
                        var16 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var15 = 70;
                        var15 = var17[var15];
                        var15 = var16.bind(var1)(var15);
                        var15 = var15.QuestsVisibleMessagesChangedSource;
                        var15 = var15.SCROLL;
                        var2['source'] = var15;
                        var2 = var3.bind(var7)(var2);
                        var3 = var7.handleScroll;
                        var2 = {};
                        var2['isAtBottom'] = var14;
                        var2['isNearBottom'] = var13;
                        var2['isNearTop'] = var12;
                        var2['dragging'] = var11;
                        var2['decelerating'] = var10;
                        var2['shouldShowJumpToPresent'] = var9;
                        var2['isFirstMessageVisible'] = var8;
                        var2 = var3.bind(var7)(var2);
                        var3 = var4.handleScrollPosition;
                        var2 = {};
                        var7 = var7.chatManager;
                        var7 = var7._rows;
                        var2['rows'] = var7;
                        var2['firstVisibleMessageRowIndex'] = var6;
                        var2['lastVisibleMessageRowIndex'] = var5;
                        var2 = var3.bind(var4)(var2);
 379:
                        return var1;
                    }
                };
                var1['handleScrollPosition'] = var4;
                var4 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                        var3 = arg1;
                        var8 = var3.isAtBottom;
                        var7 = var3.isNearBottom;
                        var1 = undefined;
                        if(!(var7 === var1)) { _fun0017_ip = 25; continue _fun0017 }
 23:
                        var7 = false;
 25:
                        var6 = var3.isNearTop;
                        if(!(var6 === var1)) { _fun0017_ip = 37; continue _fun0017 }
 35:
                        var6 = false;
 37:
                        var5 = var3.dragging;
                        if(!(var5 === var1)) { _fun0017_ip = 49; continue _fun0017 }
 47:
                        var5 = false;
 49:
                        var4 = var3.decelerating;
                        if(!(var4 === var1)) { _fun0017_ip = 61; continue _fun0017 }
 59:
                        var4 = false;
 61:
                        var13 = var3.shouldShowJumpToPresent;
                        if(!(var13 === var1)) { _fun0017_ip = 73; continue _fun0017 }
 71:
                        var13 = false;
 73:
                        var _closure4_slot0 = var13;
                        var12 = var3.isFirstMessageVisible;
                        if(!(var12 === var1)) { _fun0017_ip = 89; continue _fun0017 }
 87:
                        var12 = false;
 89:
                        var _closure4_slot1 = var1;
                        var11 = _closure3_slot0;
                        var9 = var11.props;
                        var9 = var9.messages;
                        _closure4_slot1 = var9;
                        var10 = var11.handleScrollCallbacks;
                        var9 = {};
                        var9['isAtBottom'] = var8;
                        var9['isNearBottom'] = var7;
                        var9['isNearTop'] = var6;
                        var9['dragging'] = var5;
                        var9['decelerating'] = var4;
                        var9['shouldShowJumpToPresent'] = var13;
                        var9['isFirstMessageVisible'] = var12;
                        var9 = var10.bind(var11)(var9);
                        if(!var9) { _fun0017_ip = 241; continue _fun0017 }
 166:
                        var3 = _closure3_slot0;
                        var3['isAtBottom'] = var8;
                        var3['isNearBottom'] = var7;
                        var3['isNearTop'] = var6;
                        var3['dragging'] = var5;
                        var3['decelerating'] = var4;
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 71;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.batchUpdates;
                        var2 = function() {
                            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                                var5 = _closure1_slot19;
                                var1 = _closure3_slot0;
                                var2 = var1.props;
                                var4 = var2.channelId;
                                var1 = var1.props;
                                var3 = var1.screenIndex;
                                var2 = _closure4_slot0;
                                if(var2) { _fun0018_ip = 55; continue _fun0018 }
 45:
                                var1 = _closure4_slot1;
                                var2 = var1.hasMoreAfter;
 55:
                                var1 = undefined;
                                var2 = var5.bind(var1)(var4, var3, var2);
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
 241:
                        return var1;
                    }
                };
                var1['handleScroll'] = var4;
                var4 = function() {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                        var3 = _closure3_slot0;
                        var4 = var3.props;
                        var6 = var4.messages;
                        var _closure4_slot0 = var6;
                        var3 = var4.isMessagesReady;
                        var4 = var4.oldestUnreadMessageId;
                        var _closure4_slot1 = var4;
                        var10 = _closure3_slot0;
                        var9 = var10.updateRows;
                        if(var3) { _fun0019_ip = 62; continue _fun0019 }
 53:
                        var3 = var9.bind(var10)();
                        _fun0019_ip = 259; continue _fun0019;
 62:
                        var3 = {};
                        var5 = var6.jumpTargetId;
                        var3['scrollToMessageId'] = var5;
                        var5 = var6.jumpTargetId;
                        var3['jumpTargetId'] = var5;
                        var12 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var8 = 65;
                        var11 = var7[var8];
                        var7 = undefined;
                        var11 = var12.bind(var7)(var11);
                        var11 = var11.JumpTypes;
                        var11 = var11.INSTANT;
                        var3['jumpType'] = var11;
                        var11 = var6.focusTargetId;
                        var3['focusTargetId'] = var11;
                        var3 = var9.bind(var10)(var3);
                        var9 = var6.jumpTargetId;
                        var3 = null;
                        if(!(var3 == var9)) { _fun0019_ip = 186; continue _fun0019 }
 156:
                        if(!(var3 != var4)) { _fun0019_ip = 259; continue _fun0019 }
 160:
                        var3 = global;
                        var4 = var3.setTimeout;
                        var3 = function() {
                            var3 = _closure3_slot0;
                            var2 = var3.scrollToMessageId;
                            var1 = {};
                            var5 = _closure4_slot1;
                            var1['scrollToMessageId'] = var5;
                            var4 = _closure4_slot0;
                            var4 = var4.jumpTargetId;
                            var1['jumpTargetId'] = var4;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 65;
                            var5 = var5[var4];
                            var4 = undefined;
                            var4 = var6.bind(var4)(var5);
                            var4 = var4.JumpTypes;
                            var4 = var4.INSTANT;
                            var1['jumpType'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var2 = 50;
                        var2 = var4.bind(var7)(var3, var2);
                        _fun0019_ip = 259; continue _fun0019;
 186:
                        var4 = _closure3_slot0;
                        var3 = var4.scrollToMessageId;
                        var2 = {};
                        var9 = var6.jumpTargetId;
                        var2['scrollToMessageId'] = var9;
                        var6 = var6.jumpTargetId;
                        var2['jumpTargetId'] = var6;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var5 = var5[var8];
                        var5 = var6.bind(var7)(var5);
                        var5 = var5.JumpTypes;
                        var5 = var5.INSTANT;
                        var2['jumpType'] = var5;
                        var2 = var3.bind(var4)(var2);
 259:
                        var2 = _closure3_slot0;
                        var1 = var2.recordTimings;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['syncMessageDisplay'] = var4;
                var4 = function() {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                        var1 = _closure3_slot0;
                        var2 = true;
                        var1['animated'] = var2;
                        var1 = var1.props;
                        var6 = var1.channelId;
                        var7 = var1.messages;
                        var1 = var7.hasMoreBefore;
                        if(!var1) { _fun0020_ip = 49; continue _fun0020 }
 40:
                        var2 = var7.loadingMore;
                        var1 = !var2;
 49:
                        if(!var1) { _fun0020_ip = 131; continue _fun0020 }
 52:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 72;
                        var1 = var3[var1];
                        var5 = undefined;
                        var3 = var2.bind(var5)(var1);
                        var2 = var3.fetchMessages;
                        var1 = {};
                        var1['channelId'] = var6;
                        var6 = var7.first;
                        var6 = var6.bind(var7)();
                        var7 = null;
                        var7 = var7 == var6;
                        if(var7) { _fun0020_ip = 113; continue _fun0020 }
 108:
                        var5 = var6.id;
 113:
                        var1['before'] = var5;
                        var4 = _closure1_slot63;
                        var1['limit'] = var4;
                        var1 = var2.bind(var3)(var1);
 131:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['loadMoreBefore'] = var4;
                var4 = function() {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                        var1 = _closure3_slot0;
                        var2 = true;
                        var1['animated'] = var2;
                        var1 = var1.props;
                        var6 = var1.channelId;
                        var7 = var1.messages;
                        var1 = var7.hasMoreAfter;
                        if(!var1) { _fun0021_ip = 49; continue _fun0021 }
 40:
                        var2 = var7.loadingMore;
                        var1 = !var2;
 49:
                        if(!var1) { _fun0021_ip = 131; continue _fun0021 }
 52:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 72;
                        var1 = var3[var1];
                        var5 = undefined;
                        var3 = var2.bind(var5)(var1);
                        var2 = var3.fetchMessages;
                        var1 = {};
                        var1['channelId'] = var6;
                        var6 = var7.last;
                        var6 = var6.bind(var7)();
                        var7 = null;
                        var7 = var7 == var6;
                        if(var7) { _fun0021_ip = 113; continue _fun0021 }
 108:
                        var5 = var6.id;
 113:
                        var1['after'] = var5;
                        var4 = _closure1_slot63;
                        var1['limit'] = var4;
                        var1 = var2.bind(var3)(var1);
 131:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['loadMoreAfter'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapImage;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapImage'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapChannel;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapChannel'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleLongPressChannel;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressChannel'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapAttachmentLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapAttachmentLink'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleLongPressAttachmentLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressAttachmentLink'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapCall;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapCall'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapMention;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapMention'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapCommandMention;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapCommandMention'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleLongPressCommandMention;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressCommandMention'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapLink'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleLongPressLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressLink'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapReaction;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapReaction'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleLongPressReaction;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressReaction'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleOpenSticker;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleOpenSticker'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var4 = var1.bind(var2)();
                    var3 = var4.handleOpenProfile;
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 73;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.AVATAR;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1['handleTapAvatar'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapUsername;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapUsername'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var4 = var1.bind(var2)();
                    var3 = var4.handleOpenProfile;
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 73;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.USERNAME;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1['handleLongPressUsername'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapThreadEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapThreadEmbed'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapReply;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapReply'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapSummary;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSummary'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapSummaryJump;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSummaryJump'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleLongPressMessage;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressMessage'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleInitiateReply;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleInitiateReply'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleInitiateEdit;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleInitiateEdit'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleInitiateThread;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleInitiateThread'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapMessage;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapMessage'] = var4;
                var4 = function(arg1) {
                    var1 = _closure3_slot0;
                    var2 = var1.getHandlers;
                    var5 = var2.bind(var1)();
                    var4 = var5.handleTapSeparator;
                    var3 = var1.loadMoreBefore;
                    var2 = var1.loadMoreAfter;
                    var1 = arg1;
                    var1 = var4.bind(var5)(var1, var3, var2);
                    return var1;
                };
                var1['handleTapSeparator'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapCancelUploadItem;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapCancelUploadItem'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapInviteEmbedAccept;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapInviteEmbedAccept'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapInviteEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapInviteEmbed'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapJoinActivity;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapJoinActivity'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapGiftCodeEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapGiftCodeEmbed'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapGiftCodeAccept;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapGiftCodeAccept'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapReferralRedeem;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapReferralRedeem'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapEmoji;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapEmoji'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapTimestamp;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapTimestamp'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapInlineCode;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapInlineCode'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapRoleIcon;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapRoleIcon'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapGameIcon;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapGameIcon'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapSuppressNotificationsIcon;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSuppressNotificationsIcon'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapConnectionsRoleTag;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapConnectionsRoleTag'] = var4;
                var4 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var2 = var1.bind(var2)();
                    var1 = var2.handleTapTimeoutIcon;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1['handleTapTimeoutIcon'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapButtonActionComponent;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapButtonActionComponent'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapSelectActionComponent;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSelectActionComponent'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapWelcomeReply;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapWelcomeReply'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapInviteToSpeak;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapInviteToSpeak'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapAutoModerationActions;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapAutoModerationActions'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapAutoModerationFeedback;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapAutoModerationFeedback'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapFollowForumPost;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapFollowForumPost'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapShareForumPost;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapShareForumPost'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapReactionOverflow;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapReactionOverflow'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleCopyText;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleCopyText'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapOpTag;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapOpTag'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapTag;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapTag'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapRemix;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapRemix'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleMediaAttachmentPlaybackStarted;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleMediaAttachmentPlaybackStarted'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleMediaAttachmentPlaybackEnded;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleMediaAttachmentPlaybackEnded'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleVoiceMessagePlaybackFailed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handlerVoiceMessagePlaybackFailed'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapPostPreviewEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapPostPreviewEmbed'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapDismissMediaPostSharePrompt;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapDismissMediaPostSharePrompt'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapChannelPromptButton;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapChannelPromptButton'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapObscuredMediaLearnMore;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapObscuredMediaLearnMore'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.onTapObscuredMediaToggle;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapObscuredMediaToggle'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapSafetyPolicyNoticeEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSafetyPolicyNoticeEmbed'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapSafetySystemNotificationCta;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSafetySystemNotificationCta'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapPollAnswer;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapPollAnswer'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapPollSubmitVote;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapPollSubmitVote'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapPollAction;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapPollAction'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleLongPressPollImage;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressPollImage'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapCtaButton;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapCtaButton'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleMessageAccessibilityAction;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleMessageAccessibilityAction'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapForwardFooter;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapForwardFooter'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapInlineForward;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapInlineForward'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapClanTagChiplet;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapClanTagChiplet'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapContentInventoryEntryEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapContentInventoryEntryEmbed'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapSoundmoji;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSoundmoji'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapAppMessageEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapAppMessageEmbed'] = var4;
                var4 = function() {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var3 = var1.channel;
                        var1 = var1.canChat;
                        if(!var1) { _fun0022_ip = 55; continue _fun0022 }
 26:
                        var5 = _closure1_slot53;
                        var4 = var5.can;
                        var2 = _closure1_slot67;
                        var2 = var2.ADD_REACTIONS;
                        var1 = var4.bind(var5)(var2, var3);
 55:
                        if(var1) { _fun0022_ip = 68; continue _fun0022 }
 58:
                        var2 = var3.isPrivate;
                        var1 = var2.bind(var3)();
 68:
                        return var1;
                    }
                };
                var1['canAddNewReactions'] = var4;
                var4 = function(arg1) {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 74;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.getNativeSyntheticEventData;
                        var2 = arg1;
                        var2 = var3.bind(var4)(var2);
                        var6 = var2.messageId;
                        var3 = _closure3_slot0;
                        var7 = var3.animatingStickerMessageId;
                        var3 = global;
                        var5 = var3.Set;
                        var3 = new Array(1);
                        var3[0] = var6;
                        var4 = var5.prototype;
                        var4 = Object.create(var4, {constructor: {value: var5}});
                        var9 = var4;
                        var8 = var3;
                        var3 = new var9[var5](var8, var7);
                        var5 = var3 instanceof Object ? var3 : var4;
                        var4 = null;
                        if(!(var4 != var7)) { _fun0023_ip = 112; continue _fun0023 }
 102:
                        var3 = var5.add;
                        var3 = var3.bind(var5)(var7);
 112:
                        var3 = _closure3_slot0;
                        var4 = null;
                        if(!(var7 !== var6)) { _fun0023_ip = 125; continue _fun0023 }
 122:
                        var4 = var6;
 125:
                        var3['animatingStickerMessageId'] = var4;
                        var4 = _closure3_slot0;
                        var3 = var4.updateRows;
                        var2 = {};
                        var6 = true;
                        var2['forced'] = var6;
                        var2['updateMessageIds'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var1['handleLongPressSticker'] = var4;
                var4 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.description;
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 75;
                    var5 = var3[var1];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.openLazy;
                    var7 = _closure1_slot0;
                    var4 = 77;
                    var4 = var3[var4];
                    var7 = var7.bind(var1)(var4);
                    var4 = 76;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var7.bind(var1)(var4, var3);
                    var3 = {};
                    var3['description'] = var2;
                    var2 = true;
                    var3['showBackdrop'] = var2;
                    var2 = 'MediaViewerAltTextSheet';
                    var2 = var5.bind(var6)(var4, var2, var3);
                    return var1;
                };
                var1['handleTapShowAltText'] = var4;
                var4 = function() {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                        var5 = arguments[0];
                        var1 = undefined;
                        if(!(var5 === var1)) { _fun0024_ip = 11; continue _fun0024 }
 9:
                        var5 = true;
 11:
                        var2 = _closure3_slot0;
                        var3 = var2.props;
                        var6 = var3.useReducedMotion;
                        var4 = var2.handleScrollCallbacks;
                        var3 = {};
                        var7 = true;
                        var3['isAtBottom'] = var7;
                        var3 = var4.bind(var2)(var3);
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 66;
                        var3 = var7[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.scrollToBottom;
                        var2 = var2._chatRef;
                        var2 = var2.current;
                        if(!var5) { _fun0024_ip = 95; continue _fun0024 }
 92:
                        var5 = !var6;
 95:
                        var2 = var3.bind(var4)(var2, var5);
                        return var1;
                    }
                };
                var1['scrollToBottom'] = var4;
                var4 = function() {
                    _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                        var5 = arguments[0];
                        var1 = undefined;
                        if(!(var5 === var1)) { _fun0025_ip = 11; continue _fun0025 }
 9:
                        var5 = true;
 11:
                        var2 = _closure3_slot0;
                        var3 = var2.props;
                        var6 = var3.useReducedMotion;
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 66;
                        var3 = var7[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.scrollToTop;
                        var2 = var2._chatRef;
                        var2 = var2.current;
                        if(!var5) { _fun0025_ip = 75; continue _fun0025 }
 72:
                        var5 = !var6;
 75:
                        var2 = var3.bind(var4)(var2, var5);
                        return var1;
                    }
                };
                var1['scrollToTop'] = var4;
                var4 = function(arg1) {
                    _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                        var6 = arguments[1];
                        var1 = undefined;
                        if(!(var6 === var1)) { _fun0026_ip = 11; continue _fun0026 }
 9:
                        var6 = true;
 11:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 66;
                        var2 = var4[var2];
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.scrollToRelativeOffset;
                        var3 = _closure3_slot0;
                        var3 = var3._chatRef;
                        var3 = var3.current;
                        if(!var6) { _fun0026_ip = 79; continue _fun0026 }
 61:
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var2 = var2.useReducedMotion;
                        var6 = !var2;
 79:
                        var2 = arg1;
                        var2 = var4.bind(var5)(var3, var2, var6);
                        return var1;
                    }
                };
                var1['scrollToRelativeOffset'] = var4;
                var4 = function() {
                    _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                        var1 = _closure3_slot0;
                        var3 = var1.chatManager;
                        var1 = var3.getPreviousRows;
                        var1 = var1.bind(var3)();
                        var4 = var1.length;
                        var3 = 0;
                        if(!(var4 > var3)) { _fun0027_ip = 98; continue _fun0027 }
 34:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 66;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var3 = var4.scrollTo;
                        var2 = _closure3_slot0;
                        var2 = var2._chatRef;
                        var2 = var2.current;
                        var5 = var1.length;
                        var1 = 1;
                        var1 = var5 - var1;
                        var1 = var3.bind(var4)(var2, var1);
 98:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['scrollToTopMessage'] = var4;
                var4 = _closure1_slot4;
                var3 = function* () {
                    var1 = function* anon_0_() {
                        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0028_ip = 398; continue _fun0028 }
 12:
                            var2 = undefined;
                            var _closure5_slot0 = var2;
                            var5 = _closure3_slot0;
                            var5 = var5.props;
                            var9 = var5.channel;
                            var11 = var5.useReducedMotion;
                            _closure5_slot0 = var11;
                            var5 = var9.isForumPost;
                            var5 = var5.bind(var9)();
                            if(!var5) { _fun0028_ip = 395; continue _fun0028 }
 61:
                            var5 = _closure3_slot0;
                            var5 = var5.isNearTop;
                            if(var5) { _fun0028_ip = 395; continue _fun0028 }
 77:
                            var8 = _closure3_slot0;
                            var6 = var8.getMessage;
                            var10 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var13 = 64;
                            var5 = var5[var13];
                            var12 = var10.bind(var2)(var5);
                            var10 = var12.castChannelIdAsMessageId;
                            var5 = var9.id;
                            var5 = var10.bind(var12)(var5);
                            var5 = var6.bind(var8)(var5);
                            var6 = null;
                            if(!(var6 != var5)) { _fun0028_ip = 283; continue _fun0028 }
 140:
                            var10 = _closure3_slot0;
                            var8 = var10.findMessageIndex;
                            var12 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var5 = var5[var13];
                            var13 = var12.bind(var2)(var5);
                            var12 = var13.castChannelIdAsMessageId;
                            var5 = var9.id;
                            var5 = var12.bind(var13)(var5);
                            var5 = var8.bind(var10)(var5);
                            if(!(var6 != var5)) { _fun0028_ip = 280; continue _fun0028 }
 192:
                            var8 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var6 = 66;
                            var6 = var10[var6];
                            var10 = var8.bind(var2)(var6);
                            var8 = var10.scrollTo;
                            var3 = _closure3_slot0;
                            var3 = var3._chatRef;
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
                                var3 = _closure3_slot0;
                                var2 = var3.scrollToTop;
                                var1 = _closure5_slot0;
                                var1 = !var1;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var3 = var6.bind(var2)(var3, var5);
                            _fun0028_ip = 395; continue _fun0028;
 280:
                            return var2;
 283:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 72;
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
                            var7 = _closure1_slot63;
                            var3['limit'] = var7;
                            var3 = var5.bind(var6)(var3);
                            SaveGenerator(address=360);
 358:
                            return var3;
 360:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(var5) { _fun0028_ip = 392; continue _fun0028 }
 366:
                            var5 = global;
                            var6 = var5.setTimeout;
                            var5 = function() {
                                var3 = _closure3_slot0;
                                var2 = var3.scrollToTop;
                                var1 = _closure5_slot0;
                                var1 = !var1;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var4 = 50;
                            var4 = var6.bind(var2)(var5, var4);
                            _fun0028_ip = 395; continue _fun0028;
 392:
                            return var3;
 395:
                            return var2;
 398:
                            return var1;
                        }
                    };
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var1['handleTapNavBar'] = var3;
                var3 = function() {
                    _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var2 = var1.chatInputRef;
                        var5 = var1.keyboardType;
                        var6 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 68;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var6.bind(var1)(var3);
                        var3 = var6.isIOS;
                        var3 = var3.bind(var6)();
                        if(!var3) { _fun0029_ip = 98; continue _fun0029 }
 62:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 78;
                        var4 = var7[var4];
                        var4 = var6.bind(var1)(var4);
                        var4 = var4.KeyboardTypes;
                        var4 = var4.SYSTEM;
                        var3 = var5 !== var4;
 98:
                        if(!var3) { _fun0029_ip = 122; continue _fun0029 }
 101:
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0029_ip = 122; continue _fun0029 }
 112:
                        var2 = var3.closeCustomKeyboard;
                        var2 = var2.bind(var3)();
 122:
                        return var1;
                    }
                };
                var1['handleTapTableView'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var7 = var1.firstVisibleMessageIndex;
                    var6 = var1.lastVisibleMessageIndex;
                    var5 = var1.firstVisibleMessagePercentVisible;
                    var1 = var1.lastVisibleMessagePercentVisible;
                    var4 = _closure3_slot0;
                    var3 = var4.handleVisibleMessagesChange;
                    var2 = {};
                    var2['firstVisibleMessageRowIndex'] = var7;
                    var2['lastVisibleMessageRowIndex'] = var6;
                    var2['firstVisibleMessagePercentVisible'] = var5;
                    var2['lastVisibleMessagePercentVisible'] = var1;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 70;
                    var5 = var5[var1];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.QuestsVisibleMessagesChangedSource;
                    var5 = var5.FIRST_LAYOUT;
                    var2['source'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleFirstLayout'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var7 = var1.firstVisibleMessageIndex;
                    var6 = var1.lastVisibleMessageIndex;
                    var5 = var1.firstVisibleMessagePercentVisible;
                    var1 = var1.lastVisibleMessagePercentVisible;
                    var4 = _closure3_slot0;
                    var3 = var4.handleVisibleMessagesChange;
                    var2 = {};
                    var2['firstVisibleMessageRowIndex'] = var7;
                    var2['lastVisibleMessageRowIndex'] = var6;
                    var2['firstVisibleMessagePercentVisible'] = var5;
                    var2['lastVisibleMessagePercentVisible'] = var1;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 70;
                    var5 = var5[var1];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.QuestsVisibleMessagesChangedSource;
                    var5 = var5.VISIBILITY_CHANGED;
                    var2['source'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleMessageVisibilityChanged'] = var3;
                var3 = function(arg1) {
                    _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                        var1 = arg1;
                        var7 = var1.nativeEvent;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 79;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.track;
                        var2 = _closure1_slot59;
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
                        if(!var11) { _fun0030_ip = 154; continue _fun0030 }
 151:
                        var9 = var10;
 154:
                        var2['mime_type'] = var9;
                        var2['file_size'] = var8;
                        var7 = var7.fileDurationSec;
                        var2['file_duration_sec'] = var7;
                        var7 = _closure1_slot52;
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
                var1['handleMediaPlayFinishedAnalytics'] = var3;
                var3 = function() {
                    _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                        var2 = _closure3_slot0;
                        var3 = var2.props;
                        var2 = var3.messages;
                        var5 = var3.channel;
                        var7 = var2.jumpReturnTargetId;
                        var3 = null;
                        if(!(var3 != var7)) { _fun0031_ip = 95; continue _fun0031 }
 35:
                        var6 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 72;
                        var4 = var4[var3];
                        var3 = undefined;
                        var6 = var6.bind(var3)(var4);
                        var4 = var6.jumpToMessage;
                        var3 = {};
                        var8 = var5.id;
                        var3['channelId'] = var8;
                        var3['messageId'] = var7;
                        var7 = true;
                        var3['flash'] = var7;
                        var3 = var4.bind(var6)(var3);
                        _fun0031_ip = 198; continue _fun0031;
 95:
                        var3 = var2.loadingMore;
                        if(var3) { _fun0031_ip = 198; continue _fun0031 }
 104:
                        var2 = var2.hasMoreAfter;
                        if(var2) { _fun0031_ip = 129; continue _fun0031 }
 113:
                        var2 = _closure3_slot0;
                        var1 = var2.scrollToBottom;
                        var1 = var1.bind(var2)();
                        _fun0031_ip = 198; continue _fun0031;
 129:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 72;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.fetchMessages;
                        var1 = {};
                        var5 = var5.id;
                        var1['channelId'] = var5;
                        var4 = _closure1_slot63;
                        var1['limit'] = var4;
                        var4 = {};
                        var5 = true;
                        var4['present'] = var5;
                        var1['jump'] = var4;
                        var1 = var2.bind(var3)(var1);
 198:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['jumpToPresent'] = var3;
                var3 = function() {
                    _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 80;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.getCurrentConfig;
                        var3 = {};
                        var6 = 'Messages';
                        var3['location'] = var6;
                        var3 = var4.bind(var5)(var3);
                        var5 = var3.enabled;
                        var7 = _closure3_slot0;
                        var3 = var7.props;
                        if(var5) { _fun0032_ip = 411; continue _fun0032 }
 69:
                        var10 = var3.useReducedMotion;
                        var6 = var3.oldestUnreadMessageId;
                        var8 = var7.chatManager;
                        var5 = var8.getPreviousRows;
                        var8 = var5.bind(var8)();
                        var5 = var7.findMessageIndex;
                        var5 = var5.bind(var7)(var6);
                        var6 = null;
                        if(!(var6 != var5)) { _fun0032_ip = 511; continue _fun0032 }
 117:
                        var11 = var5 + 1;
                        var5 = var8.length;
                        var9 = var11;
                        if(!(var11 < var5)) { _fun0032_ip = 260; continue _fun0032 }
 135:
                        var5 = var8[var11];
                        var6 = var5.type;
                        var5 = _closure1_slot69;
                        var5 = var5.SEPARATOR;
                        var9 = var11;
                        if(!(var6 === var5)) { _fun0032_ip = 260; continue _fun0032 }
 161:
                        var5 = var8[var11];
                        var6 = var5.id;
                        var5 = _closure1_slot70;
                        var5 = var5.UNREAD;
                        var7 = var11;
                        var9 = var7;
                        if(!(var6 !== var5)) { _fun0032_ip = 260; continue _fun0032 }
 190:
                        var11 = var7 + 1;
                        var5 = var8.length;
                        var9 = var11;
                        if(!(var11 < var5)) { _fun0032_ip = 260; continue _fun0032 }
 205:
                        var5 = var8[var11];
                        var6 = var5.type;
                        var5 = _closure1_slot69;
                        var5 = var5.SEPARATOR;
                        var9 = var11;
                        if(!(var6 === var5)) { _fun0032_ip = 260; continue _fun0032 }
 231:
                        var5 = var8[var11];
                        var6 = var5.id;
                        var5 = _closure1_slot70;
                        var5 = var5.UNREAD;
                        var7 = var11;
                        var9 = var7;
                        if(var6 !== var5) { _fun0032_ip = 190; continue _fun0032 }
 260:
                        var6 = _closure3_slot0;
                        var5 = var6.shouldJumpToOriginalPost;
                        var5 = var5.bind(var6)();
                        if(var5) { _fun0032_ip = 395; continue _fun0032 }
 277:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 66;
                        var5 = var7[var5];
                        var8 = var6.bind(var1)(var5);
                        var7 = var8.scrollTo;
                        var5 = _closure3_slot0;
                        var5 = var5._chatRef;
                        var6 = var5.current;
                        var5 = {};
                        if(var10) { _fun0032_ip = 380; continue _fun0032 }
 323:
                        var11 = _closure3_slot0;
                        var11 = var11.props;
                        var11 = var11.messages;
                        var12 = var11.jumpType;
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var11 = 65;
                        var11 = var14[var11];
                        var11 = var13.bind(var1)(var11);
                        var11 = var11.JumpTypes;
                        var11 = var11.INSTANT;
                        var10 = var12 === var11;
 380:
                        var10 = !var10;
                        var5['animated'] = var10;
                        var5 = var7.bind(var8)(var6, var9, var5);
 395:
                        var5 = _closure3_slot0;
                        var4 = var5.loadMoreBefore;
                        var4 = var4.bind(var5)();
                        _fun0032_ip = 511; continue _fun0032;
 411:
                        var6 = var3.channel;
                        var5 = _closure1_slot55;
                        var4 = var5.ackMessageId;
                        var3 = var6.id;
                        var5 = var4.bind(var5)(var3);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 72;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.jumpToMessage;
                        var2 = {};
                        var7 = var6.id;
                        var2['channelId'] = var7;
                        var7 = null;
                        if(!(var7 == var5)) { _fun0032_ip = 484; continue _fun0032 }
 479:
                        var5 = var6.id;
 484:
                        var2['messageId'] = var5;
                        var5 = 1;
                        var2['offset'] = var5;
                        var5 = 'Mark As Read';
                        var2['context'] = var5;
                        var2 = var3.bind(var4)(var2);
 511:
                        return var1;
                    }
                };
                var1['scrollToNewMessages'] = var3;
                var3 = function() {
                    var1 = _closure3_slot0;
                    var1 = var1._chatRef;
                    return var1;
                };
                var1['getChatRef'] = var3;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var7 = false;
                    var2['animated'] = var7;
                    var2['hasHandledScroll'] = var7;
                    var2['isNearBottom'] = var7;
                    var2['isAtBottom'] = var7;
                    var2['isNearTop'] = var7;
                    var2['decelerating'] = var7;
                    var2['dragging'] = var7;
                    var2['hasMoreMessagesAfterForLastUpdate'] = var7;
                    var1 = new Array(0);
                    var2['pendingUpdatesQueue'] = var1;
                    var2['_loaded'] = var7;
                    var1 = null;
                    var2['animatingStickerMessageId'] = var1;
                    var3 = var2.chatManager;
                    var1 = var3.clear;
                    var1 = var1.bind(var3)();
                    var6 = _closure1_slot19;
                    var1 = var2.props;
                    var5 = var1.channelId;
                    var1 = var2.props;
                    var4 = var1.screenIndex;
                    var1 = undefined;
                    var4 = var6.bind(var1)(var5, var4, var7);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 66;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.clearRows;
                    var2 = var2._chatRef;
                    var2 = var2.current;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['clearRows'] = var3;
                var2 = function(arg1) {
                    _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.forced;
                        var _closure4_slot0 = var3;
                        var3 = var1.updateMessageIds;
                        var _closure4_slot1 = var3;
                        var1 = var1.ignoreEmbedDescriptionCache;
                        var _closure4_slot2 = var1;
                        var1 = _closure3_slot0;
                        var4 = var1.props;
                        var1 = var4.channel;
                        var _closure4_slot3 = var1;
                        var5 = var4.messages;
                        var _closure4_slot4 = var5;
                        var3 = var4.isMessagesReady;
                        var6 = var4.uploads;
                        var _closure4_slot5 = var6;
                        var6 = var4.roleStyle;
                        var _closure4_slot6 = var6;
                        var6 = var4.oldestUnreadMessageId;
                        var _closure4_slot7 = var6;
                        var6 = var4.replyingMessageId;
                        var _closure4_slot8 = var6;
                        var6 = var4.inlineAttachmentMedia;
                        var _closure4_slot9 = var6;
                        var6 = var4.inlineEmbedMedia;
                        var _closure4_slot10 = var6;
                        var6 = var4.renderEmbeds;
                        var _closure4_slot11 = var6;
                        var6 = var4.renderReactions;
                        var _closure4_slot12 = var6;
                        var6 = var4.animateEmoji;
                        var _closure4_slot13 = var6;
                        var6 = var4.gifAutoPlay;
                        var _closure4_slot14 = var6;
                        var6 = var4.currentUserId;
                        var _closure4_slot15 = var6;
                        var6 = var4.renderCommunicationDisabled;
                        var _closure4_slot16 = var6;
                        var6 = var4.selectedSummary;
                        var _closure4_slot17 = var6;
                        var6 = var4.enableSwipeActions;
                        var _closure4_slot18 = var6;
                        var6 = var4.isResourceChannel;
                        var _closure4_slot19 = var6;
                        var6 = var4.shouldObscureSpoiler;
                        var _closure4_slot20 = var6;
                        var6 = var4.shouldDisableInteractiveComponents;
                        var _closure4_slot21 = var6;
                        var6 = var4.shouldFilterKeywords;
                        var _closure4_slot22 = var6;
                        var6 = var4.fromICYMITab;
                        var _closure4_slot23 = var6;
                        var4 = var4.unloadableContentEntryMessageIds;
                        var _closure4_slot24 = var4;
                        var4 = null;
                        var6 = var4 != var1;
                        var1 = null;
                        if(!var6) { _fun0033_ip = 346; continue _fun0033 }
 283:
                        var5 = var4 != var5;
                        var1 = null;
                        if(!var5) { _fun0033_ip = 346; continue _fun0033 }
 292:
                        var1 = null;
                        if(!var3) { _fun0033_ip = 346; continue _fun0033 }
 297:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 81;
                        var4 = var4[var3];
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        var4 = var3.firstRowGenerator;
                        var3 = var4.measure;
                        var2 = function() {
                            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
                                var7 = _closure3_slot0;
                                var3 = var7.chatManager;
                                var2 = var3.setup;
                                var8 = _closure4_slot4;
                                var2 = var2.bind(var3)(var8);
                                var4 = var7.rowGenerator;
                                var3 = var4.setOptions;
                                var2 = {};
                                var5 = _closure4_slot9;
                                var2['inlineAttachmentMedia'] = var5;
                                var5 = _closure4_slot10;
                                var2['inlineEmbedMedia'] = var5;
                                var5 = _closure4_slot11;
                                var2['renderEmbeds'] = var5;
                                var5 = _closure4_slot12;
                                var2['renderReactions'] = var5;
                                var5 = _closure4_slot13;
                                var2['animateEmoji'] = var5;
                                var5 = var7.animatingStickerMessageId;
                                var2['animatingStickerMessageId'] = var5;
                                var5 = var7.props;
                                var5 = var5.containerWidth;
                                var2['constrainedWidth'] = var5;
                                var5 = _closure4_slot14;
                                var2['gifAutoPlay'] = var5;
                                var5 = _closure4_slot16;
                                var2['renderCommunicationDisabled'] = var5;
                                var5 = _closure4_slot2;
                                var2['ignoreEmbedDescriptionCache'] = var5;
                                var5 = _closure4_slot18;
                                var2['enableSwipeActions'] = var5;
                                var5 = _closure4_slot20;
                                var2['shouldObscureSpoiler'] = var5;
                                var5 = _closure4_slot21;
                                var2['shouldDisableInteractiveComponents'] = var5;
                                var5 = _closure4_slot22;
                                var2['shouldFilterKeywords'] = var5;
                                var2 = var3.bind(var4)(var2);
                                var3 = _closure1_slot78;
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var2 = 82;
                                var2 = var5[var2];
                                var5 = undefined;
                                var4 = var4.bind(var5)(var2);
                                var2 = {};
                                var9 = _closure4_slot3;
                                var2['channel'] = var9;
                                var2['messages'] = var8;
                                var8 = _closure4_slot5;
                                var2['uploads'] = var8;
                                var8 = _closure4_slot7;
                                var2['oldestUnreadMessageId'] = var8;
                                var8 = _closure4_slot8;
                                var2['replyingMessageId'] = var8;
                                var8 = _closure4_slot15;
                                var2['currentUserId'] = var8;
                                var8 = var7.canAddNewReactions;
                                var8 = var8.bind(var7)();
                                var2['canAddNewReactions'] = var8;
                                var8 = _closure4_slot17;
                                var2['selectedSummary'] = var8;
                                var7 = var7.chatManager;
                                var2['chatManager'] = var7;
                                var7 = _closure4_slot6;
                                var2['roleStyle'] = var7;
                                var7 = _closure4_slot0;
                                var2['forced'] = var7;
                                var7 = _closure4_slot1;
                                var2['updateMessageIds'] = var7;
                                var7 = _closure4_slot19;
                                var2['isResourceChannel'] = var7;
                                var7 = _closure4_slot23;
                                var2['fromICYMITab'] = var7;
                                var6 = _closure4_slot24;
                                var2['unloadableContentEntryMessageIds'] = var6;
                                var2 = var4.bind(var5)(var2);
                                var4 = var3.bind(var5)(var2);
                                var3 = var4.bind(var5)();
                                var2 = var3.done;
                                if(var2) { _fun0034_ip = 434; continue _fun0034 }
 376:
                                var8 = var3.value;
                                var2 = _closure3_slot0;
                                var7 = var2.rowGenerator;
                                var6 = var7.generate;
                                var7 = var6.bind(var7)(var8);
                                var6 = var2.chatManager;
                                var2 = var6.createRow;
                                var2 = var2.bind(var6)(var7);
                                var6 = var4.bind(var5)();
                                var2 = var6.done;
                                var3 = var6;
                                if(!var2) { _fun0034_ip = 376; continue _fun0034 }
 434:
                                var1 = _closure3_slot0;
                                var2 = var1.chatManager;
                                var1 = var2.createChangeset;
                                var1 = var1.bind(var2)();
                                return var1;
                            }
                        };
                        var1 = var3.bind(var4)(var2);
 346:
                        return var1;
                    }
                };
                var1['createRows'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot9;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot6;
        var5 = {};
        var1 = 'getHandlers';
        var5['key'] = var1;
        var1 = function value() {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
                var1 = this;
                var _closure3_slot0 = var1;
                var4 = var1.handlers;
                var3 = null;
                if(!(var3 == var4)) { _fun0035_ip = 85; continue _fun0035 }
 21:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 83;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var4 = var3.MessagesHandlers;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var6 = function() {
                    var1 = {};
                    var2 = _closure3_slot0;
                    var3 = var2.getMessage;
                    var1['getMessage'] = var3;
                    var3 = var2.props;
                    var3 = var3.chatInputRef;
                    var1['chatInputRef'] = var3;
                    var3 = var2.props;
                    var3 = var3.channelId;
                    var1['selectedChannelId'] = var3;
                    var3 = var2.props;
                    var3 = var3.messages;
                    var3 = var3.revealedMessageId;
                    var1['revealedMessageId'] = var3;
                    var3 = var2.props;
                    var3 = var3.uploads;
                    var1['uploads'] = var3;
                    var2 = var2.props;
                    var2 = var2.paymentsBlocked;
                    var1['paymentsBlocked'] = var2;
                    return var1;
                };
                var7 = var3;
                var2 = new var7[var4](var6, var5);
                var2 = var2 instanceof Object ? var2 : var3;
                var1['handlers'] = var2;
 85:
                var1 = var1.handlers;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(9);
        var1[0] = var5;
        var5 = {};
        var7 = 'componentDidMount';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = var2.syncMessageDisplay;
            var1 = var1.bind(var2)();
            var1 = var2.recordTimings;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'recordTimings';
        var5['key'] = var7;
        var7 = function value() {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
                var2 = this;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 81;
                var3 = var3[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var3);
                var6 = var7.recordMessageRender;
                var3 = var2.props;
                var5 = var3.channelId;
                var3 = var2.props;
                var8 = var3.messages;
                var4 = var8.map;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var4 = var4.bind(var8)(var3);
                var3 = var2.props;
                var3 = var3.messages;
                var3 = var3.hasFetched;
                if(var3) { _fun0036_ip = 137; continue _fun0036 }
 94:
                var8 = var2.props;
                var8 = var8.messages;
                var8 = var8.ready;
                if(!var8) { _fun0036_ip = 134; continue _fun0036 }
 114:
                var9 = var2.props;
                var9 = var9.messages;
                var9 = var9.cached;
                var8 = !var9;
 134:
                var3 = var8;
 137:
                var2 = var2.props;
                var2 = var2.messages;
                var10 = var2.hasMoreAfter;
                var14 = var7;
                var13 = var5;
                var12 = var4;
                var11 = var3;
                var2 = var14[var6](var13, var12, var11, var10, var9);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'componentWillUnmount';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var3 = var1._chatUpdatesQueue;
            var2 = var3.cleanup;
            var2 = var2.bind(var3)();
            var2 = var1.clearRows;
            var2 = var2.bind(var1)();
            var5 = _closure1_slot19;
            var2 = var1.props;
            var4 = var2.channelId;
            var1 = var1.props;
            var3 = var1.screenIndex;
            var1 = undefined;
            var2 = false;
            var2 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'shouldComponentUpdate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
                var3 = arg1;
                var4 = this;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var8 = 84;
                var1 = var1[var8];
                var6 = undefined;
                var7 = var2.bind(var6)(var1);
                var2 = var4.state;
                var1 = arg2;
                var1 = var7.bind(var6)(var2, var1);
                var1 = !var1;
                if(var1) { _fun0037_ip = 156; continue _fun0037 }
 51:
                var7 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var8];
                var10 = var7.bind(var6)(var2);
                var14 = var4.props;
                var7 = {};
                var2 = false;
                var7['shouldWarnLargeObjects'] = var2;
                var12 = ['interactionStates'];
                var15 = undefined;
                var13 = var3;
                var11 = var7;
                var2 = var15[var10](var14, var13, var12, var11, var10);
                var2 = !var2;
                if(var2) { _fun0037_ip = 153; continue _fun0037 }
 110:
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var5 = var7.bind(var6)(var5);
                var4 = var4.props;
                var4 = var4.interactionStates;
                var3 = var3.interactionStates;
                var3 = var5.bind(var6)(var4, var3);
                var2 = !var3;
 153:
                var1 = var2;
 156:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'componentDidUpdate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
                var3 = arg1;
                var2 = this;
                var _closure3_slot0 = var2;
                var _closure3_slot1 = var3;
                var4 = var2.props;
                var4 = var4.currentUserId;
                var7 = null;
                if(!(var7 != var4)) { _fun0038_ip = 3208; continue _fun0038 }
 36:
                var4 = var2.props;
                var4 = var4.messages;
                var5 = var3.messages;
                var8 = var3.channelId;
                var6 = var2.props;
                var6 = var6.channelId;
                if(!(var8 !== var6)) { _fun0038_ip = 128; continue _fun0038 }
 72:
                var6 = var2.clearRows;
                var6 = var6.bind(var2)();
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 85;
                var8 = var8[var6];
                var6 = undefined;
                var9 = var9.bind(var6)(var8);
                var8 = var9.clearChannelDimensions;
                var6 = var2.props;
                var6 = var6.channelId;
                var6 = var8.bind(var9)(var6);
 128:
                var6 = var3.isMessagesAckable;
                var6 = !var6;
                if(!var6) { _fun0038_ip = 151; continue _fun0038 }
 140:
                var8 = var2.props;
                var6 = var8.isMessagesAckable;
 151:
                if(!var6) { _fun0038_ip = 162; continue _fun0038 }
 154:
                var6 = false;
                var2['hasHandledScroll'] = var6;
 162:
                var6 = var2.shouldJumpToOriginalPost;
                var6 = var6.bind(var2)();
                if(!var6) { _fun0038_ip = 224; continue _fun0038 }
 175:
                var8 = var2.scrollToTop;
                var6 = false;
                var6 = var8.bind(var2)(var6);
                var5 = var5.jumpSequenceId;
                var4 = var4.jumpSequenceId;
                if(!(var5 === var4)) { _fun0038_ip = 224; continue _fun0038 }
 204:
                var5 = var2.setState;
                var4 = {};
                var6 = true;
                var4['hasJumpedToOriginalPost'] = var6;
                var4 = var5.bind(var2)(var4);
 224:
                var4 = var2.props;
                var6 = var4.isMessagesReady;
                if(!var6) { _fun0038_ip = 252; continue _fun0038 }
 238:
                var4 = var2.props;
                var4 = var4.isMessagesCached;
                var6 = !var4;
 252:
                if(!var6) { _fun0038_ip = 261; continue _fun0038 }
 255:
                var6 = var3.isMessagesCached;
 261:
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 86;
                var4 = var8[var4];
                var16 = undefined;
                var8 = var5.bind(var16)(var4);
                var5 = var2.props;
                var4 = {};
                var9 = var2.isAtBottom;
                var4['isAtBottom'] = var9;
                var10 = var2.chatManager;
                var9 = var10.getPreviousMessages;
                var9 = var9.bind(var10)();
                var9 = var7 != var9;
                var4['hasPreviousMessages'] = var9;
                var5 = var8.bind(var16)(var5, var4, var3);
                var11 = var5.scrollToMessageId;
                var10 = var5.jumpTargetId;
                var9 = var5.jumpType;
                var4 = var5.minimizeScrolling;
                var8 = var5.focusTargetId;
                var5 = var5.shouldInitialScroll;
                var13 = var3.inlineAttachmentMedia;
                var12 = var2.props;
                var12 = var12.inlineAttachmentMedia;
                var13 = var13 !== var12;
                if(var13) { _fun0038_ip = 417; continue _fun0038 }
 396:
                var15 = var3.inlineEmbedMedia;
                var12 = var2.props;
                var12 = var12.inlineEmbedMedia;
                var13 = var15 !== var12;
 417:
                if(var13) { _fun0038_ip = 441; continue _fun0038 }
 420:
                var15 = var3.renderEmbeds;
                var12 = var2.props;
                var12 = var12.renderEmbeds;
                var13 = var15 !== var12;
 441:
                if(var13) { _fun0038_ip = 465; continue _fun0038 }
 444:
                var15 = var3.renderReactions;
                var12 = var2.props;
                var12 = var12.renderReactions;
                var13 = var15 !== var12;
 465:
                if(var13) { _fun0038_ip = 489; continue _fun0038 }
 468:
                var15 = var3.animateEmoji;
                var12 = var2.props;
                var12 = var12.animateEmoji;
                var13 = var15 !== var12;
 489:
                if(var13) { _fun0038_ip = 513; continue _fun0038 }
 492:
                var15 = var3.animateStickers;
                var12 = var2.props;
                var12 = var12.animateStickers;
                var13 = var15 !== var12;
 513:
                if(var13) { _fun0038_ip = 537; continue _fun0038 }
 516:
                var15 = var3.gifAutoPlay;
                var12 = var2.props;
                var12 = var12.gifAutoPlay;
                var13 = var15 !== var12;
 537:
                if(var13) { _fun0038_ip = 561; continue _fun0038 }
 540:
                var15 = var3.containerWidth;
                var12 = var2.props;
                var12 = var12.containerWidth;
                var13 = var15 !== var12;
 561:
                if(var13) { _fun0038_ip = 585; continue _fun0038 }
 564:
                var15 = var3.guildSystemChannelFlags;
                var12 = var2.props;
                var12 = var12.guildSystemChannelFlags;
                var13 = var15 !== var12;
 585:
                if(var13) { _fun0038_ip = 609; continue _fun0038 }
 588:
                var15 = var3.userSettingsLocale;
                var12 = var2.props;
                var12 = var12.userSettingsLocale;
                var13 = var15 !== var12;
 609:
                if(var13) { _fun0038_ip = 633; continue _fun0038 }
 612:
                var15 = var3.roleStyle;
                var12 = var2.props;
                var12 = var12.roleStyle;
                var13 = var15 !== var12;
 633:
                if(var13) { _fun0038_ip = 657; continue _fun0038 }
 636:
                var15 = var3.canSendMessages;
                var12 = var2.props;
                var12 = var12.canSendMessages;
                var13 = var15 !== var12;
 657:
                if(var13) { _fun0038_ip = 681; continue _fun0038 }
 660:
                var15 = var3.showPushFeedback;
                var12 = var2.props;
                var12 = var12.showPushFeedback;
                var13 = var15 !== var12;
 681:
                if(var13) { _fun0038_ip = 705; continue _fun0038 }
 684:
                var15 = var3.selectedSummary;
                var12 = var2.props;
                var12 = var12.selectedSummary;
                var13 = var15 !== var12;
 705:
                if(var13) { _fun0038_ip = 729; continue _fun0038 }
 708:
                var15 = var3.shouldObscureSpoiler;
                var12 = var2.props;
                var12 = var12.shouldObscureSpoiler;
                var13 = var15 !== var12;
 729:
                if(var13) { _fun0038_ip = 753; continue _fun0038 }
 732:
                var15 = var3.shouldFilterKeywords;
                var12 = var2.props;
                var12 = var12.shouldFilterKeywords;
                var13 = var15 !== var12;
 753:
                if(var13) { _fun0038_ip = 777; continue _fun0038 }
 756:
                var15 = var3.explicitMediaFalsePositiveInfo;
                var12 = var2.props;
                var12 = var12.explicitMediaFalsePositiveInfo;
                var13 = var15 !== var12;
 777:
                if(var13) { _fun0038_ip = 801; continue _fun0038 }
 780:
                var15 = var3.isStaff;
                var12 = var2.props;
                var12 = var12.isStaff;
                var13 = var15 !== var12;
 801:
                if(var13) { _fun0038_ip = 825; continue _fun0038 }
 804:
                var15 = var3.isAgeVerified;
                var12 = var2.props;
                var12 = var12.isAgeVerified;
                var13 = var15 !== var12;
 825:
                if(var13) { _fun0038_ip = 869; continue _fun0038 }
 828:
                var12 = arg2;
                var15 = var12.shouldForceRender;
                var12 = var2.state;
                var12 = var12.shouldForceRender;
                var12 = var15 !== var12;
                if(!var12) { _fun0038_ip = 866; continue _fun0038 }
 855:
                var15 = var2.state;
                var12 = var15.shouldForceRender;
 866:
                var13 = var12;
 869:
                if(var13) { _fun0038_ip = 891; continue _fun0038 }
 872:
                var15 = var3.theme;
                var12 = var2.props;
                var12 = var12.theme;
                var13 = var15 !== var12;
 891:
                var15 = var3.resolvingGiftCodes;
                var12 = var2.props;
                var12 = var12.resolvingGiftCodes;
                var33 = var15 !== var12;
                if(var33) { _fun0038_ip = 936; continue _fun0038 }
 915:
                var15 = var3.resolvedGiftCodes;
                var12 = var2.props;
                var12 = var12.resolvedGiftCodes;
                var33 = var15 !== var12;
 936:
                if(var33) { _fun0038_ip = 960; continue _fun0038 }
 939:
                var15 = var3.acceptingGiftCodes;
                var12 = var2.props;
                var12 = var12.acceptingGiftCodes;
                var33 = var15 !== var12;
 960:
                var _closure3_slot2 = var33;
                var32 = var3.uploads;
                var12 = var2.props;
                var31 = var12.uploads;
                var15 = _closure1_slot1;
                var12 = _closure1_slot2;
                var17 = 84;
                var12 = var12[var17];
                var18 = var15.bind(var16)(var12);
                var15 = var3.interactionStates;
                var12 = var2.props;
                var12 = var12.interactionStates;
                var12 = var18.bind(var16)(var15, var12);
                var24 = !var12;
                var _closure3_slot3 = var24;
                var15 = var3.channelPolls;
                var12 = var2.props;
                var12 = var12.channelPolls;
                var21 = var15 !== var12;
                var _closure3_slot4 = var21;
                var15 = var3.interactionComponentStatesVersion;
                var12 = var2.props;
                var12 = var12.interactionComponentStatesVersion;
                var23 = var15 !== var12;
                var _closure3_slot5 = var23;
                var15 = var3.shouldDisableInteractiveComponents;
                var12 = var2.props;
                var12 = var12.shouldDisableInteractiveComponents;
                var12 = var15 !== var12;
                var _closure3_slot6 = var12;
                var15 = var3.communicationDisabledVersion;
                var12 = var2.props;
                var12 = var12.communicationDisabledVersion;
                var29 = var15 !== var12;
                var _closure3_slot7 = var29;
                var15 = var3.failedMessagesVersion;
                var12 = var2.props;
                var12 = var12.failedMessagesVersion;
                var28 = var15 !== var12;
                var _closure3_slot8 = var28;
                var15 = var3.renderCommunicationDisabled;
                var12 = var2.props;
                var12 = var12.renderCommunicationDisabled;
                var25 = var15 !== var12;
                var _closure3_slot9 = var25;
                var27 = var3.forwardGuildsVersion;
                var12 = var2.props;
                var26 = var12.forwardGuildsVersion;
                var12 = var2.props;
                var15 = var12.channel;
                var12 = var15.isForumPost;
                var22 = var12.bind(var15)();
                if(!var22) { _fun0038_ip = 1242; continue _fun0038 }
 1221:
                var15 = var3.isFollowingForumPost;
                var12 = var2.props;
                var12 = var12.isFollowingForumPost;
                var22 = var15 !== var12;
 1242:
                var _closure3_slot10 = var22;
                var15 = var3.showMediaPostSharePrompt;
                var12 = var2.props;
                var12 = var12.showMediaPostSharePrompt;
                var20 = var15 !== var12;
                var _closure3_slot11 = var20;
                var15 = var3.unloadedContentEntryMessageIds;
                var12 = var2.props;
                var12 = var12.unloadedContentEntryMessageIds;
                var19 = var15 !== var12;
                var _closure3_slot12 = var19;
                var15 = var3.invalidApplicationIds;
                var12 = var2.props;
                var12 = var12.invalidApplicationIds;
                var12 = var15 !== var12;
                var _closure3_slot13 = var12;
                var18 = var3.activityInstanceIds;
                var15 = var2.props;
                var15 = var15.activityInstanceIds;
                var30 = var18 !== var15;
                if(var30) { _fun0038_ip = 1366; continue _fun0038 }
 1345:
                var18 = var3.activityParticipants;
                var15 = var2.props;
                var15 = var15.activityParticipants;
                var30 = var18 !== var15;
 1366:
                if(var30) { _fun0038_ip = 1390; continue _fun0038 }
 1369:
                var18 = var3.applicationAssetFetchingIds;
                var15 = var2.props;
                var15 = var15.applicationAssetFetchingIds;
                var30 = var18 !== var15;
 1390:
                if(var30) { _fun0038_ip = 1414; continue _fun0038 }
 1393:
                var18 = var3.activityInstancePresenceDetails;
                var15 = var2.props;
                var15 = var15.activityInstancePresenceDetails;
                var30 = var18 !== var15;
 1414:
                if(var30) { _fun0038_ip = 1438; continue _fun0038 }
 1417:
                var18 = var3.messagesWithActivitiesLaunching;
                var15 = var2.props;
                var15 = var15.messagesWithActivitiesLaunching;
                var30 = var18 !== var15;
 1438:
                if(var30) { _fun0038_ip = 1444; continue _fun0038 }
 1441:
                var30 = var12;
 1444:
                var _closure3_slot14 = var30;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var18 = var12[var17];
                var36 = var15.bind(var16)(var18);
                var35 = var36.areArraysShallowEqual;
                var34 = var3.activityInviteMessageIds;
                var18 = var2.props;
                var18 = var18.activityInviteMessageIds;
                var18 = var35.bind(var36)(var34, var18);
                var18 = !var18;
                var _closure3_slot15 = var18;
                var12 = var12[var17];
                var34 = var15.bind(var16)(var12);
                var17 = var34.areArraysShallowEqual;
                var15 = var3.resolvedReferralTrialOfferIds;
                var12 = var2.props;
                var12 = var12.resolvedReferralTrialOfferIds;
                var12 = var17.bind(var34)(var15, var12);
                var17 = !var12;
                if(var17) { _fun0038_ip = 1566; continue _fun0038 }
 1545:
                var15 = var3.referralTrialOfferId;
                var12 = var2.props;
                var12 = var12.referralTrialOfferId;
                var17 = var15 !== var12;
 1566:
                if(var17) { _fun0038_ip = 1590; continue _fun0038 }
 1569:
                var15 = var3.isPremiumTier2User;
                var12 = var2.props;
                var12 = var12.isPremiumTier2User;
                var17 = var15 !== var12;
 1590:
                var _closure3_slot16 = var17;
                var15 = var3.guildInviteColorsFetched;
                var12 = var2.props;
                var12 = var12.guildInviteColorsFetched;
                var15 = var15 !== var12;
                var _closure3_slot17 = var15;
                var34 = var3.guildEmojis;
                var12 = var2.props;
                var12 = var12.guildEmojis;
                var12 = var34 !== var12;
                var _closure3_slot18 = var12;
                if(var13) { _fun0038_ip = 2563; continue _fun0038 }
 1650:
                if(var33) { _fun0038_ip = 2563; continue _fun0038 }
 1656:
                if(!(var32 === var31)) { _fun0038_ip = 2563; continue _fun0038 }
 1663:
                if(var30) { _fun0038_ip = 2563; continue _fun0038 }
 1669:
                var31 = var3.messages;
                var30 = var2.props;
                var30 = var30.messages;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 1693:
                var31 = var3.editingMessageId;
                var30 = var2.props;
                var30 = var30.editingMessageId;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 1717:
                var31 = var3.replyingMessageId;
                var30 = var2.props;
                var30 = var30.replyingMessageId;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 1741:
                var31 = var3.voiceStateChannelId;
                var30 = var2.props;
                var30 = var30.voiceStateChannelId;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 1765:
                var31 = var3.messageAuthorActivities;
                var30 = var2.props;
                var30 = var30.messageAuthorActivities;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 1789:
                var31 = var3.oldestUnreadMessageId;
                var30 = var2.props;
                var30 = var30.oldestUnreadMessageId;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 1813:
                var31 = var3.invites;
                var30 = var2.props;
                var30 = var30.invites;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 1837:
                var31 = var3.appDirectoryEmbedApplications;
                var30 = var2.props;
                var30 = var30.appDirectoryEmbedApplications;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 1861:
                var31 = var3.invalidAppDirectoryEmbedApplicationIds;
                var30 = var2.props;
                var30 = var30.invalidAppDirectoryEmbedApplicationIds;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 1885:
                var31 = var3.appDirectoryEmbedApplicationFetchStates;
                var30 = var2.props;
                var30 = var30.appDirectoryEmbedApplicationFetchStates;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 1909:
                var31 = var3.guildTemplates;
                var30 = var2.props;
                var30 = var30.guildTemplates;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 1933:
                var31 = var3.buildOverrides;
                var30 = var2.props;
                var30 = var30.buildOverrides;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 1957:
                var31 = var3.quests;
                var30 = var2.props;
                var30 = var30.quests;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 1981:
                var31 = var3.isFetchingCurrentQuests;
                var30 = var2.props;
                var30 = var30.isFetchingCurrentQuests;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 2005:
                var31 = var3.participantsLength;
                var30 = var2.props;
                var30 = var30.participantsLength;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 2029:
                var31 = var3.isMessagesReady;
                var30 = var2.props;
                var30 = var30.isMessagesReady;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 2053:
                var31 = var3.channelThreadsVersion;
                var30 = var2.props;
                var30 = var30.channelThreadsVersion;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 2077:
                var31 = var3.rsvpVersion;
                var30 = var2.props;
                var30 = var30.rsvpVersion;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 2101:
                var31 = var3.repliedIds;
                var30 = var2.props;
                var30 = var30.repliedIds;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 2125:
                var31 = var3.hasLoadedExperiments;
                var30 = var2.props;
                var30 = var30.hasLoadedExperiments;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 2149:
                var31 = var3.isMessageRequest;
                var30 = var2.props;
                var30 = var30.isMessageRequest;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 2173:
                var31 = var3.isSpamMessageRequest;
                var30 = var2.props;
                var30 = var30.isSpamMessageRequest;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 2197:
                var31 = var3.currentUserCommunicationDisabled;
                var30 = var2.props;
                var30 = var30.currentUserCommunicationDisabled;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 2221:
                var31 = var3.userSettingsLocale;
                var30 = var2.props;
                var30 = var30.userSettingsLocale;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 2245:
                var31 = var3.selectedSummary;
                var30 = var2.props;
                var30 = var30.selectedSummary;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 2269:
                var31 = var3.showPushFeedback;
                var30 = var2.props;
                var30 = var30.showPushFeedback;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 2293:
                var31 = var3.cacheStoreLoaded;
                var30 = var2.props;
                var30 = var30.cacheStoreLoaded;
                if(!(var31 === var30)) { _fun0038_ip = 2563; continue _fun0038 }
 2317:
                if(var29) { _fun0038_ip = 2563; continue _fun0038 }
 2323:
                if(var28) { _fun0038_ip = 2563; continue _fun0038 }
 2329:
                if(!(var27 === var26)) { _fun0038_ip = 2563; continue _fun0038 }
 2336:
                if(var25) { _fun0038_ip = 2563; continue _fun0038 }
 2342:
                if(var24) { _fun0038_ip = 2563; continue _fun0038 }
 2348:
                if(var23) { _fun0038_ip = 2563; continue _fun0038 }
 2354:
                if(var22) { _fun0038_ip = 2563; continue _fun0038 }
 2360:
                if(!(var7 == var10)) { _fun0038_ip = 2563; continue _fun0038 }
 2367:
                if(!(var7 == var8)) { _fun0038_ip = 2563; continue _fun0038 }
 2374:
                var23 = var3.androidKeyboardHeight;
                var22 = var2.props;
                var22 = var22.androidKeyboardHeight;
                if(!(var23 === var22)) { _fun0038_ip = 2563; continue _fun0038 }
 2398:
                var23 = var3.mediaPostPreviewEmbeds;
                var22 = var2.props;
                var22 = var22.mediaPostPreviewEmbeds;
                if(!(var23 === var22)) { _fun0038_ip = 2563; continue _fun0038 }
 2422:
                var23 = var3.shouldObscureSpoiler;
                var22 = var2.props;
                var22 = var22.shouldObscureSpoiler;
                if(!(var23 === var22)) { _fun0038_ip = 2563; continue _fun0038 }
 2443:
                var23 = var3.shouldFilterKeywords;
                var22 = var2.props;
                var22 = var22.shouldFilterKeywords;
                if(!(var23 === var22)) { _fun0038_ip = 2563; continue _fun0038 }
 2464:
                var23 = var3.shouldDisableInteractiveComponents;
                var22 = var2.props;
                var22 = var22.shouldDisableInteractiveComponents;
                if(!(var23 === var22)) { _fun0038_ip = 2563; continue _fun0038 }
 2485:
                if(var21) { _fun0038_ip = 2563; continue _fun0038 }
 2488:
                if(var20) { _fun0038_ip = 2563; continue _fun0038 }
 2491:
                var21 = var3.threadStartingReferenceMessage;
                var20 = var2.props;
                var20 = var20.threadStartingReferenceMessage;
                if(!(var21 === var20)) { _fun0038_ip = 2563; continue _fun0038 }
 2512:
                if(var19) { _fun0038_ip = 2563; continue _fun0038 }
 2515:
                var20 = var3.applications;
                var19 = var2.props;
                var19 = var19.applications;
                if(!(var20 === var19)) { _fun0038_ip = 2563; continue _fun0038 }
 2536:
                if(var18) { _fun0038_ip = 2563; continue _fun0038 }
 2539:
                if(var17) { _fun0038_ip = 2563; continue _fun0038 }
 2542:
                if(var15) { _fun0038_ip = 2563; continue _fun0038 }
 2545:
                if(var12) { _fun0038_ip = 2563; continue _fun0038 }
 2548:
                var12 = var2.recordTimings;
                var12 = var12.bind(var2)();
                _fun0038_ip = 3208; continue _fun0038;
 2563:
                var12 = global;
                var12 = var12.Set;
                var15 = var12.prototype;
                var15 = Object.create(var15, {constructor: {value: var12}});
                var40 = var15;
                var12 = new var40[var12](var39);
                var12 = var12 instanceof Object ? var12 : var15;
                var _closure3_slot19 = var12;
                var17 = var3.editingMessageId;
                var15 = var2.props;
                var15 = var15.editingMessageId;
                if(!(var17 !== var15)) { _fun0038_ip = 2678; continue _fun0038 }
 2616:
                var15 = var2.props;
                var15 = var15.editingMessageId;
                if(!(var7 != var15)) { _fun0038_ip = 2652; continue _fun0038 }
 2631:
                var17 = var12.add;
                var15 = var2.props;
                var15 = var15.editingMessageId;
                var15 = var17.bind(var12)(var15);
 2652:
                var15 = var3.editingMessageId;
                if(!(var7 != var15)) { _fun0038_ip = 2678; continue _fun0038 }
 2662:
                var17 = var12.add;
                var15 = var3.editingMessageId;
                var15 = var17.bind(var12)(var15);
 2678:
                var17 = var3.replyingMessageId;
                var15 = var2.props;
                var15 = var15.replyingMessageId;
                if(!(var17 !== var15)) { _fun0038_ip = 2761; continue _fun0038 }
 2699:
                var15 = var2.props;
                var15 = var15.replyingMessageId;
                if(!(var7 != var15)) { _fun0038_ip = 2735; continue _fun0038 }
 2714:
                var17 = var12.add;
                var15 = var2.props;
                var15 = var15.replyingMessageId;
                var15 = var17.bind(var12)(var15);
 2735:
                var15 = var3.replyingMessageId;
                if(!(var7 != var15)) { _fun0038_ip = 2761; continue _fun0038 }
 2745:
                var17 = var12.add;
                var15 = var3.replyingMessageId;
                var15 = var17.bind(var12)(var15);
 2761:
                var17 = var3.isMessagesReady;
                var15 = var2.props;
                var15 = var15.isMessagesReady;
                if(!(var17 === var15)) { _fun0038_ip = 2845; continue _fun0038 }
 2782:
                var17 = var3.isCallActive;
                var15 = var2.props;
                var15 = var15.isCallActive;
                if(!(var17 === var15)) { _fun0038_ip = 2845; continue _fun0038 }
 2803:
                var17 = var3.voiceStateChannelId;
                var15 = var2.props;
                var15 = var15.voiceStateChannelId;
                if(!(var17 === var15)) { _fun0038_ip = 2845; continue _fun0038 }
 2824:
                var17 = var3.participantsLength;
                var15 = var2.props;
                var15 = var15.participantsLength;
                if(!(var17 !== var15)) { _fun0038_ip = 2934; continue _fun0038 }
 2845:
                var15 = _closure1_slot1;
                var17 = _closure1_slot2;
                var14 = 63;
                var14 = var17[var14];
                var17 = var15.bind(var16)(var14);
                var16 = var17.find;
                var14 = var2.props;
                var15 = var14.messages;
                var14 = var15.toArray;
                var15 = var14.bind(var15)();
                var14 = var15.reverse;
                var15 = var14.bind(var15)();
                var14 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = _closure1_slot66;
                    var1 = var1.CALL;
                    var1 = var2 === var1;
                    return var1;
                };
                var14 = var16.bind(var17)(var15, var14);
                if(!(var7 != var14)) { _fun0038_ip = 2934; continue _fun0038 }
 2919:
                var15 = var12.add;
                var14 = var14.id;
                var14 = var15.bind(var12)(var14);
 2934:
                var15 = var3.channelThreadsVersion;
                var14 = var2.props;
                var14 = var14.channelThreadsVersion;
                var14 = var15 !== var14;
                var _closure3_slot20 = var14;
                var15 = var3.rsvpVersion;
                var14 = var2.props;
                var14 = var14.rsvpVersion;
                var14 = var15 !== var14;
                var _closure3_slot21 = var14;
                var15 = var3.repliedIds;
                var14 = var2.props;
                var14 = var14.repliedIds;
                var14 = var15 !== var14;
                var _closure3_slot22 = var14;
                var15 = var3.hasLoadedExperiments;
                var14 = var2.props;
                var14 = var14.hasLoadedExperiments;
                var14 = var15 !== var14;
                var _closure3_slot23 = var14;
                var14 = var3.communicationDisabledVersion;
                var15 = var7 != var14;
                var7 = -1;
                if(!var15) { _fun0038_ip = 3056; continue _fun0038 }
 3053:
                var7 = var14;
 3056:
                var _closure3_slot24 = var7;
                var3 = var3.cacheStoreLoaded;
                var7 = !var3;
                if(!var7) { _fun0038_ip = 3083; continue _fun0038 }
 3072:
                var3 = var2.props;
                var7 = var3.cacheStoreLoaded;
 3083:
                var _closure3_slot25 = var7;
                var3 = var2.props;
                var14 = var3.messages;
                var3 = var14.forEach;
                var1 = function(arg1) {
                    _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
                        var1 = arg1;
                        var3 = _closure3_slot23;
                        if(!var3) { _fun0039_ip = 38; continue _fun0039 }
 13:
                        var4 = var1.type;
                        var3 = _closure1_slot66;
                        var3 = var3.USER_JOIN;
                        if(!(var4 !== var3)) { _fun0039_ip = 1655; continue _fun0039 }
 38:
                        var3 = _closure3_slot22;
                        if(!var3) { _fun0039_ip = 116; continue _fun0039 }
 45:
                        var4 = var1.type;
                        var3 = _closure1_slot66;
                        var3 = var3.REPLY;
                        if(!(var4 === var3)) { _fun0039_ip = 116; continue _fun0039 }
 67:
                        var3 = var1.messageReference;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0039_ip = 116; continue _fun0039 }
 79:
                        var4 = _closure3_slot0;
                        var4 = var4.props;
                        var5 = var4.repliedIds;
                        var4 = var5.has;
                        var3 = var3.message_id;
                        var3 = var4.bind(var5)(var3);
                        if(var3) { _fun0039_ip = 1632; continue _fun0039 }
 116:
                        var3 = _closure3_slot20;
                        if(!var3) { _fun0039_ip = 153; continue _fun0039 }
 123:
                        var4 = var1.hasFlag;
                        var3 = _closure1_slot65;
                        var3 = var3.HAS_THREAD;
                        var3 = var4.bind(var1)(var3);
                        if(var3) { _fun0039_ip = 1611; continue _fun0039 }
 153:
                        var3 = _closure3_slot21;
                        if(!var3) { _fun0039_ip = 180; continue _fun0039 }
 160:
                        var3 = var1.codedLinks;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(!(var4 > var3))) { _fun0039_ip = 1590; continue _fun0039 }
 180:
                        var3 = _closure3_slot18;
                        if(!var3) { _fun0039_ip = 212; continue _fun0039 }
 187:
                        var4 = var1.type;
                        var3 = _closure1_slot66;
                        var3 = var3.EMOJI_ADDED;
                        if(!(var4 !== var3)) { _fun0039_ip = 1569; continue _fun0039 }
 212:
                        var3 = _closure3_slot9;
                        if(var3) { _fun0039_ip = 1548; continue _fun0039 }
 222:
                        var3 = _closure3_slot7;
                        if(!var3) { _fun0039_ip = 300; continue _fun0039 }
 229:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var4 = var3.guildId;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0039_ip = 300; continue _fun0039 }
 249:
                        var6 = _closure1_slot47;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var5 = var3.guildId;
                        var3 = var1.author;
                        var4 = var3.id;
                        var3 = undefined;
                        var4 = var6.bind(var3)(var5, var4);
                        var3 = _closure3_slot24;
                        if(!(!(var4 > var3))) { _fun0039_ip = 1548; continue _fun0039 }
 300:
                        var3 = _closure3_slot8;
                        if(!var3) { _fun0039_ip = 340; continue _fun0039 }
 307:
                        var3 = var1.author;
                        var4 = var3.id;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.currentUserId;
                        if(!(var4 !== var3)) { _fun0039_ip = 1524; continue _fun0039 }
 340:
                        var3 = _closure3_slot3;
                        if(!var3) { _fun0039_ip = 397; continue _fun0039 }
 347:
                        var3 = _closure3_slot1;
                        var4 = var3.interactionStates;
                        var3 = var1.id;
                        var4 = var4[var3];
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var5 = var3.interactionStates;
                        var3 = var1.id;
                        var3 = var5[var3];
                        if(!(var4 === var3)) { _fun0039_ip = 1500; continue _fun0039 }
 397:
                        var3 = _closure3_slot5;
                        if(!var3) { _fun0039_ip = 466; continue _fun0039 }
 404:
                        var3 = _closure3_slot1;
                        var5 = var3.interactionComponentStates;
                        var4 = var5.get;
                        var3 = var1.id;
                        var4 = var4.bind(var5)(var3);
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var6 = var3.interactionComponentStates;
                        var5 = var6.get;
                        var3 = var1.id;
                        var3 = var5.bind(var6)(var3);
                        if(!(var4 === var3)) { _fun0039_ip = 1476; continue _fun0039 }
 466:
                        var3 = _closure3_slot6;
                        if(!var3) { _fun0039_ip = 493; continue _fun0039 }
 473:
                        var3 = var1.components;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(var3 === var4)) { _fun0039_ip = 1452; continue _fun0039 }
 493:
                        var3 = _closure3_slot4;
                        if(!var3) { _fun0039_ip = 550; continue _fun0039 }
 500:
                        var3 = _closure3_slot1;
                        var4 = var3.channelPolls;
                        var3 = var1.id;
                        var4 = var4[var3];
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var5 = var3.channelPolls;
                        var3 = var1.id;
                        var3 = var5[var3];
                        if(!(var4 === var3)) { _fun0039_ip = 1428; continue _fun0039 }
 550:
                        var3 = _closure3_slot12;
                        if(!var3) { _fun0039_ip = 619; continue _fun0039 }
 557:
                        var3 = _closure3_slot1;
                        var5 = var3.unloadedContentEntryMessageIds;
                        var4 = var5.has;
                        var3 = var1.id;
                        var4 = var4.bind(var5)(var3);
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var6 = var3.unloadedContentEntryMessageIds;
                        var5 = var6.has;
                        var3 = var1.id;
                        var3 = var5.bind(var6)(var3);
                        if(!(var4 === var3)) { _fun0039_ip = 1404; continue _fun0039 }
 619:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var4 = var3.channel;
                        var3 = var4.isForumPost;
                        var3 = var3.bind(var4)();
                        if(!var3) { _fun0039_ip = 722; continue _fun0039 }
 646:
                        var3 = _closure3_slot10;
                        if(var3) { _fun0039_ip = 660; continue _fun0039 }
 653:
                        var3 = _closure3_slot11;
                        if(!var3) { _fun0039_ip = 722; continue _fun0039 }
 660:
                        var4 = var1.id;
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 64;
                        var5 = var5[var3];
                        var3 = undefined;
                        var6 = var6.bind(var3)(var5);
                        var5 = var6.castChannelIdAsMessageId;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.channelId;
                        var3 = var5.bind(var6)(var3);
                        if(!(var4 !== var3)) { _fun0039_ip = 1380; continue _fun0039 }
 722:
                        var3 = _closure3_slot14;
                        if(!var3) { _fun0039_ip = 744; continue _fun0039 }
 729:
                        var4 = var1.activityInstance;
                        var3 = null;
                        if(!(var3 == var4)) { _fun0039_ip = 1356; continue _fun0039 }
 744:
                        var3 = _closure3_slot15;
                        if(!var3) { _fun0039_ip = 778; continue _fun0039 }
 751:
                        var6 = var1.activity;
                        var5 = null;
                        var7 = var5 == var6;
                        var4 = undefined;
                        if(var7) { _fun0039_ip = 774; continue _fun0039 }
 768:
                        var4 = var6.party_id;
 774:
                        var3 = var5 != var4;
 778:
                        if(!var3) { _fun0039_ip = 800; continue _fun0039 }
 781:
                        var5 = _closure3_slot19;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
 800:
                        var4 = var1.author;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0039_ip = 1674; continue _fun0039 }
 815:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var8 = 87;
                        var5 = var5[var8];
                        var7 = undefined;
                        var10 = var6.bind(var7)(var5);
                        var9 = var10.messageAuthorActivitiesChanged;
                        var6 = _closure3_slot1;
                        var5 = _closure3_slot0;
                        var5 = var5.props;
                        var5 = var9.bind(var10)(var1, var6, var5);
                        if(var5) { _fun0039_ip = 1332; continue _fun0039 }
 872:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var8];
                        var10 = var6.bind(var7)(var5);
                        var9 = var10.codedLinksChanged;
                        var6 = _closure3_slot1;
                        var5 = _closure3_slot0;
                        var5 = var5.props;
                        var5 = var9.bind(var10)(var1, var6, var5);
                        if(var5) { _fun0039_ip = 1332; continue _fun0039 }
 921:
                        var5 = _closure3_slot2;
                        if(!var5) { _fun0039_ip = 977; continue _fun0039 }
 928:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var8];
                        var10 = var6.bind(var7)(var5);
                        var9 = var10.giftCodesChanged;
                        var6 = _closure3_slot1;
                        var5 = _closure3_slot0;
                        var5 = var5.props;
                        var5 = var9.bind(var10)(var1, var6, var5);
                        if(var5) { _fun0039_ip = 1332; continue _fun0039 }
 977:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var8];
                        var8 = var6.bind(var7)(var5);
                        var7 = var8.mediaPostPreviewEmbedsChanged;
                        var6 = _closure3_slot1;
                        var5 = _closure3_slot0;
                        var5 = var5.props;
                        var5 = var7.bind(var8)(var1, var6, var5);
                        if(var5) { _fun0039_ip = 1332; continue _fun0039 }
 1026:
                        var5 = _closure3_slot25;
                        if(!var5) { _fun0039_ip = 1050; continue _fun0039 }
 1033:
                        var6 = var1.embeds;
                        var7 = var6.length;
                        var6 = 0;
                        var5 = var7 > var6;
 1050:
                        if(!var5) { _fun0039_ip = 1072; continue _fun0039 }
 1053:
                        var7 = _closure3_slot19;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
 1072:
                        var5 = var1.type;
                        var4 = _closure1_slot66;
                        var4 = var4.THREAD_STARTER_MESSAGE;
                        var4 = var5 === var4;
                        if(!var4) { _fun0039_ip = 1123; continue _fun0039 }
 1094:
                        var5 = _closure3_slot1;
                        var6 = var5.threadStartingReferenceMessage;
                        var5 = _closure3_slot0;
                        var5 = var5.props;
                        var5 = var5.threadStartingReferenceMessage;
                        var4 = var6 !== var5;
 1123:
                        if(!var4) { _fun0039_ip = 1145; continue _fun0039 }
 1126:
                        var6 = _closure3_slot19;
                        var5 = var6.add;
                        var4 = var1.id;
                        var4 = var5.bind(var6)(var4);
 1145:
                        var4 = _closure3_slot13;
                        if(!var4) { _fun0039_ip = 1161; continue _fun0039 }
 1152:
                        var5 = var1.applicationId;
                        var4 = var3 != var5;
 1161:
                        if(!var4) { _fun0039_ip = 1189; continue _fun0039 }
 1164:
                        var5 = _closure3_slot1;
                        var7 = var5.invalidApplicationIds;
                        var6 = var7.includes;
                        var5 = var1.applicationId;
                        var4 = var6.bind(var7)(var5);
 1189:
                        if(!var4) { _fun0039_ip = 1211; continue _fun0039 }
 1192:
                        var6 = _closure3_slot19;
                        var5 = var6.add;
                        var4 = var1.id;
                        var4 = var5.bind(var6)(var4);
 1211:
                        var4 = _closure3_slot16;
                        if(!var4) { _fun0039_ip = 1278; continue _fun0039 }
 1218:
                        var6 = var1.referralTrialOfferId;
                        var3 = var3 != var6;
                        if(!var3) { _fun0039_ip = 1256; continue _fun0039 }
 1231:
                        var4 = _closure3_slot0;
                        var4 = var4.props;
                        var5 = var4.resolvedReferralTrialOfferIds;
                        var4 = var5.includes;
                        var3 = var4.bind(var5)(var6);
 1256:
                        if(!var3) { _fun0039_ip = 1278; continue _fun0039 }
 1259:
                        var5 = _closure3_slot19;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
 1278:
                        var3 = _closure3_slot17;
                        if(!var3) { _fun0039_ip = 1302; continue _fun0039 }
 1285:
                        var4 = var1.codedLinks;
                        var5 = var4.length;
                        var4 = 0;
                        var3 = var5 > var4;
 1302:
                        if(!var3) { _fun0039_ip = 1674; continue _fun0039 }
 1308:
                        var5 = _closure3_slot19;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 1674; continue _fun0039;
 1332:
                        var5 = _closure3_slot19;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 1674; continue _fun0039;
 1356:
                        var5 = _closure3_slot19;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 1674; continue _fun0039;
 1380:
                        var5 = _closure3_slot19;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 1674; continue _fun0039;
 1404:
                        var5 = _closure3_slot19;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 1674; continue _fun0039;
 1428:
                        var5 = _closure3_slot19;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 1674; continue _fun0039;
 1452:
                        var5 = _closure3_slot19;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 1674; continue _fun0039;
 1476:
                        var5 = _closure3_slot19;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 1674; continue _fun0039;
 1500:
                        var5 = _closure3_slot19;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 1674; continue _fun0039;
 1524:
                        var5 = _closure3_slot19;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 1674; continue _fun0039;
 1548:
                        var5 = _closure3_slot19;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 1674; continue _fun0039;
 1569:
                        var5 = _closure3_slot19;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 1674; continue _fun0039;
 1590:
                        var5 = _closure3_slot19;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 1674; continue _fun0039;
 1611:
                        var5 = _closure3_slot19;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 1674; continue _fun0039;
 1632:
                        var5 = _closure3_slot19;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        var3 = undefined;
                        return var3;
 1655:
                        var3 = _closure3_slot19;
                        var2 = var3.add;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
 1674:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var14)(var1);
                var3 = var2.updateRows;
                var1 = {};
                var1['forced'] = var13;
                var1['updateMessageIds'] = var12;
                var1['scrollToMessageId'] = var11;
                var1['jumpTargetId'] = var10;
                var1['jumpType'] = var9;
                var1['focusTargetId'] = var8;
                var1['ignoreEmbedDescriptionCache'] = var7;
                var1['messagesNewlyLoaded'] = var6;
                var1['shouldInitialScroll'] = var5;
                var1['minimizeScrolling'] = var4;
                var1 = var3.bind(var2)(var1);
                var3 = var2.setState;
                var1 = {};
                var4 = false;
                var1['shouldForceRender'] = var4;
                var1 = var3.bind(var2)(var1);
                var1 = var2.recordTimings;
                var1 = var1.bind(var2)();
 3208:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'handleScrollCallbacks';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
 0:
                var3 = arg1;
                var1 = this;
                var2 = var3.isAtBottom;
                var9 = var3.isNearBottom;
                var4 = undefined;
                if(!(var9 === var4)) { _fun0040_ip = 26; continue _fun0040 }
 24:
                var9 = false;
 26:
                var11 = var3.isNearTop;
                if(!(var11 === var4)) { _fun0040_ip = 38; continue _fun0040 }
 36:
                var11 = false;
 38:
                var12 = var3.dragging;
                if(!(var12 === var4)) { _fun0040_ip = 50; continue _fun0040 }
 48:
                var12 = false;
 50:
                var13 = var3.decelerating;
                if(!(var13 === var4)) { _fun0040_ip = 62; continue _fun0040 }
 60:
                var13 = false;
 62:
                var5 = var3.isFirstMessageVisible;
                if(!(var5 === var4)) { _fun0040_ip = 74; continue _fun0040 }
 72:
                var5 = false;
 74:
                var3 = var1.props;
                var8 = var3.messages;
                var6 = var3.channel;
                var3 = var3.onScroll;
                var7 = null;
                if(!(var7 != var6)) { _fun0040_ip = 364; continue _fun0040 }
 105:
                var7 = var8.length;
                var10 = 0;
                if(!(var10 === var7)) { _fun0040_ip = 128; continue _fun0040 }
 116:
                var7 = var8.loadingMore;
                if(var7) { _fun0040_ip = 364; continue _fun0040 }
 128:
                var7 = var8.loadingMore;
                var7 = !var7;
                if(!var7) { _fun0040_ip = 149; continue _fun0040 }
 140:
                if(var12) { _fun0040_ip = 146; continue _fun0040 }
 143:
                var12 = var13;
 146:
                var7 = var12;
 149:
                if(!var7) { _fun0040_ip = 167; continue _fun0040 }
 152:
                var12 = var1.pendingUpdatesQueue;
                var12 = var12.length;
                var7 = var10 === var12;
 167:
                var12 = var1.isNearTop;
                if(var12) { _fun0040_ip = 206; continue _fun0040 }
 176:
                if(!var11) { _fun0040_ip = 206; continue _fun0040 }
 179:
                var11 = var8.hasMoreBefore;
                if(!var11) { _fun0040_ip = 206; continue _fun0040 }
 188:
                if(!var7) { _fun0040_ip = 206; continue _fun0040 }
 191:
                var11 = var1.loadMoreBefore;
                var11 = var11.bind(var1)();
                _fun0040_ip = 332; continue _fun0040;
 206:
                var11 = var1.isNearBottom;
                if(var11) { _fun0040_ip = 242; continue _fun0040 }
 215:
                if(!var9) { _fun0040_ip = 242; continue _fun0040 }
 218:
                var8 = var8.hasMoreAfter;
                if(!var8) { _fun0040_ip = 242; continue _fun0040 }
 227:
                if(!var7) { _fun0040_ip = 242; continue _fun0040 }
 230:
                var7 = var1.loadMoreAfter;
                var7 = var7.bind(var1)();
                _fun0040_ip = 332; continue _fun0040;
 242:
                var7 = var1.isAtBottom;
                var7 = var7 === var2;
                if(!var7) { _fun0040_ip = 261; continue _fun0040 }
 255:
                var7 = var1.hasHandledScroll;
 261:
                if(var7) { _fun0040_ip = 332; continue _fun0040 }
 264:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 85;
                var7 = var9[var7];
                var9 = var8.bind(var4)(var7);
                var8 = var9.updateChannelDimensions;
                var7 = var6.id;
                var6 = 0;
                if(!var2) { _fun0040_ip = 306; continue _fun0040 }
 303:
                var6 = 1;
 306:
                var16 = 1;
                var19 = var9;
                var18 = var7;
                var17 = var6;
                var15 = 0;
                var2 = var19[var8](var18, var17, var16, var15, var14);
                var2 = true;
                var1['hasHandledScroll'] = var2;
 332:
                var2 = {};
                var2['isFirstMessageVisible'] = var5;
                var2 = var3.bind(var4)(var2);
                var2 = var1._chatUpdatesQueue;
                var1 = var2.tryFlush;
                var1 = var1.bind(var2)();
                var1 = true;
                return var1;
 364:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'handleVisibleMessagesChange';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
 0:
                var1 = arg1;
                var4 = this;
                var _closure3_slot0 = var4;
                var12 = var1.firstVisibleMessageRowIndex;
                var10 = var1.firstVisibleMessagePercentVisible;
                var11 = var1.lastVisibleMessageRowIndex;
                var8 = var1.lastVisibleMessagePercentVisible;
                var9 = var1.source;
                var1 = undefined;
                var _closure3_slot1 = var1;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 88;
                var5 = var7[var5];
                var7 = var6.bind(var1)(var5);
                var6 = var7.getVisibleMessages;
                var5 = {};
                var5['firstVisibleMessageRowIndex'] = var12;
                var5['lastVisibleMessageRowIndex'] = var11;
                var5['firstVisibleMessagePercentVisible'] = var10;
                var5['lastVisibleMessagePercentVisible'] = var8;
                var8 = var4.chatManager;
                var5['chatManager'] = var8;
                var8 = var4.props;
                var8 = var8.channelId;
                var5['channelId'] = var8;
                var6 = var6.bind(var7)(var5);
                var7 = var6.length;
                var5 = 0;
                if(!(!(var7 <= var5))) { _fun0041_ip = 270; continue _fun0041 }
 142:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 89;
                var5 = var8[var5];
                var8 = var7.bind(var1)(var5);
                var7 = var8.questsVisibleMobileMessagesChanged;
                var5 = {};
                var5['visibleMessages'] = var6;
                var5['source'] = var9;
                var5 = var7.bind(var8)(var5);
                var5 = var4.props;
                var5 = var5.shouldTrackAnnouncementMessageViews;
                if(!var5) { _fun0041_ip = 270; continue _fun0041 }
 198:
                var4 = var4.props;
                var5 = var4.guildId;
                var4 = null;
                if(!(var4 != var5)) { _fun0041_ip = 270; continue _fun0041 }
 214:
                var4 = new Array(0);
                _closure3_slot1 = var4;
                var5 = var6.forEach;
                var3 = function(arg1) {
                    _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.message;
                        var5 = var2.messageReference;
                        var4 = null;
                        var6 = var4 == var5;
                        var1 = undefined;
                        var3 = undefined;
                        if(var6) { _fun0042_ip = 32; continue _fun0042 }
 27:
                        var3 = var5.guild_id;
 32:
                        var3 = var4 != var3;
                        if(!var3) { _fun0042_ip = 49; continue _fun0042 }
 39:
                        var5 = var2.webhookId;
                        var3 = var4 != var5;
 49:
                        if(!var3) { _fun0042_ip = 76; continue _fun0042 }
 52:
                        var6 = var2.hasFlag;
                        var5 = _closure1_slot65;
                        var5 = var5.IS_CROSSPOST;
                        var3 = var6.bind(var2)(var5);
 76:
                        var7 = var2.hasFlag;
                        var6 = _closure1_slot65;
                        var6 = var6.EPHEMERAL;
                        var6 = var7.bind(var2)(var6);
                        if(var6) { _fun0042_ip = 336; continue _fun0042 }
 106:
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var6.channel;
                        var6 = var6.type;
                        var5 = _closure1_slot60;
                        var5 = var5.GUILD_ANNOUNCEMENT;
                        if(!(var6 !== var5)) { _fun0042_ip = 148; continue _fun0042 }
 142:
                        if(!var3) { _fun0042_ip = 336; continue _fun0042 }
 148:
                        if(!var3) { _fun0042_ip = 161; continue _fun0042 }
 151:
                        var5 = var2.messageReference;
                        if(!(var4 == var5)) { _fun0042_ip = 177; continue _fun0042 }
 161:
                        var5 = _closure3_slot0;
                        var5 = var5.props;
                        var6 = var5.channelId;
                        _fun0042_ip = 188; continue _fun0042;
 177:
                        var5 = var2.messageReference;
                        var6 = var5.channel_id;
 188:
                        if(!var3) { _fun0042_ip = 215; continue _fun0042 }
 191:
                        var8 = var2.messageReference;
                        var9 = var4 == var8;
                        var5 = undefined;
                        if(var9) { _fun0042_ip = 211; continue _fun0042 }
 206:
                        var5 = var8.guild_id;
 211:
                        if(!(var4 == var5)) { _fun0042_ip = 231; continue _fun0042 }
 215:
                        var5 = _closure3_slot0;
                        var5 = var5.props;
                        var5 = var5.guildId;
                        _fun0042_ip = 242; continue _fun0042;
 231:
                        var8 = var2.messageReference;
                        var5 = var8.guild_id;
 242:
                        if(!var3) { _fun0042_ip = 255; continue _fun0042 }
 245:
                        var3 = var2.messageReference;
                        if(!(var4 == var3)) { _fun0042_ip = 262; continue _fun0042 }
 255:
                        var8 = var2.id;
                        _fun0042_ip = 274; continue _fun0042;
 262:
                        var2 = var2.messageReference;
                        var8 = var2.message_id;
 274:
                        var4 = _closure3_slot1;
                        var3 = var4.push;
                        var2 = {};
                        var2['messageId'] = var8;
                        var7 = _closure3_slot0;
                        var8 = var7.props;
                        var8 = var8.channelId;
                        var2['channelId'] = var8;
                        var7 = var7.props;
                        var7 = var7.guildId;
                        var2['guildId'] = var7;
                        var2['sourceChannelId'] = var6;
                        var2['sourceGuildId'] = var5;
                        var2 = var3.bind(var4)(var2);
 336:
                        return var1;
                    }
                };
                var3 = var5.bind(var6)(var3);
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 90;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.handleMessageListVisibilityChange;
                var2 = var2.bind(var3)(var4);
 270:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            var11 = this;
            var1 = var11.props;
            var14 = var1.animateEmoji;
            var15 = var1.onPressKey;
            var17 = var1.style;
            var13 = var1.children;
            var12 = var1.HACK_fixModalInteraction;
            var16 = var1.alwaysRespectKeyboard;
            var9 = var1.messages;
            var4 = _closure1_slot75;
            var3 = _closure1_slot74;
            var2 = {};
            var8 = _closure1_slot73;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 91;
            var5 = var10[var1];
            var1 = undefined;
            var7 = var7.bind(var1)(var5);
            var5 = {};
            var18 = var11._chatRef;
            var5['ref'] = var18;
            var5['style'] = var17;
            var17 = true;
            var5['inverted'] = var17;
            var5['alwaysRespectKeyboard'] = var16;
            var16 = var11.handleScrollPosition;
            var5['onChatScrollPosition'] = var16;
            var16 = var11.handleTapImage;
            var5['onTapImage'] = var16;
            var16 = var11.handleTapChannel;
            var5['onTapChannel'] = var16;
            var16 = var11.handleLongPressChannel;
            var5['onLongPressChannel'] = var16;
            var16 = var11.handleTapAttachmentLink;
            var5['onTapAttachmentLink'] = var16;
            var16 = var11.handleLongPressAttachmentLink;
            var5['onLongPressAttachmentLink'] = var16;
            var16 = var11.handleTapCall;
            var5['onTapCall'] = var16;
            var16 = var11.handleTapMention;
            var5['onTapMention'] = var16;
            var16 = var11.handleTapCommandMention;
            var5['onTapCommandMention'] = var16;
            var16 = var11.handleLongPressCommandMention;
            var5['onLongPressCommandMention'] = var16;
            var16 = var11.handleTapLink;
            var5['onTapLink'] = var16;
            var16 = var11.handleLongPressLink;
            var5['onLongPressLink'] = var16;
            var16 = var11.handleTapReaction;
            var5['onTapReaction'] = var16;
            var16 = var11.handleLongPressReaction;
            var5['onLongPressReaction'] = var16;
            var16 = var11.handleTapAvatar;
            var5['onTapAvatar'] = var16;
            var16 = var11.handleTapUsername;
            var5['onTapUsername'] = var16;
            var16 = var11.handleLongPressUsername;
            var5['onLongPressUsername'] = var16;
            var16 = var11.handleOpenSticker;
            var5['onTapSticker'] = var16;
            var16 = var11.handleLongPressSticker;
            var5['onLongPressSticker'] = var16;
            var16 = var11.handleLongPressMessage;
            var5['onLongPressMessage'] = var16;
            var16 = var11.handleInitiateReply;
            var5['onInitiateReply'] = var16;
            var16 = var11.handleInitiateEdit;
            var5['onInitiateEdit'] = var16;
            var16 = var11.handleInitiateThread;
            var5['onInitiateThread'] = var16;
            var16 = var11.handleTapMessage;
            var5['onTapMessage'] = var16;
            var16 = var11.handleTapSeparator;
            var5['onTapSeparator'] = var16;
            var16 = var11.handleTapInviteEmbed;
            var5['onTapInviteEmbed'] = var16;
            var16 = var11.handleTapInviteEmbedAccept;
            var5['onTapInviteEmbedAccept'] = var16;
            var16 = var11.handleTapJoinActivity;
            var5['onTapJoinActivity'] = var16;
            var5['onPressKey'] = var15;
            var5['animateEmoji'] = var14;
            var14 = var11.handleTapGiftCodeEmbed;
            var5['onTapGiftCodeEmbed'] = var14;
            var14 = var11.handleTapCancelUploadItem;
            var5['onTapCancelUploadItem'] = var14;
            var14 = var11.handleTapReply;
            var5['onTapMessageReply'] = var14;
            var14 = var11.handleTapSummary;
            var5['onTapSummary'] = var14;
            var14 = var11.handleTapSummaryJump;
            var5['onTapSummaryJump'] = var14;
            var14 = var11.handleTapGiftCodeAccept;
            var5['onTapGiftCodeAccept'] = var14;
            var14 = var11.handleTapReferralRedeem;
            var5['onTapReferralRedeem'] = var14;
            var14 = var11.handleTapThreadEmbed;
            var5['onTapThreadEmbed'] = var14;
            var14 = var11.handleTapEmoji;
            var5['onTapEmoji'] = var14;
            var14 = var11.handleTapTimestamp;
            var5['onTapTimestamp'] = var14;
            var14 = var11.handleTapInlineCode;
            var5['onTapInlineCode'] = var14;
            var14 = var11.handleTapRoleIcon;
            var5['onTapRoleIcon'] = var14;
            var14 = var11.handleTapGameIcon;
            var5['onTapGameIcon'] = var14;
            var14 = var11.handleTapSuppressNotificationsIcon;
            var5['onTapSuppressNotificationsIcon'] = var14;
            var14 = var11.handleTapConnectionsRoleTag;
            var5['onTapConnectionsRoleTag'] = var14;
            var14 = var11.handleTapTimeoutIcon;
            var5['onTapTimeoutIcon'] = var14;
            var14 = var11.handleTapButtonActionComponent;
            var5['onTapButtonActionComponent'] = var14;
            var14 = var11.handleTapSelectActionComponent;
            var5['onTapSelectActionComponent'] = var14;
            var14 = var11.handleTapWelcomeReply;
            var5['onTapWelcomeReply'] = var14;
            var14 = var11.handleTapInviteToSpeak;
            var5['onTapInviteToSpeak'] = var14;
            var14 = var11.handleTapAutoModerationActions;
            var5['onTapAutoModerationActions'] = var14;
            var14 = var11.handleTapAutoModerationFeedback;
            var5['onTapAutoModerationFeedback'] = var14;
            var14 = var11.handleTapFollowForumPost;
            var5['onTapFollowForumPost'] = var14;
            var14 = var11.handleTapShareForumPost;
            var5['onTapShareForumPost'] = var14;
            var14 = var11.handleTapReactionOverflow;
            var5['onTapReactionOverflow'] = var14;
            var14 = var11.handleTapNavBar;
            var5['onTapNavBar'] = var14;
            var14 = var11.handleCopyText;
            var5['onTapCopyText'] = var14;
            var14 = var11.handleTapOpTag;
            var5['onTapOpTag'] = var14;
            var14 = var11.handleTapTag;
            var5['onTapTag'] = var14;
            var14 = var11.handleTapRemix;
            var5['onTapRemix'] = var14;
            var14 = var11.handleMediaAttachmentPlaybackEnded;
            var5['onMediaAttachmentPlaybackEnded'] = var14;
            var14 = var11.handleMediaAttachmentPlaybackStarted;
            var5['onMediaAttachmentPlaybackStarted'] = var14;
            var14 = var11.handlerVoiceMessagePlaybackFailed;
            var5['onVoiceMessagePlaybackFailed'] = var14;
            var14 = var11.handleTapShowAltText;
            var5['onTapShowAltText'] = var14;
            var14 = var11.handleTapPostPreviewEmbed;
            var5['onTapPostPreviewEmbed'] = var14;
            var14 = var11.handleTapDismissMediaPostSharePrompt;
            var5['onTapDismissMediaPostSharePrompt'] = var14;
            var14 = var11.handleTapChannelPromptButton;
            var5['onTapChannelPromptButton'] = var14;
            var14 = var11.handleTapObscuredMediaLearnMore;
            var5['onTapObscuredMediaLearnMore'] = var14;
            var14 = var11.handleTapObscuredMediaToggle;
            var5['onTapObscuredMediaToggle'] = var14;
            var14 = var11.handleTapSafetyPolicyNoticeEmbed;
            var5['onTapSafetyPolicyNoticeEmbed'] = var14;
            var14 = var11.handleTapSafetySystemNotificationCta;
            var5['onTapSafetySystemNotificationCta'] = var14;
            var14 = var11.handleTapPollAnswer;
            var5['onTapPollAnswer'] = var14;
            var14 = var11.handleTapPollSubmitVote;
            var5['onTapPollSubmitVote'] = var14;
            var14 = var11.handleTapPollAction;
            var5['onTapPollAction'] = var14;
            var14 = var11.handleLongPressPollImage;
            var5['onLongPressPollImage'] = var14;
            var14 = var11.handleTapCtaButton;
            var5['onTapCtaButton'] = var14;
            var14 = var11.handleMessageAccessibilityAction;
            var5['onMessageAccessibilityAction'] = var14;
            var14 = var11.handleTapForwardFooter;
            var5['onTapForwardFooter'] = var14;
            var14 = var11.handleTapInlineForward;
            var5['onTapInlineForward'] = var14;
            var14 = var11.handleTapClanTagChiplet;
            var5['onTapClanTagChiplet'] = var14;
            var14 = var11.handleTapContentInventoryEntryEmbed;
            var5['onTapContentInventoryEntryEmbed'] = var14;
            var14 = var11.handleTapSoundmoji;
            var5['onTapSoundmoji'] = var14;
            var14 = var11.handleTapAppMessageEmbed;
            var5['onTapAppMessageEmbed'] = var14;
            var5['children'] = var13;
            var5['HACK_fixModalInteraction'] = var12;
            var12 = var11.handleTapTableView;
            var5['onTapTableView'] = var12;
            var12 = var11.handleFirstLayout;
            var5['onFirstLayout'] = var12;
            var12 = var11.handleMediaPlayFinishedAnalytics;
            var5['onMediaPlayFinishedAnalytics'] = var12;
            var11 = var11.handleMessageVisibilityChanged;
            var5['onMessageVisibilityChanged'] = var11;
            var7 = var8.bind(var1)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = _closure1_slot0;
            var6 = 92;
            var6 = var10[var6];
            var6 = var7.bind(var1)(var6);
            var7 = var6.ChatTTITracker;
            var6 = {};
            var6['messages'] = var9;
            var6 = var8.bind(var1)(var7, var6);
            var5[1] = var6;
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var5['value'] = var6;
        var1[8] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var8);
    var _closure1_slot77 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
 0:
            var10 = arg1;
            var7 = var10.channel;
            var _closure2_slot0 = var7;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 93;
            var8 = var2[var3];
            var4 = undefined;
            var13 = var5.bind(var4)(var8);
            var12 = var13.useStateFromStores;
            var8 = _closure1_slot51;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = var7.id;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var3 = _closure1_slot51;
                var2 = var3.getMessages;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var80 = var12.bind(var13)(var11, var8, var9);
            var _closure2_slot1 = var80;
            var91 = var7.id;
            var _closure2_slot2 = var91;
            var8 = var7.getGuildId;
            var93 = var8.bind(var7)();
            var _closure2_slot3 = var93;
            var2 = var2[var3];
            var9 = var5.bind(var4)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot48;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot48;
                var2 = var3.getGuild;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var8.bind(var9)(var5, var2);
            var _closure2_slot4 = var5;
            var19 = null;
            var2 = var19 == var5;
            var45 = undefined;
            if(var2) { _fun0043_ip = 170; continue _fun0043 }
 164:
            var45 = var5.systemChannelFlags;
 170:
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = var15[var3];
            var13 = var12.bind(var4)(var2);
            var11 = var13.useStateFromStores;
            var2 = _closure1_slot43;
            var9 = new Array(1);
            var9[0] = var2;
            var8 = function() {
                var2 = _closure1_slot43;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var92 = var11.bind(var13)(var9, var8, var2);
            var _closure2_slot5 = var92;
            var2 = 97;
            var8 = var15[var2];
            var8 = var12.bind(var4)(var8);
            var9 = var8.InlineAttachmentMedia;
            var8 = var9.useSetting;
            var99 = var8.bind(var9)();
            var8 = var15[var2];
            var8 = var12.bind(var4)(var8);
            var9 = var8.InlineEmbedMedia;
            var8 = var9.useSetting;
            var98 = var8.bind(var9)();
            var8 = var15[var2];
            var8 = var12.bind(var4)(var8);
            var9 = var8.RenderEmbeds;
            var8 = var9.useSetting;
            var97 = var8.bind(var9)();
            var8 = var15[var2];
            var8 = var12.bind(var4)(var8);
            var9 = var8.RenderReactions;
            var8 = var9.useSetting;
            var96 = var8.bind(var9)();
            var8 = var15[var2];
            var8 = var12.bind(var4)(var8);
            var9 = var8.DeveloperMode;
            var8 = var9.useSetting;
            var95 = var8.bind(var9)();
            var8 = var15[var2];
            var8 = var12.bind(var4)(var8);
            var9 = var8.AnimateEmoji;
            var8 = var9.useSetting;
            r102 = var8.bind(var9)();
            var8 = var15[var2];
            var8 = var12.bind(var4)(var8);
            var9 = var8.AnimateStickers;
            var8 = var9.useSetting;
            r101 = var8.bind(var9)();
            var2 = var15[var2];
            var2 = var12.bind(var4)(var2);
            var8 = var2.GifAutoPlay;
            var2 = var8.useSetting;
            var100 = var2.bind(var8)();
            var2 = var15[var3];
            var13 = var12.bind(var4)(var2);
            var11 = var13.useStateFromStores;
            var2 = _closure1_slot42;
            var9 = new Array(1);
            var9[0] = var2;
            var8 = function() {
                var1 = _closure1_slot42;
                var1 = var1.theme;
                return var1;
            };
            var2 = new Array(0);
            var9 = var11.bind(var13)(var9, var8, var2);
            var2 = 98;
            var2 = var15[var2];
            var8 = var12.bind(var4)(var2);
            var2 = var8.useIsMessageSwipeActionsEnabled;
            var11 = var2.bind(var8)();
            var2 = function useMessageAuthorActivities(arg1) {
                var3 = arg1;
                var _closure3_slot0 = var3;
                var6 = _closure1_slot10;
                var5 = var6.useMemo;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() {
                    var1 = {};
                    var _closure4_slot0 = var1;
                    var4 = _closure3_slot0;
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
 0:
                            var1 = arg1;
                            var2 = var1.author;
                            var3 = null;
                            var2 = var3 != var2;
                            if(!var2) { _fun0044_ip = 28; continue _fun0044 }
 18:
                            var4 = var1.activity;
                            var2 = var3 != var4;
 28:
                            if(!var2) { _fun0044_ip = 53; continue _fun0044 }
 31:
                            var2 = _closure4_slot0;
                            var1 = var1.author;
                            var1 = var1.id;
                            var2[var1] = var3;
 53:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var6 = var5.bind(var6)(var3, var4);
                var _closure3_slot1 = var6;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 93;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.useStateFromStoresObject;
                var2 = _closure1_slot54;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = new Array(1);
                var2[0] = var6;
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 63;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.mapValues;
                    var2 = _closure3_slot1;
                    var1 = function(arg1, arg2) {
                        var3 = _closure1_slot54;
                        var2 = var3.getPrimaryActivity;
                        var1 = arg2;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1 = var4.bind(var5)(var3, var1, var2);
                return var1;
            };
            var86 = var2.bind(var4)(var80);
            var2 = function useFetchMessageApplications(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var4 = _closure1_slot10;
                var5 = var4.useMemo;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() {
                    var1 = global;
                    var3 = var1.Set;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var7 = var4;
                    var3 = new var7[var3](var6);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var _closure4_slot0 = var3;
                    var5 = _closure3_slot0;
                    var4 = var5.forEach;
                    var2 = function(arg1) {
                        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
 0:
                            var1 = arg1;
                            var2 = var1.applicationId;
                            var4 = null;
                            var2 = var4 != var2;
                            if(!var2) { _fun0045_ip = 26; continue _fun0045 }
 17:
                            var3 = var1.application;
                            var2 = var4 == var3;
 26:
                            if(!var2) { _fun0045_ip = 51; continue _fun0045 }
 29:
                            var3 = _closure4_slot0;
                            var2 = var3.add;
                            var1 = var1.applicationId;
                            var1 = var2.bind(var3)(var1);
 51:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2);
                    var2 = var1.Array;
                    var1 = var2.from;
                    var1 = var1.bind(var2)(var3);
                    return var1;
                };
                var5 = var5.bind(var4)(var2, var3);
                var _closure3_slot1 = var5;
                var3 = var4.useRef;
                var2 = new Array(0);
                var2 = var3.bind(var4)(var2);
                var _closure3_slot2 = var2;
                var3 = var4.useEffect;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() {
                    _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 84;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var2);
                        var6 = var7.areArraysShallowEqual;
                        var5 = _closure3_slot1;
                        var3 = _closure3_slot2;
                        var3 = var3.current;
                        var3 = var6.bind(var7)(var5, var3);
                        if(var3) { _fun0046_ip = 172; continue _fun0046 }
 56:
                        var5 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var3 = 94;
                        var3 = var10[var3];
                        var7 = var5.bind(var1)(var3);
                        var6 = var7.fetchApplications;
                        var3 = 63;
                        var3 = var10[var3];
                        var5 = var5.bind(var1)(var3);
                        var3 = _closure3_slot1;
                        var8 = var5.bind(var1)(var3);
                        var5 = var8.filter;
                        var9 = _closure1_slot0;
                        var4 = 95;
                        var4 = var10[var4];
                        var4 = var9.bind(var1)(var4);
                        var4 = var4.isNotNullish;
                        var5 = var5.bind(var8)(var4);
                        var4 = var5.uniq;
                        var5 = var4.bind(var5)();
                        var4 = var5.value;
                        var5 = var4.bind(var5)();
                        var4 = false;
                        var4 = var6.bind(var7)(var5, var4);
                        var2 = _closure3_slot2;
                        var2['current'] = var3;
 172:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var1 = undefined;
                return var1;
            };
            var2 = var2.bind(var4)(var80);
            var23 = _closure1_slot1;
            var2 = 99;
            var2 = var15[var2];
            var2 = var23.bind(var4)(var2);
            var2 = var2.bind(var4)(var80, var7);
            var16 = _closure1_slot3;
            var13 = 2;
            var2 = var16.bind(var4)(var2, var13);
            var14 = 0;
            var17 = var2[var14];
            var8 = 1;
            var2 = var2[var8];
            var2 = var15[var3];
            var22 = var12.bind(var4)(var2);
            var21 = var22.useStateFromStores;
            var2 = _closure1_slot50;
            var20 = new Array(1);
            var20[0] = var2;
            var18 = function() {
                var2 = _closure1_slot50;
                var1 = var2.getInvites;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var85 = var21.bind(var22)(var20, var18, var2);
            var2 = var15[var3];
            var22 = var12.bind(var4)(var2);
            var21 = var22.useStateFromStoresObject;
            var2 = _closure1_slot23;
            var20 = new Array(1);
            var20[0] = var2;
            var18 = function() {
                var1 = {};
                var3 = _closure1_slot23;
                var2 = var3.getApplications;
                var2 = var2.bind(var3)();
                var1['appDirectoryEmbedApplications'] = var2;
                var2 = var3.getInvalidApplicationIds;
                var2 = var2.bind(var3)();
                var1['invalidAppDirectoryEmbedApplicationIds'] = var2;
                var2 = var3.getApplicationFetchStates;
                var2 = var2.bind(var3)();
                var1['appDirectoryEmbedApplicationFetchStates'] = var2;
                return var1;
            };
            var2 = new Array(0);
            var2 = var21.bind(var22)(var20, var18, var2);
            var84 = var2.appDirectoryEmbedApplications;
            var83 = var2.invalidAppDirectoryEmbedApplicationIds;
            var75 = var2.appDirectoryEmbedApplicationFetchStates;
            var2 = var15[var3];
            var22 = var12.bind(var4)(var2);
            var21 = var22.useStateFromStoresArray;
            var2 = _closure1_slot15;
            var20 = new Array(1);
            var20[0] = var2;
            var18 = function() {
                var2 = _closure1_slot15;
                var1 = var2.getFetchingOrFailedFetchingIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var82 = var21.bind(var22)(var20, var18);
            var18 = var15[var3];
            var22 = var12.bind(var4)(var18);
            var21 = var22.useStateFromStoresArray;
            var18 = _closure1_slot14;
            var20 = new Array(1);
            var20[0] = var18;
            var18 = function() {
                var2 = _closure1_slot14;
                var1 = var2.getFetchingIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var81 = var21.bind(var22)(var20, var18);
            var18 = var15[var3];
            var25 = var12.bind(var4)(var18);
            var24 = var25.useStateFromStoresArray;
            var18 = _closure1_slot13;
            var22 = new Array(1);
            var22[0] = var18;
            var21 = new Array(1);
            var21[0] = var91;
            var20 = function() {
                var4 = _closure1_slot13;
                var3 = var4.getEmbeddedActivitiesForChannel;
                var2 = _closure2_slot2;
                var4 = var3.bind(var4)(var2);
                var3 = var4.map;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.launchId;
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.filter;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 95;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var78 = var24.bind(var25)(var22, var20, var21);
            var20 = var15[var3];
            var24 = var12.bind(var4)(var20);
            var22 = var24.useStateFromStoresArray;
            var21 = new Array(2);
            var21[0] = var18;
            var20 = _closure1_slot54;
            var21[1] = var20;
            var20 = function() {
                _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
 0:
                    var1 = new Array(0);
                    var _closure3_slot0 = var1;
                    var6 = function _loop(arg1) {
                        _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
 0:
                            var5 = arg1;
                            var _closure4_slot0 = var5;
                            var4 = _closure1_slot54;
                            var3 = var4.findActivity;
                            var6 = var5.userIds;
                            var2 = var6.values;
                            var6 = var2.bind(var6)();
                            var2 = var6.next;
                            var2 = var2.bind(var6)();
                            var2 = var2.value;
                            var1 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.application_id;
                                var1 = _closure4_slot0;
                                var1 = var1.applicationId;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var2 = var3.bind(var4)(var2, var1);
                            var4 = null;
                            var6 = var4 == var2;
                            var1 = undefined;
                            var3 = undefined;
                            if(var6) { _fun0048_ip = 83; continue _fun0048 }
 77:
                            var3 = var2.details;
 83:
                            if(!(var4 != var3)) { _fun0048_ip = 144; continue _fun0048 }
 87:
                            var4 = _closure3_slot0;
                            var3 = var4.push;
                            var8 = var5.launchId;
                            var7 = var2.details;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var6 = var2.concat;
                            var5 = '';
                            var2 = ':';
                            var2 = var6.bind(var5)(var8, var2, var7);
                            var2 = var3.bind(var4)(var2);
 144:
                            return var1;
                        }
                    };
                    var3 = _closure1_slot78;
                    var5 = _closure1_slot13;
                    var4 = var5.getEmbeddedActivitiesForChannel;
                    var2 = _closure2_slot2;
                    var2 = var4.bind(var5)(var2);
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if(var2) { _fun0047_ip = 90; continue _fun0047 }
 65:
                    var2 = var3.value;
                    var2 = var6.bind(var5)(var2);
                    var7 = var4.bind(var5)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0047_ip = 65; continue _fun0047 }
 90:
                    return var1;
                }
            };
            var76 = var22.bind(var24)(var21, var20);
            var20 = var15[var3];
            var24 = var12.bind(var4)(var20);
            var22 = var24.useStateFromStoresArray;
            var21 = new Array(1);
            var21[0] = var18;
            var20 = function() {
                var1 = global;
                var3 = var1.Set;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var7 = var4;
                var3 = new var7[var3](var6);
                var3 = var3 instanceof Object ? var3 : var4;
                var _closure3_slot0 = var3;
                var5 = _closure1_slot13;
                var4 = var5.getEmbeddedActivitiesByChannel;
                var5 = var4.bind(var5)();
                var4 = var5.forEach;
                var2 = function(arg1, arg2) {
                    var3 = arg1;
                    var2 = arg2;
                    var _closure4_slot0 = var2;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.userIds;
                        var2 = var3.forEach;
                        var1 = function(arg1) {
                            var3 = _closure3_slot0;
                            var2 = var3.add;
                            var7 = _closure4_slot0;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var6 = var1.concat;
                            var5 = '';
                            var4 = ':';
                            var1 = arg1;
                            var1 = var6.bind(var5)(var7, var4, var1);
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2 = var4.bind(var5)(var2);
                var2 = var1.Array;
                var1 = var2.from;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var77 = var22.bind(var24)(var21, var20);
            var20 = var15[var3];
            var22 = var12.bind(var4)(var20);
            var21 = var22.useStateFromStoresArray;
            var20 = new Array(1);
            var20[0] = var18;
            var18 = function() {
                _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
 0:
                    var1 = new Array(0);
                    var3 = _closure1_slot78;
                    var4 = _closure1_slot13;
                    var2 = var4.getLaunchStates;
                    var2 = var2.bind(var4)();
                    var9 = undefined;
                    var8 = var3.bind(var9)(var2);
                    var3 = var8.bind(var9)();
                    var2 = var3.done;
                    var7 = 0;
                    var6 = null;
                    var5 = 2;
                    var4 = 1;
                    if(var2) { _fun0049_ip = 148; continue _fun0049 }
 54:
                    var11 = var3.value;
                    var2 = _closure1_slot3;
                    var2 = var2.bind(var9)(var11, var5);
                    var11 = var2[var7];
                    var2 = var2[var4];
                    var11 = var2.isLaunching;
                    if(!var11) { _fun0049_ip = 96; continue _fun0049 }
 86:
                    var12 = var2.componentId;
                    var11 = var6 != var12;
 96:
                    if(!var11) { _fun0049_ip = 114; continue _fun0049 }
 99:
                    var12 = var2.componentId;
                    var12 = var12.length;
                    var11 = var12 > var7;
 114:
                    if(!var11) { _fun0049_ip = 133; continue _fun0049 }
 117:
                    var11 = var1.push;
                    var2 = var2.componentId;
                    var2 = var11.bind(var1)(var2);
 133:
                    var11 = var8.bind(var9)();
                    var2 = var11.done;
                    var3 = var11;
                    if(!var2) { _fun0049_ip = 54; continue _fun0049 }
 148:
                    return var1;
                }
            };
            var79 = var21.bind(var22)(var20, var18);
            var18 = var15[var3];
            var21 = var12.bind(var4)(var18);
            var20 = var21.useStateFromStoresArray;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = function() {
                var2 = _closure1_slot15;
                var1 = var2.getApplications;
                var2 = var1.bind(var2)();
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            };
            var2 = var20.bind(var21)(var18, var2);
            var2 = var16.bind(var4)(var2, var8);
            var22 = var2[var14];
            var2 = var15[var3];
            var21 = var12.bind(var4)(var2);
            var20 = var21.useStateFromStores;
            var2 = _closure1_slot31;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = function() {
                var2 = _closure1_slot31;
                var1 = var2.getMediaPostEmbeds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var74 = var20.bind(var21)(var18, var2);
            var2 = var15[var3];
            var24 = var12.bind(var4)(var2);
            var21 = var24.useStateFromStores;
            var2 = _closure1_slot27;
            var20 = new Array(1);
            var20[0] = var2;
            var18 = function() {
                var2 = _closure1_slot27;
                var1 = var2.getGuildTemplates;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var73 = var21.bind(var24)(var20, var18, var2);
            var2 = var15[var3];
            var24 = var12.bind(var4)(var2);
            var21 = var24.useStateFromStores;
            var2 = _closure1_slot16;
            var20 = new Array(1);
            var20[0] = var2;
            var18 = function() {
                var2 = _closure1_slot16;
                var1 = var2.getBuildOverrides;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var72 = var21.bind(var24)(var20, var18, var2);
            var2 = 100;
            var2 = var15[var2];
            var20 = var12.bind(var4)(var2);
            var18 = var20.useQuests;
            var2 = {};
            var21 = 'cache-or-network';
            var2['fetchPolicy'] = var21;
            var2 = var18.bind(var20)(var2);
            var71 = var2.quests;
            var70 = var2.isFetchingCurrentQuests;
            var18 = var80.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot66;
                var1 = var1.PREMIUM_REFERRAL;
                var1 = var2 === var1;
                return var1;
            };
            var20 = var18.bind(var80)(var2);
            var18 = var20.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.referralTrialOfferId;
                return var1;
            };
            var20 = var18.bind(var20)(var2);
            var18 = var20.filter;
            var2 = 95;
            var2 = var15[var2];
            var2 = var12.bind(var4)(var2);
            var2 = var2.isNotNullish;
            var2 = var18.bind(var20)(var2);
            var _closure2_slot6 = var2;
            var2 = var15[var3];
            var21 = var12.bind(var4)(var2);
            var20 = var21.useStateFromStoresArray;
            var2 = _closure1_slot34;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = function() {
                var3 = _closure2_slot6;
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
 0:
                        var3 = _closure1_slot34;
                        var2 = var3.getRelevantUserTrialOffer;
                        var1 = arg1;
                        var2 = var2.bind(var3)(var1);
                        var1 = null;
                        var3 = var1 == var2;
                        var1 = undefined;
                        if(var3) { _fun0050_ip = 37; continue _fun0050 }
 32:
                        var1 = var2.id;
 37:
                        return var1;
                    }
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 95;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var21 = var20.bind(var21)(var18, var2);
            var2 = 101;
            var2 = var15[var2];
            var20 = var12.bind(var4)(var2);
            var18 = var20.useTrialOffer;
            var2 = _closure1_slot71;
            var20 = var18.bind(var20)(var2);
            var2 = var15[var3];
            var25 = var12.bind(var4)(var2);
            var24 = var25.useStateFromStores;
            var2 = _closure1_slot57;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 102;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.isPremiumExactly;
                var5 = _closure1_slot57;
                var2 = var5.getCurrentUser;
                var2 = var2.bind(var5)();
                var1 = _closure1_slot72;
                var1 = var1.TIER_2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var18 = var24.bind(var25)(var18, var2);
            var2 = var15[var3];
            var27 = var12.bind(var4)(var2);
            var26 = var27.useStateFromStores;
            var2 = _closure1_slot44;
            var25 = new Array(1);
            var25[0] = var2;
            var24 = new Array(1);
            var24[0] = var91;
            var2 = function() {
                var3 = _closure1_slot44;
                var2 = var3.getEditingMessageId;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var69 = var26.bind(var27)(var25, var2, var24);
            var2 = var15[var3];
            var27 = var12.bind(var4)(var2);
            var26 = var27.useStateFromStores;
            var2 = _closure1_slot36;
            var25 = new Array(1);
            var25[0] = var2;
            var24 = new Array(1);
            var24[0] = var91;
            var2 = function() {
                _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
 0:
                    var3 = _closure1_slot36;
                    var2 = var3.getPendingReply;
                    var1 = _closure2_slot2;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0051_ip = 46; continue _fun0051 }
 36:
                    var2 = var2.message;
                    var1 = var2.id;
 46:
                    return var1;
                }
            };
            var68 = var26.bind(var27)(var25, var2, var24);
            var2 = var15[var3];
            var27 = var12.bind(var4)(var2);
            var26 = var27.useStateFromStores;
            var2 = _closure1_slot55;
            var25 = new Array(1);
            var25[0] = var2;
            var24 = new Array(1);
            var24[0] = var91;
            var2 = function() {
                var3 = _closure1_slot55;
                var2 = var3.getOldestUnreadMessageId;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var67 = var26.bind(var27)(var25, var2, var24);
            var2 = var15[var3];
            var27 = var12.bind(var4)(var2);
            var26 = var27.useStateFromStores;
            var2 = _closure1_slot49;
            var25 = new Array(1);
            var25[0] = var2;
            var24 = new Array(1);
            var24[0] = var93;
            var2 = function() {
                _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0052_ip = 38; continue _fun0052 }
 16:
                    var4 = _closure1_slot49;
                    var3 = var4.canChatInGuild;
                    var2 = _closure2_slot3;
                    var1 = var3.bind(var4)(var2);
 38:
                    return var1;
                }
            };
            var66 = var26.bind(var27)(var25, var2, var24);
            var2 = var15[var3];
            var27 = var12.bind(var4)(var2);
            var26 = var27.useStateFromStores;
            var2 = _closure1_slot53;
            var25 = new Array(1);
            var25[0] = var2;
            var24 = new Array(1);
            var24[0] = var7;
            var2 = function() {
                var4 = _closure1_slot53;
                var3 = var4.can;
                var1 = _closure1_slot67;
                var2 = var1.SEND_MESSAGES;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var65 = var26.bind(var27)(var25, var2, var24);
            var2 = 103;
            var2 = var15[var2];
            var2 = var23.bind(var4)(var2);
            var64 = var2.bind(var4)(var91);
            var2 = var15[var3];
            var26 = var12.bind(var4)(var2);
            var25 = var26.useStateFromStores;
            var2 = _closure1_slot58;
            var24 = new Array(1);
            var24[0] = var2;
            var23 = new Array(1);
            var23[0] = var92;
            var2 = function() {
                var4 = _closure1_slot58;
                var3 = var4.getUserVoiceChannelId;
                var2 = _closure1_slot64;
                var1 = _closure2_slot5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var63 = var25.bind(var26)(var24, var2, var23);
            var2 = var15[var3];
            var27 = var12.bind(var4)(var2);
            var26 = var27.useStateFromStores;
            var2 = _closure1_slot37;
            var25 = new Array(1);
            var25[0] = var2;
            var24 = new Array(1);
            var24[0] = var7;
            var23 = function() {
                _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
 0:
                    var1 = _closure1_slot61;
                    var4 = var1.THREADS;
                    var3 = var4.has;
                    var1 = _closure2_slot0;
                    var1 = var1.type;
                    var3 = var3.bind(var4)(var1);
                    var4 = null;
                    var1 = null;
                    if(!var3) { _fun0053_ip = 116; continue _fun0053 }
 42:
                    var3 = _closure2_slot0;
                    var3 = var3.parent_id;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0053_ip = 116; continue _fun0053 }
 61:
                    var4 = _closure1_slot37;
                    var3 = var4.getMessageByReference;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var6 = var5.parent_id;
                    var2['channel_id'] = var6;
                    var6 = var5.id;
                    var2['message_id'] = var6;
                    var5 = var5.guild_id;
                    var2['guild_id'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var1 = var2.message;
 116:
                    return var1;
                }
            };
            var27 = var26.bind(var27)(var25, var23, var24);
            var23 = var15[var3];
            var28 = var12.bind(var4)(var23);
            var26 = var28.useStateFromStoresObject;
            var23 = _closure1_slot45;
            var25 = new Array(1);
            var25[0] = var23;
            var24 = function() {
                var1 = {};
                var3 = _closure1_slot45;
                var2 = var3.getResolvingCodes;
                var2 = var2.bind(var3)();
                var1['resolvingGiftCodes'] = var2;
                var2 = var3.getResolvedCodes;
                var2 = var2.bind(var3)();
                var1['resolvedGiftCodes'] = var2;
                var2 = var3.getAcceptingCodes;
                var2 = var2.bind(var3)();
                var1['acceptingGiftCodes'] = var2;
                return var1;
            };
            var23 = new Array(0);
            var23 = var26.bind(var28)(var25, var24, var23);
            var62 = var23.resolvingGiftCodes;
            var61 = var23.resolvedGiftCodes;
            var60 = var23.acceptingGiftCodes;
            var23 = var15[var3];
            var28 = var12.bind(var4)(var23);
            var26 = var28.useStateFromStores;
            var23 = _closure1_slot18;
            var25 = new Array(1);
            var25[0] = var23;
            var24 = new Array(1);
            var24[0] = var91;
            var23 = function() {
                var3 = _closure1_slot18;
                var2 = var3.getParticipants;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                var1 = var1.length;
                return var1;
            };
            var59 = var26.bind(var28)(var25, var23, var24);
            var23 = var15[var3];
            var28 = var12.bind(var4)(var23);
            var26 = var28.useStateFromStores;
            var23 = _closure1_slot56;
            var25 = new Array(1);
            var25[0] = var23;
            var24 = new Array(1);
            var24[0] = var91;
            var23 = function() {
                var3 = _closure1_slot56;
                var2 = var3.getFiles;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var58 = var26.bind(var28)(var25, var23, var24);
            var23 = var15[var3];
            var26 = var12.bind(var4)(var23);
            var25 = var26.useStateFromStores;
            var24 = new Array(1);
            var24[0] = var2;
            var23 = new Array(1);
            var23[0] = var91;
            var2 = function() {
                var3 = _closure1_slot37;
                var2 = var3.getReplyIdsForChannel;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var57 = var25.bind(var26)(var24, var2, var23);
            var2 = var15[var3];
            var26 = var12.bind(var4)(var2);
            var25 = var26.useStateFromStores;
            var2 = _closure1_slot12;
            var24 = new Array(1);
            var24[0] = var2;
            var23 = function() {
                var1 = _closure1_slot12;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var56 = var25.bind(var26)(var24, var23);
            var23 = var15[var3];
            var25 = var12.bind(var4)(var23);
            var24 = var25.useStateFromStores;
            var23 = new Array(1);
            var23[0] = var2;
            var2 = function() {
                var1 = _closure1_slot12;
                var1 = var1.roleStyle;
                return var1;
            };
            var94 = var24.bind(var25)(var23, var2);
            var2 = var15[var3];
            var26 = var12.bind(var4)(var2);
            var25 = var26.useStateFromStores;
            var2 = _closure1_slot40;
            var24 = new Array(1);
            var24[0] = var2;
            var23 = new Array(1);
            var23[0] = var91;
            var2 = function() {
                var3 = _closure1_slot40;
                var2 = var3.getChannelThreadsVersion;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var55 = var25.bind(var26)(var24, var2, var23);
            var2 = var15[var3];
            var25 = var12.bind(var4)(var2);
            var24 = var25.useStateFromStoresObject;
            var2 = _closure1_slot30;
            var23 = new Array(1);
            var23[0] = var2;
            var2 = function() {
                var2 = _closure1_slot30;
                var1 = var2.getMessageInteractionStates;
                var1 = var1.bind(var2)();
                return var1;
            };
            var50 = var24.bind(var25)(var23, var2);
            var2 = var15[var3];
            var28 = var12.bind(var4)(var2);
            var26 = var28.useStateFromStores;
            var2 = _closure1_slot29;
            var25 = new Array(1);
            var25[0] = var2;
            var2 = 104;
            var2 = var15[var2];
            var2 = var12.bind(var4)(var2);
            r106 = var2.isVersionEqual;
            r108 = function() {
                var3 = _closure1_slot29;
                var1 = var3.getInteractionComponentStates;
                var2 = var1.bind(var3)();
                var1 = new Array(2);
                var1[0] = var2;
                var2 = var3.getInteractionComponentStateVersion;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            r107 = new Array(0);
            r110 = var28;
            r109 = var25;
            var2 = r110[var26](r109, r108, r107, r106, r105);
            var2 = var16.bind(var4)(var2, var13);
            var49 = var2[var14];
            var48 = var2[var8];
            var2 = var15[var3];
            var24 = var12.bind(var4)(var2);
            var23 = var24.useStateFromStores;
            var2 = _closure1_slot21;
            var16 = new Array(1);
            var16[0] = var2;
            var2 = function() {
                var1 = _closure1_slot21;
                var1 = var1.hasLoadedExperiments;
                return var1;
            };
            var46 = var23.bind(var24)(var16, var2);
            var2 = 105;
            var2 = var15[var2];
            var23 = var12.bind(var4)(var2);
            var16 = var23.useIsSpamMessageRequest;
            var2 = var7.id;
            var87 = var16.bind(var23)(var2);
            var2 = 106;
            var2 = var15[var2];
            var15 = var12.bind(var4)(var2);
            var12 = var15.useIsMessageRequest;
            var2 = var7.id;
            var88 = var12.bind(var15)(var2);
            var47 = var19 != var80;
            if(!var47) { _fun0043_ip = 2229; continue _fun0043 }
 2211:
            var2 = var80.ready;
            if(var2) { _fun0043_ip = 2226; continue _fun0043 }
 2220:
            var2 = var80.cached;
 2226:
            var47 = var2;
 2229:
            var90 = var19 != var80;
            if(!var90) { _fun0043_ip = 2242; continue _fun0043 }
 2236:
            var90 = var80.cached;
 2242:
            var89 = var19 != var80;
            if(!var89) { _fun0043_ip = 2255; continue _fun0043 }
 2249:
            var89 = var80.ready;
 2255:
            if(!var89) { _fun0043_ip = 2267; continue _fun0043 }
 2258:
            var2 = var80.loadingMore;
            var89 = !var2;
 2267:
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = var15[var3];
            var24 = var12.bind(var4)(var2);
            var23 = var24.useStateFromStores;
            var2 = _closure1_slot26;
            var16 = new Array(1);
            var16[0] = var2;
            var2 = function() {
                var2 = _closure1_slot26;
                var1 = var2.getRsvpVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var54 = var23.bind(var24)(var16, var2);
            var2 = var15[var3];
            var24 = var12.bind(var4)(var2);
            var23 = var24.useStateFromStores;
            var2 = _closure1_slot25;
            var16 = new Array(1);
            var16[0] = var2;
            var2 = function() {
                var2 = _closure1_slot25;
                var1 = var2.getMessagesVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var53 = var23.bind(var24)(var16, var2);
            var2 = var15[var3];
            var24 = var12.bind(var4)(var2);
            var23 = var24.useStateFromStores;
            var2 = _closure1_slot46;
            var16 = new Array(1);
            var16[0] = var2;
            var2 = function() {
                var2 = _closure1_slot46;
                var1 = var2.getCommunicationDisabledVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var52 = var23.bind(var24)(var16, var2);
            var2 = var15[var3];
            var24 = var12.bind(var4)(var2);
            var23 = var24.useStateFromStores;
            var2 = _closure1_slot53;
            var16 = new Array(1);
            var16[0] = var2;
            var2 = function() {
                var4 = _closure1_slot53;
                var3 = var4.can;
                var1 = _closure1_slot67;
                var2 = var1.MODERATE_MEMBERS;
                var1 = _closure2_slot4;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var43 = var23.bind(var24)(var16, var2);
            var2 = 107;
            var2 = var15[var2];
            var15 = var12.bind(var4)(var2);
            var12 = var15.useCurrentUserCommunicationDisabled;
            var16 = var19 == var5;
            var2 = undefined;
            if(var16) { _fun0043_ip = 2463; continue _fun0043 }
 2458:
            var2 = var5.id;
 2463:
            var12 = var12.bind(var15)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var12, var13);
            var44 = var2[var8];
            var8 = _closure1_slot0;
            r104 = _closure1_slot2;
            var2 = r104[var3];
            var15 = var8.bind(var4)(var2);
            var13 = var15.useStateFromStores;
            var2 = _closure1_slot41;
            var12 = new Array(1);
            var12[0] = var2;
            var2 = function() {
                var1 = _closure1_slot41;
                var1 = var1.locale;
                return var1;
            };
            var42 = var13.bind(var15)(var12, var2);
            var2 = _closure1_slot1;
            var12 = 108;
            var12 = r104[var12];
            var23 = var2.bind(var4)(var12);
            var16 = var23.useExperiment;
            var13 = {};
            var12 = '41de6d_2';
            var13['location'] = var12;
            var12 = {};
            var15 = false;
            var12['autoTrackExposure'] = var15;
            var12 = var16.bind(var23)(var13, var12);
            var41 = var12.paymentsBlocked;
            var12 = r104[var3];
            var23 = var8.bind(var4)(var12);
            var16 = var23.useStateFromStores;
            var12 = _closure1_slot39;
            var13 = new Array(1);
            var13[0] = var12;
            var12 = function() {
                _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = var3.isForumPost;
                    var1 = var1.bind(var3)();
                    var3 = !var1;
                    var1 = !var3;
                    if(var3) { _fun0054_ip = 48; continue _fun0054 }
 26:
                    var4 = _closure1_slot39;
                    var3 = var4.hasJoined;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
 48:
                    return var1;
                }
            };
            var40 = var16.bind(var23)(var13, var12);
            var12 = r104[var3];
            var23 = var8.bind(var4)(var12);
            var16 = var23.useStateFromStores;
            var12 = _closure1_slot32;
            var13 = new Array(1);
            var13[0] = var12;
            var12 = function() {
                var3 = _closure1_slot32;
                var2 = var3.shouldDisplayPrompt;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var39 = var16.bind(var23)(var13, var12);
            var12 = r104[var3];
            var23 = var8.bind(var4)(var12);
            var16 = var23.useStateFromStores;
            var12 = _closure1_slot35;
            var13 = new Array(1);
            var13[0] = var12;
            var12 = function() {
                var2 = _closure1_slot35;
                var1 = var2.isEligible;
                var1 = var1.bind(var2)();
                return var1;
            };
            var37 = var16.bind(var23)(var13, var12);
            var12 = r104[var3];
            var23 = var8.bind(var4)(var12);
            var16 = var23.useStateFromStores;
            var12 = _closure1_slot17;
            var13 = new Array(1);
            var13[0] = var12;
            var12 = function() {
                var2 = _closure1_slot17;
                var1 = var2.getLazyCacheStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var38 = var16.bind(var23)(var13, var12);
            var12 = 86;
            var12 = r104[var12];
            var13 = var8.bind(var4)(var12);
            var12 = var13.useMessageJumpAndroidKeyboardHeight;
            var36 = var12.bind(var13)();
            var12 = 109;
            var12 = r104[var12];
            var12 = var2.bind(var4)(var12);
            var33 = var12.bind(var4)();
            var12 = 110;
            var12 = r104[var12];
            var13 = var8.bind(var4)(var12);
            var12 = var13.useChannelSummariesExperiment;
            var12 = var12.bind(var13)(var7);
            var _closure2_slot7 = var12;
            var13 = r104[var3];
            var24 = var8.bind(var4)(var13);
            var23 = var24.useStateFromStores;
            var13 = _closure1_slot38;
            var16 = new Array(1);
            var16[0] = var13;
            var13 = new Array(2);
            var13[0] = var12;
            var12 = var7.id;
            var13[1] = var12;
            var12 = function() {
                _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
 0:
                    var3 = _closure2_slot7;
                    var1 = null;
                    if(!var3) { _fun0055_ip = 39; continue _fun0055 }
 12:
                    var4 = _closure1_slot38;
                    var3 = var4.selectedSummary;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 39:
                    return var1;
                }
            };
            var34 = var23.bind(var24)(var16, var12, var13);
            var12 = r104[var3];
            var24 = var8.bind(var4)(var12);
            var23 = var24.useStateFromStores;
            var12 = _closure1_slot28;
            var16 = new Array(1);
            var16[0] = var12;
            var13 = function() {
                var3 = _closure1_slot28;
                var2 = var3.getSelectedSummary;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var35 = var23.bind(var24)(var16, var13);
            var23 = _closure1_slot10;
            var24 = var23.useEffect;
            var13 = var7.id;
            var16 = new Array(5);
            var16[0] = var13;
            var13 = var80.hasMoreAfter;
            var16[1] = var13;
            var13 = var80.hasMoreBefore;
            var16[2] = var13;
            var13 = var80.length;
            var16[3] = var13;
            var13 = var80.ready;
            var16[4] = var13;
            var13 = function() {
                _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
 0:
                    var2 = _closure2_slot1;
                    var2 = var2.ready;
                    var2 = !var2;
                    if(var2) { _fun0056_ip = 34; continue _fun0056 }
 19:
                    var3 = _closure2_slot1;
                    var4 = var3.length;
                    var3 = 0;
                    var2 = var3 !== var4;
 34:
                    if(var2) { _fun0056_ip = 47; continue _fun0056 }
 37:
                    var3 = _closure2_slot1;
                    var2 = var3.hasMoreBefore;
 47:
                    if(var2) { _fun0056_ip = 60; continue _fun0056 }
 50:
                    var3 = _closure2_slot1;
                    var2 = var3.hasMoreAfter;
 60:
                    if(var2) { _fun0056_ip = 121; continue _fun0056 }
 63:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 85;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.updateChannelDimensions;
                    var1 = _closure2_slot0;
                    var9 = var1.id;
                    var2 = 1;
                    var6 = 0;
                    var10 = var5;
                    var8 = var2;
                    var7 = var2;
                    var1 = var10[var4](var9, var8, var7, var6, var5);
 121:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var24.bind(var23)(var13, var16);
            var13 = r104[var3];
            var24 = var8.bind(var4)(var13);
            var16 = var24.useStateFromStores;
            var13 = new Array(1);
            var13[0] = var12;
            var12 = function() {
                var3 = _closure1_slot28;
                var2 = var3.isGravitySelectedChannel;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var25 = var16.bind(var24)(var13, var12);
            var12 = {};
            var12['guild'] = var5;
            var12['channel'] = var7;
            var12['messages'] = var80;
            var12['isMessagesReady'] = var47;
            var5 = function useShouldTrackAnnouncementMessageViews(arg1) {
                _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.guild;
                    var10 = var1.channel;
                    var _closure3_slot0 = var10;
                    var7 = var1.messages;
                    var _closure3_slot1 = var7;
                    var8 = var1.isMessagesReady;
                    var _closure3_slot2 = var8;
                    var3 = undefined;
                    var _closure3_slot3 = var3;
                    var4 = null;
                    var6 = var4 == var5;
                    var1 = undefined;
                    if(var6) { _fun0057_ip = 94; continue _fun0057 }
 56:
                    var9 = var5.features;
                    var5 = var4 == var9;
                    var1 = undefined;
                    if(var5) { _fun0057_ip = 94; continue _fun0057 }
 71:
                    var6 = var9.has;
                    var5 = _closure1_slot62;
                    var5 = var5.COMMUNITY;
                    var1 = var6.bind(var9)(var5);
 94:
                    var9 = var4 != var1;
                    if(!var9) { _fun0057_ip = 104; continue _fun0057 }
 101:
                    var9 = var1;
 104:
                    _closure3_slot3 = var9;
                    var6 = _closure1_slot10;
                    var5 = var6.useMemo;
                    var11 = var10.type;
                    var4 = new Array(5);
                    var4[0] = var11;
                    var10 = var10.guild_id;
                    var4[1] = var10;
                    var4[2] = var9;
                    var4[3] = var8;
                    var4[4] = var7;
                    var2 = function() {
                        _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
 0:
                            var1 = _closure3_slot0;
                            var2 = var1.type;
                            var1 = _closure1_slot60;
                            var1 = var1.GUILD_ANNOUNCEMENT;
                            var1 = var2 === var1;
                            if(!var1) { _fun0058_ip = 36; continue _fun0058 }
 32:
                            var1 = _closure3_slot3;
 36:
                            var2 = _closure3_slot2;
                            if(!var2) { _fun0058_ip = 67; continue _fun0058 }
 43:
                            var5 = _closure3_slot1;
                            var4 = var5.some;
                            var3 = function(arg1) {
                                _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
 0:
                                    var5 = arg1;
                                    var1 = var5.messageReference;
                                    var3 = null;
                                    var1 = var3 != var1;
                                    if(!var1) { _fun0059_ip = 28; continue _fun0059 }
 18:
                                    var2 = var5.webhookId;
                                    var1 = var3 != var2;
 28:
                                    if(!var1) { _fun0059_ip = 55; continue _fun0059 }
 31:
                                    var4 = var5.hasFlag;
                                    var2 = _closure1_slot65;
                                    var2 = var2.IS_CROSSPOST;
                                    var1 = var4.bind(var5)(var2);
 55:
                                    if(!var1) { _fun0059_ip = 74; continue _fun0059 }
 58:
                                    var2 = _closure3_slot0;
                                    var2 = var2.guild_id;
                                    var1 = var3 != var2;
 74:
                                    return var1;
                                }
                            };
                            var2 = var4.bind(var5)(var3);
 67:
                            if(var1) { _fun0058_ip = 73; continue _fun0058 }
 70:
                            var1 = var2;
 73:
                            return var1;
                        }
                    };
                    var5 = var5.bind(var6)(var2, var4);
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 96;
                    var1 = var4[var1];
                    var4 = var2.bind(var3)(var1);
                    var3 = var4.useExperiment;
                    var2 = {};
                    var1 = '41de6d_1';
                    var2['location'] = var1;
                    var1 = {};
                    var5 = !var5;
                    var1['disable'] = var5;
                    var5 = true;
                    var1['autoTrackExposure'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = var1.enabled;
                    return var1;
                }
            };
            var32 = var5.bind(var4)(var12);
            var5 = 111;
            var5 = r104[var5];
            var12 = var8.bind(var4)(var5);
            var5 = var12.useShouldDisplaySpoilerObscurity;
            var31 = var5.bind(var12)(var7);
            var5 = 112;
            var5 = r104[var5];
            var12 = var8.bind(var4)(var5);
            var5 = var12.useIsAgeVerified;
            var13 = var5.bind(var12)();
            var16 = var23.useEffect;
            var12 = new Array(2);
            var12[0] = var91;
            var12[1] = var93;
            var5 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 90;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.handleChannelSelect;
                var1 = var1.bind(var2)();
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 90;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleChannelSelect;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                return var1;
            };
            var5 = var16.bind(var23)(var5, var12);
            var5 = 113;
            var5 = r104[var5];
            var16 = var8.bind(var4)(var5);
            var12 = var16.useShouldDisableInteractiveComponents;
            var5 = var7.id;
            var30 = var12.bind(var16)(var5);
            var12 = _closure1_slot33;
            var5 = var7.id;
            var29 = var12.bind(var4)(var5);
            var5 = r104[var3];
            var24 = var8.bind(var4)(var5);
            var23 = var24.useStateFromStores;
            var5 = _closure1_slot22;
            var16 = new Array(1);
            var16[0] = var5;
            var12 = new Array(1);
            var12[0] = var91;
            var5 = function() {
                var3 = _closure1_slot22;
                var2 = var3.getChannelFpInfo;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var28 = var23.bind(var24)(var16, var5, var12);
            var5 = 114;
            var5 = r104[var5];
            var5 = var2.bind(var4)(var5);
            r100 = var5.bind(var4)();
            var5 = 115;
            var5 = r104[var5];
            var5 = var2.bind(var4)(var5);
            var5 = var5.bind(var4)(var80);
            var24 = var5.unloadedContentEntryMessageIds;
            var23 = var5.unloadableContentEntryMessageIds;
            var5 = r104[var3];
            var26 = var8.bind(var4)(var5);
            var16 = var26.useStateFromStores;
            var5 = _closure1_slot57;
            var12 = new Array(1);
            var12[0] = var5;
            var5 = function() {
                _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
 0:
                    var2 = _closure1_slot57;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0060_ip = 37; continue _fun0060 }
 27:
                    var3 = var4.isStaff;
                    var2 = var3.bind(var4)();
 37:
                    var1 = var1 != var2;
                    if(!var1) { _fun0060_ip = 47; continue _fun0060 }
 44:
                    var1 = var2;
 47:
                    return var1;
                }
            };
            r103 = var16.bind(var26)(var12, var5);
            var5 = 116;
            var5 = r104[var5];
            var12 = var8.bind(var4)(var5);
            var5 = var12.useShouldFilterKeywords;
            var26 = var5.bind(var12)();
            var5 = r104[var3];
            var51 = var8.bind(var4)(var5);
            var16 = var51.useStateFromStores;
            var5 = _closure1_slot24;
            var12 = new Array(1);
            var12[0] = var5;
            var5 = function() {
                var2 = _closure1_slot24;
                var1 = var2.getVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var51 = var16.bind(var51)(var12, var5);
            var5 = 117;
            var5 = r104[var5];
            var12 = var8.bind(var4)(var5);
            var5 = var12.useGuildProfileInviteEmbedHoldoutEnabled;
            var16 = var5.bind(var12)(var15);
            var5 = 118;
            var5 = r104[var5];
            var15 = var8.bind(var4)(var5);
            var12 = var15.useColorStore;
            var5 = function(arg1) {
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var1 = arg1;
                var1 = var1.palette;
                var1 = var2.bind(var3)(var1);
                var1 = var1.length;
                return var1;
            };
            var15 = var12.bind(var15)(var5);
            var3 = r104[var3];
            var12 = var8.bind(var4)(var3);
            var5 = var12.useStateFromStores;
            r105 = _closure1_slot20;
            var3 = new Array(1);
            var3[0] = r105;
            var1 = function() {
                var3 = _closure1_slot20;
                var2 = var3.getGuildEmoji;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var5.bind(var12)(var3, var1);
            var3 = _closure1_slot75;
            var5 = 119;
            var1 = r104[var5];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var5 = r104[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.Profiles;
            var5 = var5.Messages;
            var1['profile'] = var5;
            var5 = var7.isThread;
            var7 = var5.bind(var7)();
            if(!var7) { _fun0043_ip = 3540; continue _fun0043 }
 3501:
            r104 = _closure1_slot73;
            var8 = _closure1_slot1;
            r105 = _closure1_slot2;
            var5 = 120;
            var5 = r105[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            r105 = true;
            var5['absolute'] = r105;
            var7 = r104.bind(var4)(var8, var5);
 3540:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot73;
            var7 = _closure1_slot77;
            var6 = {};
            r104 = arg2;
            var6['ref'] = r104;
            var6['theme'] = var9;
            var6['isStaff'] = r103;
            var6['animateEmoji'] = r102;
            var6['animateStickers'] = r101;
            var6['containerWidth'] = r100;
            var6['gifAutoPlay'] = var100;
            var6['inlineAttachmentMedia'] = var99;
            var6['inlineEmbedMedia'] = var98;
            var6['renderEmbeds'] = var97;
            var6['renderReactions'] = var96;
            var6['developerMode'] = var95;
            var6['roleStyle'] = var94;
            var6['guildId'] = var93;
            var6['currentUserId'] = var92;
            var6['channelId'] = var91;
            var6['isMessagesReady'] = var47;
            var6['isMessagesCached'] = var90;
            var6['isMessagesAckable'] = var89;
            var6['isMessageRequest'] = var88;
            var6['isSpamMessageRequest'] = var87;
            var6['messageAuthorActivities'] = var86;
            var6['invites'] = var85;
            var6['appDirectoryEmbedApplications'] = var84;
            var6['invalidAppDirectoryEmbedApplicationIds'] = var83;
            var6['invalidApplicationIds'] = var82;
            var6['applicationAssetFetchingIds'] = var81;
            var6['messages'] = var80;
            var6['messagesWithActivitiesLaunching'] = var79;
            var6['activityInstanceIds'] = var78;
            var6['activityParticipants'] = var77;
            var6['activityInstancePresenceDetails'] = var76;
            var6['appDirectoryEmbedApplicationFetchStates'] = var75;
            var6['mediaPostPreviewEmbeds'] = var74;
            var6['guildTemplates'] = var73;
            var6['buildOverrides'] = var72;
            var6['quests'] = var71;
            var6['isFetchingCurrentQuests'] = var70;
            var6['editingMessageId'] = var69;
            var6['replyingMessageId'] = var68;
            var6['oldestUnreadMessageId'] = var67;
            var6['canChat'] = var66;
            var6['canSendMessages'] = var65;
            var6['isCallActive'] = var64;
            var6['voiceStateChannelId'] = var63;
            var6['resolvingGiftCodes'] = var62;
            var6['resolvedGiftCodes'] = var61;
            var6['acceptingGiftCodes'] = var60;
            var6['participantsLength'] = var59;
            var6['uploads'] = var58;
            var6['repliedIds'] = var57;
            var6['useReducedMotion'] = var56;
            var6['channelThreadsVersion'] = var55;
            var6['rsvpVersion'] = var54;
            var6['failedMessagesVersion'] = var53;
            var6['communicationDisabledVersion'] = var52;
            var6['forwardGuildsVersion'] = var51;
            var6['interactionStates'] = var50;
            var6['interactionComponentStates'] = var49;
            var6['interactionComponentStatesVersion'] = var48;
            if(!var46) { _fun0043_ip = 3863; continue _fun0043 }
 3860:
            var46 = var47;
 3863:
            var6['hasLoadedExperiments'] = var46;
            var6['guildSystemChannelFlags'] = var45;
            var6['currentUserCommunicationDisabled'] = var44;
            var6['renderCommunicationDisabled'] = var43;
            var6['userSettingsLocale'] = var42;
            var6['paymentsBlocked'] = var41;
            var6['isFollowingForumPost'] = var40;
            var6['showMediaPostSharePrompt'] = var39;
            var6['showPushFeedback'] = var37;
            var37 = 'initializing';
            var37 = var37 !== var38;
            var6['cacheStoreLoaded'] = var37;
            var6['androidKeyboardHeight'] = var36;
            if(!(var19 != var35)) { _fun0043_ip = 3935; continue _fun0043 }
 3932:
            var34 = var35;
 3935:
            var6['selectedSummary'] = var34;
            var6['keyboardType'] = var33;
            var6['shouldTrackAnnouncementMessageViews'] = var32;
            var6['shouldObscureSpoiler'] = var31;
            var6['shouldDisableInteractiveComponents'] = var30;
            var6['channelPolls'] = var29;
            var6['explicitMediaFalsePositiveInfo'] = var28;
            var6['threadStartingReferenceMessage'] = var27;
            var6['shouldFilterKeywords'] = var26;
            var6['fromICYMITab'] = var25;
            var6['unloadedContentEntryMessageIds'] = var24;
            var6['unloadableContentEntryMessageIds'] = var23;
            var6['applications'] = var22;
            var6['resolvedReferralTrialOfferIds'] = var21;
            var21 = var19 == var20;
            var19 = undefined;
            if(var21) { _fun0043_ip = 4019; continue _fun0043 }
 4014:
            var19 = var20.id;
 4019:
            var6['referralTrialOfferId'] = var19;
            var6['isPremiumTier2User'] = var18;
            var6['activityInviteMessageIds'] = var17;
            var14 = 0;
            if(var16) { _fun0043_ip = 4042; continue _fun0043 }
 4039:
            var14 = var15;
 4042:
            var6['guildInviteColorsFetched'] = var14;
            var6['isAgeVerified'] = var13;
            var6['guildEmojis'] = var12;
            var6['enableSwipeActions'] = var11;
            r109 = var6;
            r108 = var10;
            var10 = copyDataProperties(r109, r108);
            var6 = var8.bind(var4)(var7, var6, var9);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 121;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/chat/Messages.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();