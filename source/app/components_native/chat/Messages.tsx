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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot80;
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
            var7 = _closure1_slot80;
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
    var _closure1_slot79 = var1;
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
    var _closure1_slot80 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
case 36: // try_start_0
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
case 37: // try_end0
            _fun0004_ip = 38; continue _fun0004;
case 39: // catch_target0
            CatchBlockStart(arg_register=1);
case 38:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot81 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot81 = var1;
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
    var9 = var4.ChannelTypesSets;
    var _closure1_slot63 = var9;
    var9 = var4.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot64 = var9;
    var9 = var4.ME;
    var _closure1_slot65 = var9;
    var9 = var4.MessageFlags;
    var _closure1_slot66 = var9;
    var9 = var4.MessageTypes;
    var _closure1_slot67 = var9;
    var4 = var4.Permissions;
    var _closure1_slot68 = var4;
    var4 = 58;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.Changeset;
    var _closure1_slot69 = var9;
    var9 = var4.RowType;
    var _closure1_slot70 = var9;
    var4 = var4.SeparatorType;
    var _closure1_slot71 = var4;
    var4 = 59;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot72 = var9;
    var4 = var4.PremiumTypes;
    var _closure1_slot73 = var4;
    var4 = 60;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot74 = var9;
    var9 = var4.Fragment;
    var _closure1_slot75 = var9;
    var4 = var4.jsxs;
    var _closure1_slot76 = var4;
    var4 = 61;
    var4 = var6[var4];
    var9 = var8.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var12 = 'Messages';
    var13 = var8;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot77 = var4;
    var8 = var7.Component;
    var4 = function(arg1) {
        var4 = function Messages(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
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
                var1 = _closure1_slot81;
                var1 = var1.bind(var5)();
                if(var1) { _fun0005_ip = 9; continue _fun0005 }
case 40:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0005_ip = 41; continue _fun0005;
case 9:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot8;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 41:
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
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 62;
                var6 = var8[var6];
                var11 = var7.bind(var5)(var6);
                var6 = var11.prototype;
                var9 = Object.create(var6, {constructor: {value: var11}});
                var14 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1._chatRef;
                        var3 = var1.current;
                        var1 = null;
                        if(!(var1 !== var3)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                        var4 = _closure1_slot11;
                        var2 = _closure3_slot0;
                        var2 = var2._chatRef;
                        var3 = var2.current;
                        var2 = undefined;
                        var1 = var4.bind(var2)(var3);
case 42:
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
                var15 = var9;
                var6 = new var15[var11](var14, var13, var12);
                var6 = var6 instanceof Object ? var6 : var9;
                var1['_chatUpdatesQueue'] = var6;
                var6 = {'shouldForceRender': false, 'hasJumpedToOriginalPost': false};
                var1['state'] = var6;
                var6 = var1.props;
                var1['prevPropsWhileFrozen'] = var6;
                var6 = var1.state;
                var1['prevStateWhileFrozen'] = var6;
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
case 0:
                            var1 = arg1;
                            var4 = var1.id;
                            var3 = var1.nonce;
                            var1 = _closure4_slot0;
                            var1 = var4 === var1;
                            if(var1) { _fun0007_ip = 44; continue _fun0007 }
case 34:
                            var2 = _closure4_slot0;
                            var1 = var3 === var2;
case 44:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1['getMessage'] = var4;
                var4 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var3 = var1.channel;
                        var1 = var3.isForumPost;
                        var1 = var1.bind(var3)();
                        if(!var1) { _fun0008_ip = 45; continue _fun0008 }
case 3:
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
case 45:
                        if(!var1) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                        var2 = _closure3_slot0;
                        var2 = var2.state;
                        var2 = var2.hasJumpedToOriginalPost;
                        var1 = !var2;
case 46:
                        return var1;
                    }
                };
                var1['shouldJumpToOriginalPost'] = var4;
                var4 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var4 = arg1;
                        var5 = arguments[1];
                        var3 = arguments[2];
                        var _closure4_slot0 = var4;
                        var1 = undefined;
                        if(!(var5 === var1)) { _fun0009_ip = 31; continue _fun0009 }
case 48:
                        var5 = false;
case 31:
                        var _closure4_slot1 = var5;
                        if(!(var3 === var1)) { _fun0009_ip = 49; continue _fun0009 }
case 50:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 67;
                        var5 = var7[var5];
                        var5 = var6.bind(var1)(var5);
                        var5 = var5.JumpTypes;
                        var3 = var5.INSTANT;
case 49:
                        var _closure4_slot2 = var3;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0009_ip = 51; continue _fun0009 }
case 38:
                        var3 = global;
                        var4 = var3.setTimeout;
                        var3 = function() {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                var4 = _closure3_slot0;
                                var3 = var4.findMessageIndex;
                                var2 = _closure4_slot0;
                                var5 = var3.bind(var4)(var2);
                                var3 = null;
                                if(!(var3 != var5)) { _fun0010_ip = 52; continue _fun0010 }
case 53:
                                var2 = _closure3_slot0;
                                var2 = var2._chatRef;
                                var2 = var2.current;
                                if(!(var3 != var2)) { _fun0010_ip = 52; continue _fun0010 }
case 28:
                                var3 = _closure4_slot1;
                                var2 = false;
                                if(!var3) { _fun0010_ip = 54; continue _fun0010 }
case 55:
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
case 54:
                                if(var2) { _fun0010_ip = 52; continue _fun0010 }
case 56:
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
case 52:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = 50;
                        var2 = var4.bind(var1)(var3, var2);
case 51:
                        return var1;
                    }
                };
                var1['maybeRescrollToMessageId'] = var4;
                var4 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var3 = arg1;
                        var2 = _closure3_slot0;
                        var2 = var2._chatUpdatesQueue;
                        var2 = var2.isBlocking;
                        if(var2) { _fun0011_ip = 57; continue _fun0011 }
case 58:
                        var2 = var3.isLoadingAtTop;
                        if(!var2) { _fun0011_ip = 59; continue _fun0011 }
case 53:
                        var2 = _closure3_slot0;
                        var2 = var2.decelerating;
                        if(var2) { _fun0011_ip = 60; continue _fun0011 }
case 61:
                        var2 = _closure3_slot0;
                        var2 = var2.dragging;
                        if(var2) { _fun0011_ip = 60; continue _fun0011 }
case 59:
                        var4 = _closure3_slot0;
                        var2 = var4.applyNativeRowsUpdate;
                        var2 = var2.bind(var4)(var3);
                        _fun0011_ip = 62; continue _fun0011;
case 60:
                        var2 = _closure3_slot0;
                        var4 = var2._chatUpdatesQueue;
                        var2 = var4.add;
                        var2 = var2.bind(var4)(var3);
                        _fun0011_ip = 62; continue _fun0011;
case 57:
                        var1 = _closure3_slot0;
                        var2 = var1._chatUpdatesQueue;
                        var1 = var2.add;
                        var1 = var1.bind(var2)(var3);
case 62:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['updateNativeRows'] = var4;
                var4 = function(arg1) {
                    var1 = arg1;
                    var12 = var1.rows;
                    var3 = var1.hasMoreMessagesAfter;
                    var10 = var1.scrollData;
                    var9 = var1.HACK_iOSForceAnimations;
                    var8 = var1.forceReload;
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
                    var4['rows'] = var12;
                    var4['isLoadingAtTop'] = var11;
                    var4['scrollData'] = var10;
                    var4['HACK_iOSForceAnimations'] = var9;
                    var4['forceReload'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    var2['hasMoreMessagesAfterForLastUpdate'] = var3;
                    return var1;
                };
                var1['applyNativeRowsUpdate'] = var4;
                var4 = function(arg1, arg2) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var1 = arg2;
                        if(var1) { _fun0012_ip = 63; continue _fun0012 }
case 64:
                        var1 = false;
                        return var1;
case 63:
                        var2 = _closure1_slot79;
                        var5 = undefined;
                        var1 = arg1;
                        var4 = var2.bind(var5)(var1);
                        var2 = var4.bind(var5)();
                        var1 = var2.done;
                        var3 = var2;
                        if(var1) { _fun0012_ip = 65; continue _fun0012 }
case 66:
                        var1 = var3.value;
                        var7 = var1.changeType;
                        var2 = _closure1_slot69;
                        var2 = var2.INSERT;
                        if(!(var7 !== var2)) { _fun0012_ip = 67; continue _fun0012 }
case 30:
                        var7 = var4.bind(var5)();
                        var2 = var7.done;
                        var3 = var7;
                        if(var2) { _fun0012_ip = 65; continue _fun0012 }
case 68:
                        _fun0012_ip = 66; continue _fun0012;
case 67:
                        var2 = var1.index;
                        var1 = 1;
                        var1 = var2 <= var1;
                        return var1;
case 65:
                        var1 = false;
                        return var1;
                    }
                };
                var1['isLoadingAtTop'] = var4;
                var4 = function() {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var2 = arguments[0];
                        var1 = undefined;
                        if(!(var2 === var1)) { _fun0013_ip = 69; continue _fun0013 }
case 70:
                        var2 = {};
case 69:
                        var16 = var2.forceRender;
                        if(!(var16 === var1)) { _fun0013_ip = 31; continue _fun0013 }
case 48:
                        var16 = false;
case 31:
                        var7 = var2.forceReload;
                        var12 = var2.updateMessageIds;
                        if(!(var12 === var1)) { _fun0013_ip = 30; continue _fun0013 }
case 71:
                        var3 = global;
                        var3 = var3.Set;
                        var4 = var3.prototype;
                        var4 = Object.create(var4, {constructor: {value: var3}});
                        var23 = var4;
                        var3 = new var23[var3](var22);
                        var12 = var3 instanceof Object ? var3 : var4;
case 30:
                        var15 = var2.scrollToMessageId;
                        if(!(var15 === var1)) { _fun0013_ip = 72; continue _fun0013 }
case 60:
                        var15 = null;
case 72:
                        var14 = var2.jumpTargetId;
                        if(!(var14 === var1)) { _fun0013_ip = 73; continue _fun0013 }
case 74:
                        var14 = null;
case 73:
                        var19 = var2.jumpType;
                        if(!(var19 === var1)) { _fun0013_ip = 75; continue _fun0013 }
case 45:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 67;
                        var3 = var5[var3];
                        var3 = var4.bind(var1)(var3);
                        var3 = var3.JumpTypes;
                        var19 = var3.ANIMATED;
case 75:
                        var9 = var2.focusTargetId;
                        if(!(var9 === var1)) { _fun0013_ip = 76; continue _fun0013 }
case 77:
                        var9 = null;
case 76:
                        var10 = var2.ignoreEmbedDescriptionCache;
                        if(!(var10 === var1)) { _fun0013_ip = 78; continue _fun0013 }
case 15:
                        var10 = false;
case 78:
                        var8 = var2.messagesNewlyLoaded;
                        if(!(var8 === var1)) { _fun0013_ip = 79; continue _fun0013 }
case 80:
                        var8 = false;
case 79:
                        var11 = var2.shouldInitialScroll;
                        if(!(var11 === var1)) { _fun0013_ip = 81; continue _fun0013 }
case 82:
                        var11 = false;
case 81:
                        var18 = var2.minimizeScrolling;
                        if(!(var18 === var1)) { _fun0013_ip = 83; continue _fun0013 }
case 84:
                        var18 = false;
case 83:
                        var17 = var2.isRescrolling;
                        if(!(var17 === var1)) { _fun0013_ip = 85; continue _fun0013 }
case 86:
                        var17 = false;
case 85:
                        var6 = var2.overrideScrollJumpType;
                        var2 = _closure3_slot0;
                        var2 = var2._chatRef;
                        var2 = var2.current;
                        var13 = null;
                        if(!(var13 != var2)) { _fun0013_ip = 87; continue _fun0013 }
case 88:
                        var2 = _closure3_slot0;
                        var5 = var2.createRows;
                        var4 = {};
                        var4['forceRender'] = var16;
                        var4['updateMessageIds'] = var12;
                        var4['ignoreEmbedDescriptionCache'] = var10;
                        var12 = var5.bind(var2)(var4);
                        var5 = var2._loaded;
                        var2 = var2.props;
                        var2 = var2.selectedSummary;
                        var4 = var13 != var2;
                        var10 = undefined;
                        if(!var4) { _fun0013_ip = 89; continue _fun0013 }
case 90:
                        var2 = var2.startId;
                        var10 = undefined;
                        if(!(var2 === var15)) { _fun0013_ip = 89; continue _fun0013 }
case 91:
                        var4 = _closure1_slot0;
                        var16 = _closure1_slot2;
                        var2 = 68;
                        var2 = var16[var2];
                        var2 = var4.bind(var1)(var2);
                        var2 = var2.ChatScrollPosition;
                        var10 = var2.MIDDLE;
case 89:
                        if(!(var13 != var12)) { _fun0013_ip = 92; continue _fun0013 }
case 93:
                        var4 = var12.length;
                        var2 = 0;
                        if(!(!(var4 > var2))) { _fun0013_ip = 94; continue _fun0013 }
case 92:
                        var2 = _closure3_slot0;
                        var2 = var2._loaded;
                        if(!var2) { _fun0013_ip = 95; continue _fun0013 }
case 96:
                        var2 = _closure3_slot0;
                        var4 = var2._chatUpdatesQueue;
                        var2 = var4.hasUpdates;
                        var2 = var2.bind(var4)();
                        if(var2) { _fun0013_ip = 97; continue _fun0013 }
case 95:
                        var2 = _closure3_slot0;
                        var2 = var2._loaded;
                        if(var2) { _fun0013_ip = 98; continue _fun0013 }
case 99:
                        if(!(var13 != var12)) { _fun0013_ip = 98; continue _fun0013 }
case 100:
                        var4 = var12.length;
                        var2 = 0;
                        if(!(var2 === var4)) { _fun0013_ip = 98; continue _fun0013 }
case 101:
                        var4 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var2 = 68;
                        var2 = var16[var2];
                        var16 = var4.bind(var1)(var2);
                        var4 = var16.fadeIn;
                        var2 = _closure3_slot0;
                        var2 = var2._chatRef;
                        var2 = var2.current;
                        var2 = var4.bind(var16)(var2);
                        _fun0013_ip = 102; continue _fun0013;
case 98:
                        if(!(var13 != var15)) { _fun0013_ip = 103; continue _fun0013 }
case 104:
                        var4 = _closure3_slot0;
                        var2 = var4.shouldJumpToOriginalPost;
                        var2 = var2.bind(var4)();
                        if(var2) { _fun0013_ip = 103; continue _fun0013 }
case 105:
                        var16 = _closure3_slot0;
                        var4 = var16.scrollToMessageId;
                        var2 = {};
                        var2['scrollToMessageId'] = var15;
                        var2['jumpTargetId'] = var14;
                        var2['jumpType'] = var19;
                        var2['scrollPosition'] = var10;
                        var2['minimizeScrolling'] = var18;
                        var2['isRescrolling'] = var17;
                        var2 = var4.bind(var16)(var2);
                        _fun0013_ip = 102; continue _fun0013;
case 103:
                        if(!(var13 != var9)) { _fun0013_ip = 102; continue _fun0013 }
case 106:
                        var4 = _closure3_slot0;
                        var2 = var4.findMessageIndex;
                        var17 = var2.bind(var4)(var9);
                        if(!(var13 != var17)) { _fun0013_ip = 102; continue _fun0013 }
case 107:
                        var4 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var2 = 68;
                        var2 = var16[var2];
                        var16 = var4.bind(var1)(var2);
                        var4 = var16.focus;
                        var2 = _closure3_slot0;
                        var2 = var2._chatRef;
                        var2 = var2.current;
                        var2 = var4.bind(var16)(var2, var17);
                        _fun0013_ip = 102; continue _fun0013;
case 97:
                        var2 = _closure3_slot0;
                        var4 = var2._chatUpdatesQueue;
                        var2 = var4.tryFlush;
                        var2 = var2.bind(var4)();
                        _fun0013_ip = 102; continue _fun0013;
case 94:
                        var4 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var2 = 69;
                        var2 = var16[var2];
                        var4 = var4.bind(var1)(var2);
                        var2 = {};
                        var16 = _closure3_slot0;
                        var17 = var16.chatManager;
                        var16 = var17.getPreviousRows;
                        var16 = var16.bind(var17)();
                        var2['rows'] = var16;
                        var2['scrollToMessageId'] = var15;
                        var2['jumpTargetId'] = var14;
                        if(!(var13 == var6)) { _fun0013_ip = 108; continue _fun0013 }
case 109:
                        var13 = _closure3_slot0;
                        var13 = var13.props;
                        var13 = var13.messages;
                        var6 = var13.jumpType;
case 108:
                        var2['jumpType'] = var6;
                        var6 = _closure3_slot0;
                        var6 = var6._loaded;
                        var6 = !var6;
                        if(var6) { _fun0013_ip = 110; continue _fun0013 }
case 111:
                        var6 = var11;
case 110:
                        var2['shouldInitialScroll'] = var6;
                        var6 = _closure3_slot0;
                        var11 = var6.animated;
                        var2['animated'] = var11;
                        var2['scrollPosition'] = var10;
                        var2['focusTargetId'] = var9;
                        var9 = var4.bind(var1)(var2);
                        var2 = true;
                        var6['_loaded'] = var2;
                        var4 = var6.updateNativeRows;
                        var2 = {};
                        var2['rows'] = var12;
                        var10 = var6.props;
                        var10 = var10.messages;
                        var10 = var10.hasMoreAfter;
                        var2['hasMoreMessagesAfter'] = var10;
                        var11 = var6.isLoadingAtTop;
                        var10 = var6.hasMoreMessagesAfterForLastUpdate;
                        var10 = var11.bind(var6)(var12, var10);
                        var2['isLoadingAtTop'] = var10;
                        var2['scrollData'] = var9;
                        var2['HACK_iOSForceAnimations'] = var8;
                        var2['forceReload'] = var7;
                        var2 = var4.bind(var6)(var2);
case 102:
                        var2 = _closure3_slot0;
                        var2 = var2._loaded;
                        if(!var2) { _fun0013_ip = 112; continue _fun0013 }
case 113:
                        var4 = _closure3_slot0;
                        var4 = var4._loaded;
                        var2 = var4 !== var5;
case 112:
                        if(!var2) { _fun0013_ip = 114; continue _fun0013 }
case 115:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var2 = var3.isResourceChannel;
case 114:
                        if(!var2) { _fun0013_ip = 87; continue _fun0013 }
case 116:
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
case 87:
                        return var1;
                    }
                };
                var1['updateRows'] = var4;
                var4 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var3 = arg1;
                        var10 = var3.scrollToMessageId;
                        var _closure4_slot0 = var10;
                        var9 = var3.jumpTargetId;
                        var1 = undefined;
                        if(!(var9 === var1)) { _fun0014_ip = 117; continue _fun0014 }
