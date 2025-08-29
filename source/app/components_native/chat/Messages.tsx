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
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot82;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot82;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
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
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot81 = var1;
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
    var _closure1_slot82 = var1;
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
            _closure1_slot83 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot83 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.useChannelPollInteractions;
    var _closure1_slot32 = var4;
    var4 = 30;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
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
    var9 = var6[var4];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot45 = var9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getUserCommunicationDisabledVersion;
    var _closure1_slot46 = var4;
    var4 = 43;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
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
    var4 = var8.bind(var1)(var4);
    var _closure1_slot59 = var4;
    var4 = 56;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot60 = var4;
    var4 = 57;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.ActivityActionTypes;
    var _closure1_slot61 = var9;
    var9 = var4.AnalyticEvents;
    var _closure1_slot62 = var9;
    var9 = var4.ChannelTypes;
    var _closure1_slot63 = var9;
    var9 = var4.ChannelTypesSets;
    var _closure1_slot64 = var9;
    var9 = var4.GuildFeatures;
    var _closure1_slot65 = var9;
    var9 = var4.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot66 = var9;
    var9 = var4.ME;
    var _closure1_slot67 = var9;
    var9 = var4.MessageFlags;
    var _closure1_slot68 = var9;
    var9 = var4.MessageTypes;
    var _closure1_slot69 = var9;
    var4 = var4.Permissions;
    var _closure1_slot70 = var4;
    var4 = 58;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.Changeset;
    var _closure1_slot71 = var9;
    var9 = var4.RowType;
    var _closure1_slot72 = var9;
    var4 = var4.SeparatorType;
    var _closure1_slot73 = var4;
    var4 = 59;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot74 = var9;
    var4 = var4.PremiumTypes;
    var _closure1_slot75 = var4;
    var4 = 60;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot76 = var9;
    var9 = var4.Fragment;
    var _closure1_slot77 = var9;
    var4 = var4.jsxs;
    var _closure1_slot78 = var4;
    var4 = 61;
    var4 = var6[var4];
    var9 = var8.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var12 = 'Messages';
    var13 = var8;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot79 = var4;
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
                var1 = _closure1_slot83;
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
                var1['_frozen'] = var6;
                var7 = _closure1_slot10;
                var6 = var7.createRef;
                var6 = var6.bind(var7)();
                var1['_chatRef'] = var6;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 62;
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
                var6 = var1.props;
                var1['prevPropsWhileFrozen'] = var6;
                var6 = var1.state;
                var1['prevStateWhileFrozen'] = var6;
                var7 = _closure1_slot1;
                var6 = 63;
                var6 = var8[var6];
                var6 = var7.bind(var5)(var6);
                var9 = var6.prototype;
                var9 = Object.create(var9, {constructor: {value: var6}});
                var15 = var9;
                var6 = new var15[var6](var14);
                var6 = var6 instanceof Object ? var6 : var9;
                var1['chatManager'] = var6;
                var6 = 64;
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
                    var2 = 65;
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
                        var3 = 66;
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
                        var5 = 67;
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
                                var3 = 67;
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
                                var2 = 68;
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
                                var6 = 67;
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
                    var1 = 68;
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
                        var2 = _closure1_slot81;
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
                        var2 = _closure1_slot71;
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
                        var3 = 67;
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
                        var2 = 68;
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
                        var2 = 68;
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
                        var2 = 68;
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
                        var2 = 69;
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
                        var4 = 67;
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
                        var4 = 68;
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
                        var7 = 67;
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
                        var7 = 70;
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
                        var6 = 67;
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
                        var4 = 68;
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
                            var1 = 68;
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
                        var1 = 69;
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
                        var1 = 71;
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
                        var18 = _closure1_slot79;
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
                        var15 = 72;
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
                        var3 = 73;
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
                        var8 = 67;
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
                            var4 = 67;
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
                        var1 = 74;
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
                        var4 = _closure1_slot66;
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
                        var1 = 74;
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
                        var4 = _closure1_slot66;
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
                    var1 = 75;
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
                    var1 = 75;
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
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleDoubleTapMessage;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleDoubleTapMessage'] = var4;
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
                    var2 = var3.handleTapJoinRichPresence;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapJoinRichPresence'] = var4;
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
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleTapPreviewSharedClientTheme;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapPreviewSharedClientTheme'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getHandlers;
                    var3 = var1.bind(var2)();
                    var2 = var3.handleSharedClientThemeViewed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleSharedClientThemeViewed'] = var4;
                var4 = function() {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var3 = var1.channel;
                        var1 = var1.canChat;
                        if(!var1) { _fun0022_ip = 55; continue _fun0022 }
 26:
                        var5 = _closure1_slot52;
                        var4 = var5.can;
                        var2 = _closure1_slot70;
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
                        var1 = 76;
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
                    var1 = 77;
                    var5 = var3[var1];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.openLazy;
                    var7 = _closure1_slot0;
                    var4 = 79;
                    var4 = var3[var4];
                    var7 = var7.bind(var1)(var4);
                    var4 = 78;
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
                        var3 = 68;
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
                        var3 = 68;
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
                        var2 = 68;
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
                        var3 = 68;
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
                            var13 = 66;
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
                            var6 = 68;
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
                            var3 = 74;
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
                            var7 = _closure1_slot66;
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
                        var1 = 70;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var6.bind(var1)(var3);
                        var3 = var6.isIOS;
                        var3 = var3.bind(var6)();
                        if(!var3) { _fun0029_ip = 98; continue _fun0029 }
 62:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 80;
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
                    var1 = 72;
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
                    var1 = 72;
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
                        var1 = 81;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.track;
                        var2 = _closure1_slot62;
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
                        var7 = _closure1_slot51;
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
                        var3 = 74;
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
                        var1 = 74;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.fetchMessages;
                        var1 = {};
                        var5 = var5.id;
                        var1['channelId'] = var5;
                        var4 = _closure1_slot66;
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
                        var1 = 82;
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
                        var5 = _closure1_slot72;
                        var5 = var5.SEPARATOR;
                        var9 = var11;
                        if(!(var6 === var5)) { _fun0032_ip = 260; continue _fun0032 }
 161:
                        var5 = var8[var11];
                        var6 = var5.id;
                        var5 = _closure1_slot73;
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
                        var5 = _closure1_slot72;
                        var5 = var5.SEPARATOR;
                        var9 = var11;
                        if(!(var6 === var5)) { _fun0032_ip = 260; continue _fun0032 }
 231:
                        var5 = var8[var11];
                        var6 = var5.id;
                        var5 = _closure1_slot73;
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
                        var5 = 68;
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
                        var11 = 67;
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
                        var2 = 74;
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
                    var3 = 68;
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
                        var4 = var4.unloadableContentEntryMessageIds;
                        var _closure4_slot23 = var4;
                        var4 = null;
                        var6 = var4 != var1;
                        var1 = null;
                        if(!var6) { _fun0033_ip = 336; continue _fun0033 }
 273:
                        var5 = var4 != var5;
                        var1 = null;
                        if(!var5) { _fun0033_ip = 336; continue _fun0033 }
 282:
                        var1 = null;
                        if(!var3) { _fun0033_ip = 336; continue _fun0033 }
 287:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 83;
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
                                var3 = _closure1_slot81;
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var2 = 84;
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
                                var6 = _closure4_slot23;
                                var2['unloadableContentEntryMessageIds'] = var6;
                                var2 = var4.bind(var5)(var2);
                                var4 = var3.bind(var5)(var2);
                                var3 = var4.bind(var5)();
                                var2 = var3.done;
                                if(var2) { _fun0034_ip = 425; continue _fun0034 }
 367:
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
                                if(!var2) { _fun0034_ip = 367; continue _fun0034 }
 425:
                                var1 = _closure3_slot0;
                                var2 = var1.chatManager;
                                var1 = var2.createChangeset;
                                var1 = var1.bind(var2)();
                                return var1;
                            }
                        };
                        var1 = var3.bind(var4)(var2);
 336:
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
                var3 = 85;
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
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
                var5 = this;
                var2 = var5._frozen;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 86;
                var3 = var3[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var4 = var6.isScreenIndexFrozen;
                var3 = var5.props;
                var3 = var3.screenIndex;
                var3 = var4.bind(var6)(var3);
                var5['_frozen'] = var3;
                if(var2) { _fun0036_ip = 87; continue _fun0036 }
 65:
                var2 = var5.syncMessageDisplay;
                var2 = var2.bind(var5)();
                var2 = var5.recordTimings;
                var2 = var2.bind(var5)();
                _fun0036_ip = 111; continue _fun0036;
 87:
                var4 = var5.componentDidUpdate;
                var3 = var5.prevPropsWhileFrozen;
                var2 = var5.prevStateWhileFrozen;
                var2 = var4.bind(var5)(var3, var2);
 111:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'recordTimings';
        var5['key'] = var7;
        var7 = function value() {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
                var2 = this;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 83;
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
                if(var3) { _fun0037_ip = 137; continue _fun0037 }
 94:
                var8 = var2.props;
                var8 = var8.messages;
                var8 = var8.ready;
                if(!var8) { _fun0037_ip = 134; continue _fun0037 }
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
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
                var2 = this;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 86;
                var4 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.isScreenIndexFrozen;
                var4 = var2.props;
                var4 = var4.screenIndex;
                var4 = var5.bind(var6)(var4);
                var2['_frozen'] = var4;
                var4 = var2._frozen;
                if(var4) { _fun0038_ip = 127; continue _fun0038 }
 65:
                var5 = var2._chatUpdatesQueue;
                var4 = var5.cleanup;
                var4 = var4.bind(var5)();
                var4 = var2.clearRows;
                var4 = var4.bind(var2)();
                var6 = _closure1_slot19;
                var3 = var2.props;
                var5 = var3.channelId;
                var3 = var2.props;
                var4 = var3.screenIndex;
                var3 = false;
                var3 = var6.bind(var1)(var5, var4, var3);
                return var1;
 127:
                var1 = var2.props;
                var2['prevPropsWhileFrozen'] = var1;
                var1 = var2.state;
                var2['prevStateWhileFrozen'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'shouldComponentUpdate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
                var3 = arg1;
                var4 = this;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var8 = 87;
                var1 = var1[var8];
                var6 = undefined;
                var7 = var2.bind(var6)(var1);
                var2 = var4.state;
                var1 = arg2;
                var1 = var7.bind(var6)(var2, var1);
                var1 = !var1;
                if(var1) { _fun0039_ip = 156; continue _fun0039 }
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
                if(var2) { _fun0039_ip = 153; continue _fun0039 }
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
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
 0:
                var3 = arg1;
                var2 = this;
                var _closure3_slot0 = var2;
                var _closure3_slot1 = var3;
                var4 = var2.props;
                var4 = var4.currentUserId;
                var7 = null;
                if(!(var7 != var4)) { _fun0040_ip = 3308; continue _fun0040 }
 36:
                var4 = var2.props;
                var4 = var4.messages;
                var5 = var3.messages;
                var8 = var3.channelId;
                var6 = var2.props;
                var6 = var6.channelId;
                if(!(var8 !== var6)) { _fun0040_ip = 128; continue _fun0040 }
 72:
                var6 = var2.clearRows;
                var6 = var6.bind(var2)();
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 88;
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
                if(!var6) { _fun0040_ip = 151; continue _fun0040 }
 140:
                var8 = var2.props;
                var6 = var8.isMessagesAckable;
 151:
                if(!var6) { _fun0040_ip = 162; continue _fun0040 }
 154:
                var6 = false;
                var2['hasHandledScroll'] = var6;
 162:
                var6 = var2.shouldJumpToOriginalPost;
                var6 = var6.bind(var2)();
                if(!var6) { _fun0040_ip = 224; continue _fun0040 }
 175:
                var8 = var2.scrollToTop;
                var6 = false;
                var6 = var8.bind(var2)(var6);
                var5 = var5.jumpSequenceId;
                var4 = var4.jumpSequenceId;
                if(!(var5 === var4)) { _fun0040_ip = 224; continue _fun0040 }
 204:
                var5 = var2.setState;
                var4 = {};
                var6 = true;
                var4['hasJumpedToOriginalPost'] = var6;
                var4 = var5.bind(var2)(var4);
 224:
                var4 = var2.props;
                var6 = var4.isMessagesReady;
                if(!var6) { _fun0040_ip = 252; continue _fun0040 }
 238:
                var4 = var2.props;
                var4 = var4.isMessagesCached;
                var6 = !var4;
 252:
                if(!var6) { _fun0040_ip = 261; continue _fun0040 }
 255:
                var6 = var3.isMessagesCached;
 261:
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 89;
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
                if(var13) { _fun0040_ip = 417; continue _fun0040 }
 396:
                var15 = var3.inlineEmbedMedia;
                var12 = var2.props;
                var12 = var12.inlineEmbedMedia;
                var13 = var15 !== var12;
 417:
                if(var13) { _fun0040_ip = 441; continue _fun0040 }
 420:
                var15 = var3.renderEmbeds;
                var12 = var2.props;
                var12 = var12.renderEmbeds;
                var13 = var15 !== var12;
 441:
                if(var13) { _fun0040_ip = 465; continue _fun0040 }
 444:
                var15 = var3.renderReactions;
                var12 = var2.props;
                var12 = var12.renderReactions;
                var13 = var15 !== var12;
 465:
                if(var13) { _fun0040_ip = 489; continue _fun0040 }
 468:
                var15 = var3.animateEmoji;
                var12 = var2.props;
                var12 = var12.animateEmoji;
                var13 = var15 !== var12;
 489:
                if(var13) { _fun0040_ip = 513; continue _fun0040 }
 492:
                var15 = var3.animateStickers;
                var12 = var2.props;
                var12 = var12.animateStickers;
                var13 = var15 !== var12;
 513:
                if(var13) { _fun0040_ip = 537; continue _fun0040 }
 516:
                var15 = var3.gifAutoPlay;
                var12 = var2.props;
                var12 = var12.gifAutoPlay;
                var13 = var15 !== var12;
 537:
                if(var13) { _fun0040_ip = 561; continue _fun0040 }
 540:
                var15 = var3.containerWidth;
                var12 = var2.props;
                var12 = var12.containerWidth;
                var13 = var15 !== var12;
 561:
                if(var13) { _fun0040_ip = 585; continue _fun0040 }
 564:
                var15 = var3.guildSystemChannelFlags;
                var12 = var2.props;
                var12 = var12.guildSystemChannelFlags;
                var13 = var15 !== var12;
 585:
                if(var13) { _fun0040_ip = 609; continue _fun0040 }
 588:
                var15 = var3.userSettingsLocale;
                var12 = var2.props;
                var12 = var12.userSettingsLocale;
                var13 = var15 !== var12;
 609:
                if(var13) { _fun0040_ip = 633; continue _fun0040 }
 612:
                var15 = var3.roleStyle;
                var12 = var2.props;
                var12 = var12.roleStyle;
                var13 = var15 !== var12;
 633:
                if(var13) { _fun0040_ip = 657; continue _fun0040 }
 636:
                var15 = var3.canSendMessages;
                var12 = var2.props;
                var12 = var12.canSendMessages;
                var13 = var15 !== var12;
 657:
                if(var13) { _fun0040_ip = 681; continue _fun0040 }
 660:
                var15 = var3.showPushFeedback;
                var12 = var2.props;
                var12 = var12.showPushFeedback;
                var13 = var15 !== var12;
 681:
                if(var13) { _fun0040_ip = 705; continue _fun0040 }
 684:
                var15 = var3.selectedSummary;
                var12 = var2.props;
                var12 = var12.selectedSummary;
                var13 = var15 !== var12;
 705:
                if(var13) { _fun0040_ip = 729; continue _fun0040 }
 708:
                var15 = var3.shouldObscureSpoiler;
                var12 = var2.props;
                var12 = var12.shouldObscureSpoiler;
                var13 = var15 !== var12;
 729:
                if(var13) { _fun0040_ip = 753; continue _fun0040 }
 732:
                var15 = var3.shouldFilterKeywords;
                var12 = var2.props;
                var12 = var12.shouldFilterKeywords;
                var13 = var15 !== var12;
 753:
                if(var13) { _fun0040_ip = 777; continue _fun0040 }
 756:
                var15 = var3.explicitMediaFalsePositiveInfo;
                var12 = var2.props;
                var12 = var12.explicitMediaFalsePositiveInfo;
                var13 = var15 !== var12;
 777:
                if(var13) { _fun0040_ip = 801; continue _fun0040 }
 780:
                var15 = var3.isStaff;
                var12 = var2.props;
                var12 = var12.isStaff;
                var13 = var15 !== var12;
 801:
                if(var13) { _fun0040_ip = 825; continue _fun0040 }
 804:
                var15 = var3.isAgeVerified;
                var12 = var2.props;
                var12 = var12.isAgeVerified;
                var13 = var15 !== var12;
 825:
                if(var13) { _fun0040_ip = 869; continue _fun0040 }
 828:
                var12 = arg2;
                var15 = var12.shouldForceRender;
                var12 = var2.state;
                var12 = var12.shouldForceRender;
                var12 = var15 !== var12;
                if(!var12) { _fun0040_ip = 866; continue _fun0040 }
 855:
                var15 = var2.state;
                var12 = var15.shouldForceRender;
 866:
                var13 = var12;
 869:
                if(var13) { _fun0040_ip = 893; continue _fun0040 }
 872:
                var15 = var3.theme;
                var12 = var2.props;
                var12 = var12.theme;
                var13 = var15 !== var12;
 893:
                if(var13) { _fun0040_ip = 917; continue _fun0040 }
 896:
                var15 = var3.doubleTapToReactEnabled;
                var12 = var2.props;
                var12 = var12.doubleTapToReactEnabled;
                var13 = var15 !== var12;
 917:
                var15 = var3.resolvingGiftCodes;
                var12 = var2.props;
                var12 = var12.resolvingGiftCodes;
                var37 = var15 !== var12;
                if(var37) { _fun0040_ip = 962; continue _fun0040 }
 941:
                var15 = var3.resolvedGiftCodes;
                var12 = var2.props;
                var12 = var12.resolvedGiftCodes;
                var37 = var15 !== var12;
 962:
                if(var37) { _fun0040_ip = 986; continue _fun0040 }
 965:
                var15 = var3.acceptingGiftCodes;
                var12 = var2.props;
                var12 = var12.acceptingGiftCodes;
                var37 = var15 !== var12;
 986:
                var _closure3_slot2 = var37;
                var36 = var3.uploads;
                var12 = var2.props;
                var35 = var12.uploads;
                var15 = _closure1_slot1;
                var12 = _closure1_slot2;
                var17 = 87;
                var12 = var12[var17];
                var18 = var15.bind(var16)(var12);
                var15 = var3.interactionStates;
                var12 = var2.props;
                var12 = var12.interactionStates;
                var12 = var18.bind(var16)(var15, var12);
                var27 = !var12;
                var _closure3_slot3 = var27;
                var15 = var3.channelPolls;
                var12 = var2.props;
                var12 = var12.channelPolls;
                var24 = var15 !== var12;
                var _closure3_slot4 = var24;
                var15 = var3.interactionComponentStatesVersion;
                var12 = var2.props;
                var12 = var12.interactionComponentStatesVersion;
                var26 = var15 !== var12;
                var _closure3_slot5 = var26;
                var15 = var3.shouldDisableInteractiveComponents;
                var12 = var2.props;
                var12 = var12.shouldDisableInteractiveComponents;
                var12 = var15 !== var12;
                var _closure3_slot6 = var12;
                var15 = var3.communicationDisabledVersion;
                var12 = var2.props;
                var12 = var12.communicationDisabledVersion;
                var32 = var15 !== var12;
                var _closure3_slot7 = var32;
                var15 = var3.failedMessagesVersion;
                var12 = var2.props;
                var12 = var12.failedMessagesVersion;
                var31 = var15 !== var12;
                var _closure3_slot8 = var31;
                var15 = var3.renderCommunicationDisabled;
                var12 = var2.props;
                var12 = var12.renderCommunicationDisabled;
                var28 = var15 !== var12;
                var _closure3_slot9 = var28;
                var30 = var3.forwardGuildsVersion;
                var12 = var2.props;
                var29 = var12.forwardGuildsVersion;
                var12 = var2.props;
                var15 = var12.channel;
                var12 = var15.isForumPost;
                var25 = var12.bind(var15)();
                if(!var25) { _fun0040_ip = 1268; continue _fun0040 }
 1247:
                var15 = var3.isFollowingForumPost;
                var12 = var2.props;
                var12 = var12.isFollowingForumPost;
                var25 = var15 !== var12;
 1268:
                var _closure3_slot10 = var25;
                var15 = var3.showMediaPostSharePrompt;
                var12 = var2.props;
                var12 = var12.showMediaPostSharePrompt;
                var23 = var15 !== var12;
                var _closure3_slot11 = var23;
                var15 = var3.unloadedContentEntryMessageIds;
                var12 = var2.props;
                var12 = var12.unloadedContentEntryMessageIds;
                var22 = var15 !== var12;
                var _closure3_slot12 = var22;
                var15 = var3.invalidApplicationIds;
                var12 = var2.props;
                var12 = var12.invalidApplicationIds;
                var12 = var15 !== var12;
                var _closure3_slot13 = var12;
                var18 = var3.activityInstanceIds;
                var15 = var2.props;
                var15 = var15.activityInstanceIds;
                var34 = var18 !== var15;
                if(var34) { _fun0040_ip = 1392; continue _fun0040 }
 1371:
                var18 = var3.activityParticipants;
                var15 = var2.props;
                var15 = var15.activityParticipants;
                var34 = var18 !== var15;
 1392:
                if(var34) { _fun0040_ip = 1416; continue _fun0040 }
 1395:
                var18 = var3.applicationAssetFetchingIds;
                var15 = var2.props;
                var15 = var15.applicationAssetFetchingIds;
                var34 = var18 !== var15;
 1416:
                if(var34) { _fun0040_ip = 1440; continue _fun0040 }
 1419:
                var18 = var3.activityInstancePresenceDetails;
                var15 = var2.props;
                var15 = var15.activityInstancePresenceDetails;
                var34 = var18 !== var15;
 1440:
                if(var34) { _fun0040_ip = 1464; continue _fun0040 }
 1443:
                var18 = var3.messagesWithActivitiesLaunching;
                var15 = var2.props;
                var15 = var15.messagesWithActivitiesLaunching;
                var34 = var18 !== var15;
 1464:
                if(var34) { _fun0040_ip = 1470; continue _fun0040 }
 1467:
                var34 = var12;
 1470:
                var _closure3_slot14 = var34;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var18 = var12[var17];
                var21 = var15.bind(var16)(var18);
                var20 = var21.areArraysShallowEqual;
                var19 = var3.activityInviteMessageIds;
                var18 = var2.props;
                var18 = var18.activityInviteMessageIds;
                var18 = var20.bind(var21)(var19, var18);
                var21 = !var18;
                var _closure3_slot15 = var21;
                var12 = var12[var17];
                var18 = var15.bind(var16)(var12);
                var17 = var18.areArraysShallowEqual;
                var15 = var3.resolvedReferralTrialOfferIds;
                var12 = var2.props;
                var12 = var12.resolvedReferralTrialOfferIds;
                var12 = var17.bind(var18)(var15, var12);
                var20 = !var12;
                if(var20) { _fun0040_ip = 1592; continue _fun0040 }
 1571:
                var15 = var3.referralTrialOfferId;
                var12 = var2.props;
                var12 = var12.referralTrialOfferId;
                var20 = var15 !== var12;
 1592:
                if(var20) { _fun0040_ip = 1616; continue _fun0040 }
 1595:
                var15 = var3.isPremiumTier2User;
                var12 = var2.props;
                var12 = var12.isPremiumTier2User;
                var20 = var15 !== var12;
 1616:
                var _closure3_slot16 = var20;
                var15 = var3.guildInviteColorsFetched;
                var12 = var2.props;
                var12 = var12.guildInviteColorsFetched;
                var19 = var15 !== var12;
                var _closure3_slot17 = var19;
                var15 = var3.guildEmojis;
                var12 = var2.props;
                var12 = var12.guildEmojis;
                var18 = var15 !== var12;
                var _closure3_slot18 = var18;
                var15 = var3.selfActivities;
                var12 = var2.props;
                var12 = var12.selfActivities;
                var17 = var15 !== var12;
                var _closure3_slot19 = var17;
                var15 = var3.currentClientVoiceChannelId;
                var12 = var2.props;
                var12 = var12.currentClientVoiceChannelId;
                var33 = var15 !== var12;
                var _closure3_slot20 = var33;
                var15 = var3.voiceStatePrivateChannelId;
                var12 = var2.props;
                var12 = var12.voiceStatePrivateChannelId;
                var15 = var15 !== var12;
                var38 = var3.activityLaunchJoinStates;
                var12 = var2.props;
                var12 = var12.activityLaunchJoinStates;
                var12 = var38 !== var12;
                var _closure3_slot21 = var12;
                if(var13) { _fun0040_ip = 2682; continue _fun0040 }
 1772:
                if(var37) { _fun0040_ip = 2682; continue _fun0040 }
 1778:
                if(!(var36 === var35)) { _fun0040_ip = 2682; continue _fun0040 }
 1785:
                if(var34) { _fun0040_ip = 2682; continue _fun0040 }
 1791:
                var35 = var3.messages;
                var34 = var2.props;
                var34 = var34.messages;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 1815:
                var35 = var3.editingMessageId;
                var34 = var2.props;
                var34 = var34.editingMessageId;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 1839:
                var35 = var3.replyingMessageId;
                var34 = var2.props;
                var34 = var34.replyingMessageId;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 1863:
                if(var15) { _fun0040_ip = 2682; continue _fun0040 }
 1869:
                var35 = var3.messageAuthorActivities;
                var34 = var2.props;
                var34 = var34.messageAuthorActivities;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 1893:
                var35 = var3.oldestUnreadMessageId;
                var34 = var2.props;
                var34 = var34.oldestUnreadMessageId;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 1917:
                var35 = var3.invites;
                var34 = var2.props;
                var34 = var34.invites;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 1941:
                var35 = var3.appDirectoryEmbedApplications;
                var34 = var2.props;
                var34 = var34.appDirectoryEmbedApplications;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 1965:
                var35 = var3.invalidAppDirectoryEmbedApplicationIds;
                var34 = var2.props;
                var34 = var34.invalidAppDirectoryEmbedApplicationIds;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 1989:
                var35 = var3.appDirectoryEmbedApplicationFetchStates;
                var34 = var2.props;
                var34 = var34.appDirectoryEmbedApplicationFetchStates;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 2013:
                var35 = var3.guildTemplates;
                var34 = var2.props;
                var34 = var34.guildTemplates;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 2037:
                var35 = var3.buildOverrides;
                var34 = var2.props;
                var34 = var34.buildOverrides;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 2061:
                var35 = var3.quests;
                var34 = var2.props;
                var34 = var34.quests;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 2085:
                var35 = var3.isFetchingCurrentQuests;
                var34 = var2.props;
                var34 = var34.isFetchingCurrentQuests;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 2109:
                var35 = var3.participantsLength;
                var34 = var2.props;
                var34 = var34.participantsLength;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 2133:
                var35 = var3.isMessagesReady;
                var34 = var2.props;
                var34 = var34.isMessagesReady;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 2157:
                var35 = var3.channelThreadsVersion;
                var34 = var2.props;
                var34 = var34.channelThreadsVersion;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 2181:
                var35 = var3.rsvpVersion;
                var34 = var2.props;
                var34 = var34.rsvpVersion;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 2205:
                var35 = var3.repliedIds;
                var34 = var2.props;
                var34 = var34.repliedIds;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 2229:
                var35 = var3.hasLoadedExperiments;
                var34 = var2.props;
                var34 = var34.hasLoadedExperiments;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 2253:
                var35 = var3.isMessageRequest;
                var34 = var2.props;
                var34 = var34.isMessageRequest;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 2277:
                var35 = var3.isSpamMessageRequest;
                var34 = var2.props;
                var34 = var34.isSpamMessageRequest;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 2301:
                var35 = var3.currentUserCommunicationDisabled;
                var34 = var2.props;
                var34 = var34.currentUserCommunicationDisabled;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 2325:
                var35 = var3.userSettingsLocale;
                var34 = var2.props;
                var34 = var34.userSettingsLocale;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 2349:
                var35 = var3.selectedSummary;
                var34 = var2.props;
                var34 = var34.selectedSummary;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 2373:
                var35 = var3.showPushFeedback;
                var34 = var2.props;
                var34 = var34.showPushFeedback;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 2397:
                var35 = var3.cacheStoreLoaded;
                var34 = var2.props;
                var34 = var34.cacheStoreLoaded;
                if(!(var35 === var34)) { _fun0040_ip = 2682; continue _fun0040 }
 2421:
                if(var33) { _fun0040_ip = 2682; continue _fun0040 }
 2427:
                if(var32) { _fun0040_ip = 2682; continue _fun0040 }
 2433:
                if(var31) { _fun0040_ip = 2682; continue _fun0040 }
 2439:
                if(!(var30 === var29)) { _fun0040_ip = 2682; continue _fun0040 }
 2446:
                if(var28) { _fun0040_ip = 2682; continue _fun0040 }
 2452:
                if(var27) { _fun0040_ip = 2682; continue _fun0040 }
 2458:
                if(var26) { _fun0040_ip = 2682; continue _fun0040 }
 2464:
                if(var25) { _fun0040_ip = 2682; continue _fun0040 }
 2470:
                if(!(var7 == var10)) { _fun0040_ip = 2682; continue _fun0040 }
 2477:
                if(!(var7 == var8)) { _fun0040_ip = 2682; continue _fun0040 }
 2484:
                var26 = var3.androidKeyboardHeight;
                var25 = var2.props;
                var25 = var25.androidKeyboardHeight;
                if(!(var26 === var25)) { _fun0040_ip = 2682; continue _fun0040 }
 2508:
                var26 = var3.mediaPostPreviewEmbeds;
                var25 = var2.props;
                var25 = var25.mediaPostPreviewEmbeds;
                if(!(var26 === var25)) { _fun0040_ip = 2682; continue _fun0040 }
 2532:
                var26 = var3.shouldObscureSpoiler;
                var25 = var2.props;
                var25 = var25.shouldObscureSpoiler;
                if(!(var26 === var25)) { _fun0040_ip = 2682; continue _fun0040 }
 2556:
                var26 = var3.shouldFilterKeywords;
                var25 = var2.props;
                var25 = var25.shouldFilterKeywords;
                if(!(var26 === var25)) { _fun0040_ip = 2682; continue _fun0040 }
 2577:
                var26 = var3.shouldDisableInteractiveComponents;
                var25 = var2.props;
                var25 = var25.shouldDisableInteractiveComponents;
                if(!(var26 === var25)) { _fun0040_ip = 2682; continue _fun0040 }
 2598:
                if(var24) { _fun0040_ip = 2682; continue _fun0040 }
 2601:
                if(var23) { _fun0040_ip = 2682; continue _fun0040 }
 2604:
                var24 = var3.threadStartingReferenceMessage;
                var23 = var2.props;
                var23 = var23.threadStartingReferenceMessage;
                if(!(var24 === var23)) { _fun0040_ip = 2682; continue _fun0040 }
 2625:
                if(var22) { _fun0040_ip = 2682; continue _fun0040 }
 2628:
                var23 = var3.applications;
                var22 = var2.props;
                var22 = var22.applications;
                if(!(var23 === var22)) { _fun0040_ip = 2682; continue _fun0040 }
 2649:
                if(var21) { _fun0040_ip = 2682; continue _fun0040 }
 2652:
                if(var20) { _fun0040_ip = 2682; continue _fun0040 }
 2655:
                if(var19) { _fun0040_ip = 2682; continue _fun0040 }
 2658:
                if(var18) { _fun0040_ip = 2682; continue _fun0040 }
 2661:
                if(var17) { _fun0040_ip = 2682; continue _fun0040 }
 2664:
                if(var12) { _fun0040_ip = 2682; continue _fun0040 }
 2667:
                var12 = var2.recordTimings;
                var12 = var12.bind(var2)();
                _fun0040_ip = 3308; continue _fun0040;
 2682:
                var12 = global;
                var12 = var12.Set;
                var17 = var12.prototype;
                var17 = Object.create(var17, {constructor: {value: var12}});
                var42 = var17;
                var12 = new var42[var12](var41);
                var12 = var12 instanceof Object ? var12 : var17;
                var _closure3_slot22 = var12;
                var18 = var3.editingMessageId;
                var17 = var2.props;
                var17 = var17.editingMessageId;
                if(!(var18 !== var17)) { _fun0040_ip = 2797; continue _fun0040 }
 2735:
                var17 = var2.props;
                var17 = var17.editingMessageId;
                if(!(var7 != var17)) { _fun0040_ip = 2771; continue _fun0040 }
 2750:
                var18 = var12.add;
                var17 = var2.props;
                var17 = var17.editingMessageId;
                var17 = var18.bind(var12)(var17);
 2771:
                var17 = var3.editingMessageId;
                if(!(var7 != var17)) { _fun0040_ip = 2797; continue _fun0040 }
 2781:
                var18 = var12.add;
                var17 = var3.editingMessageId;
                var17 = var18.bind(var12)(var17);
 2797:
                var18 = var3.replyingMessageId;
                var17 = var2.props;
                var17 = var17.replyingMessageId;
                if(!(var18 !== var17)) { _fun0040_ip = 2880; continue _fun0040 }
 2818:
                var17 = var2.props;
                var17 = var17.replyingMessageId;
                if(!(var7 != var17)) { _fun0040_ip = 2854; continue _fun0040 }
 2833:
                var18 = var12.add;
                var17 = var2.props;
                var17 = var17.replyingMessageId;
                var17 = var18.bind(var12)(var17);
 2854:
                var17 = var3.replyingMessageId;
                if(!(var7 != var17)) { _fun0040_ip = 2880; continue _fun0040 }
 2864:
                var18 = var12.add;
                var17 = var3.replyingMessageId;
                var17 = var18.bind(var12)(var17);
 2880:
                var18 = var3.isMessagesReady;
                var17 = var2.props;
                var17 = var17.isMessagesReady;
                if(!(var18 === var17)) { _fun0040_ip = 2946; continue _fun0040 }
 2901:
                var18 = var3.isCallActive;
                var17 = var2.props;
                var17 = var17.isCallActive;
                if(!(var18 === var17)) { _fun0040_ip = 2946; continue _fun0040 }
 2922:
                if(var15) { _fun0040_ip = 2946; continue _fun0040 }
 2925:
                var17 = var3.participantsLength;
                var15 = var2.props;
                var15 = var15.participantsLength;
                if(!(var17 !== var15)) { _fun0040_ip = 3034; continue _fun0040 }
 2946:
                var15 = _closure1_slot1;
                var17 = _closure1_slot2;
                var14 = 65;
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
                    var1 = _closure1_slot69;
                    var1 = var1.CALL;
                    var1 = var2 === var1;
                    return var1;
                };
                var14 = var16.bind(var17)(var15, var14);
                if(!(var7 != var14)) { _fun0040_ip = 3034; continue _fun0040 }
 3019:
                var15 = var12.add;
                var14 = var14.id;
                var14 = var15.bind(var12)(var14);
 3034:
                var15 = var3.channelThreadsVersion;
                var14 = var2.props;
                var14 = var14.channelThreadsVersion;
                var14 = var15 !== var14;
                var _closure3_slot23 = var14;
                var15 = var3.rsvpVersion;
                var14 = var2.props;
                var14 = var14.rsvpVersion;
                var14 = var15 !== var14;
                var _closure3_slot24 = var14;
                var15 = var3.repliedIds;
                var14 = var2.props;
                var14 = var14.repliedIds;
                var14 = var15 !== var14;
                var _closure3_slot25 = var14;
                var15 = var3.hasLoadedExperiments;
                var14 = var2.props;
                var14 = var14.hasLoadedExperiments;
                var14 = var15 !== var14;
                var _closure3_slot26 = var14;
                var14 = var3.communicationDisabledVersion;
                var15 = var7 != var14;
                var7 = -1;
                if(!var15) { _fun0040_ip = 3156; continue _fun0040 }
 3153:
                var7 = var14;
 3156:
                var _closure3_slot27 = var7;
                var3 = var3.cacheStoreLoaded;
                var7 = !var3;
                if(!var7) { _fun0040_ip = 3183; continue _fun0040 }
 3172:
                var3 = var2.props;
                var7 = var3.cacheStoreLoaded;
 3183:
                var _closure3_slot28 = var7;
                var3 = var2.props;
                var14 = var3.messages;
                var3 = var14.forEach;
                var1 = function(arg1) {
                    _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
 0:
                        var1 = arg1;
                        var3 = _closure3_slot20;
                        if(!var3) { _fun0041_ip = 55; continue _fun0041 }
 13:
                        var3 = var1.activity;
                        var4 = null;
                        var5 = var4 == var3;
                        var4 = undefined;
                        if(var5) { _fun0041_ip = 35; continue _fun0041 }
 30:
                        var4 = var3.type;
 35:
                        var3 = _closure1_slot61;
                        var3 = var3.STREAM_REQUEST;
                        if(!(var4 !== var3)) { _fun0041_ip = 1789; continue _fun0041 }
 55:
                        var3 = _closure3_slot26;
                        if(!var3) { _fun0041_ip = 87; continue _fun0041 }
 62:
                        var4 = var1.type;
                        var3 = _closure1_slot69;
                        var3 = var3.USER_JOIN;
                        if(!(var4 !== var3)) { _fun0041_ip = 1768; continue _fun0041 }
 87:
                        var3 = _closure3_slot25;
                        if(!var3) { _fun0041_ip = 165; continue _fun0041 }
 94:
                        var4 = var1.type;
                        var3 = _closure1_slot69;
                        var3 = var3.REPLY;
                        if(!(var4 === var3)) { _fun0041_ip = 165; continue _fun0041 }
 116:
                        var3 = var1.messageReference;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0041_ip = 165; continue _fun0041 }
 128:
                        var4 = _closure3_slot0;
                        var4 = var4.props;
                        var5 = var4.repliedIds;
                        var4 = var5.has;
                        var3 = var3.message_id;
                        var3 = var4.bind(var5)(var3);
                        if(var3) { _fun0041_ip = 1745; continue _fun0041 }
 165:
                        var3 = _closure3_slot23;
                        if(!var3) { _fun0041_ip = 202; continue _fun0041 }
 172:
                        var4 = var1.hasFlag;
                        var3 = _closure1_slot68;
                        var3 = var3.HAS_THREAD;
                        var3 = var4.bind(var1)(var3);
                        if(var3) { _fun0041_ip = 1724; continue _fun0041 }
 202:
                        var3 = _closure3_slot24;
                        if(!var3) { _fun0041_ip = 229; continue _fun0041 }
 209:
                        var3 = var1.codedLinks;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(!(var4 > var3))) { _fun0041_ip = 1703; continue _fun0041 }
 229:
                        var3 = _closure3_slot18;
                        if(!var3) { _fun0041_ip = 261; continue _fun0041 }
 236:
                        var4 = var1.type;
                        var3 = _closure1_slot69;
                        var3 = var3.EMOJI_ADDED;
                        if(!(var4 !== var3)) { _fun0041_ip = 1682; continue _fun0041 }
 261:
                        var3 = _closure3_slot9;
                        if(var3) { _fun0041_ip = 1658; continue _fun0041 }
 271:
                        var3 = _closure3_slot7;
                        if(!var3) { _fun0041_ip = 349; continue _fun0041 }
 278:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var4 = var3.guildId;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0041_ip = 349; continue _fun0041 }
 298:
                        var6 = _closure1_slot46;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var5 = var3.guildId;
                        var3 = var1.author;
                        var4 = var3.id;
                        var3 = undefined;
                        var4 = var6.bind(var3)(var5, var4);
                        var3 = _closure3_slot27;
                        if(!(!(var4 > var3))) { _fun0041_ip = 1658; continue _fun0041 }
 349:
                        var3 = _closure3_slot8;
                        if(!var3) { _fun0041_ip = 389; continue _fun0041 }
 356:
                        var3 = var1.author;
                        var4 = var3.id;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.currentUserId;
                        if(!(var4 !== var3)) { _fun0041_ip = 1634; continue _fun0041 }
 389:
                        var3 = _closure3_slot3;
                        if(!var3) { _fun0041_ip = 446; continue _fun0041 }
 396:
                        var3 = _closure3_slot1;
                        var4 = var3.interactionStates;
                        var3 = var1.id;
                        var4 = var4[var3];
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var5 = var3.interactionStates;
                        var3 = var1.id;
                        var3 = var5[var3];
                        if(!(var4 === var3)) { _fun0041_ip = 1610; continue _fun0041 }
 446:
                        var3 = _closure3_slot5;
                        if(!var3) { _fun0041_ip = 515; continue _fun0041 }
 453:
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
                        if(!(var4 === var3)) { _fun0041_ip = 1586; continue _fun0041 }
 515:
                        var3 = _closure3_slot6;
                        if(!var3) { _fun0041_ip = 542; continue _fun0041 }
 522:
                        var3 = var1.components;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(var3 === var4)) { _fun0041_ip = 1562; continue _fun0041 }
 542:
                        var3 = _closure3_slot4;
                        if(!var3) { _fun0041_ip = 599; continue _fun0041 }
 549:
                        var3 = _closure3_slot1;
                        var4 = var3.channelPolls;
                        var3 = var1.id;
                        var4 = var4[var3];
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var5 = var3.channelPolls;
                        var3 = var1.id;
                        var3 = var5[var3];
                        if(!(var4 === var3)) { _fun0041_ip = 1538; continue _fun0041 }
 599:
                        var3 = _closure3_slot12;
                        if(!var3) { _fun0041_ip = 668; continue _fun0041 }
 606:
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
                        if(!(var4 === var3)) { _fun0041_ip = 1514; continue _fun0041 }
 668:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var4 = var3.channel;
                        var3 = var4.isForumPost;
                        var3 = var3.bind(var4)();
                        if(!var3) { _fun0041_ip = 771; continue _fun0041 }
 695:
                        var3 = _closure3_slot10;
                        if(var3) { _fun0041_ip = 709; continue _fun0041 }
 702:
                        var3 = _closure3_slot11;
                        if(!var3) { _fun0041_ip = 771; continue _fun0041 }
 709:
                        var4 = var1.id;
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 66;
                        var5 = var5[var3];
                        var3 = undefined;
                        var6 = var6.bind(var3)(var5);
                        var5 = var6.castChannelIdAsMessageId;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.channelId;
                        var3 = var5.bind(var6)(var3);
                        if(!(var4 !== var3)) { _fun0041_ip = 1490; continue _fun0041 }
 771:
                        var3 = _closure3_slot14;
                        if(!var3) { _fun0041_ip = 793; continue _fun0041 }
 778:
                        var4 = var1.activityInstance;
                        var3 = null;
                        if(!(var3 == var4)) { _fun0041_ip = 1466; continue _fun0041 }
 793:
                        var3 = _closure3_slot15;
                        if(!var3) { _fun0041_ip = 827; continue _fun0041 }
 800:
                        var6 = var1.activity;
                        var5 = null;
                        var7 = var5 == var6;
                        var4 = undefined;
                        if(var7) { _fun0041_ip = 823; continue _fun0041 }
 817:
                        var4 = var6.party_id;
 823:
                        var3 = var5 != var4;
 827:
                        if(!var3) { _fun0041_ip = 849; continue _fun0041 }
 830:
                        var5 = _closure3_slot22;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
 849:
                        var3 = var1.author;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0041_ip = 1808; continue _fun0041 }
 864:
                        var7 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var8 = 90;
                        var6 = var3[var8];
                        var3 = undefined;
                        var10 = var7.bind(var3)(var6);
                        var9 = var10.messageAuthorActivitiesChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var9.bind(var10)(var1, var7, var6);
                        if(var6) { _fun0041_ip = 1442; continue _fun0041 }
 921:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var10 = var7.bind(var3)(var6);
                        var9 = var10.codedLinksChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var9.bind(var10)(var1, var7, var6);
                        if(var6) { _fun0041_ip = 1442; continue _fun0041 }
 970:
                        var6 = _closure3_slot2;
                        if(!var6) { _fun0041_ip = 1026; continue _fun0041 }
 977:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var10 = var7.bind(var3)(var6);
                        var9 = var10.giftCodesChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var9.bind(var10)(var1, var7, var6);
                        if(var6) { _fun0041_ip = 1442; continue _fun0041 }
 1026:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var9 = var7.bind(var3)(var6);
                        var8 = var9.mediaPostPreviewEmbedsChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var8.bind(var9)(var1, var7, var6);
                        if(var6) { _fun0041_ip = 1442; continue _fun0041 }
 1075:
                        var6 = _closure3_slot28;
                        if(!var6) { _fun0041_ip = 1099; continue _fun0041 }
 1082:
                        var7 = var1.embeds;
                        var8 = var7.length;
                        var7 = 0;
                        var6 = var8 > var7;
 1099:
                        if(!var6) { _fun0041_ip = 1121; continue _fun0041 }
 1102:
                        var8 = _closure3_slot22;
                        var7 = var8.add;
                        var6 = var1.id;
                        var6 = var7.bind(var8)(var6);
 1121:
                        var6 = var1.type;
                        var5 = _closure1_slot69;
                        var5 = var5.THREAD_STARTER_MESSAGE;
                        var5 = var6 === var5;
                        if(!var5) { _fun0041_ip = 1172; continue _fun0041 }
 1143:
                        var6 = _closure3_slot1;
                        var7 = var6.threadStartingReferenceMessage;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var6.threadStartingReferenceMessage;
                        var5 = var7 !== var6;
 1172:
                        if(!var5) { _fun0041_ip = 1194; continue _fun0041 }
 1175:
                        var7 = _closure3_slot22;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
 1194:
                        var5 = _closure3_slot13;
                        if(!var5) { _fun0041_ip = 1210; continue _fun0041 }
 1201:
                        var6 = var1.applicationId;
                        var5 = var4 != var6;
 1210:
                        if(!var5) { _fun0041_ip = 1238; continue _fun0041 }
 1213:
                        var6 = _closure3_slot1;
                        var8 = var6.invalidApplicationIds;
                        var7 = var8.includes;
                        var6 = var1.applicationId;
                        var5 = var7.bind(var8)(var6);
 1238:
                        if(!var5) { _fun0041_ip = 1260; continue _fun0041 }
 1241:
                        var7 = _closure3_slot22;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
 1260:
                        var5 = _closure3_slot16;
                        if(!var5) { _fun0041_ip = 1327; continue _fun0041 }
 1267:
                        var8 = var1.referralTrialOfferId;
                        var5 = var4 != var8;
                        if(!var5) { _fun0041_ip = 1305; continue _fun0041 }
 1280:
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var7 = var6.resolvedReferralTrialOfferIds;
                        var6 = var7.includes;
                        var5 = var6.bind(var7)(var8);
 1305:
                        if(!var5) { _fun0041_ip = 1327; continue _fun0041 }
 1308:
                        var7 = _closure3_slot22;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
 1327:
                        var5 = _closure3_slot17;
                        if(!var5) { _fun0041_ip = 1351; continue _fun0041 }
 1334:
                        var6 = var1.codedLinks;
                        var7 = var6.length;
                        var6 = 0;
                        var5 = var7 > var6;
 1351:
                        if(!var5) { _fun0041_ip = 1373; continue _fun0041 }
 1354:
                        var7 = _closure3_slot22;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
 1373:
                        var5 = _closure3_slot19;
                        if(var5) { _fun0041_ip = 1390; continue _fun0041 }
 1380:
                        var5 = _closure3_slot21;
                        if(!var5) { _fun0041_ip = 1808; continue _fun0041 }
 1390:
                        var5 = var1.activity;
                        var6 = var4 == var5;
                        var3 = undefined;
                        if(var6) { _fun0041_ip = 1411; continue _fun0041 }
 1405:
                        var3 = var5.party_id;
 1411:
                        if(!(var4 != var3)) { _fun0041_ip = 1808; continue _fun0041 }
 1418:
                        var5 = _closure3_slot22;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 1808; continue _fun0041;
 1442:
                        var5 = _closure3_slot22;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 1808; continue _fun0041;
 1466:
                        var5 = _closure3_slot22;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 1808; continue _fun0041;
 1490:
                        var5 = _closure3_slot22;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 1808; continue _fun0041;
 1514:
                        var5 = _closure3_slot22;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 1808; continue _fun0041;
 1538:
                        var5 = _closure3_slot22;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 1808; continue _fun0041;
 1562:
                        var5 = _closure3_slot22;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 1808; continue _fun0041;
 1586:
                        var5 = _closure3_slot22;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 1808; continue _fun0041;
 1610:
                        var5 = _closure3_slot22;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 1808; continue _fun0041;
 1634:
                        var5 = _closure3_slot22;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 1808; continue _fun0041;
 1658:
                        var5 = _closure3_slot22;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 1808; continue _fun0041;
 1682:
                        var5 = _closure3_slot22;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 1808; continue _fun0041;
 1703:
                        var5 = _closure3_slot22;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 1808; continue _fun0041;
 1724:
                        var5 = _closure3_slot22;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 1808; continue _fun0041;
 1745:
                        var5 = _closure3_slot22;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        var3 = undefined;
                        return var3;
 1768:
                        var5 = _closure3_slot22;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 1808; continue _fun0041;
 1789:
                        var3 = _closure3_slot22;
                        var2 = var3.add;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
 1808:
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
 3308:
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
            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
 0:
                var3 = arg1;
                var1 = this;
                var2 = var3.isAtBottom;
                var9 = var3.isNearBottom;
                var4 = undefined;
                if(!(var9 === var4)) { _fun0042_ip = 26; continue _fun0042 }
 24:
                var9 = false;
 26:
                var11 = var3.isNearTop;
                if(!(var11 === var4)) { _fun0042_ip = 38; continue _fun0042 }
 36:
                var11 = false;
 38:
                var12 = var3.dragging;
                if(!(var12 === var4)) { _fun0042_ip = 50; continue _fun0042 }
 48:
                var12 = false;
 50:
                var13 = var3.decelerating;
                if(!(var13 === var4)) { _fun0042_ip = 62; continue _fun0042 }
 60:
                var13 = false;
 62:
                var5 = var3.isFirstMessageVisible;
                if(!(var5 === var4)) { _fun0042_ip = 74; continue _fun0042 }
 72:
                var5 = false;
 74:
                var3 = var1.props;
                var8 = var3.messages;
                var6 = var3.channel;
                var3 = var3.onScroll;
                var7 = null;
                if(!(var7 != var6)) { _fun0042_ip = 364; continue _fun0042 }
 105:
                var7 = var8.length;
                var10 = 0;
                if(!(var10 === var7)) { _fun0042_ip = 128; continue _fun0042 }
 116:
                var7 = var8.loadingMore;
                if(var7) { _fun0042_ip = 364; continue _fun0042 }
 128:
                var7 = var8.loadingMore;
                var7 = !var7;
                if(!var7) { _fun0042_ip = 149; continue _fun0042 }
 140:
                if(var12) { _fun0042_ip = 146; continue _fun0042 }
 143:
                var12 = var13;
 146:
                var7 = var12;
 149:
                if(!var7) { _fun0042_ip = 167; continue _fun0042 }
 152:
                var12 = var1.pendingUpdatesQueue;
                var12 = var12.length;
                var7 = var10 === var12;
 167:
                var12 = var1.isNearTop;
                if(var12) { _fun0042_ip = 206; continue _fun0042 }
 176:
                if(!var11) { _fun0042_ip = 206; continue _fun0042 }
 179:
                var11 = var8.hasMoreBefore;
                if(!var11) { _fun0042_ip = 206; continue _fun0042 }
 188:
                if(!var7) { _fun0042_ip = 206; continue _fun0042 }
 191:
                var11 = var1.loadMoreBefore;
                var11 = var11.bind(var1)();
                _fun0042_ip = 332; continue _fun0042;
 206:
                var11 = var1.isNearBottom;
                if(var11) { _fun0042_ip = 242; continue _fun0042 }
 215:
                if(!var9) { _fun0042_ip = 242; continue _fun0042 }
 218:
                var8 = var8.hasMoreAfter;
                if(!var8) { _fun0042_ip = 242; continue _fun0042 }
 227:
                if(!var7) { _fun0042_ip = 242; continue _fun0042 }
 230:
                var7 = var1.loadMoreAfter;
                var7 = var7.bind(var1)();
                _fun0042_ip = 332; continue _fun0042;
 242:
                var7 = var1.isAtBottom;
                var7 = var7 === var2;
                if(!var7) { _fun0042_ip = 261; continue _fun0042 }
 255:
                var7 = var1.hasHandledScroll;
 261:
                if(var7) { _fun0042_ip = 332; continue _fun0042 }
 264:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 88;
                var7 = var9[var7];
                var9 = var8.bind(var4)(var7);
                var8 = var9.updateChannelDimensions;
                var7 = var6.id;
                var6 = 0;
                if(!var2) { _fun0042_ip = 306; continue _fun0042 }
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
            _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
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
                var5 = 91;
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
                if(!(!(var7 <= var5))) { _fun0043_ip = 270; continue _fun0043 }
 142:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 92;
                var5 = var8[var5];
                var8 = var7.bind(var1)(var5);
                var7 = var8.questsVisibleMobileMessagesChanged;
                var5 = {};
                var5['visibleMessages'] = var6;
                var5['source'] = var9;
                var5 = var7.bind(var8)(var5);
                var5 = var4.props;
                var5 = var5.shouldTrackAnnouncementMessageViews;
                if(!var5) { _fun0043_ip = 270; continue _fun0043 }
 198:
                var4 = var4.props;
                var5 = var4.guildId;
                var4 = null;
                if(!(var4 != var5)) { _fun0043_ip = 270; continue _fun0043 }
 214:
                var4 = new Array(0);
                _closure3_slot1 = var4;
                var5 = var6.forEach;
                var3 = function(arg1) {
                    _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.message;
                        var5 = var2.messageReference;
                        var4 = null;
                        var6 = var4 == var5;
                        var1 = undefined;
                        var3 = undefined;
                        if(var6) { _fun0044_ip = 32; continue _fun0044 }
 27:
                        var3 = var5.guild_id;
 32:
                        var3 = var4 != var3;
                        if(!var3) { _fun0044_ip = 49; continue _fun0044 }
 39:
                        var5 = var2.webhookId;
                        var3 = var4 != var5;
 49:
                        if(!var3) { _fun0044_ip = 76; continue _fun0044 }
 52:
                        var6 = var2.hasFlag;
                        var5 = _closure1_slot68;
                        var5 = var5.IS_CROSSPOST;
                        var3 = var6.bind(var2)(var5);
 76:
                        var7 = var2.hasFlag;
                        var6 = _closure1_slot68;
                        var6 = var6.EPHEMERAL;
                        var6 = var7.bind(var2)(var6);
                        if(var6) { _fun0044_ip = 336; continue _fun0044 }
 106:
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var6.channel;
                        var6 = var6.type;
                        var5 = _closure1_slot63;
                        var5 = var5.GUILD_ANNOUNCEMENT;
                        if(!(var6 !== var5)) { _fun0044_ip = 148; continue _fun0044 }
 142:
                        if(!var3) { _fun0044_ip = 336; continue _fun0044 }
 148:
                        if(!var3) { _fun0044_ip = 161; continue _fun0044 }
 151:
                        var5 = var2.messageReference;
                        if(!(var4 == var5)) { _fun0044_ip = 177; continue _fun0044 }
 161:
                        var5 = _closure3_slot0;
                        var5 = var5.props;
                        var6 = var5.channelId;
                        _fun0044_ip = 188; continue _fun0044;
 177:
                        var5 = var2.messageReference;
                        var6 = var5.channel_id;
 188:
                        if(!var3) { _fun0044_ip = 215; continue _fun0044 }
 191:
                        var8 = var2.messageReference;
                        var9 = var4 == var8;
                        var5 = undefined;
                        if(var9) { _fun0044_ip = 211; continue _fun0044 }
 206:
                        var5 = var8.guild_id;
 211:
                        if(!(var4 == var5)) { _fun0044_ip = 231; continue _fun0044 }
 215:
                        var5 = _closure3_slot0;
                        var5 = var5.props;
                        var5 = var5.guildId;
                        _fun0044_ip = 242; continue _fun0044;
 231:
                        var8 = var2.messageReference;
                        var5 = var8.guild_id;
 242:
                        if(!var3) { _fun0044_ip = 255; continue _fun0044 }
 245:
                        var3 = var2.messageReference;
                        if(!(var4 == var3)) { _fun0044_ip = 262; continue _fun0044 }
 255:
                        var8 = var2.id;
                        _fun0044_ip = 274; continue _fun0044;
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
                var2 = 93;
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
            _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
 0:
                var10 = this;
                var1 = var10.props;
                var13 = var1.animateEmoji;
                var14 = var1.onPressKey;
                var17 = var1.style;
                var12 = var1.children;
                var11 = var1.HACK_fixModalInteraction;
                var15 = var1.alwaysRespectKeyboard;
                var9 = var1.messages;
                var16 = var1.doubleTapToReactEnabled;
                var4 = _closure1_slot78;
                var3 = _closure1_slot77;
                var2 = {};
                var8 = _closure1_slot76;
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 94;
                var5 = var5[var1];
                var1 = undefined;
                var7 = var7.bind(var1)(var5);
                var5 = {};
                var18 = var10._chatRef;
                var5['ref'] = var18;
                var5['style'] = var17;
                var17 = true;
                var5['inverted'] = var17;
                var5['alwaysRespectKeyboard'] = var15;
                var15 = var10.handleScrollPosition;
                var5['onChatScrollPosition'] = var15;
                var15 = var10.handleTapImage;
                var5['onTapImage'] = var15;
                var15 = var10.handleTapChannel;
                var5['onTapChannel'] = var15;
                var15 = var10.handleLongPressChannel;
                var5['onLongPressChannel'] = var15;
                var15 = var10.handleTapAttachmentLink;
                var5['onTapAttachmentLink'] = var15;
                var15 = var10.handleLongPressAttachmentLink;
                var5['onLongPressAttachmentLink'] = var15;
                var15 = var10.handleTapCall;
                var5['onTapCall'] = var15;
                var15 = var10.handleTapMention;
                var5['onTapMention'] = var15;
                var15 = var10.handleTapCommandMention;
                var5['onTapCommandMention'] = var15;
                var15 = var10.handleLongPressCommandMention;
                var5['onLongPressCommandMention'] = var15;
                var15 = var10.handleTapLink;
                var5['onTapLink'] = var15;
                var15 = var10.handleLongPressLink;
                var5['onLongPressLink'] = var15;
                var15 = var10.handleTapReaction;
                var5['onTapReaction'] = var15;
                var15 = var10.handleLongPressReaction;
                var5['onLongPressReaction'] = var15;
                var15 = var10.handleTapAvatar;
                var5['onTapAvatar'] = var15;
                var15 = var10.handleTapUsername;
                var5['onTapUsername'] = var15;
                var15 = var10.handleLongPressUsername;
                var5['onLongPressUsername'] = var15;
                var15 = var10.handleOpenSticker;
                var5['onTapSticker'] = var15;
                var15 = var10.handleLongPressSticker;
                var5['onLongPressSticker'] = var15;
                var15 = var10.handleLongPressMessage;
                var5['onLongPressMessage'] = var15;
                var15 = var10.handleInitiateReply;
                var5['onInitiateReply'] = var15;
                var15 = var10.handleInitiateEdit;
                var5['onInitiateEdit'] = var15;
                var15 = var10.handleInitiateThread;
                var5['onInitiateThread'] = var15;
                var15 = var10.handleTapMessage;
                var5['onTapMessage'] = var15;
                var15 = undefined;
                if(!var16) { _fun0045_ip = 396; continue _fun0045 }
 390:
                var15 = var10.handleDoubleTapMessage;
 396:
                var5['onDoubleTapMessage'] = var15;
                var15 = var10.handleTapSeparator;
                var5['onTapSeparator'] = var15;
                var15 = var10.handleTapInviteEmbed;
                var5['onTapInviteEmbed'] = var15;
                var15 = var10.handleTapInviteEmbedAccept;
                var5['onTapInviteEmbedAccept'] = var15;
                var15 = var10.handleTapJoinActivity;
                var5['onTapJoinActivity'] = var15;
                var15 = var10.handleTapJoinRichPresence;
                var5['onTapJoinRichPresence'] = var15;
                var5['onPressKey'] = var14;
                var5['animateEmoji'] = var13;
                var13 = var10.handleTapGiftCodeEmbed;
                var5['onTapGiftCodeEmbed'] = var13;
                var13 = var10.handleTapCancelUploadItem;
                var5['onTapCancelUploadItem'] = var13;
                var13 = var10.handleTapReply;
                var5['onTapMessageReply'] = var13;
                var13 = var10.handleTapSummary;
                var5['onTapSummary'] = var13;
                var13 = var10.handleTapSummaryJump;
                var5['onTapSummaryJump'] = var13;
                var13 = var10.handleTapGiftCodeAccept;
                var5['onTapGiftCodeAccept'] = var13;
                var13 = var10.handleTapReferralRedeem;
                var5['onTapReferralRedeem'] = var13;
                var13 = var10.handleTapThreadEmbed;
                var5['onTapThreadEmbed'] = var13;
                var13 = var10.handleTapEmoji;
                var5['onTapEmoji'] = var13;
                var13 = var10.handleTapTimestamp;
                var5['onTapTimestamp'] = var13;
                var13 = var10.handleTapInlineCode;
                var5['onTapInlineCode'] = var13;
                var13 = var10.handleTapRoleIcon;
                var5['onTapRoleIcon'] = var13;
                var13 = var10.handleTapGameIcon;
                var5['onTapGameIcon'] = var13;
                var13 = var10.handleTapSuppressNotificationsIcon;
                var5['onTapSuppressNotificationsIcon'] = var13;
                var13 = var10.handleTapConnectionsRoleTag;
                var5['onTapConnectionsRoleTag'] = var13;
                var13 = var10.handleTapTimeoutIcon;
                var5['onTapTimeoutIcon'] = var13;
                var13 = var10.handleTapButtonActionComponent;
                var5['onTapButtonActionComponent'] = var13;
                var13 = var10.handleTapSelectActionComponent;
                var5['onTapSelectActionComponent'] = var13;
                var13 = var10.handleTapWelcomeReply;
                var5['onTapWelcomeReply'] = var13;
                var13 = var10.handleTapInviteToSpeak;
                var5['onTapInviteToSpeak'] = var13;
                var13 = var10.handleTapAutoModerationActions;
                var5['onTapAutoModerationActions'] = var13;
                var13 = var10.handleTapAutoModerationFeedback;
                var5['onTapAutoModerationFeedback'] = var13;
                var13 = var10.handleTapFollowForumPost;
                var5['onTapFollowForumPost'] = var13;
                var13 = var10.handleTapShareForumPost;
                var5['onTapShareForumPost'] = var13;
                var13 = var10.handleTapReactionOverflow;
                var5['onTapReactionOverflow'] = var13;
                var13 = var10.handleTapNavBar;
                var5['onTapNavBar'] = var13;
                var13 = var10.handleCopyText;
                var5['onTapCopyText'] = var13;
                var13 = var10.handleTapOpTag;
                var5['onTapOpTag'] = var13;
                var13 = var10.handleTapTag;
                var5['onTapTag'] = var13;
                var13 = var10.handleTapRemix;
                var5['onTapRemix'] = var13;
                var13 = var10.handleMediaAttachmentPlaybackEnded;
                var5['onMediaAttachmentPlaybackEnded'] = var13;
                var13 = var10.handleMediaAttachmentPlaybackStarted;
                var5['onMediaAttachmentPlaybackStarted'] = var13;
                var13 = var10.handlerVoiceMessagePlaybackFailed;
                var5['onVoiceMessagePlaybackFailed'] = var13;
                var13 = var10.handleTapShowAltText;
                var5['onTapShowAltText'] = var13;
                var13 = var10.handleTapPostPreviewEmbed;
                var5['onTapPostPreviewEmbed'] = var13;
                var13 = var10.handleTapDismissMediaPostSharePrompt;
                var5['onTapDismissMediaPostSharePrompt'] = var13;
                var13 = var10.handleTapChannelPromptButton;
                var5['onTapChannelPromptButton'] = var13;
                var13 = var10.handleTapObscuredMediaLearnMore;
                var5['onTapObscuredMediaLearnMore'] = var13;
                var13 = var10.handleTapObscuredMediaToggle;
                var5['onTapObscuredMediaToggle'] = var13;
                var13 = var10.handleTapSafetyPolicyNoticeEmbed;
                var5['onTapSafetyPolicyNoticeEmbed'] = var13;
                var13 = var10.handleTapSafetySystemNotificationCta;
                var5['onTapSafetySystemNotificationCta'] = var13;
                var13 = var10.handleTapPollAnswer;
                var5['onTapPollAnswer'] = var13;
                var13 = var10.handleTapPollSubmitVote;
                var5['onTapPollSubmitVote'] = var13;
                var13 = var10.handleTapPollAction;
                var5['onTapPollAction'] = var13;
                var13 = var10.handleLongPressPollImage;
                var5['onLongPressPollImage'] = var13;
                var13 = var10.handleTapCtaButton;
                var5['onTapCtaButton'] = var13;
                var13 = var10.handleMessageAccessibilityAction;
                var5['onMessageAccessibilityAction'] = var13;
                var13 = var10.handleTapForwardFooter;
                var5['onTapForwardFooter'] = var13;
                var13 = var10.handleTapInlineForward;
                var5['onTapInlineForward'] = var13;
                var13 = var10.handleTapClanTagChiplet;
                var5['onTapClanTagChiplet'] = var13;
                var13 = var10.handleTapContentInventoryEntryEmbed;
                var5['onTapContentInventoryEntryEmbed'] = var13;
                var13 = var10.handleTapSoundmoji;
                var5['onTapSoundmoji'] = var13;
                var13 = var10.handleTapAppMessageEmbed;
                var5['onTapAppMessageEmbed'] = var13;
                var13 = var10.handleTapPreviewSharedClientTheme;
                var5['onTapPreviewSharedClientTheme'] = var13;
                var13 = var10.handleSharedClientThemeViewed;
                var5['onSharedClientThemeViewed'] = var13;
                var5['children'] = var12;
                var5['HACK_fixModalInteraction'] = var11;
                var11 = var10.handleTapTableView;
                var5['onTapTableView'] = var11;
                var11 = var10.handleFirstLayout;
                var5['onFirstLayout'] = var11;
                var11 = var10.handleMediaPlayFinishedAnalytics;
                var5['onMediaPlayFinishedAnalytics'] = var11;
                var10 = var10.handleMessageVisibilityChanged;
                var5['onMessageVisibilityChanged'] = var10;
                var7 = var8.bind(var1)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot76;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 95;
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
            }
        };
        var5['value'] = var6;
        var1[8] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var8);
    var _closure1_slot80 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
 0:
            var10 = arg1;
            var7 = var10.channel;
            var _closure2_slot0 = var7;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 96;
            var8 = var2[var3];
            var4 = undefined;
            var13 = var5.bind(var4)(var8);
            var12 = var13.useStateFromStores;
            var8 = _closure1_slot50;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = var7.id;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var3 = _closure1_slot50;
                var2 = var3.getMessages;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var82 = var12.bind(var13)(var11, var8, var9);
            var _closure2_slot1 = var82;
            var93 = var7.id;
            var _closure2_slot2 = var93;
            var8 = var7.getGuildId;
            var95 = var8.bind(var7)();
            var _closure2_slot3 = var95;
            var2 = var2[var3];
            var9 = var5.bind(var4)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot47;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot47;
                var2 = var3.getGuild;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var8.bind(var9)(var5, var2);
            var _closure2_slot4 = var11;
            var22 = null;
            var2 = var22 == var11;
            var46 = undefined;
            if(var2) { _fun0046_ip = 170; continue _fun0046 }
 164:
            var46 = var11.systemChannelFlags;
 170:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = var13[var3];
            var14 = var8.bind(var4)(var2);
            var12 = var14.useStateFromStores;
            var2 = _closure1_slot42;
            var9 = new Array(1);
            var9[0] = var2;
            var5 = function() {
                var2 = _closure1_slot42;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var94 = var12.bind(var14)(var9, var5, var2);
            var _closure2_slot5 = var94;
            var2 = 100;
            var5 = var13[var2];
            var5 = var8.bind(var4)(var5);
            var9 = var5.InlineAttachmentMedia;
            var5 = var9.useSetting;
            r100 = var5.bind(var9)();
            var5 = var13[var2];
            var5 = var8.bind(var4)(var5);
            var9 = var5.InlineEmbedMedia;
            var5 = var9.useSetting;
            var100 = var5.bind(var9)();
            var5 = var13[var2];
            var5 = var8.bind(var4)(var5);
            var9 = var5.RenderEmbeds;
            var5 = var9.useSetting;
            var99 = var5.bind(var9)();
            var5 = var13[var2];
            var5 = var8.bind(var4)(var5);
            var9 = var5.RenderReactions;
            var5 = var9.useSetting;
            var98 = var5.bind(var9)();
            var5 = var13[var2];
            var5 = var8.bind(var4)(var5);
            var9 = var5.DeveloperMode;
            var5 = var9.useSetting;
            var97 = var5.bind(var9)();
            var5 = var13[var2];
            var5 = var8.bind(var4)(var5);
            var9 = var5.AnimateEmoji;
            var5 = var9.useSetting;
            r104 = var5.bind(var9)();
            var5 = var13[var2];
            var5 = var8.bind(var4)(var5);
            var9 = var5.AnimateStickers;
            var5 = var9.useSetting;
            r103 = var5.bind(var9)();
            var2 = var13[var2];
            var2 = var8.bind(var4)(var2);
            var5 = var2.GifAutoPlay;
            var2 = var5.useSetting;
            r101 = var2.bind(var5)();
            var2 = var13[var3];
            var14 = var8.bind(var4)(var2);
            var12 = var14.useStateFromStores;
            var2 = _closure1_slot41;
            var9 = new Array(1);
            var9[0] = var2;
            var5 = function() {
                var1 = _closure1_slot41;
                var1 = var1.theme;
                return var1;
            };
            var2 = new Array(0);
            var9 = var12.bind(var14)(var9, var5, var2);
            var2 = 101;
            var2 = var13[var2];
            var5 = var8.bind(var4)(var2);
            var2 = var5.useIsMessageSwipeActionsEnabled;
            var14 = var2.bind(var5)();
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
                        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
 0:
                            var1 = arg1;
                            var2 = var1.author;
                            var3 = null;
                            var2 = var3 != var2;
                            if(!var2) { _fun0047_ip = 28; continue _fun0047 }
 18:
                            var4 = var1.activity;
                            var2 = var3 != var4;
 28:
                            if(!var2) { _fun0047_ip = 53; continue _fun0047 }
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
                var3 = 96;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.useStateFromStoresObject;
                var2 = _closure1_slot53;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = new Array(1);
                var2[0] = var6;
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 65;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.mapValues;
                    var2 = _closure3_slot1;
                    var1 = function(arg1, arg2) {
                        var3 = _closure1_slot53;
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
            var88 = var2.bind(var4)(var82);
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
                        _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
 0:
                            var1 = arg1;
                            var2 = var1.applicationId;
                            var4 = null;
                            var2 = var4 != var2;
                            if(!var2) { _fun0048_ip = 26; continue _fun0048 }
 17:
                            var3 = var1.application;
                            var2 = var4 == var3;
 26:
                            if(!var2) { _fun0048_ip = 51; continue _fun0048 }
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
                    _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 87;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var2);
                        var6 = var7.areArraysShallowEqual;
                        var5 = _closure3_slot1;
                        var3 = _closure3_slot2;
                        var3 = var3.current;
                        var3 = var6.bind(var7)(var5, var3);
                        if(var3) { _fun0049_ip = 172; continue _fun0049 }
 56:
                        var5 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var3 = 97;
                        var3 = var10[var3];
                        var7 = var5.bind(var1)(var3);
                        var6 = var7.fetchApplications;
                        var3 = 65;
                        var3 = var10[var3];
                        var5 = var5.bind(var1)(var3);
                        var3 = _closure3_slot1;
                        var8 = var5.bind(var1)(var3);
                        var5 = var8.filter;
                        var9 = _closure1_slot0;
                        var4 = 98;
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
            var2 = var2.bind(var4)(var82);
            var16 = _closure1_slot1;
            var2 = 102;
            var2 = var13[var2];
            var2 = var16.bind(var4)(var2);
            var2 = var2.bind(var4)(var82, var7);
            var15 = _closure1_slot3;
            var12 = 2;
            var2 = var15.bind(var4)(var2, var12);
            var17 = 0;
            var20 = var2[var17];
            var5 = 1;
            var2 = var2[var5];
            var2 = var13[var3];
            var23 = var8.bind(var4)(var2);
            var21 = var23.useStateFromStores;
            var2 = _closure1_slot49;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = function() {
                var2 = _closure1_slot49;
                var1 = var2.getInvites;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var87 = var21.bind(var23)(var19, var18, var2);
            var2 = var13[var3];
            var23 = var8.bind(var4)(var2);
            var21 = var23.useStateFromStoresObject;
            var2 = _closure1_slot23;
            var19 = new Array(1);
            var19[0] = var2;
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
            var2 = var21.bind(var23)(var19, var18, var2);
            var86 = var2.appDirectoryEmbedApplications;
            var85 = var2.invalidAppDirectoryEmbedApplicationIds;
            var77 = var2.appDirectoryEmbedApplicationFetchStates;
            var2 = var13[var3];
            var23 = var8.bind(var4)(var2);
            var21 = var23.useStateFromStoresArray;
            var2 = _closure1_slot15;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = function() {
                var2 = _closure1_slot15;
                var1 = var2.getFetchingOrFailedFetchingIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var84 = var21.bind(var23)(var19, var18);
            var18 = var13[var3];
            var23 = var8.bind(var4)(var18);
            var21 = var23.useStateFromStoresArray;
            var18 = _closure1_slot14;
            var19 = new Array(1);
            var19[0] = var18;
            var18 = function() {
                var2 = _closure1_slot14;
                var1 = var2.getFetchingIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var83 = var21.bind(var23)(var19, var18);
            var18 = var13[var3];
            var25 = var8.bind(var4)(var18);
            var24 = var25.useStateFromStoresArray;
            var18 = _closure1_slot13;
            var23 = new Array(1);
            var23[0] = var18;
            var21 = new Array(1);
            var21[0] = var93;
            var19 = function() {
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
                var1 = 98;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var80 = var24.bind(var25)(var23, var19, var21);
            var19 = var13[var3];
            var24 = var8.bind(var4)(var19);
            var23 = var24.useStateFromStoresArray;
            var21 = new Array(2);
            var21[0] = var18;
            var19 = _closure1_slot53;
            var21[1] = var19;
            var19 = function() {
                _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
 0:
                    var1 = new Array(0);
                    var _closure3_slot0 = var1;
                    var6 = function _loop(arg1) {
                        _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
 0:
                            var5 = arg1;
                            var _closure4_slot0 = var5;
                            var4 = _closure1_slot53;
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
                            if(var6) { _fun0051_ip = 83; continue _fun0051 }
 77:
                            var3 = var2.details;
 83:
                            if(!(var4 != var3)) { _fun0051_ip = 144; continue _fun0051 }
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
                    var3 = _closure1_slot81;
                    var5 = _closure1_slot13;
                    var4 = var5.getEmbeddedActivitiesForChannel;
                    var2 = _closure2_slot2;
                    var2 = var4.bind(var5)(var2);
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if(var2) { _fun0050_ip = 90; continue _fun0050 }
 65:
                    var2 = var3.value;
                    var2 = var6.bind(var5)(var2);
                    var7 = var4.bind(var5)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0050_ip = 65; continue _fun0050 }
 90:
                    return var1;
                }
            };
            var78 = var23.bind(var24)(var21, var19);
            var19 = var13[var3];
            var24 = var8.bind(var4)(var19);
            var23 = var24.useStateFromStoresArray;
            var21 = new Array(1);
            var21[0] = var18;
            var19 = function() {
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
            var79 = var23.bind(var24)(var21, var19);
            var19 = var13[var3];
            var23 = var8.bind(var4)(var19);
            var21 = var23.useStateFromStoresArray;
            var19 = new Array(1);
            var19[0] = var18;
            var18 = function() {
                _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
 0:
                    var1 = new Array(0);
                    var3 = _closure1_slot81;
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
                    if(var2) { _fun0052_ip = 148; continue _fun0052 }
 54:
                    var11 = var3.value;
                    var2 = _closure1_slot3;
                    var2 = var2.bind(var9)(var11, var5);
                    var11 = var2[var7];
                    var2 = var2[var4];
                    var11 = var2.isLaunching;
                    if(!var11) { _fun0052_ip = 96; continue _fun0052 }
 86:
                    var12 = var2.componentId;
                    var11 = var6 != var12;
 96:
                    if(!var11) { _fun0052_ip = 114; continue _fun0052 }
 99:
                    var12 = var2.componentId;
                    var12 = var12.length;
                    var11 = var12 > var7;
 114:
                    if(!var11) { _fun0052_ip = 133; continue _fun0052 }
 117:
                    var11 = var1.push;
                    var2 = var2.componentId;
                    var2 = var11.bind(var1)(var2);
 133:
                    var11 = var8.bind(var9)();
                    var2 = var11.done;
                    var3 = var11;
                    if(!var2) { _fun0052_ip = 54; continue _fun0052 }
 148:
                    return var1;
                }
            };
            var81 = var21.bind(var23)(var19, var18);
            var18 = var13[var3];
            var21 = var8.bind(var4)(var18);
            var19 = var21.useStateFromStoresArray;
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
            var2 = var19.bind(var21)(var18, var2);
            var2 = var15.bind(var4)(var2, var5);
            var25 = var2[var17];
            var2 = var13[var3];
            var21 = var8.bind(var4)(var2);
            var19 = var21.useStateFromStores;
            var2 = _closure1_slot30;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = function() {
                var2 = _closure1_slot30;
                var1 = var2.getMediaPostEmbeds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var76 = var19.bind(var21)(var18, var2);
            var2 = var13[var3];
            var23 = var8.bind(var4)(var2);
            var21 = var23.useStateFromStores;
            var2 = _closure1_slot27;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = function() {
                var2 = _closure1_slot27;
                var1 = var2.getGuildTemplates;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var75 = var21.bind(var23)(var19, var18, var2);
            var2 = var13[var3];
            var23 = var8.bind(var4)(var2);
            var21 = var23.useStateFromStores;
            var2 = _closure1_slot16;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = function() {
                var2 = _closure1_slot16;
                var1 = var2.getBuildOverrides;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var74 = var21.bind(var23)(var19, var18, var2);
            var2 = 103;
            var2 = var13[var2];
            var19 = var8.bind(var4)(var2);
            var18 = var19.useQuests;
            var2 = {'fetchPolicy': 'cache-or-network', 'callerSource': 'messages_native'};
            var2 = var18.bind(var19)(var2);
            var73 = var2.quests;
            var72 = var2.isFetchingCurrentQuests;
            var18 = var82.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot69;
                var1 = var1.PREMIUM_REFERRAL;
                var1 = var2 === var1;
                return var1;
            };
            var19 = var18.bind(var82)(var2);
            var18 = var19.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.referralTrialOfferId;
                return var1;
            };
            var19 = var18.bind(var19)(var2);
            var18 = var19.filter;
            var2 = 98;
            var2 = var13[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.isNotNullish;
            var2 = var18.bind(var19)(var2);
            var _closure2_slot6 = var2;
            var2 = var13[var3];
            var21 = var8.bind(var4)(var2);
            var19 = var21.useStateFromStoresArray;
            var2 = _closure1_slot33;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = function() {
                var3 = _closure2_slot6;
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
 0:
                        var3 = _closure1_slot33;
                        var2 = var3.getRelevantUserTrialOffer;
                        var1 = arg1;
                        var2 = var2.bind(var3)(var1);
                        var1 = null;
                        var3 = var1 == var2;
                        var1 = undefined;
                        if(var3) { _fun0053_ip = 37; continue _fun0053 }
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
                var1 = 98;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var24 = var19.bind(var21)(var18, var2);
            var2 = 104;
            var2 = var13[var2];
            var19 = var8.bind(var4)(var2);
            var18 = var19.useTrialOffer;
            var2 = _closure1_slot74;
            var23 = var18.bind(var19)(var2);
            var2 = var13[var3];
            var21 = var8.bind(var4)(var2);
            var19 = var21.useStateFromStores;
            var2 = _closure1_slot58;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 105;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.isPremiumExactly;
                var5 = _closure1_slot58;
                var2 = var5.getCurrentUser;
                var2 = var2.bind(var5)();
                var1 = _closure1_slot75;
                var1 = var1.TIER_2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var21 = var19.bind(var21)(var18, var2);
            var2 = var13[var3];
            var27 = var8.bind(var4)(var2);
            var26 = var27.useStateFromStores;
            var2 = _closure1_slot43;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = new Array(1);
            var18[0] = var93;
            var2 = function() {
                var3 = _closure1_slot43;
                var2 = var3.getEditingMessageId;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var71 = var26.bind(var27)(var19, var2, var18);
            var2 = var13[var3];
            var27 = var8.bind(var4)(var2);
            var26 = var27.useStateFromStores;
            var2 = _closure1_slot35;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = new Array(1);
            var18[0] = var93;
            var2 = function() {
                _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
 0:
                    var3 = _closure1_slot35;
                    var2 = var3.getPendingReply;
                    var1 = _closure2_slot2;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0054_ip = 46; continue _fun0054 }
 36:
                    var2 = var2.message;
                    var1 = var2.id;
 46:
                    return var1;
                }
            };
            var70 = var26.bind(var27)(var19, var2, var18);
            var2 = var13[var3];
            var27 = var8.bind(var4)(var2);
            var26 = var27.useStateFromStores;
            var2 = _closure1_slot55;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = new Array(1);
            var18[0] = var93;
            var2 = function() {
                var3 = _closure1_slot55;
                var2 = var3.getOldestUnreadMessageId;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var69 = var26.bind(var27)(var19, var2, var18);
            var2 = var13[var3];
            var27 = var8.bind(var4)(var2);
            var26 = var27.useStateFromStores;
            var2 = _closure1_slot48;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = new Array(1);
            var18[0] = var95;
            var2 = function() {
                _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0055_ip = 38; continue _fun0055 }
 16:
                    var4 = _closure1_slot48;
                    var3 = var4.canChatInGuild;
                    var2 = _closure2_slot3;
                    var1 = var3.bind(var4)(var2);
 38:
                    return var1;
                }
            };
            var68 = var26.bind(var27)(var19, var2, var18);
            var2 = var13[var3];
            var27 = var8.bind(var4)(var2);
            var26 = var27.useStateFromStores;
            var2 = _closure1_slot52;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = new Array(1);
            var18[0] = var7;
            var2 = function() {
                var4 = _closure1_slot52;
                var3 = var4.can;
                var1 = _closure1_slot70;
                var2 = var1.SEND_MESSAGES;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var67 = var26.bind(var27)(var19, var2, var18);
            var2 = 106;
            var2 = var13[var2];
            var2 = var16.bind(var4)(var2);
            var66 = var2.bind(var4)(var93);
            var2 = var13[var3];
            var26 = var8.bind(var4)(var2);
            var19 = var26.useStateFromStores;
            var2 = _closure1_slot59;
            var18 = new Array(1);
            var18[0] = var2;
            var16 = new Array(1);
            var16[0] = var94;
            var2 = function() {
                var4 = _closure1_slot59;
                var3 = var4.getUserVoiceChannelId;
                var2 = _closure1_slot67;
                var1 = _closure2_slot5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var65 = var19.bind(var26)(var18, var2, var16);
            var2 = var13[var3];
            var26 = var8.bind(var4)(var2);
            var19 = var26.useStateFromStores;
            var2 = _closure1_slot54;
            var18 = new Array(1);
            var18[0] = var2;
            var16 = function() {
                var2 = _closure1_slot54;
                var1 = var2.getChannelId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var64 = var19.bind(var26)(var18, var16, var2);
            var2 = var13[var3];
            var27 = var8.bind(var4)(var2);
            var26 = var27.useStateFromStores;
            var2 = _closure1_slot36;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = new Array(1);
            var18[0] = var7;
            var16 = function() {
                _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
 0:
                    var1 = _closure1_slot64;
                    var4 = var1.THREADS;
                    var3 = var4.has;
                    var1 = _closure2_slot0;
                    var1 = var1.type;
                    var3 = var3.bind(var4)(var1);
                    var4 = null;
                    var1 = null;
                    if(!var3) { _fun0056_ip = 116; continue _fun0056 }
 42:
                    var3 = _closure2_slot0;
                    var3 = var3.parent_id;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0056_ip = 116; continue _fun0056 }
 61:
                    var4 = _closure1_slot36;
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
            var29 = var26.bind(var27)(var19, var16, var18);
            var16 = var13[var3];
            var27 = var8.bind(var4)(var16);
            var26 = var27.useStateFromStoresObject;
            var16 = _closure1_slot44;
            var19 = new Array(1);
            var19[0] = var16;
            var18 = function() {
                var1 = {};
                var3 = _closure1_slot44;
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
            var16 = new Array(0);
            var16 = var26.bind(var27)(var19, var18, var16);
            var63 = var16.resolvingGiftCodes;
            var62 = var16.resolvedGiftCodes;
            var61 = var16.acceptingGiftCodes;
            var16 = var13[var3];
            var27 = var8.bind(var4)(var16);
            var26 = var27.useStateFromStores;
            var16 = _closure1_slot18;
            var19 = new Array(1);
            var19[0] = var16;
            var18 = new Array(1);
            var18[0] = var93;
            var16 = function() {
                var3 = _closure1_slot18;
                var2 = var3.getParticipants;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                var1 = var1.length;
                return var1;
            };
            var60 = var26.bind(var27)(var19, var16, var18);
            var16 = var13[var3];
            var27 = var8.bind(var4)(var16);
            var26 = var27.useStateFromStores;
            var16 = _closure1_slot57;
            var19 = new Array(1);
            var19[0] = var16;
            var18 = new Array(1);
            var18[0] = var93;
            var16 = function() {
                var3 = _closure1_slot57;
                var2 = var3.getFiles;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var59 = var26.bind(var27)(var19, var16, var18);
            var16 = var13[var3];
            var26 = var8.bind(var4)(var16);
            var19 = var26.useStateFromStores;
            var18 = new Array(1);
            var18[0] = var2;
            var16 = new Array(1);
            var16[0] = var93;
            var2 = function() {
                var3 = _closure1_slot36;
                var2 = var3.getReplyIdsForChannel;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var58 = var19.bind(var26)(var18, var2, var16);
            var2 = var13[var3];
            var26 = var8.bind(var4)(var2);
            var19 = var26.useStateFromStores;
            var2 = _closure1_slot12;
            var18 = new Array(1);
            var18[0] = var2;
            var16 = function() {
                var1 = _closure1_slot12;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var57 = var19.bind(var26)(var18, var16);
            var16 = var13[var3];
            var19 = var8.bind(var4)(var16);
            var18 = var19.useStateFromStores;
            var16 = new Array(1);
            var16[0] = var2;
            var2 = function() {
                var1 = _closure1_slot12;
                var1 = var1.roleStyle;
                return var1;
            };
            var96 = var18.bind(var19)(var16, var2);
            var2 = var13[var3];
            var26 = var8.bind(var4)(var2);
            var19 = var26.useStateFromStores;
            var2 = _closure1_slot39;
            var18 = new Array(1);
            var18[0] = var2;
            var16 = new Array(1);
            var16[0] = var93;
            var2 = function() {
                var3 = _closure1_slot39;
                var2 = var3.getChannelThreadsVersion;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var56 = var19.bind(var26)(var18, var2, var16);
            var2 = var13[var3];
            var19 = var8.bind(var4)(var2);
            var18 = var19.useStateFromStoresObject;
            var2 = _closure1_slot29;
            var16 = new Array(1);
            var16[0] = var2;
            var2 = function() {
                var2 = _closure1_slot29;
                var1 = var2.getMessageInteractionStates;
                var1 = var1.bind(var2)();
                return var1;
            };
            var51 = var18.bind(var19)(var16, var2);
            var2 = var13[var3];
            var27 = var8.bind(var4)(var2);
            var26 = var27.useStateFromStores;
            var2 = _closure1_slot28;
            var19 = new Array(1);
            var19[0] = var2;
            var2 = 107;
            var2 = var13[var2];
            var2 = var8.bind(var4)(var2);
            r108 = var2.isVersionEqual;
            r110 = function() {
                var3 = _closure1_slot28;
                var1 = var3.getInteractionComponentStates;
                var2 = var1.bind(var3)();
                var1 = new Array(2);
                var1[0] = var2;
                var2 = var3.getInteractionComponentStateVersion;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            r109 = new Array(0);
            r112 = var27;
            r111 = var19;
            var2 = r112[var26](r111, r110, r109, r108, r107);
            var2 = var15.bind(var4)(var2, var12);
            var50 = var2[var17];
            var49 = var2[var5];
            var2 = var13[var3];
            var18 = var8.bind(var4)(var2);
            var16 = var18.useStateFromStores;
            var2 = _closure1_slot21;
            var15 = new Array(1);
            var15[0] = var2;
            var2 = function() {
                var1 = _closure1_slot21;
                var1 = var1.hasLoadedExperiments;
                return var1;
            };
            var47 = var16.bind(var18)(var15, var2);
            var2 = 108;
            var2 = var13[var2];
            var16 = var8.bind(var4)(var2);
            var15 = var16.useIsSpamMessageRequest;
            var2 = var7.id;
            var89 = var15.bind(var16)(var2);
            var2 = 109;
            var2 = var13[var2];
            var13 = var8.bind(var4)(var2);
            var8 = var13.useIsMessageRequest;
            var2 = var7.id;
            var90 = var8.bind(var13)(var2);
            var48 = var22 != var82;
            if(!var48) { _fun0046_ip = 2274; continue _fun0046 }
 2256:
            var2 = var82.ready;
            if(var2) { _fun0046_ip = 2271; continue _fun0046 }
 2265:
            var2 = var82.cached;
 2271:
            var48 = var2;
 2274:
            var92 = var22 != var82;
            if(!var92) { _fun0046_ip = 2287; continue _fun0046 }
 2281:
            var92 = var82.cached;
 2287:
            var91 = var22 != var82;
            if(!var91) { _fun0046_ip = 2300; continue _fun0046 }
 2294:
            var91 = var82.ready;
 2300:
            if(!var91) { _fun0046_ip = 2312; continue _fun0046 }
 2303:
            var2 = var82.loadingMore;
            var91 = !var2;
 2312:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = var13[var3];
            var18 = var8.bind(var4)(var2);
            var16 = var18.useStateFromStores;
            var2 = _closure1_slot26;
            var15 = new Array(1);
            var15[0] = var2;
            var2 = function() {
                var2 = _closure1_slot26;
                var1 = var2.getRsvpVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var55 = var16.bind(var18)(var15, var2);
            var2 = var13[var3];
            var18 = var8.bind(var4)(var2);
            var16 = var18.useStateFromStores;
            var2 = _closure1_slot25;
            var15 = new Array(1);
            var15[0] = var2;
            var2 = function() {
                var2 = _closure1_slot25;
                var1 = var2.getMessagesVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var54 = var16.bind(var18)(var15, var2);
            var2 = var13[var3];
            var18 = var8.bind(var4)(var2);
            var16 = var18.useStateFromStores;
            var2 = _closure1_slot45;
            var15 = new Array(1);
            var15[0] = var2;
            var2 = function() {
                var2 = _closure1_slot45;
                var1 = var2.getCommunicationDisabledVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var53 = var16.bind(var18)(var15, var2);
            var2 = var13[var3];
            var18 = var8.bind(var4)(var2);
            var16 = var18.useStateFromStores;
            var2 = _closure1_slot52;
            var15 = new Array(1);
            var15[0] = var2;
            var2 = function() {
                var4 = _closure1_slot52;
                var3 = var4.can;
                var1 = _closure1_slot70;
                var2 = var1.MODERATE_MEMBERS;
                var1 = _closure2_slot4;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var44 = var16.bind(var18)(var15, var2);
            var2 = 110;
            var2 = var13[var2];
            var13 = var8.bind(var4)(var2);
            var8 = var13.useCurrentUserCommunicationDisabled;
            var15 = var22 == var11;
            var2 = undefined;
            if(var15) { _fun0046_ip = 2508; continue _fun0046 }
 2503:
            var2 = var11.id;
 2508:
            var8 = var8.bind(var13)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var8, var12);
            var45 = var2[var5];
            var8 = _closure1_slot0;
            r106 = _closure1_slot2;
            var2 = r106[var3];
            var13 = var8.bind(var4)(var2);
            var12 = var13.useStateFromStores;
            var2 = _closure1_slot40;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var1 = _closure1_slot40;
                var1 = var1.locale;
                return var1;
            };
            var43 = var12.bind(var13)(var5, var2);
            var2 = _closure1_slot1;
            var5 = 111;
            var5 = r106[var5];
            var16 = var2.bind(var4)(var5);
            var15 = var16.useExperiment;
            var13 = {};
            var5 = '41de6d_2';
            var13['location'] = var5;
            var12 = {};
            var5 = false;
            var12['autoTrackExposure'] = var5;
            var12 = var15.bind(var16)(var13, var12);
            var42 = var12.paymentsBlocked;
            var12 = r106[var3];
            var16 = var8.bind(var4)(var12);
            var15 = var16.useStateFromStores;
            var12 = _closure1_slot38;
            var13 = new Array(1);
            var13[0] = var12;
            var12 = function() {
                _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = var3.isForumPost;
                    var1 = var1.bind(var3)();
                    var3 = !var1;
                    var1 = !var3;
                    if(var3) { _fun0057_ip = 48; continue _fun0057 }
 26:
                    var4 = _closure1_slot38;
                    var3 = var4.hasJoined;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
 48:
                    return var1;
                }
            };
            var41 = var15.bind(var16)(var13, var12);
            var12 = r106[var3];
            var16 = var8.bind(var4)(var12);
            var15 = var16.useStateFromStores;
            var12 = _closure1_slot31;
            var13 = new Array(1);
            var13[0] = var12;
            var12 = function() {
                var3 = _closure1_slot31;
                var2 = var3.shouldDisplayPrompt;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var40 = var15.bind(var16)(var13, var12);
            var12 = r106[var3];
            var16 = var8.bind(var4)(var12);
            var15 = var16.useStateFromStores;
            var12 = _closure1_slot34;
            var13 = new Array(1);
            var13[0] = var12;
            var12 = function() {
                var2 = _closure1_slot34;
                var1 = var2.isEligible;
                var1 = var1.bind(var2)();
                return var1;
            };
            var38 = var15.bind(var16)(var13, var12);
            var12 = r106[var3];
            var16 = var8.bind(var4)(var12);
            var15 = var16.useStateFromStores;
            var12 = _closure1_slot17;
            var13 = new Array(1);
            var13[0] = var12;
            var12 = function() {
                var2 = _closure1_slot17;
                var1 = var2.getLazyCacheStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var39 = var15.bind(var16)(var13, var12);
            var12 = 89;
            var12 = r106[var12];
            var13 = var8.bind(var4)(var12);
            var12 = var13.useMessageJumpAndroidKeyboardHeight;
            var37 = var12.bind(var13)();
            var12 = 112;
            var12 = r106[var12];
            var12 = var2.bind(var4)(var12);
            var35 = var12.bind(var4)();
            var12 = 113;
            var12 = r106[var12];
            var13 = var8.bind(var4)(var12);
            var12 = var13.useChannelSummariesExperiment;
            var12 = var12.bind(var13)(var7);
            var _closure2_slot7 = var12;
            var13 = r106[var3];
            var18 = var8.bind(var4)(var13);
            var16 = var18.useStateFromStores;
            var13 = _closure1_slot37;
            var15 = new Array(1);
            var15[0] = var13;
            var13 = new Array(2);
            var13[0] = var12;
            var12 = var7.id;
            var13[1] = var12;
            var12 = function() {
                _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
 0:
                    var3 = _closure2_slot7;
                    var1 = null;
                    if(!var3) { _fun0058_ip = 39; continue _fun0058 }
 12:
                    var4 = _closure1_slot37;
                    var3 = var4.selectedSummary;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 39:
                    return var1;
                }
            };
            var36 = var16.bind(var18)(var15, var12, var13);
            var15 = _closure1_slot10;
            var16 = var15.useEffect;
            var12 = var7.id;
            var13 = new Array(5);
            var13[0] = var12;
            var12 = var82.hasMoreAfter;
            var13[1] = var12;
            var12 = var82.hasMoreBefore;
            var13[2] = var12;
            var12 = var82.length;
            var13[3] = var12;
            var12 = var82.ready;
            var13[4] = var12;
            var12 = function() {
                _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
 0:
                    var2 = _closure2_slot1;
                    var2 = var2.ready;
                    var2 = !var2;
                    if(var2) { _fun0059_ip = 34; continue _fun0059 }
 19:
                    var3 = _closure2_slot1;
                    var4 = var3.length;
                    var3 = 0;
                    var2 = var3 !== var4;
 34:
                    if(var2) { _fun0059_ip = 47; continue _fun0059 }
 37:
                    var3 = _closure2_slot1;
                    var2 = var3.hasMoreBefore;
 47:
                    if(var2) { _fun0059_ip = 60; continue _fun0059 }
 50:
                    var3 = _closure2_slot1;
                    var2 = var3.hasMoreAfter;
 60:
                    if(var2) { _fun0059_ip = 121; continue _fun0059 }
 63:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 88;
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
            var12 = var16.bind(var15)(var12, var13);
            var12 = {};
            var12['guild'] = var11;
            var12['channel'] = var7;
            var12['messages'] = var82;
            var12['isMessagesReady'] = var48;
            var11 = function useShouldTrackAnnouncementMessageViews(arg1) {
                _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
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
                    if(var6) { _fun0060_ip = 94; continue _fun0060 }
 56:
                    var9 = var5.features;
                    var5 = var4 == var9;
                    var1 = undefined;
                    if(var5) { _fun0060_ip = 94; continue _fun0060 }
 71:
                    var6 = var9.has;
                    var5 = _closure1_slot65;
                    var5 = var5.COMMUNITY;
                    var1 = var6.bind(var9)(var5);
 94:
                    var9 = var4 != var1;
                    if(!var9) { _fun0060_ip = 104; continue _fun0060 }
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
                        _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
 0:
                            var1 = _closure3_slot0;
                            var2 = var1.type;
                            var1 = _closure1_slot63;
                            var1 = var1.GUILD_ANNOUNCEMENT;
                            var1 = var2 === var1;
                            if(!var1) { _fun0061_ip = 36; continue _fun0061 }
 32:
                            var1 = _closure3_slot3;
 36:
                            var2 = _closure3_slot2;
                            if(!var2) { _fun0061_ip = 67; continue _fun0061 }
 43:
                            var5 = _closure3_slot1;
                            var4 = var5.some;
                            var3 = function(arg1) {
                                _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
 0:
                                    var5 = arg1;
                                    var1 = var5.messageReference;
                                    var3 = null;
                                    var1 = var3 != var1;
                                    if(!var1) { _fun0062_ip = 28; continue _fun0062 }
 18:
                                    var2 = var5.webhookId;
                                    var1 = var3 != var2;
 28:
                                    if(!var1) { _fun0062_ip = 55; continue _fun0062 }
 31:
                                    var4 = var5.hasFlag;
                                    var2 = _closure1_slot68;
                                    var2 = var2.IS_CROSSPOST;
                                    var1 = var4.bind(var5)(var2);
 55:
                                    if(!var1) { _fun0062_ip = 74; continue _fun0062 }
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
                            if(var1) { _fun0061_ip = 73; continue _fun0061 }
 70:
                            var1 = var2;
 73:
                            return var1;
                        }
                    };
                    var5 = var5.bind(var6)(var2, var4);
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 99;
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
            var34 = var11.bind(var4)(var12);
            var11 = 114;
            var11 = r106[var11];
            var12 = var8.bind(var4)(var11);
            var11 = var12.useShouldDisplaySpoilerObscurity;
            var33 = var11.bind(var12)(var7);
            var11 = 115;
            var11 = r106[var11];
            var12 = var8.bind(var4)(var11);
            var11 = var12.useIsAgeVerified;
            var16 = var11.bind(var12)();
            var13 = var15.useEffect;
            var12 = new Array(2);
            var12[0] = var93;
            var12[1] = var95;
            var11 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 93;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.handleChannelSelect;
                var1 = var1.bind(var2)();
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 93;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleChannelSelect;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                return var1;
            };
            var11 = var13.bind(var15)(var11, var12);
            var11 = 116;
            var11 = r106[var11];
            var13 = var8.bind(var4)(var11);
            var12 = var13.useShouldDisableInteractiveComponents;
            var11 = var7.id;
            var32 = var12.bind(var13)(var11);
            var12 = _closure1_slot32;
            var11 = var7.id;
            var31 = var12.bind(var4)(var11);
            var11 = r106[var3];
            var18 = var8.bind(var4)(var11);
            var15 = var18.useStateFromStores;
            var11 = _closure1_slot22;
            var13 = new Array(1);
            var13[0] = var11;
            var12 = new Array(1);
            var12[0] = var93;
            var11 = function() {
                var3 = _closure1_slot22;
                var2 = var3.getChannelFpInfo;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var30 = var15.bind(var18)(var13, var11, var12);
            var11 = 117;
            var11 = r106[var11];
            var11 = var2.bind(var4)(var11);
            r102 = var11.bind(var4)();
            var11 = 118;
            var11 = r106[var11];
            var11 = var2.bind(var4)(var11);
            var11 = var11.bind(var4)(var82);
            var27 = var11.unloadedContentEntryMessageIds;
            var26 = var11.unloadableContentEntryMessageIds;
            var11 = r106[var3];
            var15 = var8.bind(var4)(var11);
            var13 = var15.useStateFromStores;
            var11 = _closure1_slot58;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function() {
                _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
 0:
                    var2 = _closure1_slot58;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0063_ip = 37; continue _fun0063 }
 27:
                    var3 = var4.isStaff;
                    var2 = var3.bind(var4)();
 37:
                    var1 = var1 != var2;
                    if(!var1) { _fun0063_ip = 47; continue _fun0063 }
 44:
                    var1 = var2;
 47:
                    return var1;
                }
            };
            r105 = var13.bind(var15)(var12, var11);
            var11 = 119;
            var11 = r106[var11];
            var12 = var8.bind(var4)(var11);
            var11 = var12.useShouldFilterKeywords;
            var28 = var11.bind(var12)();
            var11 = r106[var3];
            var15 = var8.bind(var4)(var11);
            var13 = var15.useStateFromStores;
            var11 = _closure1_slot24;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function() {
                var2 = _closure1_slot24;
                var1 = var2.getVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var52 = var13.bind(var15)(var12, var11);
            var11 = 120;
            var11 = r106[var11];
            var12 = var8.bind(var4)(var11);
            var11 = var12.useGuildProfileInviteEmbedHoldoutEnabled;
            var19 = var11.bind(var12)(var5);
            var11 = 121;
            var11 = r106[var11];
            var13 = var8.bind(var4)(var11);
            var12 = var13.useColorStore;
            var11 = function(arg1) {
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var1 = arg1;
                var1 = var1.palette;
                var1 = var2.bind(var3)(var1);
                var1 = var1.length;
                return var1;
            };
            var18 = var12.bind(var13)(var11);
            var11 = r106[var3];
            var15 = var8.bind(var4)(var11);
            var13 = var15.useStateFromStores;
            var11 = _closure1_slot20;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function() {
                var3 = _closure1_slot20;
                var2 = var3.getGuildEmoji;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = var13.bind(var15)(var12, var11);
            var11 = 122;
            var11 = r106[var11];
            var13 = var8.bind(var4)(var11);
            var12 = var13.useDoubleTapToReactExperiment;
            var11 = {};
            var11['autoTrackExposure'] = var5;
            var5 = 'Messages';
            var5 = var12.bind(var13)(var5, var11);
            var13 = var5.enabled;
            var5 = r106[var3];
            r107 = var8.bind(var4)(var5);
            var12 = r107.useStateFromStoresArray;
            var5 = _closure1_slot56;
            var11 = new Array(1);
            var11[0] = var5;
            var5 = function() {
                var5 = _closure1_slot56;
                var2 = var5.getRemoteActivities;
                var7 = var2.bind(var5)();
                var3 = new Array(0);
                var6 = 0;
                var8 = var3;
                var6 = arraySpread(var8, var7, var6);
                var2 = var5.getHiddenActivities;
                var7 = var2.bind(var5)();
                var8 = var3;
                var2 = arraySpread(var8, var7, var6);
                var2 = var3.filter;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 98;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var12.bind(r107)(var11, var5);
            var _closure2_slot8 = var12;
            var3 = r106[var3];
            var11 = var8.bind(var4)(var3);
            var5 = var11.useStateFromStoresObject;
            r107 = _closure1_slot60;
            var3 = new Array(1);
            var3[0] = r107;
            var1 = function() {
                var4 = _closure2_slot8;
                var3 = var4.reduce;
                var2 = function(arg1, arg2) {
                    _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
 0:
                        var1 = arg1;
                        var2 = arg2;
                        var3 = var2.application_id;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0064_ip = 69; continue _fun0064 }
 18:
                        var7 = _closure1_slot60;
                        var6 = var7.getState;
                        var5 = var2.application_id;
                        var3 = _closure1_slot61;
                        var3 = var3.JOIN;
                        var3 = var6.bind(var7)(var5, var3);
                        if(!(var4 != var3)) { _fun0064_ip = 67; continue _fun0064 }
 57:
                        var2 = var2.application_id;
                        var1[var2] = var3;
 67:
                        return var1;
 69:
                        return var1;
                    }
                };
                var1 = {};
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var11 = var5.bind(var11)(var3, var1);
            var3 = _closure1_slot78;
            var5 = 123;
            var1 = r106[var5];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var5 = r106[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.Profiles;
            var5 = var5.Messages;
            var1['profile'] = var5;
            var5 = var7.isThread;
            var7 = var5.bind(var7)();
            if(!var7) { _fun0046_ip = 3635; continue _fun0046 }
 3596:
            r106 = _closure1_slot76;
            var8 = _closure1_slot1;
            r107 = _closure1_slot2;
            var5 = 124;
            var5 = r107[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            r107 = true;
            var5['absolute'] = r107;
            var7 = r106.bind(var4)(var8, var5);
 3635:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot76;
            var7 = _closure1_slot80;
            var6 = {};
            r106 = arg2;
            var6['ref'] = r106;
            var6['theme'] = var9;
            var6['isStaff'] = r105;
            var6['animateEmoji'] = r104;
            var6['animateStickers'] = r103;
            var6['containerWidth'] = r102;
            var6['gifAutoPlay'] = r101;
            var6['inlineAttachmentMedia'] = r100;
            var6['inlineEmbedMedia'] = var100;
            var6['renderEmbeds'] = var99;
            var6['renderReactions'] = var98;
            var6['developerMode'] = var97;
            var6['roleStyle'] = var96;
            var6['guildId'] = var95;
            var6['currentUserId'] = var94;
            var6['channelId'] = var93;
            var6['isMessagesReady'] = var48;
            var6['isMessagesCached'] = var92;
            var6['isMessagesAckable'] = var91;
            var6['isMessageRequest'] = var90;
            var6['isSpamMessageRequest'] = var89;
            var6['messageAuthorActivities'] = var88;
            var6['invites'] = var87;
            var6['appDirectoryEmbedApplications'] = var86;
            var6['invalidAppDirectoryEmbedApplicationIds'] = var85;
            var6['invalidApplicationIds'] = var84;
            var6['applicationAssetFetchingIds'] = var83;
            var6['messages'] = var82;
            var6['messagesWithActivitiesLaunching'] = var81;
            var6['activityInstanceIds'] = var80;
            var6['activityParticipants'] = var79;
            var6['activityInstancePresenceDetails'] = var78;
            var6['appDirectoryEmbedApplicationFetchStates'] = var77;
            var6['mediaPostPreviewEmbeds'] = var76;
            var6['guildTemplates'] = var75;
            var6['buildOverrides'] = var74;
            var6['quests'] = var73;
            var6['isFetchingCurrentQuests'] = var72;
            var6['editingMessageId'] = var71;
            var6['replyingMessageId'] = var70;
            var6['oldestUnreadMessageId'] = var69;
            var6['canChat'] = var68;
            var6['canSendMessages'] = var67;
            var6['isCallActive'] = var66;
            var6['voiceStatePrivateChannelId'] = var65;
            var6['currentClientVoiceChannelId'] = var64;
            var6['resolvingGiftCodes'] = var63;
            var6['resolvedGiftCodes'] = var62;
            var6['acceptingGiftCodes'] = var61;
            var6['participantsLength'] = var60;
            var6['uploads'] = var59;
            var6['repliedIds'] = var58;
            var6['useReducedMotion'] = var57;
            var6['channelThreadsVersion'] = var56;
            var6['rsvpVersion'] = var55;
            var6['failedMessagesVersion'] = var54;
            var6['communicationDisabledVersion'] = var53;
            var6['forwardGuildsVersion'] = var52;
            var6['interactionStates'] = var51;
            var6['interactionComponentStates'] = var50;
            var6['interactionComponentStatesVersion'] = var49;
            if(!var47) { _fun0046_ip = 3964; continue _fun0046 }
 3961:
            var47 = var48;
 3964:
            var6['hasLoadedExperiments'] = var47;
            var6['guildSystemChannelFlags'] = var46;
            var6['currentUserCommunicationDisabled'] = var45;
            var6['renderCommunicationDisabled'] = var44;
            var6['userSettingsLocale'] = var43;
            var6['paymentsBlocked'] = var42;
            var6['isFollowingForumPost'] = var41;
            var6['showMediaPostSharePrompt'] = var40;
            var6['showPushFeedback'] = var38;
            var38 = 'initializing';
            var38 = var38 !== var39;
            var6['cacheStoreLoaded'] = var38;
            var6['androidKeyboardHeight'] = var37;
            var6['selectedSummary'] = var36;
            var6['keyboardType'] = var35;
            var6['shouldTrackAnnouncementMessageViews'] = var34;
            var6['shouldObscureSpoiler'] = var33;
            var6['shouldDisableInteractiveComponents'] = var32;
            var6['channelPolls'] = var31;
            var6['explicitMediaFalsePositiveInfo'] = var30;
            var6['threadStartingReferenceMessage'] = var29;
            var6['shouldFilterKeywords'] = var28;
            var6['unloadedContentEntryMessageIds'] = var27;
            var6['unloadableContentEntryMessageIds'] = var26;
            var6['applications'] = var25;
            var6['resolvedReferralTrialOfferIds'] = var24;
            var24 = var22 == var23;
            var22 = undefined;
            if(var24) { _fun0046_ip = 4108; continue _fun0046 }
 4103:
            var22 = var23.id;
 4108:
            var6['referralTrialOfferId'] = var22;
            var6['isPremiumTier2User'] = var21;
            var6['activityInviteMessageIds'] = var20;
            var17 = 0;
            if(var19) { _fun0046_ip = 4131; continue _fun0046 }
 4128:
            var17 = var18;
 4131:
            var6['guildInviteColorsFetched'] = var17;
            var6['isAgeVerified'] = var16;
            var6['guildEmojis'] = var15;
            var6['enableSwipeActions'] = var14;
            var6['doubleTapToReactEnabled'] = var13;
            var6['selfActivities'] = var12;
            var6['activityLaunchJoinStates'] = var11;
            r111 = var6;
            r110 = var10;
            var10 = copyDataProperties(r111, r110);
            var6 = var8.bind(var4)(var7, var6, var9);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 125;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/chat/Messages.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();