case 118:
                        var9 = null;
case 117:
                        var _closure4_slot1 = var9;
                        var11 = var3.jumpType;
                        if(!(var11 === var1)) { _fun0014_ip = 119; continue _fun0014 }
case 120:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 67;
                        var4 = var6[var4];
                        var4 = var5.bind(var1)(var4);
                        var4 = var4.JumpTypes;
                        var11 = var4.ANIMATED;
case 119:
                        var8 = var3.scrollPosition;
                        if(!(var8 === var1)) { _fun0014_ip = 121; continue _fun0014 }
case 122:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 68;
                        var4 = var6[var4];
                        var4 = var5.bind(var1)(var4);
                        var4 = var4.ChatScrollPosition;
                        var8 = var4.TOP;
case 121:
                        var5 = var3.minimizeScrolling;
                        if(!(var5 === var1)) { _fun0014_ip = 123; continue _fun0014 }
case 124:
                        var5 = false;
case 123:
                        var6 = var3.isRescrolling;
                        if(!(var6 === var1)) { _fun0014_ip = 125; continue _fun0014 }
case 126:
                        var6 = false;
case 125:
                        var _closure4_slot2 = var1;
                        var _closure4_slot3 = var1;
                        var4 = _closure3_slot0;
                        var4 = var4.props;
                        var4 = var4.useReducedMotion;
                        if(var4) { _fun0014_ip = 127; continue _fun0014 }
case 128:
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var7 = 67;
                        var7 = var13[var7];
                        var7 = var12.bind(var1)(var7);
                        var7 = var7.JumpTypes;
                        var7 = var7.INSTANT;
                        var4 = var11 === var7;
case 127:
                        var11 = !var4;
                        _closure4_slot2 = var11;
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var7 = 70;
                        var7 = var13[var7];
                        var12 = var12.bind(var1)(var7);
                        var7 = var12.isIOS;
                        var7 = var7.bind(var12)();
                        if(!var7) { _fun0014_ip = 129; continue _fun0014 }
case 130:
                        if(var6) { _fun0014_ip = 129; continue _fun0014 }
case 131:
                        var13 = _closure3_slot0;
                        var12 = var13.maybeRescrollToMessageId;
                        var7 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var6 = 67;
                        var6 = var14[var6];
                        var6 = var7.bind(var1)(var6);
                        var6 = var6.JumpTypes;
                        if(var11) { _fun0014_ip = 132; continue _fun0014 }
case 133:
                        var7 = var6.INSTANT;
                        _fun0014_ip = 134; continue _fun0014;
case 132:
                        var7 = var6.ANIMATED;
case 134:
                        var6 = true;
                        var6 = var12.bind(var13)(var10, var6, var7);
                        _fun0014_ip = 135; continue _fun0014;
case 129:
                        var7 = _closure3_slot0;
                        var6 = var7.findMessageIndex;
                        var7 = var6.bind(var7)(var10);
                        _closure4_slot3 = var7;
                        var6 = null;
                        if(!(var6 != var7)) { _fun0014_ip = 135; continue _fun0014 }
case 93:
                        if(var5) { _fun0014_ip = 136; continue _fun0014 }
case 137:
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
                        _fun0014_ip = 135; continue _fun0014;
case 136:
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
case 135:
                        return var1;
                    }
                };
                var1['scrollToMessageId'] = var4;
                var4 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var4 = arg1;
                        var1 = null;
                        if(!(var1 == var4)) { _fun0015_ip = 138; continue _fun0015 }
case 70:
                        var1 = undefined;
                        return var1;
case 138:
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
case 0:
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
                        if(!(var20 !== var19)) { _fun0016_ip = 139; continue _fun0016 }
case 140:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.isStaff;
                        if(!var3) { _fun0016_ip = 141; continue _fun0016 }
case 142:
                        var18 = _closure1_slot77;
                        var7 = var18.log;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var23 = var3.channelId;
                        var24 = 'STAFF-ACK-LOG: Ignoring outdated scroll event.';
                        var25 = var18;
                        var22 = var20;
                        var21 = var19;
                        var3 = var25[var7](var24, var23, var22, var21, var20);
                        _fun0016_ip = 141; continue _fun0016;
case 139:
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
case 141:
                        return var1;
                    }
                };
                var1['handleScrollPosition'] = var4;
                var4 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var3 = arg1;
                        var8 = var3.isAtBottom;
                        var7 = var3.isNearBottom;
                        var1 = undefined;
                        if(!(var7 === var1)) { _fun0017_ip = 58; continue _fun0017 }
case 31:
                        var7 = false;
case 58:
                        var6 = var3.isNearTop;
                        if(!(var6 === var1)) { _fun0017_ip = 143; continue _fun0017 }
case 144:
                        var6 = false;
case 143:
                        var5 = var3.dragging;
                        if(!(var5 === var1)) { _fun0017_ip = 5; continue _fun0017 }
case 61:
                        var5 = false;
case 5:
                        var4 = var3.decelerating;
                        if(!(var4 === var1)) { _fun0017_ip = 7; continue _fun0017 }
case 145:
                        var4 = false;
case 7:
                        var13 = var3.shouldShowJumpToPresent;
                        if(!(var13 === var1)) { _fun0017_ip = 40; continue _fun0017 }
case 146:
                        var13 = false;
case 40:
                        var _closure4_slot0 = var13;
                        var12 = var3.isFirstMessageVisible;
                        if(!(var12 === var1)) { _fun0017_ip = 74; continue _fun0017 }
case 147:
                        var12 = false;
case 74:
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
                        if(!var9) { _fun0017_ip = 88; continue _fun0017 }
case 148:
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
case 0:
                                var5 = _closure1_slot19;
                                var1 = _closure3_slot0;
                                var2 = var1.props;
                                var4 = var2.channelId;
                                var1 = var1.props;
                                var3 = var1.screenIndex;
                                var2 = _closure4_slot0;
                                if(var2) { _fun0018_ip = 4; continue _fun0018 }
case 149:
                                var1 = _closure4_slot1;
                                var2 = var1.hasMoreAfter;
case 4:
                                var1 = undefined;
                                var2 = var5.bind(var1)(var4, var3, var2);
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
case 88:
                        return var1;
                    }
                };
                var1['handleScroll'] = var4;
                var4 = function() {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var4 = var3.props;
                        var6 = var4.messages;
                        var _closure4_slot0 = var6;
                        var3 = var4.isMessagesReady;
                        var4 = var4.oldestUnreadMessageId;
                        var _closure4_slot1 = var4;
                        var10 = _closure3_slot0;
                        var9 = var10.updateRows;
                        if(var3) { _fun0019_ip = 150; continue _fun0019 }
case 42:
                        var3 = var9.bind(var10)();
                        _fun0019_ip = 151; continue _fun0019;
case 150:
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
                        if(!(var3 == var9)) { _fun0019_ip = 152; continue _fun0019 }
case 153:
                        if(!(var3 != var4)) { _fun0019_ip = 151; continue _fun0019 }
case 78:
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
                        _fun0019_ip = 151; continue _fun0019;
case 152:
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
case 151:
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
case 0:
                        var1 = _closure3_slot0;
                        var2 = true;
                        var1['animated'] = var2;
                        var1 = var1.props;
                        var6 = var1.channelId;
                        var7 = var1.messages;
                        var1 = var7.hasMoreBefore;
                        if(!var1) { _fun0020_ip = 5; continue _fun0020 }
case 154:
                        var2 = var7.loadingMore;
                        var1 = !var2;
case 5:
                        if(!var1) { _fun0020_ip = 155; continue _fun0020 }
case 156:
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
                        if(var7) { _fun0020_ip = 157; continue _fun0020 }
case 158:
                        var5 = var6.id;
case 157:
                        var1['before'] = var5;
                        var4 = _closure1_slot64;
                        var1['limit'] = var4;
                        var1 = var2.bind(var3)(var1);
case 155:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['loadMoreBefore'] = var4;
                var4 = function() {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var2 = true;
                        var1['animated'] = var2;
                        var1 = var1.props;
                        var6 = var1.channelId;
                        var7 = var1.messages;
                        var1 = var7.hasMoreAfter;
                        if(!var1) { _fun0021_ip = 5; continue _fun0021 }
case 154:
                        var2 = var7.loadingMore;
                        var1 = !var2;
case 5:
                        if(!var1) { _fun0021_ip = 155; continue _fun0021 }
case 156:
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
                        if(var7) { _fun0021_ip = 157; continue _fun0021 }
case 158:
                        var5 = var6.id;
case 157:
                        var1['after'] = var5;
                        var4 = _closure1_slot64;
                        var1['limit'] = var4;
                        var1 = var2.bind(var3)(var1);
case 155:
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
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var3 = var1.channel;
                        var1 = var1.canChat;
                        if(!var1) { _fun0022_ip = 4; continue _fun0022 }
case 159:
                        var5 = _closure1_slot52;
                        var4 = var5.can;
                        var2 = _closure1_slot68;
                        var2 = var2.ADD_REACTIONS;
                        var1 = var4.bind(var5)(var2, var3);
case 4:
                        if(var1) { _fun0022_ip = 160; continue _fun0022 }
case 161:
                        var2 = var3.isPrivate;
                        var1 = var2.bind(var3)();
case 160:
                        return var1;
                    }
                };
                var1['canAddNewReactions'] = var4;
                var4 = function(arg1) {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
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
                        if(!(var4 != var7)) { _fun0023_ip = 162; continue _fun0023 }
case 163:
                        var3 = var5.add;
                        var3 = var3.bind(var5)(var7);
case 162:
                        var3 = _closure3_slot0;
                        var4 = null;
                        if(!(var7 !== var6)) { _fun0023_ip = 164; continue _fun0023 }
case 46:
                        var4 = var6;
case 164:
                        var3['animatingStickerMessageId'] = var4;
                        var4 = _closure3_slot0;
                        var3 = var4.updateRows;
                        var2 = {};
                        var6 = true;
                        var2['forceRender'] = var6;
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
case 0:
                        var5 = arguments[0];
                        var1 = undefined;
                        if(!(var5 === var1)) { _fun0024_ip = 69; continue _fun0024 }
case 70:
                        var5 = true;
case 69:
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
                        if(!var5) { _fun0024_ip = 165; continue _fun0024 }
case 166:
                        var5 = !var6;
case 165:
                        var2 = var3.bind(var4)(var2, var5);
                        return var1;
                    }
                };
                var1['scrollToBottom'] = var4;
                var4 = function() {
                    _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                        var5 = arguments[0];
                        var1 = undefined;
                        if(!(var5 === var1)) { _fun0025_ip = 69; continue _fun0025 }
case 70:
                        var5 = true;
case 69:
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
                        if(!var5) { _fun0025_ip = 167; continue _fun0025 }
case 37:
                        var5 = !var6;
case 167:
                        var2 = var3.bind(var4)(var2, var5);
                        return var1;
                    }
                };
                var1['scrollToTop'] = var4;
                var4 = function(arg1) {
                    _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                        var6 = arguments[1];
                        var1 = undefined;
                        if(!(var6 === var1)) { _fun0026_ip = 69; continue _fun0026 }
case 70:
                        var6 = true;
case 69:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 68;
                        var2 = var4[var2];
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.scrollToRelativeOffset;
                        var3 = _closure3_slot0;
                        var3 = var3._chatRef;
                        var3 = var3.current;
                        if(!var6) { _fun0026_ip = 72; continue _fun0026 }
case 7:
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var2 = var2.useReducedMotion;
                        var6 = !var2;
case 72:
                        var2 = arg1;
                        var2 = var4.bind(var5)(var3, var2, var6);
                        return var1;
                    }
                };
                var1['scrollToRelativeOffset'] = var4;
                var4 = function() {
                    _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var3 = var1.chatManager;
                        var1 = var3.getPreviousRows;
                        var1 = var1.bind(var3)();
                        var4 = var1.length;
                        var3 = 0;
                        if(!(var4 > var3)) { _fun0027_ip = 65; continue _fun0027 }
case 53:
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
case 65:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['scrollToTopMessage'] = var4;
                var4 = _closure1_slot4;
                var3 = function* () {
                    var1 = function* anon_0_() {
                        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0028_ip = 168; continue _fun0028 }
case 169:
                            var2 = undefined;
                            var _closure5_slot0 = var2;
                            var5 = _closure3_slot0;
                            var5 = var5.props;
                            var9 = var5.channel;
                            var11 = var5.useReducedMotion;
                            _closure5_slot0 = var11;
                            var5 = var9.isForumPost;
                            var5 = var5.bind(var9)();
                            if(!var5) { _fun0028_ip = 170; continue _fun0028 }
case 7:
                            var5 = _closure3_slot0;
                            var5 = var5.isNearTop;
                            if(var5) { _fun0028_ip = 170; continue _fun0028 }
case 60:
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
                            if(!(var6 != var5)) { _fun0028_ip = 10; continue _fun0028 }
case 171:
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
                            if(!(var6 != var5)) { _fun0028_ip = 172; continue _fun0028 }
case 173:
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
                            _fun0028_ip = 170; continue _fun0028;
case 172:
                            return var2;
case 10:
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
                            var7 = _closure1_slot64;
                            var3['limit'] = var7;
                            var3 = var5.bind(var6)(var3);
                            SaveGenerator(address=360);
case 174:
                            return var3;
case 175:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(var5) { _fun0028_ip = 176; continue _fun0028 }
case 177:
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
                            _fun0028_ip = 170; continue _fun0028;
case 176:
                            return var3;
case 170:
                            return var2;
case 168:
                            return var1;
                        }
                    };
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var1['handleTapNavBar'] = var3;
                var3 = function() {
                    _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
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
                        if(!var3) { _fun0029_ip = 65; continue _fun0029 }
case 150:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 80;
                        var4 = var7[var4];
                        var4 = var6.bind(var1)(var4);
                        var4 = var4.KeyboardTypes;
                        var4 = var4.SYSTEM;
                        var3 = var5 !== var4;
case 65:
                        if(!var3) { _fun0029_ip = 46; continue _fun0029 }
case 45:
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0029_ip = 46; continue _fun0029 }
case 162:
                        var2 = var3.closeCustomKeyboard;
                        var2 = var2.bind(var3)();
case 46:
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
case 0:
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
                        if(!var11) { _fun0030_ip = 178; continue _fun0030 }
case 179:
                        var9 = var10;
case 178:
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
case 0:
                        var2 = _closure3_slot0;
                        var3 = var2.props;
                        var2 = var3.messages;
                        var5 = var3.channel;
                        var7 = var2.jumpReturnTargetId;
                        var3 = null;
                        if(!(var3 != var7)) { _fun0031_ip = 165; continue _fun0031 }
case 144:
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
                        _fun0031_ip = 180; continue _fun0031;
case 165:
                        var3 = var2.loadingMore;
                        if(var3) { _fun0031_ip = 180; continue _fun0031 }
case 47:
                        var2 = var2.hasMoreAfter;
                        if(var2) { _fun0031_ip = 181; continue _fun0031 }
case 157:
                        var2 = _closure3_slot0;
                        var1 = var2.scrollToBottom;
                        var1 = var1.bind(var2)();
                        _fun0031_ip = 180; continue _fun0031;
case 181:
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
                        var4 = _closure1_slot64;
                        var1['limit'] = var4;
                        var4 = {};
                        var5 = true;
                        var4['present'] = var5;
                        var1['jump'] = var4;
                        var1 = var2.bind(var3)(var1);
case 180:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['jumpToPresent'] = var3;
                var3 = function() {
                    _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
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
                        if(var5) { _fun0032_ip = 182; continue _fun0032 }
case 183:
                        var10 = var3.useReducedMotion;
                        var6 = var3.oldestUnreadMessageId;
                        var8 = var7.chatManager;
                        var5 = var8.getPreviousRows;
                        var8 = var5.bind(var8)();
                        var5 = var7.findMessageIndex;
                        var5 = var5.bind(var7)(var6);
                        var6 = null;
                        if(!(var6 != var5)) { _fun0032_ip = 184; continue _fun0032 }
case 185:
                        var11 = var5 + 1;
                        var5 = var8.length;
                        var9 = var11;
                        if(!(var11 < var5)) { _fun0032_ip = 52; continue _fun0032 }
case 123:
                        var5 = var8[var11];
                        var6 = var5.type;
                        var5 = _closure1_slot70;
                        var5 = var5.SEPARATOR;
                        var9 = var11;
                        if(!(var6 === var5)) { _fun0032_ip = 52; continue _fun0032 }
case 54:
                        var5 = var8[var11];
                        var6 = var5.id;
                        var5 = _closure1_slot71;
                        var5 = var5.UNREAD;
                        var7 = var11;
                        var9 = var7;
                        if(!(var6 !== var5)) { _fun0032_ip = 52; continue _fun0032 }
case 186:
                        var11 = var7 + 1;
                        var5 = var8.length;
                        var9 = var11;
                        if(!(var11 < var5)) { _fun0032_ip = 52; continue _fun0032 }
case 22:
                        var5 = var8[var11];
                        var6 = var5.type;
                        var5 = _closure1_slot70;
                        var5 = var5.SEPARATOR;
                        var9 = var11;
                        if(!(var6 === var5)) { _fun0032_ip = 52; continue _fun0032 }
case 187:
                        var5 = var8[var11];
                        var6 = var5.id;
                        var5 = _closure1_slot71;
                        var5 = var5.UNREAD;
                        var7 = var11;
                        var9 = var7;
                        if(var6 !== var5) { _fun0032_ip = 186; continue _fun0032 }
case 52:
                        var6 = _closure3_slot0;
                        var5 = var6.shouldJumpToOriginalPost;
                        var5 = var5.bind(var6)();
                        if(var5) { _fun0032_ip = 170; continue _fun0032 }
case 188:
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
                        if(var10) { _fun0032_ip = 189; continue _fun0032 }
case 8:
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
case 189:
                        var10 = !var10;
                        var5['animated'] = var10;
                        var5 = var7.bind(var8)(var6, var9, var5);
case 170:
                        var5 = _closure3_slot0;
                        var4 = var5.loadMoreBefore;
                        var4 = var4.bind(var5)();
                        _fun0032_ip = 184; continue _fun0032;
case 182:
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
                        if(!(var7 == var5)) { _fun0032_ip = 190; continue _fun0032 }
case 191:
                        var5 = var6.id;
case 190:
                        var2['messageId'] = var5;
                        var5 = 1;
                        var2['offset'] = var5;
                        var5 = 'Mark As Read';
                        var2['context'] = var5;
                        var2 = var3.bind(var4)(var2);
case 184:
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
case 0:
                        var1 = arg1;
                        var3 = var1.forceRender;
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
                        if(!var6) { _fun0033_ip = 192; continue _fun0033 }
case 193:
                        var5 = var4 != var5;
                        var1 = null;
                        if(!var5) { _fun0033_ip = 192; continue _fun0033 }
case 194:
                        var1 = null;
                        if(!var3) { _fun0033_ip = 192; continue _fun0033 }
case 195:
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
case 0:
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
                                var3 = _closure1_slot79;
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
                                var2['forceRender'] = var7;
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
                                if(var2) { _fun0034_ip = 196; continue _fun0034 }
case 197:
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
                                if(!var2) { _fun0034_ip = 197; continue _fun0034 }
case 196:
                                var1 = _closure3_slot0;
                                var2 = var1.chatManager;
                                var1 = var2.createChangeset;
                                var1 = var1.bind(var2)();
                                return var1;
                            }
                        };
                        var1 = var3.bind(var4)(var2);
case 192:
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
case 0:
                var1 = this;
                var _closure3_slot0 = var1;
                var4 = var1.handlers;
                var3 = null;
                if(!(var3 == var4)) { _fun0035_ip = 198; continue _fun0035 }
case 48:
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
case 198:
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
case 0:
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
                if(var2) { _fun0036_ip = 147; continue _fun0036 }
case 55:
                var2 = var5.syncMessageDisplay;
                var2 = var2.bind(var5)();
                var2 = var5.recordTimings;
                var2 = var2.bind(var5)();
                _fun0036_ip = 199; continue _fun0036;
case 147:
                var4 = var5.componentDidUpdate;
                var3 = var5.prevPropsWhileFrozen;
                var2 = var5.prevStateWhileFrozen;
                var2 = var4.bind(var5)(var3, var2);
case 199:
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
case 0:
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
                if(var3) { _fun0037_ip = 200; continue _fun0037 }
case 201:
                var8 = var2.props;
                var8 = var8.messages;
                var8 = var8.ready;
                if(!var8) { _fun0037_ip = 202; continue _fun0037 }
case 203:
                var9 = var2.props;
                var9 = var9.messages;
                var9 = var9.cached;
                var8 = !var9;
case 202:
                var3 = var8;
case 200:
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
case 0:
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
                if(var4) { _fun0038_ip = 204; continue _fun0038 }
case 55:
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
case 204:
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
case 0:
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
                if(var1) { _fun0039_ip = 153; continue _fun0039 }
case 205:
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
                if(var2) { _fun0039_ip = 206; continue _fun0039 }
case 13:
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var5 = var7.bind(var6)(var5);
                var4 = var4.props;
                var4 = var4.interactionStates;
                var3 = var3.interactionStates;
                var3 = var5.bind(var6)(var4, var3);
                var2 = !var3;
case 206:
                var1 = var2;
case 153:
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
case 0:
                var3 = arg1;
                var2 = this;
                var _closure3_slot0 = var2;
                var _closure3_slot1 = var3;
                var4 = var2.props;
                var4 = var4.currentUserId;
                var7 = null;
                if(!(var7 != var4)) { _fun0040_ip = 207; continue _fun0040 }
case 44:
                var4 = var2.props;
                var4 = var4.messages;
                var5 = var3.messages;
                var8 = var3.channelId;
                var6 = var2.props;
                var6 = var6.channelId;
                if(!(var8 !== var6)) { _fun0040_ip = 208; continue _fun0040 }
case 37:
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
case 208:
                var6 = var3.isMessagesAckable;
                var6 = !var6;
                if(!var6) { _fun0040_ip = 179; continue _fun0040 }
case 171:
                var8 = var2.props;
                var6 = var8.isMessagesAckable;
case 179:
                if(!var6) { _fun0040_ip = 209; continue _fun0040 }
case 178:
                var6 = false;
                var2['hasHandledScroll'] = var6;
case 209:
                var6 = var2.shouldJumpToOriginalPost;
                var6 = var6.bind(var2)();
                if(!var6) { _fun0040_ip = 210; continue _fun0040 }
case 211:
                var8 = var2.scrollToTop;
                var6 = false;
                var6 = var8.bind(var2)(var6);
                var5 = var5.jumpSequenceId;
                var4 = var4.jumpSequenceId;
                if(!(var5 === var4)) { _fun0040_ip = 210; continue _fun0040 }
case 212:
                var5 = var2.setState;
                var4 = {};
                var6 = true;
                var4['hasJumpedToOriginalPost'] = var6;
                var4 = var5.bind(var2)(var4);
case 210:
                var4 = var2.props;
                var6 = var4.isMessagesReady;
                if(!var6) { _fun0040_ip = 213; continue _fun0040 }
case 214:
                var4 = var2.props;
                var4 = var4.isMessagesCached;
                var6 = !var4;
case 213:
                if(!var6) { _fun0040_ip = 131; continue _fun0040 }
case 215:
                var6 = var3.isMessagesCached;
case 131:
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 89;
                var4 = var8[var4];
                var17 = undefined;
                var8 = var5.bind(var17)(var4);
                var5 = var2.props;
                var4 = {};
                var9 = var2.isAtBottom;
                var4['isAtBottom'] = var9;
                var10 = var2.chatManager;
                var9 = var10.getPreviousMessages;
                var9 = var9.bind(var10)();
                var9 = var7 != var9;
                var4['hasPreviousMessages'] = var9;
                var5 = var8.bind(var17)(var5, var4, var3);
                var11 = var5.scrollToMessageId;
                var10 = var5.jumpTargetId;
                var9 = var5.jumpType;
                var4 = var5.minimizeScrolling;
                var8 = var5.focusTargetId;
                var5 = var5.shouldInitialScroll;
                var13 = var3.theme;
                var12 = var2.props;
                var12 = var12.theme;
                var13 = var13 !== var12;
                if(var13) { _fun0040_ip = 216; continue _fun0040 }
case 217:
                var14 = var3.saturation;
                var12 = var2.props;
                var12 = var12.saturation;
                var13 = var14 !== var12;
case 216:
                var14 = var13;
                if(var14) { _fun0040_ip = 218; continue _fun0040 }
case 136:
                var16 = var3.inlineAttachmentMedia;
                var12 = var2.props;
                var12 = var12.inlineAttachmentMedia;
                var14 = var16 !== var12;
case 218:
                if(var14) { _fun0040_ip = 219; continue _fun0040 }
case 135:
                var16 = var3.inlineEmbedMedia;
                var12 = var2.props;
                var12 = var12.inlineEmbedMedia;
                var14 = var16 !== var12;
case 219:
                if(var14) { _fun0040_ip = 220; continue _fun0040 }
case 221:
                var16 = var3.renderEmbeds;
                var12 = var2.props;
                var12 = var12.renderEmbeds;
                var14 = var16 !== var12;
case 220:
                if(var14) { _fun0040_ip = 222; continue _fun0040 }
case 223:
                var16 = var3.renderReactions;
                var12 = var2.props;
                var12 = var12.renderReactions;
                var14 = var16 !== var12;
case 222:
                if(var14) { _fun0040_ip = 224; continue _fun0040 }
case 225:
                var16 = var3.animateEmoji;
                var12 = var2.props;
                var12 = var12.animateEmoji;
                var14 = var16 !== var12;
case 224:
                if(var14) { _fun0040_ip = 226; continue _fun0040 }
case 227:
                var16 = var3.animateStickers;
                var12 = var2.props;
                var12 = var12.animateStickers;
                var14 = var16 !== var12;
case 226:
                if(var14) { _fun0040_ip = 228; continue _fun0040 }
case 229:
                var16 = var3.gifAutoPlay;
                var12 = var2.props;
                var12 = var12.gifAutoPlay;
                var14 = var16 !== var12;
case 228:
                if(var14) { _fun0040_ip = 230; continue _fun0040 }
case 231:
                var16 = var3.containerWidth;
                var12 = var2.props;
                var12 = var12.containerWidth;
                var14 = var16 !== var12;
case 230:
                if(var14) { _fun0040_ip = 232; continue _fun0040 }
case 233:
                var16 = var3.guildSystemChannelFlags;
                var12 = var2.props;
                var12 = var12.guildSystemChannelFlags;
                var14 = var16 !== var12;
case 232:
                if(var14) { _fun0040_ip = 234; continue _fun0040 }
case 235:
                var16 = var3.userSettingsLocale;
                var12 = var2.props;
                var12 = var12.userSettingsLocale;
                var14 = var16 !== var12;
case 234:
                if(var14) { _fun0040_ip = 236; continue _fun0040 }
case 237:
                var16 = var3.roleStyle;
                var12 = var2.props;
                var12 = var12.roleStyle;
                var14 = var16 !== var12;
case 236:
                if(var14) { _fun0040_ip = 238; continue _fun0040 }
case 239:
                var16 = var3.canSendMessages;
                var12 = var2.props;
                var12 = var12.canSendMessages;
                var14 = var16 !== var12;
case 238:
                if(var14) { _fun0040_ip = 240; continue _fun0040 }
case 241:
                var16 = var3.showPushFeedback;
                var12 = var2.props;
                var12 = var12.showPushFeedback;
                var14 = var16 !== var12;
case 240:
                if(var14) { _fun0040_ip = 242; continue _fun0040 }
case 243:
                var16 = var3.selectedSummary;
                var12 = var2.props;
                var12 = var12.selectedSummary;
                var14 = var16 !== var12;
case 242:
                if(var14) { _fun0040_ip = 244; continue _fun0040 }
case 245:
                var16 = var3.shouldObscureSpoiler;
                var12 = var2.props;
                var12 = var12.shouldObscureSpoiler;
                var14 = var16 !== var12;
case 244:
                if(var14) { _fun0040_ip = 246; continue _fun0040 }
case 247:
                var16 = var3.shouldFilterKeywords;
                var12 = var2.props;
                var12 = var12.shouldFilterKeywords;
                var14 = var16 !== var12;
case 246:
                if(var14) { _fun0040_ip = 248; continue _fun0040 }
case 249:
                var16 = var3.explicitMediaFalsePositiveInfo;
                var12 = var2.props;
                var12 = var12.explicitMediaFalsePositiveInfo;
                var14 = var16 !== var12;
case 248:
                if(var14) { _fun0040_ip = 250; continue _fun0040 }
case 251:
                var16 = var3.isStaff;
                var12 = var2.props;
                var12 = var12.isStaff;
                var14 = var16 !== var12;
case 250:
                if(var14) { _fun0040_ip = 252; continue _fun0040 }
case 253:
                var16 = var3.isAgeVerified;
                var12 = var2.props;
                var12 = var12.isAgeVerified;
                var14 = var16 !== var12;
case 252:
                if(var14) { _fun0040_ip = 254; continue _fun0040 }
case 255:
                var12 = arg2;
                var16 = var12.shouldForceRender;
                var12 = var2.state;
                var12 = var12.shouldForceRender;
                var12 = var16 !== var12;
                if(!var12) { _fun0040_ip = 256; continue _fun0040 }
case 257:
                var16 = var2.state;
                var12 = var16.shouldForceRender;
case 256:
                var14 = var12;
case 254:
                if(var14) { _fun0040_ip = 258; continue _fun0040 }
case 259:
                var16 = var3.doubleTapToReactEnabled;
                var12 = var2.props;
                var12 = var12.doubleTapToReactEnabled;
                var14 = var16 !== var12;
case 258:
                var16 = var3.resolvingGiftCodes;
                var12 = var2.props;
                var12 = var12.resolvingGiftCodes;
                var39 = var16 !== var12;
                if(var39) { _fun0040_ip = 260; continue _fun0040 }
case 261:
                var16 = var3.resolvedGiftCodes;
                var12 = var2.props;
                var12 = var12.resolvedGiftCodes;
                var39 = var16 !== var12;
case 260:
                if(var39) { _fun0040_ip = 262; continue _fun0040 }
case 263:
                var16 = var3.acceptingGiftCodes;
                var12 = var2.props;
                var12 = var12.acceptingGiftCodes;
                var39 = var16 !== var12;
case 262:
                var _closure3_slot2 = var39;
                var38 = var3.uploads;
                var12 = var2.props;
                var37 = var12.uploads;
                var16 = _closure1_slot1;
                var12 = _closure1_slot2;
                var18 = 87;
                var12 = var12[var18];
                var19 = var16.bind(var17)(var12);
                var16 = var3.interactionStates;
                var12 = var2.props;
                var12 = var12.interactionStates;
                var12 = var19.bind(var17)(var16, var12);
                var28 = !var12;
                var _closure3_slot3 = var28;
                var16 = var3.channelPolls;
                var12 = var2.props;
                var12 = var12.channelPolls;
                var25 = var16 !== var12;
                var _closure3_slot4 = var25;
                var16 = var3.interactionComponentStatesVersion;
                var12 = var2.props;
                var12 = var12.interactionComponentStatesVersion;
                var27 = var16 !== var12;
                var _closure3_slot5 = var27;
                var16 = var3.shouldDisableInteractiveComponents;
                var12 = var2.props;
                var12 = var12.shouldDisableInteractiveComponents;
                var12 = var16 !== var12;
                var _closure3_slot6 = var12;
                var16 = var3.communicationDisabledVersion;
                var12 = var2.props;
                var12 = var12.communicationDisabledVersion;
                var34 = var16 !== var12;
                var _closure3_slot7 = var34;
                var16 = var3.messageAuthorMembers;
                var12 = var2.props;
                var12 = var12.messageAuthorMembers;
                var33 = var16 !== var12;
                var _closure3_slot8 = var33;
                var16 = var3.failedMessagesVersion;
                var12 = var2.props;
                var12 = var12.failedMessagesVersion;
                var32 = var16 !== var12;
                var _closure3_slot9 = var32;
                var16 = var3.renderCommunicationDisabled;
                var12 = var2.props;
                var12 = var12.renderCommunicationDisabled;
                var29 = var16 !== var12;
                var _closure3_slot10 = var29;
                var31 = var3.forwardGuildsVersion;
                var12 = var2.props;
                var30 = var12.forwardGuildsVersion;
                var12 = var2.props;
                var16 = var12.channel;
                var12 = var16.isForumPost;
                var26 = var12.bind(var16)();
                if(!var26) { _fun0040_ip = 264; continue _fun0040 }
case 265:
                var16 = var3.isFollowingForumPost;
                var12 = var2.props;
                var12 = var12.isFollowingForumPost;
                var26 = var16 !== var12;
case 264:
                var _closure3_slot11 = var26;
                var16 = var3.showMediaPostSharePrompt;
                var12 = var2.props;
                var12 = var12.showMediaPostSharePrompt;
                var24 = var16 !== var12;
                var _closure3_slot12 = var24;
                var16 = var3.unloadedContentEntryMessageIds;
                var12 = var2.props;
                var12 = var12.unloadedContentEntryMessageIds;
                var23 = var16 !== var12;
                var _closure3_slot13 = var23;
                var16 = var3.invalidApplicationIds;
                var12 = var2.props;
                var12 = var12.invalidApplicationIds;
                var12 = var16 !== var12;
                var _closure3_slot14 = var12;
                var19 = var3.activityInstanceIds;
                var16 = var2.props;
                var16 = var16.activityInstanceIds;
                var36 = var19 !== var16;
                if(var36) { _fun0040_ip = 266; continue _fun0040 }
case 267:
                var19 = var3.activityParticipants;
                var16 = var2.props;
                var16 = var16.activityParticipants;
                var36 = var19 !== var16;
case 266:
                if(var36) { _fun0040_ip = 268; continue _fun0040 }
case 269:
                var19 = var3.applicationAssetFetchingIds;
                var16 = var2.props;
                var16 = var16.applicationAssetFetchingIds;
                var36 = var19 !== var16;
case 268:
                if(var36) { _fun0040_ip = 270; continue _fun0040 }
case 271:
                var19 = var3.activityInstancePresenceDetails;
                var16 = var2.props;
                var16 = var16.activityInstancePresenceDetails;
                var36 = var19 !== var16;
case 270:
                if(var36) { _fun0040_ip = 272; continue _fun0040 }
case 273:
                var19 = var3.messagesWithActivitiesLaunching;
                var16 = var2.props;
                var16 = var16.messagesWithActivitiesLaunching;
                var36 = var19 !== var16;
case 272:
                if(var36) { _fun0040_ip = 274; continue _fun0040 }
case 275:
                var36 = var12;
case 274:
                var _closure3_slot15 = var36;
                var16 = _closure1_slot0;
                var12 = _closure1_slot2;
                var19 = var12[var18];
                var22 = var16.bind(var17)(var19);
                var21 = var22.areArraysShallowEqual;
                var20 = var3.activityInviteMessageIds;
                var19 = var2.props;
                var19 = var19.activityInviteMessageIds;
                var19 = var21.bind(var22)(var20, var19);
                var22 = !var19;
                var _closure3_slot16 = var22;
                var12 = var12[var18];
                var19 = var16.bind(var17)(var12);
                var18 = var19.areArraysShallowEqual;
                var16 = var3.resolvedReferralTrialOfferIds;
                var12 = var2.props;
                var12 = var12.resolvedReferralTrialOfferIds;
                var12 = var18.bind(var19)(var16, var12);
                var21 = !var12;
                if(var21) { _fun0040_ip = 276; continue _fun0040 }
case 277:
                var16 = var3.referralTrialOfferId;
                var12 = var2.props;
                var12 = var12.referralTrialOfferId;
                var21 = var16 !== var12;
case 276:
                if(var21) { _fun0040_ip = 278; continue _fun0040 }
case 279:
                var16 = var3.isPremiumTier2User;
                var12 = var2.props;
                var12 = var12.isPremiumTier2User;
                var21 = var16 !== var12;
case 278:
                var _closure3_slot17 = var21;
                var16 = var3.guildInviteColorsFetched;
                var12 = var2.props;
                var12 = var12.guildInviteColorsFetched;
                var20 = var16 !== var12;
                var _closure3_slot18 = var20;
                var16 = var3.guildEmojis;
                var12 = var2.props;
                var12 = var12.guildEmojis;
                var19 = var16 !== var12;
                var _closure3_slot19 = var19;
                var16 = var3.selfActivities;
                var12 = var2.props;
                var12 = var12.selfActivities;
                var18 = var16 !== var12;
                var _closure3_slot20 = var18;
                var16 = var3.currentClientVoiceChannelId;
                var12 = var2.props;
                var12 = var12.currentClientVoiceChannelId;
                var35 = var16 !== var12;
                var _closure3_slot21 = var35;
                var16 = var3.voiceStatePrivateChannelId;
                var12 = var2.props;
                var12 = var12.voiceStatePrivateChannelId;
                var16 = var16 !== var12;
                var40 = var3.activityLaunchJoinStates;
                var12 = var2.props;
                var12 = var12.activityLaunchJoinStates;
                var12 = var40 !== var12;
                var _closure3_slot22 = var12;
                if(var14) { _fun0040_ip = 280; continue _fun0040 }
case 281:
                if(var39) { _fun0040_ip = 280; continue _fun0040 }
case 282:
                if(!(var38 === var37)) { _fun0040_ip = 280; continue _fun0040 }
case 283:
                if(var36) { _fun0040_ip = 280; continue _fun0040 }
case 284:
                var37 = var3.messages;
                var36 = var2.props;
                var36 = var36.messages;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 285:
                var37 = var3.editingMessageId;
                var36 = var2.props;
                var36 = var36.editingMessageId;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 286:
                var37 = var3.replyingMessageId;
                var36 = var2.props;
                var36 = var36.replyingMessageId;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 287:
                if(var16) { _fun0040_ip = 280; continue _fun0040 }
case 288:
                var37 = var3.messageAuthorActivities;
                var36 = var2.props;
                var36 = var36.messageAuthorActivities;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 289:
                var37 = var3.oldestUnreadMessageId;
                var36 = var2.props;
                var36 = var36.oldestUnreadMessageId;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 290:
                var37 = var3.invites;
                var36 = var2.props;
                var36 = var36.invites;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 291:
                var37 = var3.appDirectoryEmbedApplications;
                var36 = var2.props;
                var36 = var36.appDirectoryEmbedApplications;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 292:
                var37 = var3.invalidAppDirectoryEmbedApplicationIds;
                var36 = var2.props;
                var36 = var36.invalidAppDirectoryEmbedApplicationIds;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 293:
                var37 = var3.appDirectoryEmbedApplicationFetchStates;
                var36 = var2.props;
                var36 = var36.appDirectoryEmbedApplicationFetchStates;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 294:
                var37 = var3.guildTemplates;
                var36 = var2.props;
                var36 = var36.guildTemplates;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 295:
                var37 = var3.buildOverrides;
                var36 = var2.props;
                var36 = var36.buildOverrides;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 296:
                var37 = var3.quests;
                var36 = var2.props;
                var36 = var36.quests;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 297:
                var37 = var3.isFetchingCurrentQuests;
                var36 = var2.props;
                var36 = var36.isFetchingCurrentQuests;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 298:
                var37 = var3.participantsLength;
                var36 = var2.props;
                var36 = var36.participantsLength;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 299:
                var37 = var3.isMessagesReady;
                var36 = var2.props;
                var36 = var36.isMessagesReady;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 300:
                var37 = var3.channelThreadsVersion;
                var36 = var2.props;
                var36 = var36.channelThreadsVersion;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 301:
                var37 = var3.rsvpVersion;
                var36 = var2.props;
                var36 = var36.rsvpVersion;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 302:
                var37 = var3.repliedIds;
                var36 = var2.props;
                var36 = var36.repliedIds;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 303:
                var37 = var3.hasLoadedExperiments;
                var36 = var2.props;
                var36 = var36.hasLoadedExperiments;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 304:
                var37 = var3.isMessageRequest;
                var36 = var2.props;
                var36 = var36.isMessageRequest;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 305:
                var37 = var3.isSpamMessageRequest;
                var36 = var2.props;
                var36 = var36.isSpamMessageRequest;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 306:
                var37 = var3.currentUserCommunicationDisabled;
                var36 = var2.props;
                var36 = var36.currentUserCommunicationDisabled;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 307:
                var37 = var3.userSettingsLocale;
                var36 = var2.props;
                var36 = var36.userSettingsLocale;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 308:
                var37 = var3.selectedSummary;
                var36 = var2.props;
                var36 = var36.selectedSummary;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 309:
                var37 = var3.showPushFeedback;
                var36 = var2.props;
                var36 = var36.showPushFeedback;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 310:
                var37 = var3.cacheStoreLoaded;
                var36 = var2.props;
                var36 = var36.cacheStoreLoaded;
                if(!(var37 === var36)) { _fun0040_ip = 280; continue _fun0040 }
case 311:
                if(var35) { _fun0040_ip = 280; continue _fun0040 }
case 312:
                if(var34) { _fun0040_ip = 280; continue _fun0040 }
case 313:
                if(var33) { _fun0040_ip = 280; continue _fun0040 }
case 314:
                if(var32) { _fun0040_ip = 280; continue _fun0040 }
case 315:
                if(!(var31 === var30)) { _fun0040_ip = 280; continue _fun0040 }
case 316:
                if(var29) { _fun0040_ip = 280; continue _fun0040 }
case 317:
                if(var28) { _fun0040_ip = 280; continue _fun0040 }
case 318:
                if(var27) { _fun0040_ip = 280; continue _fun0040 }
case 319:
                if(var26) { _fun0040_ip = 280; continue _fun0040 }
case 320:
                if(!(var7 == var10)) { _fun0040_ip = 280; continue _fun0040 }
case 321:
                if(!(var7 == var8)) { _fun0040_ip = 280; continue _fun0040 }
case 322:
                var27 = var3.androidKeyboardHeight;
                var26 = var2.props;
                var26 = var26.androidKeyboardHeight;
                if(!(var27 === var26)) { _fun0040_ip = 280; continue _fun0040 }
case 323:
                var27 = var3.mediaPostPreviewEmbeds;
                var26 = var2.props;
                var26 = var26.mediaPostPreviewEmbeds;
                if(!(var27 === var26)) { _fun0040_ip = 280; continue _fun0040 }
case 324:
                var27 = var3.shouldObscureSpoiler;
                var26 = var2.props;
                var26 = var26.shouldObscureSpoiler;
                if(!(var27 === var26)) { _fun0040_ip = 280; continue _fun0040 }
case 325:
                var27 = var3.shouldFilterKeywords;
                var26 = var2.props;
                var26 = var26.shouldFilterKeywords;
                if(!(var27 === var26)) { _fun0040_ip = 280; continue _fun0040 }
case 326:
                var27 = var3.shouldDisableInteractiveComponents;
                var26 = var2.props;
                var26 = var26.shouldDisableInteractiveComponents;
                if(!(var27 === var26)) { _fun0040_ip = 280; continue _fun0040 }
case 327:
                if(var25) { _fun0040_ip = 280; continue _fun0040 }
case 328:
                if(var24) { _fun0040_ip = 280; continue _fun0040 }
case 329:
                var25 = var3.threadStartingReferenceMessage;
                var24 = var2.props;
                var24 = var24.threadStartingReferenceMessage;
                if(!(var25 === var24)) { _fun0040_ip = 280; continue _fun0040 }
case 330:
                if(var23) { _fun0040_ip = 280; continue _fun0040 }
case 331:
                if(var22) { _fun0040_ip = 280; continue _fun0040 }
case 332:
                if(var21) { _fun0040_ip = 280; continue _fun0040 }
case 333:
                if(var20) { _fun0040_ip = 280; continue _fun0040 }
case 334:
                if(var19) { _fun0040_ip = 280; continue _fun0040 }
case 335:
                if(var18) { _fun0040_ip = 280; continue _fun0040 }
case 336:
                if(var12) { _fun0040_ip = 280; continue _fun0040 }
case 337:
                var12 = var2.recordTimings;
                var12 = var12.bind(var2)();
                _fun0040_ip = 207; continue _fun0040;
case 280:
                var12 = global;
                var12 = var12.Set;
                var18 = var12.prototype;
                var18 = Object.create(var18, {constructor: {value: var12}});
                var44 = var18;
                var12 = new var44[var12](var43);
                var12 = var12 instanceof Object ? var12 : var18;
                var _closure3_slot23 = var12;
                var19 = var3.editingMessageId;
                var18 = var2.props;
                var18 = var18.editingMessageId;
                if(!(var19 !== var18)) { _fun0040_ip = 338; continue _fun0040 }
case 339:
                var18 = var2.props;
                var18 = var18.editingMessageId;
                if(!(var7 != var18)) { _fun0040_ip = 340; continue _fun0040 }
case 341:
                var19 = var12.add;
                var18 = var2.props;
                var18 = var18.editingMessageId;
                var18 = var19.bind(var12)(var18);
case 340:
                var18 = var3.editingMessageId;
                if(!(var7 != var18)) { _fun0040_ip = 338; continue _fun0040 }
case 342:
                var19 = var12.add;
                var18 = var3.editingMessageId;
                var18 = var19.bind(var12)(var18);
case 338:
                var19 = var3.replyingMessageId;
                var18 = var2.props;
                var18 = var18.replyingMessageId;
                if(!(var19 !== var18)) { _fun0040_ip = 343; continue _fun0040 }
case 344:
                var18 = var2.props;
                var18 = var18.replyingMessageId;
                if(!(var7 != var18)) { _fun0040_ip = 345; continue _fun0040 }
case 346:
                var19 = var12.add;
                var18 = var2.props;
                var18 = var18.replyingMessageId;
                var18 = var19.bind(var12)(var18);
case 345:
                var18 = var3.replyingMessageId;
                if(!(var7 != var18)) { _fun0040_ip = 343; continue _fun0040 }
case 347:
                var19 = var12.add;
                var18 = var3.replyingMessageId;
                var18 = var19.bind(var12)(var18);
case 343:
                var19 = var3.isMessagesReady;
                var18 = var2.props;
                var18 = var18.isMessagesReady;
                if(!(var19 === var18)) { _fun0040_ip = 348; continue _fun0040 }
case 349:
                var19 = var3.isCallActive;
                var18 = var2.props;
                var18 = var18.isCallActive;
                if(!(var19 === var18)) { _fun0040_ip = 348; continue _fun0040 }
case 350:
                if(var16) { _fun0040_ip = 348; continue _fun0040 }
case 351:
                var18 = var3.participantsLength;
                var16 = var2.props;
                var16 = var16.participantsLength;
                if(!(var18 !== var16)) { _fun0040_ip = 352; continue _fun0040 }
case 348:
                var16 = _closure1_slot1;
                var18 = _closure1_slot2;
                var15 = 65;
                var15 = var18[var15];
                var18 = var16.bind(var17)(var15);
                var17 = var18.find;
                var15 = var2.props;
                var16 = var15.messages;
                var15 = var16.toArray;
                var16 = var15.bind(var16)();
                var15 = var16.reverse;
                var16 = var15.bind(var16)();
                var15 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = _closure1_slot67;
                    var1 = var1.CALL;
                    var1 = var2 === var1;
                    return var1;
                };
                var15 = var17.bind(var18)(var16, var15);
                if(!(var7 != var15)) { _fun0040_ip = 352; continue _fun0040 }
case 353:
                var16 = var12.add;
                var15 = var15.id;
                var15 = var16.bind(var12)(var15);
case 352:
                var16 = var3.channelThreadsVersion;
                var15 = var2.props;
                var15 = var15.channelThreadsVersion;
                var15 = var16 !== var15;
                var _closure3_slot24 = var15;
                var16 = var3.rsvpVersion;
                var15 = var2.props;
                var15 = var15.rsvpVersion;
                var15 = var16 !== var15;
                var _closure3_slot25 = var15;
                var16 = var3.repliedIds;
                var15 = var2.props;
                var15 = var15.repliedIds;
                var15 = var16 !== var15;
                var _closure3_slot26 = var15;
                var16 = var3.hasLoadedExperiments;
                var15 = var2.props;
                var15 = var15.hasLoadedExperiments;
                var15 = var16 !== var15;
                var _closure3_slot27 = var15;
                var15 = var3.communicationDisabledVersion;
                var16 = var7 != var15;
                var7 = -1;
                if(!var16) { _fun0040_ip = 354; continue _fun0040 }
case 355:
                var7 = var15;
case 354:
                var _closure3_slot28 = var7;
                var3 = var3.cacheStoreLoaded;
                var7 = !var3;
                if(!var7) { _fun0040_ip = 356; continue _fun0040 }
case 357:
                var3 = var2.props;
                var7 = var3.cacheStoreLoaded;
case 356:
                var _closure3_slot29 = var7;
                var3 = var2.props;
                var15 = var3.messages;
                var3 = var15.forEach;
                var1 = function(arg1) {
                    _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                        var1 = arg1;
                        var3 = _closure3_slot21;
                        if(!var3) { _fun0041_ip = 4; continue _fun0041 }
case 138:
                        var3 = var1.activity;
                        var4 = null;
                        var5 = var4 == var3;
                        var4 = undefined;
                        if(var5) { _fun0041_ip = 144; continue _fun0041 }
case 3:
                        var4 = var3.type;
case 144:
                        var3 = _closure1_slot61;
                        var3 = var3.STREAM_REQUEST;
                        if(!(var4 !== var3)) { _fun0041_ip = 358; continue _fun0041 }
case 4:
                        var3 = _closure3_slot27;
                        if(!var3) { _fun0041_ip = 147; continue _fun0041 }
case 150:
                        var4 = var1.type;
                        var3 = _closure1_slot67;
                        var3 = var3.USER_JOIN;
                        if(!(var4 !== var3)) { _fun0041_ip = 359; continue _fun0041 }
case 147:
                        var3 = _closure3_slot26;
                        if(!var3) { _fun0041_ip = 360; continue _fun0041 }
case 201:
                        var4 = var1.type;
                        var3 = _closure1_slot67;
                        var3 = var3.REPLY;
                        if(!(var4 === var3)) { _fun0041_ip = 360; continue _fun0041 }
case 361:
                        var3 = var1.messageReference;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0041_ip = 360; continue _fun0041 }
case 208:
                        var4 = _closure3_slot0;
                        var4 = var4.props;
                        var5 = var4.repliedIds;
                        var4 = var5.has;
                        var3 = var3.message_id;
                        var3 = var4.bind(var5)(var3);
                        if(var3) { _fun0041_ip = 362; continue _fun0041 }
case 360:
                        var3 = _closure3_slot24;
                        if(!var3) { _fun0041_ip = 363; continue _fun0041 }
case 79:
                        var4 = var1.hasFlag;
                        var3 = _closure1_slot66;
                        var3 = var3.HAS_THREAD;
                        var3 = var4.bind(var1)(var3);
                        if(var3) { _fun0041_ip = 364; continue _fun0041 }
case 363:
                        var3 = _closure3_slot25;
                        if(!var3) { _fun0041_ip = 365; continue _fun0041 }
case 366:
                        var3 = var1.codedLinks;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(!(var4 > var3))) { _fun0041_ip = 284; continue _fun0041 }
case 365:
                        var3 = _closure3_slot19;
                        if(!var3) { _fun0041_ip = 131; continue _fun0041 }
case 367:
                        var4 = var1.type;
                        var3 = _closure1_slot67;
                        var3 = var3.EMOJI_ADDED;
                        if(!(var4 !== var3)) { _fun0041_ip = 368; continue _fun0041 }
case 131:
                        var3 = _closure3_slot10;
                        if(var3) { _fun0041_ip = 369; continue _fun0041 }
case 370:
                        var3 = _closure3_slot7;
                        if(!var3) { _fun0041_ip = 371; continue _fun0041 }
case 372:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var4 = var3.guildId;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0041_ip = 371; continue _fun0041 }
case 373:
                        var6 = _closure1_slot46;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var5 = var3.guildId;
                        var3 = var1.author;
                        var4 = var3.id;
                        var3 = undefined;
                        var4 = var6.bind(var3)(var5, var4);
                        var3 = _closure3_slot28;
                        if(!(!(var4 > var3))) { _fun0041_ip = 369; continue _fun0041 }
case 371:
                        var3 = _closure3_slot8;
                        if(!var3) { _fun0041_ip = 95; continue _fun0041 }
case 374:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.guildId;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0041_ip = 95; continue _fun0041 }
case 375:
                        var5 = var1.author;
                        var6 = var4 == var5;
                        var3 = undefined;
                        if(var6) { _fun0041_ip = 217; continue _fun0041 }
case 376:
                        var3 = var5.id;
case 217:
                        if(!(var4 == var3)) { _fun0041_ip = 377; continue _fun0041 }
case 95:
                        var3 = _closure3_slot9;
                        if(!var3) { _fun0041_ip = 378; continue _fun0041 }
case 379:
                        var3 = var1.author;
                        var4 = var3.id;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.currentUserId;
                        if(!(var4 !== var3)) { _fun0041_ip = 380; continue _fun0041 }
case 378:
                        var3 = _closure3_slot3;
                        if(!var3) { _fun0041_ip = 381; continue _fun0041 }
case 382:
                        var3 = _closure3_slot1;
                        var4 = var3.interactionStates;
                        var3 = var1.id;
                        var4 = var4[var3];
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var5 = var3.interactionStates;
                        var3 = var1.id;
                        var3 = var5[var3];
                        if(!(var4 === var3)) { _fun0041_ip = 383; continue _fun0041 }
case 381:
                        var3 = _closure3_slot5;
                        if(!var3) { _fun0041_ip = 384; continue _fun0041 }
case 385:
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
                        if(!(var4 === var3)) { _fun0041_ip = 386; continue _fun0041 }
case 384:
                        var3 = _closure3_slot6;
                        if(!var3) { _fun0041_ip = 387; continue _fun0041 }
case 388:
                        var3 = var1.components;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(var3 === var4)) { _fun0041_ip = 389; continue _fun0041 }
case 387:
                        var3 = _closure3_slot4;
                        if(!var3) { _fun0041_ip = 390; continue _fun0041 }
case 391:
                        var3 = _closure3_slot1;
                        var4 = var3.channelPolls;
                        var3 = var1.id;
                        var4 = var4[var3];
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var5 = var3.channelPolls;
                        var3 = var1.id;
                        var3 = var5[var3];
                        if(!(var4 === var3)) { _fun0041_ip = 392; continue _fun0041 }
case 390:
                        var3 = _closure3_slot13;
                        if(!var3) { _fun0041_ip = 393; continue _fun0041 }
case 234:
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
                        if(!(var4 === var3)) { _fun0041_ip = 394; continue _fun0041 }
case 393:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var4 = var3.channel;
                        var3 = var4.isForumPost;
                        var3 = var3.bind(var4)();
                        if(!var3) { _fun0041_ip = 395; continue _fun0041 }
case 396:
                        var3 = _closure3_slot11;
                        if(var3) { _fun0041_ip = 397; continue _fun0041 }
case 242:
                        var3 = _closure3_slot12;
                        if(!var3) { _fun0041_ip = 395; continue _fun0041 }
case 397:
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
                        if(!(var4 !== var3)) { _fun0041_ip = 398; continue _fun0041 }
case 395:
                        var3 = _closure3_slot15;
                        if(!var3) { _fun0041_ip = 399; continue _fun0041 }
case 400:
                        var4 = var1.activityInstance;
                        var3 = null;
                        if(!(var3 == var4)) { _fun0041_ip = 401; continue _fun0041 }
case 399:
                        var3 = _closure3_slot16;
                        if(!var3) { _fun0041_ip = 402; continue _fun0041 }
case 403:
                        var6 = var1.activity;
                        var5 = null;
                        var7 = var5 == var6;
                        var4 = undefined;
                        if(var7) { _fun0041_ip = 404; continue _fun0041 }
case 405:
                        var4 = var6.party_id;
case 404:
                        var3 = var5 != var4;
case 402:
                        if(!var3) { _fun0041_ip = 406; continue _fun0041 }
case 407:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
case 406:
                        var3 = var1.author;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0041_ip = 408; continue _fun0041 }
case 409:
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
                        if(var6) { _fun0041_ip = 410; continue _fun0041 }
case 411:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var10 = var7.bind(var3)(var6);
                        var9 = var10.codedLinksChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var9.bind(var10)(var1, var7, var6);
                        if(var6) { _fun0041_ip = 410; continue _fun0041 }
case 412:
                        var6 = _closure3_slot2;
                        if(!var6) { _fun0041_ip = 413; continue _fun0041 }
case 414:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var10 = var7.bind(var3)(var6);
                        var9 = var10.giftCodesChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var9.bind(var10)(var1, var7, var6);
                        if(var6) { _fun0041_ip = 410; continue _fun0041 }
case 413:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var9 = var7.bind(var3)(var6);
                        var8 = var9.mediaPostPreviewEmbedsChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var8.bind(var9)(var1, var7, var6);
                        if(var6) { _fun0041_ip = 410; continue _fun0041 }
case 415:
                        var6 = _closure3_slot29;
                        if(!var6) { _fun0041_ip = 416; continue _fun0041 }
case 417:
                        var7 = var1.embeds;
                        var8 = var7.length;
                        var7 = 0;
                        var6 = var8 > var7;
case 416:
                        if(!var6) { _fun0041_ip = 418; continue _fun0041 }
case 419:
                        var8 = _closure3_slot23;
                        var7 = var8.add;
                        var6 = var1.id;
                        var6 = var7.bind(var8)(var6);
case 418:
                        var6 = var1.type;
                        var5 = _closure1_slot67;
                        var5 = var5.THREAD_STARTER_MESSAGE;
                        var5 = var6 === var5;
                        if(!var5) { _fun0041_ip = 420; continue _fun0041 }
case 421:
                        var6 = _closure3_slot1;
                        var7 = var6.threadStartingReferenceMessage;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var6.threadStartingReferenceMessage;
                        var5 = var7 !== var6;
case 420:
                        if(!var5) { _fun0041_ip = 422; continue _fun0041 }
case 423:
                        var7 = _closure3_slot23;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
case 422:
                        var5 = _closure3_slot14;
                        if(!var5) { _fun0041_ip = 424; continue _fun0041 }
case 425:
                        var6 = var1.applicationId;
                        var5 = var4 != var6;
case 424:
                        if(!var5) { _fun0041_ip = 426; continue _fun0041 }
case 427:
                        var6 = _closure3_slot1;
                        var8 = var6.invalidApplicationIds;
                        var7 = var8.includes;
                        var6 = var1.applicationId;
                        var5 = var7.bind(var8)(var6);
case 426:
                        if(!var5) { _fun0041_ip = 428; continue _fun0041 }
case 429:
                        var7 = _closure3_slot23;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
case 428:
                        var5 = _closure3_slot17;
                        if(!var5) { _fun0041_ip = 430; continue _fun0041 }
case 431:
                        var8 = var1.referralTrialOfferId;
                        var5 = var4 != var8;
                        if(!var5) { _fun0041_ip = 432; continue _fun0041 }
case 433:
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var7 = var6.resolvedReferralTrialOfferIds;
                        var6 = var7.includes;
                        var5 = var6.bind(var7)(var8);
case 432:
                        if(!var5) { _fun0041_ip = 430; continue _fun0041 }
case 434:
                        var7 = _closure3_slot23;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
case 430:
                        var5 = _closure3_slot18;
                        if(!var5) { _fun0041_ip = 435; continue _fun0041 }
case 436:
                        var6 = var1.codedLinks;
                        var7 = var6.length;
                        var6 = 0;
                        var5 = var7 > var6;
case 435:
                        if(!var5) { _fun0041_ip = 437; continue _fun0041 }
case 438:
                        var7 = _closure3_slot23;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
case 437:
                        var5 = _closure3_slot20;
                        if(var5) { _fun0041_ip = 266; continue _fun0041 }
case 439:
                        var5 = _closure3_slot22;
                        if(!var5) { _fun0041_ip = 408; continue _fun0041 }
case 266:
                        var5 = var1.activity;
                        var6 = var4 == var5;
                        var3 = undefined;
                        if(var6) { _fun0041_ip = 440; continue _fun0041 }
case 441:
                        var3 = var5.party_id;
case 440:
                        if(!(var4 != var3)) { _fun0041_ip = 408; continue _fun0041 }
case 442:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 408; continue _fun0041;
case 410:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 408; continue _fun0041;
case 401:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 408; continue _fun0041;
case 398:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 408; continue _fun0041;
case 394:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 408; continue _fun0041;
case 392:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 408; continue _fun0041;
case 389:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 408; continue _fun0041;
case 386:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 408; continue _fun0041;
case 383:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 408; continue _fun0041;
case 380:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 408; continue _fun0041;
case 377:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var4 = var3.messageAuthorMembers;
                        var3 = var1.author;
                        var3 = var3.id;
                        var4 = var4[var3];
                        var3 = _closure3_slot1;
                        var5 = var3.messageAuthorMembers;
                        var3 = var1.author;
                        var3 = var3.id;
                        var3 = var5[var3];
                        if(!(var4 !== var3)) { _fun0041_ip = 408; continue _fun0041 }
case 443:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 408; continue _fun0041;
case 369:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 408; continue _fun0041;
case 368:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 408; continue _fun0041;
case 284:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 408; continue _fun0041;
case 364:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 408; continue _fun0041;
case 362:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        var3 = undefined;
                        return var3;
case 359:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0041_ip = 408; continue _fun0041;
case 358:
                        var3 = _closure3_slot23;
                        var2 = var3.add;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
case 408:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var15)(var1);
                var3 = var2.updateRows;
                var1 = {};
                var1['forceRender'] = var14;
                var1['forceReload'] = var13;
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
case 207:
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
case 0:
                var3 = arg1;
                var1 = this;
                var2 = var3.isAtBottom;
                var11 = var3.isNearBottom;
                var4 = undefined;
                if(!(var11 === var4)) { _fun0042_ip = 159; continue _fun0042 }
case 43:
                var11 = false;
case 159:
                var12 = var3.isNearTop;
                if(!(var12 === var4)) { _fun0042_ip = 444; continue _fun0042 }
case 44:
                var12 = false;
case 444:
                var13 = var3.dragging;
                if(!(var13 === var4)) { _fun0042_ip = 445; continue _fun0042 }
case 446:
                var13 = false;
case 445:
                var15 = var3.decelerating;
                if(!(var15 === var4)) { _fun0042_ip = 150; continue _fun0042 }
case 59:
                var15 = false;
case 150:
                var5 = var3.isFirstMessageVisible;
                if(!(var5 === var4)) { _fun0042_ip = 39; continue _fun0042 }
case 37:
                var5 = false;
case 39:
                var3 = var1.props;
                var9 = var3.messages;
                var6 = var3.channel;
                var3 = var3.onScroll;
                var7 = null;
                if(!(var7 != var6)) { _fun0042_ip = 447; continue _fun0042 }
case 448:
                var7 = var9.length;
                var10 = 0;
                if(!(var10 === var7)) { _fun0042_ip = 208; continue _fun0042 }
case 361:
                var7 = var9.loadingMore;
                if(var7) { _fun0042_ip = 447; continue _fun0042 }
case 208:
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var8 = 91;
                var8 = var16[var8];
                var14 = var14.bind(var4)(var8);
                var8 = var14.getIsScreenReaderEnabled;
                var14 = var8.bind(var14)();
                var8 = var9.loadingMore;
                var8 = !var8;
                if(!var8) { _fun0042_ip = 449; continue _fun0042 }
case 450:
                if(var13) { _fun0042_ip = 16; continue _fun0042 }
case 128:
                var13 = var15;
case 16:
                if(var13) { _fun0042_ip = 451; continue _fun0042 }
case 82:
                var13 = var14;
case 451:
                var8 = var13;
case 449:
                if(!var8) { _fun0042_ip = 86; continue _fun0042 }
case 452:
                var13 = var1.pendingUpdatesQueue;
                var13 = var13.length;
                var8 = var10 === var13;
case 86:
                var13 = var1.isNearTop;
                if(var13) { _fun0042_ip = 453; continue _fun0042 }
case 127:
                if(!var12) { _fun0042_ip = 453; continue _fun0042 }
case 454:
                var12 = var9.hasMoreBefore;
                if(!var12) { _fun0042_ip = 453; continue _fun0042 }
case 455:
                if(!var8) { _fun0042_ip = 453; continue _fun0042 }
case 456:
                var12 = var1.loadMoreBefore;
                var12 = var12.bind(var1)();
                _fun0042_ip = 457; continue _fun0042;
case 453:
                var12 = var1.isNearBottom;
                if(var12) { _fun0042_ip = 458; continue _fun0042 }
case 459:
                if(!var11) { _fun0042_ip = 458; continue _fun0042 }
case 460:
                var9 = var9.hasMoreAfter;
                if(!var9) { _fun0042_ip = 458; continue _fun0042 }
case 461:
                if(!var8) { _fun0042_ip = 458; continue _fun0042 }
case 462:
                var8 = var1.loadMoreAfter;
                var8 = var8.bind(var1)();
                _fun0042_ip = 457; continue _fun0042;
case 458:
                var8 = var1.isAtBottom;
                var8 = var8 === var2;
                if(!var8) { _fun0042_ip = 133; continue _fun0042 }
case 463:
                var8 = var1.hasHandledScroll;
case 133:
                if(var8) { _fun0042_ip = 457; continue _fun0042 }
case 464:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 88;
                var7 = var9[var7];
                var9 = var8.bind(var4)(var7);
                var8 = var9.updateChannelDimensions;
                var7 = var6.id;
                var6 = 0;
                if(!var2) { _fun0042_ip = 465; continue _fun0042 }
case 466:
                var6 = 1;
case 465:
                var18 = 1;
                var21 = var9;
                var20 = var7;
                var19 = var6;
                var17 = 0;
                var2 = var21[var8](var20, var19, var18, var17, var16);
                var2 = true;
                var1['hasHandledScroll'] = var2;
case 457:
                var2 = {};
                var2['isFirstMessageVisible'] = var5;
                var2 = var3.bind(var4)(var2);
                var2 = var1._chatUpdatesQueue;
                var1 = var2.tryFlush;
                var1 = var1.bind(var2)();
                var1 = true;
                return var1;
case 447:
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
case 0:
                var1 = arg1;
                var2 = this;
                var11 = var1.firstVisibleMessageRowIndex;
                var8 = var1.firstVisibleMessagePercentVisible;
                var10 = var1.lastVisibleMessageRowIndex;
                var7 = var1.lastVisibleMessagePercentVisible;
                var9 = var1.source;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 92;
                var4 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.getVisibleMessages;
                var4 = {};
                var4['firstVisibleMessageRowIndex'] = var11;
                var4['lastVisibleMessageRowIndex'] = var10;
                var4['firstVisibleMessagePercentVisible'] = var8;
                var4['lastVisibleMessagePercentVisible'] = var7;
                var7 = var2.chatManager;
                var4['chatManager'] = var7;
                var7 = var2.props;
                var7 = var7.channelId;
                var4['channelId'] = var7;
                var7 = var5.bind(var6)(var4);
                var5 = var7.length;
                var4 = 0;
                if(!(!(var5 <= var4))) { _fun0043_ip = 25; continue _fun0043 }
case 467:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 93;
                var3 = var5[var3];
                var8 = var4.bind(var1)(var3);
                var6 = var8.questsVisibleMobileMessagesChanged;
                var3 = {};
                var3['visibleMessages'] = var7;
                var3['source'] = var9;
                var3 = var6.bind(var8)(var3);
                var3 = 94;
                var6 = var5[var3];
                var11 = var4.bind(var1)(var6);
                var10 = var11.handleAnnouncementMessageViewTracking;
                var6 = var2.props;
                var14 = var6.shouldTrackAnnouncementMessageViews;
                var6 = var2.props;
                var13 = var6.guildId;
                var6 = var2.props;
                var12 = var6.channel;
                var16 = var11;
                var15 = var7;
                var6 = var16[var10](var15, var14, var13, var12, var11);
                var3 = var5[var3];
                var6 = var4.bind(var1)(var3);
                var5 = var6.handleRichPresenceInviteEmbedViewTracking;
                var3 = var2.props;
                var14 = var3.shouldTrackRichPresenceInviteEmbedViews;
                var3 = var2.props;
                var13 = var3.guildId;
                var2 = var2.props;
                var12 = var2.channel;
                var16 = var6;
                var15 = var7;
                var2 = var16[var5](var15, var14, var13, var12, var11);
case 25:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                var9 = this;
                var1 = var9.props;
                var12 = var1.animateEmoji;
                var13 = var1.onPressKey;
                var16 = var1.style;
                var11 = var1.children;
                var10 = var1.HACK_fixModalInteraction;
                var14 = var1.alwaysRespectKeyboard;
                var15 = var1.doubleTapToReactEnabled;
                var4 = _closure1_slot76;
                var3 = _closure1_slot75;
                var2 = {};
                var8 = _closure1_slot74;
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 95;
                var5 = var5[var1];
                var1 = undefined;
                var7 = var7.bind(var1)(var5);
                var5 = {};
                var17 = var9._chatRef;
                var5['ref'] = var17;
                var5['style'] = var16;
                var16 = true;
                var5['inverted'] = var16;
                var5['alwaysRespectKeyboard'] = var14;
                var14 = var9.handleScrollPosition;
                var5['onChatScrollPosition'] = var14;
                var14 = var9.handleTapImage;
                var5['onTapImage'] = var14;
                var14 = var9.handleTapChannel;
                var5['onTapChannel'] = var14;
                var14 = var9.handleLongPressChannel;
                var5['onLongPressChannel'] = var14;
                var14 = var9.handleTapAttachmentLink;
                var5['onTapAttachmentLink'] = var14;
                var14 = var9.handleLongPressAttachmentLink;
                var5['onLongPressAttachmentLink'] = var14;
                var14 = var9.handleTapCall;
                var5['onTapCall'] = var14;
                var14 = var9.handleTapMention;
                var5['onTapMention'] = var14;
                var14 = var9.handleTapCommandMention;
                var5['onTapCommandMention'] = var14;
                var14 = var9.handleLongPressCommandMention;
                var5['onLongPressCommandMention'] = var14;
                var14 = var9.handleTapLink;
                var5['onTapLink'] = var14;
                var14 = var9.handleLongPressLink;
                var5['onLongPressLink'] = var14;
                var14 = var9.handleTapReaction;
                var5['onTapReaction'] = var14;
                var14 = var9.handleLongPressReaction;
                var5['onLongPressReaction'] = var14;
                var14 = var9.handleTapAvatar;
                var5['onTapAvatar'] = var14;
                var14 = var9.handleTapUsername;
                var5['onTapUsername'] = var14;
                var14 = var9.handleLongPressUsername;
                var5['onLongPressUsername'] = var14;
                var14 = var9.handleOpenSticker;
                var5['onTapSticker'] = var14;
                var14 = var9.handleLongPressSticker;
                var5['onLongPressSticker'] = var14;
                var14 = var9.handleLongPressMessage;
                var5['onLongPressMessage'] = var14;
                var14 = var9.handleInitiateReply;
                var5['onInitiateReply'] = var14;
                var14 = var9.handleInitiateEdit;
                var5['onInitiateEdit'] = var14;
                var14 = var9.handleInitiateThread;
                var5['onInitiateThread'] = var14;
                var14 = var9.handleTapMessage;
                var5['onTapMessage'] = var14;
                var14 = undefined;
                if(!var15) { _fun0044_ip = 468; continue _fun0044 }
case 469:
                var14 = var9.handleDoubleTapMessage;
case 468:
                var5['onDoubleTapMessage'] = var14;
                var14 = var9.handleTapSeparator;
                var5['onTapSeparator'] = var14;
                var14 = var9.handleTapInviteEmbed;
                var5['onTapInviteEmbed'] = var14;
                var14 = var9.handleTapInviteEmbedAccept;
                var5['onTapInviteEmbedAccept'] = var14;
                var14 = var9.handleTapJoinActivity;
                var5['onTapJoinActivity'] = var14;
                var14 = var9.handleTapJoinRichPresence;
                var5['onTapJoinRichPresence'] = var14;
                var5['onPressKey'] = var13;
                var5['animateEmoji'] = var12;
                var12 = var9.handleTapGiftCodeEmbed;
                var5['onTapGiftCodeEmbed'] = var12;
                var12 = var9.handleTapCancelUploadItem;
                var5['onTapCancelUploadItem'] = var12;
                var12 = var9.handleTapReply;
                var5['onTapMessageReply'] = var12;
                var12 = var9.handleTapSummary;
                var5['onTapSummary'] = var12;
                var12 = var9.handleTapSummaryJump;
                var5['onTapSummaryJump'] = var12;
                var12 = var9.handleTapGiftCodeAccept;
                var5['onTapGiftCodeAccept'] = var12;
                var12 = var9.handleTapReferralRedeem;
                var5['onTapReferralRedeem'] = var12;
                var12 = var9.handleTapThreadEmbed;
                var5['onTapThreadEmbed'] = var12;
                var12 = var9.handleTapEmoji;
                var5['onTapEmoji'] = var12;
                var12 = var9.handleTapTimestamp;
                var5['onTapTimestamp'] = var12;
                var12 = var9.handleTapInlineCode;
                var5['onTapInlineCode'] = var12;
                var12 = var9.handleTapRoleIcon;
                var5['onTapRoleIcon'] = var12;
                var12 = var9.handleTapGameIcon;
                var5['onTapGameIcon'] = var12;
                var12 = var9.handleTapSuppressNotificationsIcon;
                var5['onTapSuppressNotificationsIcon'] = var12;
                var12 = var9.handleTapConnectionsRoleTag;
                var5['onTapConnectionsRoleTag'] = var12;
                var12 = var9.handleTapTimeoutIcon;
                var5['onTapTimeoutIcon'] = var12;
                var12 = var9.handleTapButtonActionComponent;
                var5['onTapButtonActionComponent'] = var12;
                var12 = var9.handleTapSelectActionComponent;
                var5['onTapSelectActionComponent'] = var12;
                var12 = var9.handleTapWelcomeReply;
                var5['onTapWelcomeReply'] = var12;
                var12 = var9.handleTapInviteToSpeak;
                var5['onTapInviteToSpeak'] = var12;
                var12 = var9.handleTapAutoModerationActions;
                var5['onTapAutoModerationActions'] = var12;
                var12 = var9.handleTapAutoModerationFeedback;
                var5['onTapAutoModerationFeedback'] = var12;
                var12 = var9.handleTapFollowForumPost;
                var5['onTapFollowForumPost'] = var12;
                var12 = var9.handleTapShareForumPost;
                var5['onTapShareForumPost'] = var12;
                var12 = var9.handleTapReactionOverflow;
                var5['onTapReactionOverflow'] = var12;
                var12 = var9.handleTapNavBar;
                var5['onTapNavBar'] = var12;
                var12 = var9.handleCopyText;
                var5['onTapCopyText'] = var12;
                var12 = var9.handleTapOpTag;
                var5['onTapOpTag'] = var12;
                var12 = var9.handleTapTag;
                var5['onTapTag'] = var12;
                var12 = var9.handleTapRemix;
                var5['onTapRemix'] = var12;
                var12 = var9.handleMediaAttachmentPlaybackEnded;
                var5['onMediaAttachmentPlaybackEnded'] = var12;
                var12 = var9.handleMediaAttachmentPlaybackStarted;
                var5['onMediaAttachmentPlaybackStarted'] = var12;
                var12 = var9.handlerVoiceMessagePlaybackFailed;
                var5['onVoiceMessagePlaybackFailed'] = var12;
                var12 = var9.handleTapShowAltText;
                var5['onTapShowAltText'] = var12;
                var12 = var9.handleTapPostPreviewEmbed;
                var5['onTapPostPreviewEmbed'] = var12;
                var12 = var9.handleTapDismissMediaPostSharePrompt;
                var5['onTapDismissMediaPostSharePrompt'] = var12;
                var12 = var9.handleTapChannelPromptButton;
                var5['onTapChannelPromptButton'] = var12;
                var12 = var9.handleTapObscuredMediaLearnMore;
                var5['onTapObscuredMediaLearnMore'] = var12;
                var12 = var9.handleTapObscuredMediaToggle;
                var5['onTapObscuredMediaToggle'] = var12;
                var12 = var9.handleTapSafetyPolicyNoticeEmbed;
                var5['onTapSafetyPolicyNoticeEmbed'] = var12;
                var12 = var9.handleTapSafetySystemNotificationCta;
                var5['onTapSafetySystemNotificationCta'] = var12;
                var12 = var9.handleTapPollAnswer;
                var5['onTapPollAnswer'] = var12;
                var12 = var9.handleTapPollSubmitVote;
                var5['onTapPollSubmitVote'] = var12;
                var12 = var9.handleTapPollAction;
                var5['onTapPollAction'] = var12;
                var12 = var9.handleLongPressPollImage;
                var5['onLongPressPollImage'] = var12;
                var12 = var9.handleTapCtaButton;
                var5['onTapCtaButton'] = var12;
                var12 = var9.handleMessageAccessibilityAction;
                var5['onMessageAccessibilityAction'] = var12;
                var12 = var9.handleTapForwardFooter;
                var5['onTapForwardFooter'] = var12;
                var12 = var9.handleTapInlineForward;
                var5['onTapInlineForward'] = var12;
                var12 = var9.handleTapClanTagChiplet;
                var5['onTapClanTagChiplet'] = var12;
                var12 = var9.handleTapContentInventoryEntryEmbed;
                var5['onTapContentInventoryEntryEmbed'] = var12;
                var12 = var9.handleTapSoundmoji;
                var5['onTapSoundmoji'] = var12;
                var12 = var9.handleTapAppMessageEmbed;
                var5['onTapAppMessageEmbed'] = var12;
                var12 = var9.handleTapPreviewSharedClientTheme;
                var5['onTapPreviewSharedClientTheme'] = var12;
                var12 = var9.handleSharedClientThemeViewed;
                var5['onSharedClientThemeViewed'] = var12;
                var5['children'] = var11;
                var5['HACK_fixModalInteraction'] = var10;
                var10 = var9.handleTapTableView;
                var5['onTapTableView'] = var10;
                var10 = var9.handleFirstLayout;
                var5['onFirstLayout'] = var10;
                var10 = var9.handleMediaPlayFinishedAnalytics;
                var5['onMediaPlayFinishedAnalytics'] = var10;
                var10 = var9.handleMessageVisibilityChanged;
                var5['onMessageVisibilityChanged'] = var10;
                var7 = var8.bind(var1)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot74;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 96;
                var6 = var10[var6];
                var6 = var7.bind(var1)(var6);
                var7 = var6.ChatTTITracker;
                var6 = {};
                var9 = var9.props;
                var9 = var9.messages;
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
    var _closure1_slot78 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
            var9 = arg1;
            var7 = var9.channel;
            var _closure2_slot0 = var7;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 97;
            var8 = var2[var3];
            var4 = undefined;
            var13 = var5.bind(var4)(var8);
            var12 = var13.useStateFromStores;
            var8 = _closure1_slot50;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = var7.id;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                var3 = _closure1_slot50;
                var2 = var3.getMessages;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var82 = var12.bind(var13)(var11, var8, var10);
            var _closure2_slot1 = var82;
            var93 = var7.id;
            var _closure2_slot2 = var93;
            var8 = var7.getGuildId;
            var95 = var8.bind(var7)();
            var _closure2_slot3 = var95;
            var2 = var2[var3];
            var10 = var5.bind(var4)(var2);
            var8 = var10.useStateFromStores;
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
            var12 = var8.bind(var10)(var5, var2);
            var _closure2_slot4 = var12;
            var21 = null;
            var2 = var21 == var12;
            var45 = undefined;
            if(var2) { _fun0045_ip = 80; continue _fun0045 }
case 56:
            var45 = var12.systemChannelFlags;
case 80:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = var11[var3];
            var14 = var8.bind(var4)(var2);
            var13 = var14.useStateFromStores;
            var2 = _closure1_slot42;
            var10 = new Array(1);
            var10[0] = var2;
            var5 = function() {
                var2 = _closure1_slot42;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var94 = var13.bind(var14)(var10, var5, var2);
            var _closure2_slot5 = var94;
            var2 = 100;
            var5 = var11[var2];
            var5 = var8.bind(var4)(var5);
            var10 = var5.InlineAttachmentMedia;
            var5 = var10.useSetting;
            r100 = var5.bind(var10)();
            var5 = var11[var2];
            var5 = var8.bind(var4)(var5);
            var10 = var5.InlineEmbedMedia;
            var5 = var10.useSetting;
            var100 = var5.bind(var10)();
            var5 = var11[var2];
            var5 = var8.bind(var4)(var5);
            var10 = var5.RenderEmbeds;
            var5 = var10.useSetting;
            var99 = var5.bind(var10)();
            var5 = var11[var2];
            var5 = var8.bind(var4)(var5);
            var10 = var5.RenderReactions;
            var5 = var10.useSetting;
            var98 = var5.bind(var10)();
            var5 = var11[var2];
            var5 = var8.bind(var4)(var5);
            var10 = var5.DeveloperMode;
            var5 = var10.useSetting;
            var97 = var5.bind(var10)();
            var5 = var11[var2];
            var5 = var8.bind(var4)(var5);
            var10 = var5.AnimateEmoji;
            var5 = var10.useSetting;
            r104 = var5.bind(var10)();
            var5 = var11[var2];
            var5 = var8.bind(var4)(var5);
            var10 = var5.AnimateStickers;
            var5 = var10.useSetting;
            r103 = var5.bind(var10)();
            var2 = var11[var2];
            var2 = var8.bind(var4)(var2);
            var5 = var2.GifAutoPlay;
            var2 = var5.useSetting;
            r101 = var2.bind(var5)();
            var2 = var11[var3];
            var14 = var8.bind(var4)(var2);
            var13 = var14.useStateFromStores;
            var2 = _closure1_slot41;
            var10 = new Array(1);
            var10[0] = var2;
            var5 = function() {
                var1 = _closure1_slot41;
                var1 = var1.theme;
                return var1;
            };
            var2 = new Array(0);
            r107 = var13.bind(var14)(var10, var5, var2);
            var2 = 101;
            var2 = var11[var2];
            var5 = var8.bind(var4)(var2);
            var2 = var5.useIsMessageSwipeActionsEnabled;
            var13 = var2.bind(var5)();
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
                        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                            var1 = arg1;
                            var2 = var1.author;
                            var3 = null;
                            var2 = var3 != var2;
                            if(!var2) { _fun0046_ip = 34; continue _fun0046 }
case 470:
                            var4 = var1.activity;
                            var2 = var3 != var4;
case 34:
                            if(!var2) { _fun0046_ip = 42; continue _fun0046 }
case 50:
                            var2 = _closure4_slot0;
                            var1 = var1.author;
                            var1 = var1.id;
                            var2[var1] = var3;
case 42:
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
                var3 = 97;
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
                        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
                            var1 = arg1;
                            var2 = var1.applicationId;
                            var4 = null;
                            var2 = var4 != var2;
                            if(!var2) { _fun0047_ip = 159; continue _fun0047 }
case 471:
                            var3 = var1.application;
                            var2 = var4 == var3;
case 159:
                            if(!var2) { _fun0047_ip = 205; continue _fun0047 }
case 117:
                            var3 = _closure4_slot0;
                            var2 = var3.add;
                            var1 = var1.applicationId;
                            var1 = var2.bind(var3)(var1);
case 205:
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
                    _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
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
                        if(var3) { _fun0048_ip = 79; continue _fun0048 }
case 28:
                        var5 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var3 = 98;
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
                        var4 = 99;
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
case 79:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var1 = undefined;
                return var1;
            };
            var2 = var2.bind(var4)(var82);
            var15 = _closure1_slot1;
            var2 = 102;
            var2 = var11[var2];
            var2 = var15.bind(var4)(var2);
            var2 = var2.bind(var4)(var82, var7);
            var14 = _closure1_slot3;
            var10 = 2;
            var2 = var14.bind(var4)(var2, var10);
            var16 = 0;
            var19 = var2[var16];
            var5 = 1;
            var2 = var2[var5];
            var2 = var11[var3];
            var22 = var8.bind(var4)(var2);
            var20 = var22.useStateFromStores;
            var2 = _closure1_slot49;
            var18 = new Array(1);
            var18[0] = var2;
            var17 = function() {
                var2 = _closure1_slot49;
                var1 = var2.getInvites;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var87 = var20.bind(var22)(var18, var17, var2);
            var2 = var11[var3];
            var22 = var8.bind(var4)(var2);
            var20 = var22.useStateFromStoresObject;
            var2 = _closure1_slot23;
            var18 = new Array(1);
            var18[0] = var2;
            var17 = function() {
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
            var2 = var20.bind(var22)(var18, var17, var2);
            var86 = var2.appDirectoryEmbedApplications;
            var85 = var2.invalidAppDirectoryEmbedApplicationIds;
            var77 = var2.appDirectoryEmbedApplicationFetchStates;
            var2 = var11[var3];
            var20 = var8.bind(var4)(var2);
            var18 = var20.useStateFromStoresArray;
            var2 = _closure1_slot15;
            var17 = new Array(1);
            var17[0] = var2;
            var2 = function() {
                var2 = _closure1_slot15;
                var1 = var2.getFetchingOrFailedFetchingIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var84 = var18.bind(var20)(var17, var2);
            var2 = var11[var3];
            var20 = var8.bind(var4)(var2);
            var18 = var20.useStateFromStoresArray;
            var2 = _closure1_slot14;
            var17 = new Array(1);
            var17[0] = var2;
            var2 = function() {
                var2 = _closure1_slot14;
                var1 = var2.getFetchingIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var83 = var18.bind(var20)(var17, var2);
            var2 = var11[var3];
            var23 = var8.bind(var4)(var2);
            var22 = var23.useStateFromStoresArray;
            var2 = _closure1_slot13;
            var20 = new Array(1);
            var20[0] = var2;
            var18 = new Array(1);
            var18[0] = var93;
            var17 = function() {
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
                var1 = 99;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var80 = var22.bind(var23)(var20, var17, var18);
            var17 = var11[var3];
            var22 = var8.bind(var4)(var17);
            var20 = var22.useStateFromStoresArray;
            var18 = new Array(2);
            var18[0] = var2;
            var17 = _closure1_slot53;
            var18[1] = var17;
            var17 = function() {
                _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
                    var1 = new Array(0);
                    var _closure3_slot0 = var1;
                    var6 = function _loop(arg1) {
                        _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
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
                            if(var6) { _fun0050_ip = 472; continue _fun0050 }
case 60:
                            var3 = var2.details;
case 472:
                            if(!(var4 != var3)) { _fun0050_ip = 473; continue _fun0050 }
case 147:
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
case 473:
                            return var1;
                        }
                    };
                    var3 = _closure1_slot79;
                    var5 = _closure1_slot13;
                    var4 = var5.getEmbeddedActivitiesForChannel;
                    var2 = _closure2_slot2;
                    var2 = var4.bind(var5)(var2);
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if(var2) { _fun0049_ip = 474; continue _fun0049 }
case 55:
                    var2 = var3.value;
                    var2 = var6.bind(var5)(var2);
                    var7 = var4.bind(var5)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0049_ip = 55; continue _fun0049 }
case 474:
                    return var1;
                }
            };
            var78 = var20.bind(var22)(var18, var17);
            var17 = var11[var3];
            var22 = var8.bind(var4)(var17);
            var20 = var22.useStateFromStoresArray;
            var18 = new Array(1);
            var18[0] = var2;
            var17 = function() {
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
            var79 = var20.bind(var22)(var18, var17);
            var17 = var11[var3];
            var20 = var8.bind(var4)(var17);
            var18 = var20.useStateFromStoresArray;
            var17 = new Array(1);
            var17[0] = var2;
            var2 = function() {
                _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
                    var1 = new Array(0);
                    var3 = _closure1_slot79;
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
                    if(var2) { _fun0051_ip = 76; continue _fun0051 }
case 475:
                    var11 = var3.value;
                    var2 = _closure1_slot3;
                    var2 = var2.bind(var9)(var11, var5);
                    var11 = var2[var7];
                    var2 = var2[var4];
                    var11 = var2.isLaunching;
                    if(!var11) { _fun0051_ip = 11; continue _fun0051 }
case 9:
                    var12 = var2.componentId;
                    var11 = var6 != var12;
case 11:
                    if(!var11) { _fun0051_ip = 203; continue _fun0051 }
case 57:
                    var12 = var2.componentId;
                    var12 = var12.length;
                    var11 = var12 > var7;
case 203:
                    if(!var11) { _fun0051_ip = 124; continue _fun0051 }
case 185:
                    var11 = var1.push;
                    var2 = var2.componentId;
                    var2 = var11.bind(var1)(var2);
case 124:
                    var11 = var8.bind(var9)();
                    var2 = var11.done;
                    var3 = var11;
                    if(!var2) { _fun0051_ip = 475; continue _fun0051 }
case 76:
                    return var1;
                }
            };
            var81 = var18.bind(var20)(var17, var2);
            var2 = var11[var3];
            var20 = var8.bind(var4)(var2);
            var18 = var20.useStateFromStores;
            var2 = _closure1_slot30;
            var17 = new Array(1);
            var17[0] = var2;
            var2 = function() {
                var2 = _closure1_slot30;
                var1 = var2.getMediaPostEmbeds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var76 = var18.bind(var20)(var17, var2);
            var2 = var11[var3];
            var22 = var8.bind(var4)(var2);
            var20 = var22.useStateFromStores;
            var2 = _closure1_slot27;
            var18 = new Array(1);
            var18[0] = var2;
            var17 = function() {
                var2 = _closure1_slot27;
                var1 = var2.getGuildTemplates;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var75 = var20.bind(var22)(var18, var17, var2);
            var2 = var11[var3];
            var22 = var8.bind(var4)(var2);
            var20 = var22.useStateFromStores;
            var2 = _closure1_slot16;
            var18 = new Array(1);
            var18[0] = var2;
            var17 = function() {
                var2 = _closure1_slot16;
                var1 = var2.getBuildOverrides;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var74 = var20.bind(var22)(var18, var17, var2);
            var2 = 103;
            var2 = var11[var2];
            var18 = var8.bind(var4)(var2);
            var17 = var18.useQuests;
            var2 = {'fetchPolicy': 'cache-or-network', 'callerSource': 'messages_native'};
            var2 = var17.bind(var18)(var2);
            var73 = var2.quests;
            var72 = var2.isFetchingCurrentQuests;
            var17 = var82.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot67;
                var1 = var1.PREMIUM_REFERRAL;
                var1 = var2 === var1;
                return var1;
            };
            var18 = var17.bind(var82)(var2);
            var17 = var18.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.referralTrialOfferId;
                return var1;
            };
            var18 = var17.bind(var18)(var2);
            var17 = var18.filter;
            var2 = 99;
            var2 = var11[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.isNotNullish;
            var2 = var17.bind(var18)(var2);
            var _closure2_slot6 = var2;
            var2 = var11[var3];
            var20 = var8.bind(var4)(var2);
            var18 = var20.useStateFromStoresArray;
            var2 = _closure1_slot33;
            var17 = new Array(1);
            var17[0] = var2;
            var2 = function() {
                var3 = _closure2_slot6;
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
                        var3 = _closure1_slot33;
                        var2 = var3.getRelevantUserTrialOffer;
                        var1 = arg1;
                        var2 = var2.bind(var3)(var1);
                        var1 = null;
                        var3 = var1 == var2;
                        var1 = undefined;
                        if(var3) { _fun0052_ip = 143; continue _fun0052 }
case 476:
                        var1 = var2.id;
case 143:
                        return var1;
                    }
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 99;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var23 = var18.bind(var20)(var17, var2);
            var2 = 104;
            var2 = var11[var2];
            var18 = var8.bind(var4)(var2);
            var17 = var18.useTrialOffer;
            var2 = _closure1_slot72;
            var22 = var17.bind(var18)(var2);
            var2 = var11[var3];
            var20 = var8.bind(var4)(var2);
            var18 = var20.useStateFromStores;
            var2 = _closure1_slot58;
            var17 = new Array(1);
            var17[0] = var2;
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
                var1 = _closure1_slot73;
                var1 = var1.TIER_2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var20 = var18.bind(var20)(var17, var2);
            var2 = var11[var3];
            var25 = var8.bind(var4)(var2);
            var24 = var25.useStateFromStores;
            var2 = _closure1_slot43;
            var18 = new Array(1);
            var18[0] = var2;
            var17 = new Array(1);
            var17[0] = var93;
            var2 = function() {
                var3 = _closure1_slot43;
                var2 = var3.getEditingMessageId;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var71 = var24.bind(var25)(var18, var2, var17);
            var2 = var11[var3];
            var25 = var8.bind(var4)(var2);
            var24 = var25.useStateFromStores;
            var2 = _closure1_slot35;
            var18 = new Array(1);
            var18[0] = var2;
            var17 = new Array(1);
            var17[0] = var93;
            var2 = function() {
                _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
                    var3 = _closure1_slot35;
                    var2 = var3.getPendingReply;
                    var1 = _closure2_slot2;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0053_ip = 2; continue _fun0053 }
case 44:
                    var2 = var2.message;
                    var1 = var2.id;
case 2:
                    return var1;
                }
            };
            var70 = var24.bind(var25)(var18, var2, var17);
            var2 = var11[var3];
            var25 = var8.bind(var4)(var2);
            var24 = var25.useStateFromStores;
            var2 = _closure1_slot55;
            var18 = new Array(1);
            var18[0] = var2;
            var17 = new Array(1);
            var17[0] = var93;
            var2 = function() {
                var3 = _closure1_slot55;
                var2 = var3.getOldestUnreadMessageId;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var69 = var24.bind(var25)(var18, var2, var17);
            var2 = var11[var3];
            var25 = var8.bind(var4)(var2);
            var24 = var25.useStateFromStores;
            var2 = _closure1_slot48;
            var18 = new Array(1);
            var18[0] = var2;
            var17 = new Array(1);
            var17[0] = var95;
            var2 = function() {
                _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0054_ip = 444; continue _fun0054 }
case 477:
                    var4 = _closure1_slot48;
                    var3 = var4.canChatInGuild;
                    var2 = _closure2_slot3;
                    var1 = var3.bind(var4)(var2);
case 444:
                    return var1;
                }
            };
            var68 = var24.bind(var25)(var18, var2, var17);
            var2 = var11[var3];
            var25 = var8.bind(var4)(var2);
            var24 = var25.useStateFromStores;
            var2 = _closure1_slot52;
            var18 = new Array(1);
            var18[0] = var2;
            var17 = new Array(1);
            var17[0] = var7;
            var2 = function() {
                var4 = _closure1_slot52;
                var3 = var4.can;
                var1 = _closure1_slot68;
                var2 = var1.SEND_MESSAGES;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var67 = var24.bind(var25)(var18, var2, var17);
            var2 = 106;
            var2 = var11[var2];
            var2 = var15.bind(var4)(var2);
            var66 = var2.bind(var4)(var93);
            var2 = var11[var3];
            var24 = var8.bind(var4)(var2);
            var18 = var24.useStateFromStores;
            var2 = _closure1_slot59;
            var17 = new Array(1);
            var17[0] = var2;
            var15 = new Array(1);
            var15[0] = var94;
            var2 = function() {
                var4 = _closure1_slot59;
                var3 = var4.getUserVoiceChannelId;
                var2 = _closure1_slot65;
                var1 = _closure2_slot5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var65 = var18.bind(var24)(var17, var2, var15);
            var2 = var11[var3];
            var24 = var8.bind(var4)(var2);
            var18 = var24.useStateFromStores;
            var2 = _closure1_slot54;
            var17 = new Array(1);
            var17[0] = var2;
            var15 = function() {
                var2 = _closure1_slot54;
                var1 = var2.getChannelId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var64 = var18.bind(var24)(var17, var15, var2);
            var2 = var11[var3];
            var25 = var8.bind(var4)(var2);
            var24 = var25.useStateFromStores;
            var2 = _closure1_slot36;
            var18 = new Array(1);
            var18[0] = var2;
            var17 = new Array(1);
            var17[0] = var7;
            var15 = function() {
                _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
                    var1 = _closure1_slot63;
                    var4 = var1.THREADS;
                    var3 = var4.has;
                    var1 = _closure2_slot0;
                    var1 = var1.type;
                    var3 = var3.bind(var4)(var1);
                    var4 = null;
                    var1 = null;
                    if(!var3) { _fun0055_ip = 361; continue _fun0055 }
case 66:
                    var3 = _closure2_slot0;
                    var3 = var3.parent_id;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0055_ip = 361; continue _fun0055 }
case 7:
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
case 361:
                    return var1;
                }
            };
            var27 = var24.bind(var25)(var18, var15, var17);
            var15 = var11[var3];
            var25 = var8.bind(var4)(var15);
            var24 = var25.useStateFromStoresObject;
            var15 = _closure1_slot44;
            var18 = new Array(1);
            var18[0] = var15;
            var17 = function() {
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
            var15 = new Array(0);
            var15 = var24.bind(var25)(var18, var17, var15);
            var63 = var15.resolvingGiftCodes;
            var62 = var15.resolvedGiftCodes;
            var61 = var15.acceptingGiftCodes;
            var15 = var11[var3];
            var25 = var8.bind(var4)(var15);
            var24 = var25.useStateFromStores;
            var15 = _closure1_slot18;
            var18 = new Array(1);
            var18[0] = var15;
            var17 = new Array(1);
            var17[0] = var93;
            var15 = function() {
                var3 = _closure1_slot18;
                var2 = var3.getParticipants;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                var1 = var1.length;
                return var1;
            };
            var60 = var24.bind(var25)(var18, var15, var17);
            var15 = var11[var3];
            var25 = var8.bind(var4)(var15);
            var24 = var25.useStateFromStores;
            var15 = _closure1_slot57;
            var18 = new Array(1);
            var18[0] = var15;
            var17 = new Array(1);
            var17[0] = var93;
            var15 = function() {
                var3 = _closure1_slot57;
                var2 = var3.getFiles;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var59 = var24.bind(var25)(var18, var15, var17);
            var15 = var11[var3];
            var24 = var8.bind(var4)(var15);
            var18 = var24.useStateFromStores;
            var17 = new Array(1);
            var17[0] = var2;
            var15 = new Array(1);
            var15[0] = var93;
            var2 = function() {
                var3 = _closure1_slot36;
                var2 = var3.getReplyIdsForChannel;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var58 = var18.bind(var24)(var17, var2, var15);
            var2 = var11[var3];
            var24 = var8.bind(var4)(var2);
            var18 = var24.useStateFromStoresObject;
            var2 = _closure1_slot12;
            var17 = new Array(1);
            var17[0] = var2;
            var15 = function() {
                var1 = {};
                var2 = _closure1_slot12;
                var3 = var2.useReducedMotion;
                var1['useReducedMotion'] = var3;
                var3 = var2.roleStyle;
                var1['roleStyle'] = var3;
                var2 = var2.saturation;
                var1['saturation'] = var2;
                return var1;
            };
            var2 = new Array(0);
            var2 = var18.bind(var24)(var17, var15, var2);
            var57 = var2.useReducedMotion;
            var96 = var2.roleStyle;
            r106 = var2.saturation;
            var2 = var11[var3];
            var24 = var8.bind(var4)(var2);
            var18 = var24.useStateFromStores;
            var2 = _closure1_slot39;
            var17 = new Array(1);
            var17[0] = var2;
            var15 = new Array(1);
            var15[0] = var93;
            var2 = function() {
                var3 = _closure1_slot39;
                var2 = var3.getChannelThreadsVersion;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var56 = var18.bind(var24)(var17, var2, var15);
            var2 = var11[var3];
            var18 = var8.bind(var4)(var2);
            var17 = var18.useStateFromStoresObject;
            var2 = _closure1_slot29;
            var15 = new Array(1);
            var15[0] = var2;
            var2 = function() {
                var2 = _closure1_slot29;
                var1 = var2.getMessageInteractionStates;
                var1 = var1.bind(var2)();
                return var1;
            };
            var50 = var17.bind(var18)(var15, var2);
            var2 = var11[var3];
            var25 = var8.bind(var4)(var2);
            var24 = var25.useStateFromStores;
            var2 = _closure1_slot28;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = 107;
            var2 = var11[var2];
            var2 = var8.bind(var4)(var2);
            r110 = var2.isVersionEqual;
            r112 = function() {
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
            r111 = new Array(0);
            r114 = var25;
            r113 = var18;
            var2 = r114[var24](r113, r112, r111, r110, r109);
            var2 = var14.bind(var4)(var2, var10);
            var49 = var2[var16];
            var48 = var2[var5];
            var2 = var11[var3];
            var17 = var8.bind(var4)(var2);
            var15 = var17.useStateFromStores;
            var2 = _closure1_slot21;
            var14 = new Array(1);
            var14[0] = var2;
            var2 = function() {
                var1 = _closure1_slot21;
                var1 = var1.hasLoadedExperiments;
                return var1;
            };
            var46 = var15.bind(var17)(var14, var2);
            var2 = 108;
            var2 = var11[var2];
            var15 = var8.bind(var4)(var2);
            var14 = var15.useIsSpamMessageRequest;
            var2 = var7.id;
            var89 = var14.bind(var15)(var2);
            var2 = 109;
            var2 = var11[var2];
            var11 = var8.bind(var4)(var2);
            var8 = var11.useIsMessageRequest;
            var2 = var7.id;
            var90 = var8.bind(var11)(var2);
            var47 = var21 != var82;
            if(!var47) { _fun0045_ip = 478; continue _fun0045 }
case 479:
            var2 = var82.ready;
            if(var2) { _fun0045_ip = 480; continue _fun0045 }
case 481:
            var2 = var82.cached;
case 480:
            var47 = var2;
case 478:
            var92 = var21 != var82;
            if(!var92) { _fun0045_ip = 482; continue _fun0045 }
case 483:
            var92 = var82.cached;
case 482:
            var91 = var21 != var82;
            if(!var91) { _fun0045_ip = 484; continue _fun0045 }
case 485:
            var91 = var82.ready;
case 484:
            if(!var91) { _fun0045_ip = 486; continue _fun0045 }
case 487:
            var2 = var82.loadingMore;
            var91 = !var2;
case 486:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = var11[var3];
            var17 = var8.bind(var4)(var2);
            var15 = var17.useStateFromStores;
            var2 = _closure1_slot26;
            var14 = new Array(1);
            var14[0] = var2;
            var2 = function() {
                var2 = _closure1_slot26;
                var1 = var2.getRsvpVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var55 = var15.bind(var17)(var14, var2);
            var2 = var11[var3];
            var17 = var8.bind(var4)(var2);
            var15 = var17.useStateFromStores;
            var2 = _closure1_slot25;
            var14 = new Array(1);
            var14[0] = var2;
            var2 = function() {
                var2 = _closure1_slot25;
                var1 = var2.getMessagesVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var54 = var15.bind(var17)(var14, var2);
            var2 = var11[var3];
            var18 = var8.bind(var4)(var2);
            var17 = var18.useStateFromStores;
            var2 = _closure1_slot45;
            var15 = new Array(1);
            var15[0] = var2;
            var14 = function() {
                var2 = _closure1_slot45;
                var1 = var2.getCommunicationDisabledVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var53 = var17.bind(var18)(var15, var14);
            var14 = var11[var3];
            var18 = var8.bind(var4)(var14);
            var17 = var18.useStateFromStoresObject;
            var15 = new Array(1);
            var15[0] = var2;
            var14 = new Array(2);
            var14[0] = var95;
            var14[1] = var82;
            var2 = function() {
                _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0056_ip = 156; continue _fun0056 }
case 488:
                    var1 = _closure2_slot1;
                    if(!(var4 != var1)) { _fun0056_ip = 156; continue _fun0056 }
case 31:
                    var1 = {};
                    var _closure3_slot0 = var1;
                    var4 = _closure2_slot1;
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
                            var2 = arg1;
                            var5 = var2.author;
                            var3 = null;
                            var6 = var3 == var5;
                            var1 = undefined;
                            var4 = undefined;
                            if(var6) { _fun0057_ip = 118; continue _fun0057 }
case 489:
                            var4 = var5.id;
case 118:
                            if(!(var3 != var4)) { _fun0057_ip = 201; continue _fun0057 }
case 50:
                            var7 = _closure1_slot45;
                            var6 = var7.getMember;
                            var5 = _closure2_slot3;
                            var4 = var2.author;
                            var4 = var4.id;
                            var4 = var6.bind(var7)(var5, var4);
                            if(!(var3 != var4)) { _fun0057_ip = 201; continue _fun0057 }
case 37:
                            var3 = _closure3_slot0;
                            var2 = var2.author;
                            var2 = var2.id;
                            var3[var2] = var4;
case 201:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 156:
                    var1 = {};
                    return var1;
                }
            };
            var52 = var17.bind(var18)(var15, var2, var14);
            var2 = var11[var3];
            var17 = var8.bind(var4)(var2);
            var15 = var17.useStateFromStores;
            var2 = _closure1_slot52;
            var14 = new Array(1);
            var14[0] = var2;
            var2 = function() {
                var4 = _closure1_slot52;
                var3 = var4.can;
                var1 = _closure1_slot68;
                var2 = var1.MODERATE_MEMBERS;
                var1 = _closure2_slot4;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var43 = var15.bind(var17)(var14, var2);
            var2 = 110;
            var2 = var11[var2];
            var11 = var8.bind(var4)(var2);
            var8 = var11.useCurrentUserCommunicationDisabled;
            var14 = var21 == var12;
            var2 = undefined;
            if(var14) { _fun0045_ip = 490; continue _fun0045 }
case 491:
            var2 = var12.id;
case 490:
            var8 = var8.bind(var11)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var8, var10);
            var44 = var2[var5];
            var8 = _closure1_slot0;
            r108 = _closure1_slot2;
            var2 = r108[var3];
            var11 = var8.bind(var4)(var2);
            var10 = var11.useStateFromStores;
            var2 = _closure1_slot40;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var1 = _closure1_slot40;
                var1 = var1.locale;
                return var1;
            };
            var42 = var10.bind(var11)(var5, var2);
            var2 = _closure1_slot1;
            var5 = 111;
            var5 = r108[var5];
            var14 = var2.bind(var4)(var5);
            var11 = var14.useExperiment;
            var10 = {};
            var5 = '41de6d_2';
            var10['location'] = var5;
            var5 = {};
            r109 = false;
            var5['autoTrackExposure'] = r109;
            var5 = var11.bind(var14)(var10, var5);
            var41 = var5.paymentsBlocked;
            var5 = r108[var3];
            var14 = var8.bind(var4)(var5);
            var11 = var14.useStateFromStores;
            var5 = _closure1_slot38;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = var3.isForumPost;
                    var1 = var1.bind(var3)();
                    var3 = !var1;
                    var1 = !var3;
                    if(var3) { _fun0058_ip = 446; continue _fun0058 }
case 159:
                    var4 = _closure1_slot38;
                    var3 = var4.hasJoined;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
case 446:
                    return var1;
                }
            };
            var40 = var11.bind(var14)(var10, var5);
            var5 = r108[var3];
            var14 = var8.bind(var4)(var5);
            var11 = var14.useStateFromStores;
            var5 = _closure1_slot31;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                var3 = _closure1_slot31;
                var2 = var3.shouldDisplayPrompt;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var39 = var11.bind(var14)(var10, var5);
            var5 = r108[var3];
            var14 = var8.bind(var4)(var5);
            var11 = var14.useStateFromStores;
            var5 = _closure1_slot34;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                var2 = _closure1_slot34;
                var1 = var2.isEligible;
                var1 = var1.bind(var2)();
                return var1;
            };
            var37 = var11.bind(var14)(var10, var5);
            var5 = r108[var3];
            var14 = var8.bind(var4)(var5);
            var11 = var14.useStateFromStores;
            var5 = _closure1_slot17;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                var2 = _closure1_slot17;
                var1 = var2.getLazyCacheStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var38 = var11.bind(var14)(var10, var5);
            var5 = 89;
            var5 = r108[var5];
            var10 = var8.bind(var4)(var5);
            var5 = var10.useMessageJumpAndroidKeyboardHeight;
            var36 = var5.bind(var10)();
            var5 = 112;
            var5 = r108[var5];
            var5 = var2.bind(var4)(var5);
            var34 = var5.bind(var4)();
            var5 = 113;
            var5 = r108[var5];
            var10 = var8.bind(var4)(var5);
            var5 = var10.useChannelSummariesExperiment;
            var5 = var5.bind(var10)(var7);
            var _closure2_slot7 = var5;
            var10 = r108[var3];
            var15 = var8.bind(var4)(var10);
            var14 = var15.useStateFromStores;
            var10 = _closure1_slot37;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = new Array(2);
            var10[0] = var5;
            var5 = var7.id;
            var10[1] = var5;
            var5 = function() {
                _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
case 0:
                    var3 = _closure2_slot7;
                    var1 = null;
                    if(!var3) { _fun0059_ip = 71; continue _fun0059 }
case 169:
                    var4 = _closure1_slot37;
                    var3 = var4.selectedSummary;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 71:
                    return var1;
                }
            };
            var35 = var14.bind(var15)(var11, var5, var10);
            var14 = _closure1_slot10;
            var11 = var14.useEffect;
            var5 = var7.id;
            var10 = new Array(5);
            var10[0] = var5;
            var5 = var82.hasMoreAfter;
            var10[1] = var5;
            var5 = var82.hasMoreBefore;
            var10[2] = var5;
            var5 = var82.length;
            var10[3] = var5;
            var5 = var82.ready;
            var10[4] = var5;
            var5 = function() {
                _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var2 = var2.ready;
                    var2 = !var2;
                    if(var2) { _fun0060_ip = 53; continue _fun0060 }
case 492:
                    var3 = _closure2_slot1;
                    var4 = var3.length;
                    var3 = 0;
                    var2 = var3 !== var4;
case 53:
                    if(var2) { _fun0060_ip = 61; continue _fun0060 }
case 143:
                    var3 = _closure2_slot1;
                    var2 = var3.hasMoreBefore;
case 61:
                    if(var2) { _fun0060_ip = 59; continue _fun0060 }
case 445:
                    var3 = _closure2_slot1;
                    var2 = var3.hasMoreAfter;
case 59:
                    if(var2) { _fun0060_ip = 493; continue _fun0060 }
case 494:
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
case 493:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var11.bind(var14)(var5, var10);
            var5 = 94;
            var10 = r108[var5];
            var15 = var8.bind(var4)(var10);
            var11 = var15.useShouldTrackAnnouncementMessageViews;
            var10 = {};
            var10['guild'] = var12;
            var10['channel'] = var7;
            var10['messages'] = var82;
            var10['isMessagesReady'] = var47;
            var12 = 'Messages';
            var10['location'] = var12;
            var33 = var11.bind(var15)(var10);
            var5 = r108[var5];
            var11 = var8.bind(var4)(var5);
            var10 = var11.useShouldTrackRichPresenceInviteEmbedViews;
            var5 = {};
            var5['messages'] = var82;
            var5['isMessagesReady'] = var47;
            var32 = var10.bind(var11)(var5);
            var5 = 114;
            var5 = r108[var5];
            var10 = var8.bind(var4)(var5);
            var5 = var10.useShouldDisplaySpoilerObscurity;
            var31 = var5.bind(var10)(var7);
            var5 = 115;
            var5 = r108[var5];
            var10 = var8.bind(var4)(var5);
            var5 = var10.useIsAgeVerified;
            var15 = var5.bind(var10)();
            var11 = var14.useEffect;
            var10 = new Array(2);
            var10[0] = var93;
            var10[1] = var95;
            var5 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 116;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.handleChannelSelect;
                var1 = var1.bind(var2)();
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 116;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleChannelSelect;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                return var1;
            };
            var5 = var11.bind(var14)(var5, var10);
            var5 = 117;
            var5 = r108[var5];
            var11 = var8.bind(var4)(var5);
            var10 = var11.useShouldDisableInteractiveComponents;
            var5 = var7.id;
            var30 = var10.bind(var11)(var5);
            var10 = _closure1_slot32;
            var5 = var7.id;
            var29 = var10.bind(var4)(var5);
            var5 = r108[var3];
            var17 = var8.bind(var4)(var5);
            var14 = var17.useStateFromStores;
            var5 = _closure1_slot22;
            var11 = new Array(1);
            var11[0] = var5;
            var10 = new Array(1);
            var10[0] = var93;
            var5 = function() {
                var3 = _closure1_slot22;
                var2 = var3.getChannelFpInfo;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var28 = var14.bind(var17)(var11, var5, var10);
            var5 = 118;
            var5 = r108[var5];
            var5 = var2.bind(var4)(var5);
            r102 = var5.bind(var4)();
            var5 = 119;
            var5 = r108[var5];
            var5 = var2.bind(var4)(var5);
            var5 = var5.bind(var4)(var82);
            var25 = var5.unloadedContentEntryMessageIds;
            var24 = var5.unloadableContentEntryMessageIds;
            var5 = r108[var3];
            var14 = var8.bind(var4)(var5);
            var11 = var14.useStateFromStores;
            var5 = _closure1_slot58;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
case 0:
                    var2 = _closure1_slot58;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0061_ip = 143; continue _fun0061 }
case 118:
                    var3 = var4.isStaff;
                    var2 = var3.bind(var4)();
case 143:
                    var1 = var1 != var2;
                    if(!var1) { _fun0061_ip = 61; continue _fun0061 }
case 495:
                    var1 = var2;
case 61:
                    return var1;
                }
            };
            r105 = var11.bind(var14)(var10, var5);
            var5 = 120;
            var5 = r108[var5];
            var10 = var8.bind(var4)(var5);
            var5 = var10.useShouldFilterKeywords;
            var26 = var5.bind(var10)();
            var5 = r108[var3];
            var14 = var8.bind(var4)(var5);
            var11 = var14.useStateFromStores;
            var5 = _closure1_slot24;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                var2 = _closure1_slot24;
                var1 = var2.getVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var51 = var11.bind(var14)(var10, var5);
            var5 = 121;
            var5 = r108[var5];
            var10 = var8.bind(var4)(var5);
            var5 = var10.useGuildProfileInviteEmbedHoldoutEnabled;
            var18 = var5.bind(var10)(r109);
            var5 = 122;
            var5 = r108[var5];
            var11 = var8.bind(var4)(var5);
            var10 = var11.useColorStore;
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
            var17 = var10.bind(var11)(var5);
            var5 = r108[var3];
            var14 = var8.bind(var4)(var5);
            var11 = var14.useStateFromStores;
            var5 = _closure1_slot20;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                var3 = _closure1_slot20;
                var2 = var3.getGuildEmoji;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var11.bind(var14)(var10, var5);
            var5 = 123;
            var5 = r108[var5];
            var11 = var8.bind(var4)(var5);
            var10 = var11.useDoubleTapToReactExperiment;
            var5 = {};
            var5['autoTrackExposure'] = r109;
            var5 = var10.bind(var11)(var12, var5);
            var12 = var5.enabled;
            var5 = r108[var3];
            r109 = var8.bind(var4)(var5);
            var11 = r109.useStateFromStoresArray;
            var5 = _closure1_slot56;
            var10 = new Array(1);
            var10[0] = var5;
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
                var1 = 99;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var11.bind(r109)(var10, var5);
            var _closure2_slot8 = var11;
            var3 = r108[var3];
            var10 = var8.bind(var4)(var3);
            var5 = var10.useStateFromStoresObject;
            r109 = _closure1_slot60;
            var3 = new Array(1);
            var3[0] = r109;
            var1 = function() {
                var4 = _closure2_slot8;
                var3 = var4.reduce;
                var2 = function(arg1, arg2) {
                    _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
case 0:
                        var1 = arg1;
                        var2 = arg2;
                        var3 = var2.application_id;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0062_ip = 183; continue _fun0062 }
case 470:
                        var7 = _closure1_slot60;
                        var6 = var7.getState;
                        var5 = var2.application_id;
                        var3 = _closure1_slot61;
                        var3 = var3.JOIN;
                        var3 = var6.bind(var7)(var5, var3);
                        if(!(var4 != var3)) { _fun0062_ip = 30; continue _fun0062 }
case 496:
                        var2 = var2.application_id;
                        var1[var2] = var3;
case 30:
                        return var1;
case 183:
                        return var1;
                    }
                };
                var1 = {};
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var10 = var5.bind(var10)(var3, var1);
            var3 = _closure1_slot76;
            var5 = 124;
            var1 = r108[var5];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var5 = r108[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.Profiles;
            var5 = var5.Messages;
            var1['profile'] = var5;
            var5 = var7.isThread;
            var7 = var5.bind(var7)();
            if(!var7) { _fun0045_ip = 497; continue _fun0045 }
case 498:
            r108 = _closure1_slot74;
            var8 = _closure1_slot1;
            r109 = _closure1_slot2;
            var5 = 125;
            var5 = r109[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            r109 = true;
            var5['absolute'] = r109;
            var7 = r108.bind(var4)(var8, var5);
case 497:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot74;
            var7 = _closure1_slot78;
            var6 = {};
            r108 = arg2;
            var6['ref'] = r108;
            var6['theme'] = r107;
            var6['saturation'] = r106;
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
            var6['isMessagesReady'] = var47;
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
            var6['messageAuthorMembers'] = var52;
            var6['forwardGuildsVersion'] = var51;
            var6['interactionStates'] = var50;
            var6['interactionComponentStates'] = var49;
            var6['interactionComponentStatesVersion'] = var48;
            if(!var46) { _fun0045_ip = 499; continue _fun0045 }
case 500:
            var46 = var47;
case 499:
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
            var6['selectedSummary'] = var35;
            var6['keyboardType'] = var34;
            var6['shouldTrackAnnouncementMessageViews'] = var33;
            var6['shouldTrackRichPresenceInviteEmbedViews'] = var32;
            var6['shouldObscureSpoiler'] = var31;
            var6['shouldDisableInteractiveComponents'] = var30;
            var6['channelPolls'] = var29;
            var6['explicitMediaFalsePositiveInfo'] = var28;
            var6['threadStartingReferenceMessage'] = var27;
            var6['shouldFilterKeywords'] = var26;
            var6['unloadedContentEntryMessageIds'] = var25;
            var6['unloadableContentEntryMessageIds'] = var24;
            var6['resolvedReferralTrialOfferIds'] = var23;
            var23 = var21 == var22;
            var21 = undefined;
            if(var23) { _fun0045_ip = 501; continue _fun0045 }
case 502:
            var21 = var22.id;
case 501:
            var6['referralTrialOfferId'] = var21;
            var6['isPremiumTier2User'] = var20;
            var6['activityInviteMessageIds'] = var19;
            var16 = 0;
            if(var18) { _fun0045_ip = 503; continue _fun0045 }
case 504:
            var16 = var17;
case 503:
            var6['guildInviteColorsFetched'] = var16;
            var6['isAgeVerified'] = var15;
            var6['guildEmojis'] = var14;
            var6['enableSwipeActions'] = var13;
            var6['doubleTapToReactEnabled'] = var12;
            var6['selfActivities'] = var11;
            var6['activityLaunchJoinStates'] = var10;
            r113 = var6;
            r112 = var9;
            var9 = copyDataProperties(r113, r112);
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 126;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/chat/Messages.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();