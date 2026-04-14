// app/modules/messages/native/Messages.tsx
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot78;
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
            var7 = _closure1_slot78;
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
    var _closure1_slot77 = var1;
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
    var _closure1_slot78 = var1;
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
            _closure1_slot79 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot79 = var1;
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
    var9 = var4.useChannelPollInteractions;
    var _closure1_slot32 = var9;
    var4 = var4.useMessagePollInteractions;
    var _closure1_slot33 = var4;
    var4 = 30;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot34 = var4;
    var4 = 31;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot35 = var4;
    var4 = 32;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot36 = var4;
    var4 = 33;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot37 = var4;
    var4 = 34;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot38 = var4;
    var4 = 35;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot39 = var4;
    var4 = 36;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot40 = var4;
    var4 = 37;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot41 = var4;
    var4 = 38;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot42 = var4;
    var4 = 39;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot43 = var4;
    var4 = 40;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot44 = var4;
    var4 = 41;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot45 = var4;
    var4 = 42;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot46 = var4;
    var4 = 43;
    var9 = var6[var4];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot47 = var9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getUserCommunicationDisabledVersion;
    var _closure1_slot48 = var4;
    var4 = 44;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot49 = var4;
    var4 = 45;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot50 = var4;
    var4 = 46;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot51 = var4;
    var4 = 47;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot52 = var4;
    var4 = 48;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot53 = var4;
    var4 = 49;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot54 = var4;
    var4 = 50;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot55 = var4;
    var4 = 51;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot56 = var4;
    var4 = 52;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot57 = var4;
    var4 = 53;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot58 = var4;
    var4 = 54;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot59 = var4;
    var4 = 55;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot60 = var4;
    var4 = 56;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot61 = var4;
    var4 = 57;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Changeset;
    var _closure1_slot62 = var4;
    var4 = 58;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.ActivityActionTypes;
    var _closure1_slot63 = var9;
    var9 = var4.ChannelTypesSets;
    var _closure1_slot64 = var9;
    var9 = var4.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot65 = var9;
    var9 = var4.ME;
    var _closure1_slot66 = var9;
    var9 = var4.MessageFlags;
    var _closure1_slot67 = var9;
    var9 = var4.MessageTypes;
    var _closure1_slot68 = var9;
    var4 = var4.Permissions;
    var _closure1_slot69 = var4;
    var4 = 59;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot70 = var9;
    var4 = var4.PremiumTypes;
    var _closure1_slot71 = var4;
    var4 = 60;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot72 = var9;
    var9 = var4.Fragment;
    var _closure1_slot73 = var9;
    var4 = var4.jsxs;
    var _closure1_slot74 = var4;
    var4 = 61;
    var4 = var6[var4];
    var9 = var8.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var12 = 'Messages';
    var13 = var8;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot75 = var4;
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
                var1 = _closure1_slot79;
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
                var4 = false;
                var1['animated'] = var4;
                var1['hasHandledScroll'] = var4;
                var1['isAtBottom'] = var4;
                var1['isNearBottom'] = var4;
                var1['isNearTop'] = var4;
                var1['decelerating'] = var4;
                var1['dragging'] = var4;
                var1['hasMoreMessagesAfterForLastUpdate'] = var4;
                var6 = new Array(0);
                var1['pendingUpdatesQueue'] = var6;
                var6 = null;
                var1['animatingStickerMessageId'] = var6;
                var1['_loaded'] = var4;
                var1['_frozen'] = var4;
                var8 = _closure1_slot10;
                var4 = var8.createRef;
                var4 = var4.bind(var8)();
                var1['_chatRef'] = var4;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 62;
                var4 = var7[var4];
                var11 = var6.bind(var5)(var4);
                var4 = var11.prototype;
                var9 = Object.create(var4, {constructor: {value: var11}});
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
                var4 = new var15[var11](var14, var13, var12);
                var4 = var4 instanceof Object ? var4 : var9;
                var1['_chatUpdatesQueue'] = var4;
                var4 = var8.createRef;
                var4 = var4.bind(var8)();
                var1['_firstIgnoredScrollEventTimestampRef'] = var4;
                var4 = {'shouldForceRender': false, 'hasJumpedToOriginalPost': false};
                var1['state'] = var4;
                var4 = var1.props;
                var1['prevPropsWhileFrozen'] = var4;
                var4 = var1.state;
                var1['prevStateWhileFrozen'] = var4;
                var4 = 63;
                var4 = var7[var4];
                var4 = var6.bind(var5)(var4);
                var8 = var4.prototype;
                var8 = Object.create(var8, {constructor: {value: var4}});
                var15 = var8;
                var4 = new var15[var4](var14);
                var4 = var4 instanceof Object ? var4 : var8;
                var1['chatManager'] = var4;
                var4 = 64;
                var4 = var7[var4];
                var4 = var6.bind(var5)(var4);
                var8 = var4.prototype;
                var8 = Object.create(var8, {constructor: {value: var4}});
                var15 = var8;
                var4 = new var15[var4](var14);
                var4 = var4 instanceof Object ? var4 : var8;
                var1['rowGenerator'] = var4;
                var4 = 65;
                var4 = var7[var4];
                var8 = var6.bind(var5)(var4);
                var4 = var8.prototype;
                var6 = Object.create(var4, {constructor: {value: var8}});
                var14 = 'Messages';
                var15 = var6;
                var4 = new var15[var8](var14, var13);
                var4 = var4 instanceof Object ? var4 : var6;
                var1['channelLatestMessageLoadingStatsManager'] = var4;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 66;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.startOrCancelChannelLatestMessagesLoad;
                    var2 = {};
                    var5 = _closure3_slot0;
                    var6 = var5.props;
                    var6 = var6.messages;
                    var6 = var6.jumpTargetId;
                    var2['jumpTargetId'] = var6;
                    var6 = var5.props;
                    var6 = var6.oldestUnreadMessageId;
                    var2['oldestUnreadMessageId'] = var6;
                    var6 = var5.shouldJumpToOriginalPost;
                    var6 = var6.bind(var5)();
                    var2['shouldJumpToOriginalPost'] = var6;
                    var6 = var5.props;
                    var6 = var6.channelId;
                    var2['channelId'] = var6;
                    var5 = var5.channelLatestMessageLoadingStatsManager;
                    var2['tracker'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['startOrCancelChannelLatestMessagesLoad'] = var4;
                var6 = _closure1_slot0;
                var4 = 67;
                var4 = var7[var4];
                var4 = var6.bind(var5)(var4);
                var7 = var4.MessagesHandlers;
                var4 = var7.prototype;
                var6 = Object.create(var4, {constructor: {value: var7}});
                var14 = function() {
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
                    var3 = var2.props;
                    var3 = var3.paymentsBlocked;
                    var1['paymentsBlocked'] = var3;
                    var3 = var2.loadMoreBefore;
                    var1['loadMoreBefore'] = var3;
                    var2 = var2.loadMoreAfter;
                    var1['loadMoreAfter'] = var2;
                    return var1;
                };
                var15 = var6;
                var4 = new var15[var7](var14, var13);
                var4 = var4 instanceof Object ? var4 : var6;
                var1['handlers'] = var4;
                var4 = function(arg1) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 68;
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
                        var3 = 69;
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
                        var5 = 70;
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
                                var3 = 70;
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
                                var2 = 71;
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
                                var6 = 70;
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
                    var13 = var1.rows;
                    var3 = var1.hasMoreMessagesAfter;
                    var11 = var1.scrollData;
                    var10 = var1.HACK_iOSForceAnimations;
                    var9 = var1.forceReload;
                    var8 = var1.isAnimated;
                    var2 = _closure3_slot0;
                    var5 = var2.isLoadingAtTop;
                    var4 = var1.rows;
                    var1 = var2.hasMoreMessagesAfterForLastUpdate;
                    var12 = var5.bind(var2)(var4, var1);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 71;
                    var4 = var4[var1];
                    var1 = undefined;
                    var7 = var5.bind(var1)(var4);
                    var6 = var7.updateRows;
                    var4 = var2._chatRef;
                    var5 = var4.current;
                    var4 = {};
                    var4['rows'] = var13;
                    var4['isLoadingAtTop'] = var12;
                    var4['scrollData'] = var11;
                    var4['HACK_iOSForceAnimations'] = var10;
                    var4['forceReload'] = var9;
                    var4['isAnimated'] = var8;
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
                        var2 = _closure1_slot77;
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
                        var2 = _closure1_slot62;
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
                        var17 = var2.forceRender;
                        if(!(var17 === var1)) { _fun0013_ip = 31; continue _fun0013 }
case 48:
                        var17 = false;
case 31:
                        var8 = var2.forceReload;
                        var13 = var2.updateMessageIds;
                        if(!(var13 === var1)) { _fun0013_ip = 30; continue _fun0013 }
case 71:
                        var3 = global;
                        var3 = var3.Set;
                        var4 = var3.prototype;
                        var4 = Object.create(var4, {constructor: {value: var3}});
                        var24 = var4;
                        var3 = new var24[var3](var23);
                        var13 = var3 instanceof Object ? var3 : var4;
case 30:
                        var16 = var2.scrollToMessageId;
                        if(!(var16 === var1)) { _fun0013_ip = 72; continue _fun0013 }
case 60:
                        var16 = null;
case 72:
                        var15 = var2.jumpTargetId;
                        if(!(var15 === var1)) { _fun0013_ip = 73; continue _fun0013 }
case 74:
                        var15 = null;
case 73:
                        var20 = var2.jumpType;
                        if(!(var20 === var1)) { _fun0013_ip = 75; continue _fun0013 }
case 45:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 70;
                        var3 = var5[var3];
                        var3 = var4.bind(var1)(var3);
                        var3 = var3.JumpTypes;
                        var20 = var3.ANIMATED;
case 75:
                        var10 = var2.focusTargetId;
                        if(!(var10 === var1)) { _fun0013_ip = 76; continue _fun0013 }
case 77:
                        var10 = null;
case 76:
                        var11 = var2.ignoreEmbedDescriptionCache;
                        if(!(var11 === var1)) { _fun0013_ip = 78; continue _fun0013 }
case 15:
                        var11 = false;
case 78:
                        var9 = var2.messagesNewlyLoaded;
                        if(!(var9 === var1)) { _fun0013_ip = 79; continue _fun0013 }
case 80:
                        var9 = false;
case 79:
                        var12 = var2.shouldInitialScroll;
                        if(!(var12 === var1)) { _fun0013_ip = 81; continue _fun0013 }
case 82:
                        var12 = false;
case 81:
                        var19 = var2.minimizeScrolling;
                        if(!(var19 === var1)) { _fun0013_ip = 83; continue _fun0013 }
case 84:
                        var19 = false;
case 83:
                        var18 = var2.isRescrolling;
                        if(!(var18 === var1)) { _fun0013_ip = 85; continue _fun0013 }
case 86:
                        var18 = false;
case 85:
                        var6 = var2.overrideScrollJumpType;
                        var7 = var2.isAnimated;
                        if(!(var7 === var1)) { _fun0013_ip = 87; continue _fun0013 }
case 88:
                        var7 = true;
case 87:
                        var2 = _closure3_slot0;
                        var2 = var2._chatRef;
                        var2 = var2.current;
                        var14 = null;
                        if(!(var14 != var2)) { _fun0013_ip = 89; continue _fun0013 }
case 90:
                        var2 = _closure3_slot0;
                        var5 = var2.createRows;
                        var4 = {};
                        var4['forceRender'] = var17;
                        var4['updateMessageIds'] = var13;
                        var4['ignoreEmbedDescriptionCache'] = var11;
                        var13 = var5.bind(var2)(var4);
                        var5 = var2._loaded;
                        var2 = var2.props;
                        var2 = var2.selectedSummary;
                        var4 = var14 != var2;
                        var11 = undefined;
                        if(!var4) { _fun0013_ip = 91; continue _fun0013 }
case 92:
                        var2 = var2.startId;
                        var11 = undefined;
                        if(!(var2 === var16)) { _fun0013_ip = 91; continue _fun0013 }
case 8:
                        var4 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var2 = 71;
                        var2 = var17[var2];
                        var2 = var4.bind(var1)(var2);
                        var2 = var2.ChatScrollPosition;
                        var11 = var2.MIDDLE;
case 91:
                        if(!(var14 != var13)) { _fun0013_ip = 93; continue _fun0013 }
case 94:
                        var4 = var13.length;
                        var2 = 0;
                        if(!(!(var4 > var2))) { _fun0013_ip = 95; continue _fun0013 }
case 93:
                        var2 = _closure3_slot0;
                        var2 = var2._loaded;
                        if(!var2) { _fun0013_ip = 96; continue _fun0013 }
case 97:
                        var2 = _closure3_slot0;
                        var4 = var2._chatUpdatesQueue;
                        var2 = var4.hasUpdates;
                        var2 = var2.bind(var4)();
                        if(var2) { _fun0013_ip = 98; continue _fun0013 }
case 96:
                        var2 = _closure3_slot0;
                        var2 = var2._loaded;
                        if(var2) { _fun0013_ip = 99; continue _fun0013 }
case 100:
                        if(!(var14 != var13)) { _fun0013_ip = 99; continue _fun0013 }
case 101:
                        var4 = var13.length;
                        var2 = 0;
                        if(!(var2 === var4)) { _fun0013_ip = 99; continue _fun0013 }
case 102:
                        var4 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        var2 = 71;
                        var2 = var17[var2];
                        var17 = var4.bind(var1)(var2);
                        var4 = var17.fadeIn;
                        var2 = _closure3_slot0;
                        var2 = var2._chatRef;
                        var2 = var2.current;
                        var2 = var4.bind(var17)(var2);
                        _fun0013_ip = 103; continue _fun0013;
case 99:
                        if(!(var14 != var16)) { _fun0013_ip = 104; continue _fun0013 }
case 105:
                        var4 = _closure3_slot0;
                        var2 = var4.shouldJumpToOriginalPost;
                        var2 = var2.bind(var4)();
                        if(var2) { _fun0013_ip = 104; continue _fun0013 }
case 106:
                        var17 = _closure3_slot0;
                        var4 = var17.scrollToMessageId;
                        var2 = {};
                        var2['scrollToMessageId'] = var16;
                        var2['jumpTargetId'] = var15;
                        var2['jumpType'] = var20;
                        var2['scrollPosition'] = var11;
                        var2['minimizeScrolling'] = var19;
                        var2['isRescrolling'] = var18;
                        var2 = var4.bind(var17)(var2);
                        _fun0013_ip = 103; continue _fun0013;
case 104:
                        if(!(var14 != var10)) { _fun0013_ip = 103; continue _fun0013 }
case 107:
                        var4 = _closure3_slot0;
                        var2 = var4.findMessageIndex;
                        var18 = var2.bind(var4)(var10);
                        if(!(var14 != var18)) { _fun0013_ip = 103; continue _fun0013 }
case 108:
                        var4 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        var2 = 71;
                        var2 = var17[var2];
                        var17 = var4.bind(var1)(var2);
                        var4 = var17.focus;
                        var2 = _closure3_slot0;
                        var2 = var2._chatRef;
                        var2 = var2.current;
                        var2 = var4.bind(var17)(var2, var18);
                        _fun0013_ip = 103; continue _fun0013;
case 98:
                        var2 = _closure3_slot0;
                        var4 = var2._chatUpdatesQueue;
                        var2 = var4.tryFlush;
                        var2 = var2.bind(var4)();
                        _fun0013_ip = 103; continue _fun0013;
case 95:
                        var4 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        var2 = 72;
                        var2 = var17[var2];
                        var4 = var4.bind(var1)(var2);
                        var2 = {};
                        var17 = _closure3_slot0;
                        var18 = var17.chatManager;
                        var17 = var18.getPreviousRows;
                        var17 = var17.bind(var18)();
                        var2['rows'] = var17;
                        var2['scrollToMessageId'] = var16;
                        var2['jumpTargetId'] = var15;
                        if(!(var14 == var6)) { _fun0013_ip = 109; continue _fun0013 }
case 110:
                        var14 = _closure3_slot0;
                        var14 = var14.props;
                        var14 = var14.messages;
                        var6 = var14.jumpType;
case 109:
                        var2['jumpType'] = var6;
                        var6 = _closure3_slot0;
                        var6 = var6._loaded;
                        var6 = !var6;
                        if(var6) { _fun0013_ip = 111; continue _fun0013 }
case 112:
                        var6 = var12;
case 111:
                        var2['shouldInitialScroll'] = var6;
                        var6 = _closure3_slot0;
                        var12 = var6.animated;
                        var2['animated'] = var12;
                        var2['scrollPosition'] = var11;
                        var2['focusTargetId'] = var10;
                        var10 = var4.bind(var1)(var2);
                        var2 = true;
                        var6['_loaded'] = var2;
                        var4 = var6.updateNativeRows;
                        var2 = {};
                        var2['rows'] = var13;
                        var11 = var6.props;
                        var11 = var11.messages;
                        var11 = var11.hasMoreAfter;
                        var2['hasMoreMessagesAfter'] = var11;
                        var12 = var6.isLoadingAtTop;
                        var11 = var6.hasMoreMessagesAfterForLastUpdate;
                        var11 = var12.bind(var6)(var13, var11);
                        var2['isLoadingAtTop'] = var11;
                        var2['scrollData'] = var10;
                        var2['HACK_iOSForceAnimations'] = var9;
                        var2['forceReload'] = var8;
                        var2['isAnimated'] = var7;
                        var2 = var4.bind(var6)(var2);
                        if(var5) { _fun0013_ip = 103; continue _fun0013 }
case 113:
                        var7 = _closure3_slot0;
                        var6 = var7.channelLatestMessageLoadingStatsManager;
                        var4 = var6.finish;
                        var2 = {};
                        var8 = var7.props;
                        var8 = var8.channelId;
                        var2['channelId'] = var8;
                        var7 = var7.props;
                        var7 = var7.isMessagesCached;
                        var2['areMessagesCached'] = var7;
                        var2 = var4.bind(var6)(var2);
case 103:
                        var2 = _closure3_slot0;
                        var2 = var2._loaded;
                        if(!var2) { _fun0013_ip = 114; continue _fun0013 }
case 115:
                        var4 = _closure3_slot0;
                        var4 = var4._loaded;
                        var2 = var4 !== var5;
case 114:
                        if(!var2) { _fun0013_ip = 116; continue _fun0013 }
case 117:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var2 = var3.isResourceChannel;
case 116:
                        if(!var2) { _fun0013_ip = 89; continue _fun0013 }
case 118:
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
case 89:
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
                        if(!(var9 === var1)) { _fun0014_ip = 119; continue _fun0014 }
case 120:
                        var9 = null;
case 119:
                        var _closure4_slot1 = var9;
                        var11 = var3.jumpType;
                        if(!(var11 === var1)) { _fun0014_ip = 121; continue _fun0014 }
case 122:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 70;
                        var4 = var6[var4];
                        var4 = var5.bind(var1)(var4);
                        var4 = var4.JumpTypes;
                        var11 = var4.ANIMATED;
case 121:
                        var8 = var3.scrollPosition;
                        if(!(var8 === var1)) { _fun0014_ip = 123; continue _fun0014 }
case 124:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 71;
                        var4 = var6[var4];
                        var4 = var5.bind(var1)(var4);
                        var4 = var4.ChatScrollPosition;
                        var8 = var4.TOP;
case 123:
                        var5 = var3.minimizeScrolling;
                        if(!(var5 === var1)) { _fun0014_ip = 125; continue _fun0014 }
case 126:
                        var5 = false;
case 125:
                        var6 = var3.isRescrolling;
                        if(!(var6 === var1)) { _fun0014_ip = 127; continue _fun0014 }
case 128:
                        var6 = false;
case 127:
                        var _closure4_slot2 = var1;
                        var _closure4_slot3 = var1;
                        var4 = _closure3_slot0;
                        var4 = var4.props;
                        var4 = var4.useReducedMotion;
                        if(var4) { _fun0014_ip = 129; continue _fun0014 }
case 130:
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var7 = 70;
                        var7 = var13[var7];
                        var7 = var12.bind(var1)(var7);
                        var7 = var7.JumpTypes;
                        var7 = var7.INSTANT;
                        var4 = var11 === var7;
case 129:
                        var11 = !var4;
                        _closure4_slot2 = var11;
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var7 = 73;
                        var7 = var13[var7];
                        var12 = var12.bind(var1)(var7);
                        var7 = var12.isIOS;
                        var7 = var7.bind(var12)();
                        if(!var7) { _fun0014_ip = 131; continue _fun0014 }
case 132:
                        if(var6) { _fun0014_ip = 131; continue _fun0014 }
case 133:
                        var13 = _closure3_slot0;
                        var12 = var13.maybeRescrollToMessageId;
                        var7 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var6 = 70;
                        var6 = var14[var6];
                        var6 = var7.bind(var1)(var6);
                        var6 = var6.JumpTypes;
                        if(var11) { _fun0014_ip = 134; continue _fun0014 }
case 135:
                        var7 = var6.INSTANT;
                        _fun0014_ip = 136; continue _fun0014;
case 134:
                        var7 = var6.ANIMATED;
case 136:
                        var6 = true;
                        var6 = var12.bind(var13)(var10, var6, var7);
                        _fun0014_ip = 137; continue _fun0014;
case 131:
                        var7 = _closure3_slot0;
                        var6 = var7.findMessageIndex;
                        var7 = var6.bind(var7)(var10);
                        _closure4_slot3 = var7;
                        var6 = null;
                        if(!(var6 != var7)) { _fun0014_ip = 137; continue _fun0014 }
case 138:
                        if(var5) { _fun0014_ip = 139; continue _fun0014 }
case 140:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 71;
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
                        _fun0014_ip = 137; continue _fun0014;
case 139:
                        var3 = global;
                        var4 = var3.setTimeout;
                        var3 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 71;
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
case 137:
                        return var1;
                    }
                };
                var1['scrollToMessageId'] = var4;
                var4 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var4 = arg1;
                        var1 = null;
                        if(!(var1 == var4)) { _fun0015_ip = 141; continue _fun0015 }
case 70:
                        var1 = undefined;
                        return var1;
case 141:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 72;
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
                        var8 = var1.timeStamp;
                        var1 = var1.nativeEvent;
                        var19 = var1.isAtBottom;
                        var18 = var1.isNearBottom;
                        var17 = var1.isNearTop;
                        var16 = var1.dragging;
                        var15 = var1.decelerating;
                        var14 = var1.shouldShowJumpToPresent;
                        var13 = var1.isFirstMessageVisible;
                        var11 = var1.firstVisibleMessageIndex;
                        var21 = var1.firstVisibleMessagePercentVisible;
                        var10 = var1.lastVisibleMessageIndex;
                        var7 = var1.changesetUpdateId;
                        var20 = var1.lastVisibleMessagePercentVisible;
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 74;
                        var2 = var2[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var2);
                        var5 = var6.getChangesetIdForChat;
                        var4 = _closure3_slot0;
                        var4 = var4._chatRef;
                        var4 = var4.current;
                        var6 = var5.bind(var6)(var4);
                        if(!(var7 === var6)) { _fun0016_ip = 142; continue _fun0016 }
case 76:
                        var4 = _closure3_slot0;
                        var5 = var4.props;
                        var9 = var5.visibleMessagesWindowHandler;
                        var12 = var4.handleVisibleMessagesChange;
                        var5 = {};
                        var5['firstVisibleMessageRowIndex'] = var11;
                        var5['lastVisibleMessageRowIndex'] = var10;
                        var5['firstVisibleMessagePercentVisible'] = var21;
                        var5['lastVisibleMessagePercentVisible'] = var20;
                        var21 = _closure1_slot0;
                        var22 = _closure1_slot2;
                        var20 = 75;
                        var20 = var22[var20];
                        var20 = var21.bind(var1)(var20);
                        var20 = var20.QuestsVisibleMessagesChangedSource;
                        var20 = var20.SCROLL;
                        var5['source'] = var20;
                        var5 = var12.bind(var4)(var5);
                        var4 = var4._firstIgnoredScrollEventTimestampRef;
                        var4 = var4.current;
                        var5 = null;
                        var20 = var8;
                        if(!(var5 != var4)) { _fun0016_ip = 143; continue _fun0016 }
case 144:
                        var20 = var4;
case 143:
                        var12 = _closure3_slot0;
                        var4 = var12._firstIgnoredScrollEventTimestampRef;
                        var4['current'] = var1;
                        var5 = var12.handleScroll;
                        var4 = {};
                        var4['eventTimestamp'] = var20;
                        var4['isAtBottom'] = var19;
                        var4['isNearBottom'] = var18;
                        var4['isNearTop'] = var17;
                        var4['dragging'] = var16;
                        var4['decelerating'] = var15;
                        var4['shouldShowJumpToPresent'] = var14;
                        var4['isFirstMessageVisible'] = var13;
                        var4 = var5.bind(var12)(var4);
                        var5 = var9.handleScrollPosition;
                        var4 = {};
                        var12 = var12.chatManager;
                        var12 = var12._rows;
                        var4['rows'] = var12;
                        var4['firstVisibleMessageRowIndex'] = var11;
                        var4['lastVisibleMessageRowIndex'] = var10;
                        var4 = var5.bind(var9)(var4);
                        return var1;
case 142:
                        var1 = _closure3_slot0;
                        var1 = var1._firstIgnoredScrollEventTimestampRef;
                        var4 = var1.current;
                        var1 = null;
                        if(!(var1 == var4)) { _fun0016_ip = 145; continue _fun0016 }
case 146:
                        var1 = _closure3_slot0;
                        var1 = var1._firstIgnoredScrollEventTimestampRef;
                        var1['current'] = var8;
case 145:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var1 = var1.isStaff;
                        if(!var1) { _fun0016_ip = 147; continue _fun0016 }
case 148:
                        var5 = _closure1_slot75;
                        var4 = var5.log;
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var26 = var2.channelId;
                        var27 = 'STAFF-ACK-LOG: Ignoring outdated scroll event.';
                        var28 = var5;
                        var25 = var7;
                        var24 = var6;
                        var23 = var8;
                        var1 = var28[var4](var27, var26, var25, var24, var23, var22);
case 147:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleScrollPosition'] = var4;
                var4 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var3 = arg1;
                        var14 = var3.eventTimestamp;
                        var8 = var3.isAtBottom;
                        var7 = var3.isNearBottom;
                        var1 = undefined;
                        if(!(var7 === var1)) { _fun0017_ip = 50; continue _fun0017 }
case 119:
                        var7 = false;
case 50:
                        var6 = var3.isNearTop;
                        if(!(var6 === var1)) { _fun0017_ip = 122; continue _fun0017 }
case 149:
                        var6 = false;
case 122:
                        var5 = var3.dragging;
                        if(!(var5 === var1)) { _fun0017_ip = 4; continue _fun0017 }
case 42:
                        var5 = false;
case 4:
                        var4 = var3.decelerating;
                        if(!(var4 === var1)) { _fun0017_ip = 30; continue _fun0017 }
case 55:
                        var4 = false;
case 30:
                        var13 = var3.shouldShowJumpToPresent;
                        if(!(var13 === var1)) { _fun0017_ip = 72; continue _fun0017 }
case 60:
                        var13 = false;
case 72:
                        var _closure4_slot0 = var13;
                        var12 = var3.isFirstMessageVisible;
                        if(!(var12 === var1)) { _fun0017_ip = 150; continue _fun0017 }
case 151:
                        var12 = false;
case 150:
                        var _closure4_slot1 = var1;
                        var11 = _closure3_slot0;
                        var9 = var11.props;
                        var9 = var9.messages;
                        _closure4_slot1 = var9;
                        var10 = var11.handleScrollCallbacks;
                        var9 = {};
                        var9['eventTimestamp'] = var14;
                        var9['isAtBottom'] = var8;
                        var9['isNearBottom'] = var7;
                        var9['isNearTop'] = var6;
                        var9['dragging'] = var5;
                        var9['decelerating'] = var4;
                        var9['shouldShowJumpToPresent'] = var13;
                        var9['isFirstMessageVisible'] = var12;
                        var9 = var10.bind(var11)(var9);
                        if(!var9) { _fun0017_ip = 144; continue _fun0017 }
case 152:
                        var3 = _closure3_slot0;
                        var3['isAtBottom'] = var8;
                        var3['isNearBottom'] = var7;
                        var3['isNearTop'] = var6;
                        var3['dragging'] = var5;
                        var3['decelerating'] = var4;
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 76;
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
case 153:
                                var1 = _closure4_slot1;
                                var2 = var1.hasMoreAfter;
case 4:
                                var1 = undefined;
                                var2 = var5.bind(var1)(var4, var3, var2);
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
case 144:
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
                        if(var3) { _fun0019_ip = 154; continue _fun0019 }
case 42:
                        var3 = var9.bind(var10)();
                        _fun0019_ip = 155; continue _fun0019;
case 154:
                        var3 = {};
                        var5 = var6.jumpTargetId;
                        var3['scrollToMessageId'] = var5;
                        var5 = var6.jumpTargetId;
                        var3['jumpTargetId'] = var5;
                        var12 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var8 = 70;
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
                        if(!(var3 == var9)) { _fun0019_ip = 156; continue _fun0019 }
case 157:
                        if(!(var3 != var4)) { _fun0019_ip = 155; continue _fun0019 }
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
                            var4 = 70;
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
                        _fun0019_ip = 155; continue _fun0019;
case 156:
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
case 155:
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
case 158:
                        var2 = var7.loadingMore;
                        var1 = !var2;
case 5:
                        if(!var1) { _fun0020_ip = 159; continue _fun0020 }
case 160:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 77;
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
                        if(var7) { _fun0020_ip = 161; continue _fun0020 }
case 162:
                        var5 = var6.id;
case 161:
                        var1['before'] = var5;
                        var4 = _closure1_slot65;
                        var1['limit'] = var4;
                        var1 = var2.bind(var3)(var1);
case 159:
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
case 158:
                        var2 = var7.loadingMore;
                        var1 = !var2;
case 5:
                        if(!var1) { _fun0021_ip = 159; continue _fun0021 }
case 160:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 77;
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
                        if(var7) { _fun0021_ip = 161; continue _fun0021 }
case 162:
                        var5 = var6.id;
case 161:
                        var1['after'] = var5;
                        var4 = _closure1_slot65;
                        var1['limit'] = var4;
                        var1 = var2.bind(var3)(var1);
case 159:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['loadMoreAfter'] = var4;
                var4 = function() {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var3 = var1.channel;
                        var1 = var1.canChat;
                        if(!var1) { _fun0022_ip = 4; continue _fun0022 }
case 163:
                        var5 = _closure1_slot53;
                        var4 = var5.can;
                        var2 = _closure1_slot69;
                        var2 = var2.ADD_REACTIONS;
                        var1 = var4.bind(var5)(var2, var3);
case 4:
                        if(var1) { _fun0022_ip = 164; continue _fun0022 }
case 165:
                        var2 = var3.isPrivate;
                        var1 = var2.bind(var3)();
case 164:
                        return var1;
                    }
                };
                var1['canAddNewReactions'] = var4;
                var4 = function(arg1) {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 78;
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
                        if(!(var4 != var7)) { _fun0023_ip = 166; continue _fun0023 }
case 167:
                        var3 = var5.add;
                        var3 = var3.bind(var5)(var7);
case 166:
                        var3 = _closure3_slot0;
                        var4 = null;
                        if(!(var7 !== var6)) { _fun0023_ip = 168; continue _fun0023 }
case 46:
                        var4 = var6;
case 168:
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
                    var4 = var1.description;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 79;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var2['description'] = var4;
                    var2 = var3.bind(var1)(var2);
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
                        var7 = global;
                        var8 = var7.Date;
                        var7 = var8.now;
                        var7 = var7.bind(var8)();
                        var3['eventTimestamp'] = var7;
                        var7 = true;
                        var3['isAtBottom'] = var7;
                        var3 = var4.bind(var2)(var3);
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 71;
                        var3 = var7[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.scrollToBottom;
                        var2 = var2._chatRef;
                        var2 = var2.current;
                        if(!var5) { _fun0024_ip = 169; continue _fun0024 }
case 170:
                        var5 = !var6;
case 169:
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
                        var3 = 71;
                        var3 = var7[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.scrollToTop;
                        var2 = var2._chatRef;
                        var2 = var2.current;
                        if(!var5) { _fun0025_ip = 171; continue _fun0025 }
case 37:
                        var5 = !var6;
case 171:
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
                        var2 = 71;
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
                        var3 = 71;
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
                            if(var2) { _fun0028_ip = 172; continue _fun0028 }
case 173:
                            var2 = undefined;
                            var _closure5_slot0 = var2;
                            var5 = _closure3_slot0;
                            var5 = var5.props;
                            var9 = var5.channel;
                            var11 = var5.useReducedMotion;
                            _closure5_slot0 = var11;
                            var5 = var9.isForumPost;
                            var5 = var5.bind(var9)();
                            if(!var5) { _fun0028_ip = 174; continue _fun0028 }
case 7:
                            var5 = _closure3_slot0;
                            var5 = var5.isNearTop;
                            if(var5) { _fun0028_ip = 174; continue _fun0028 }
case 60:
                            var8 = _closure3_slot0;
                            var6 = var8.getMessage;
                            var10 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var13 = 69;
                            var5 = var5[var13];
                            var12 = var10.bind(var2)(var5);
                            var10 = var12.castChannelIdAsMessageId;
                            var5 = var9.id;
                            var5 = var10.bind(var12)(var5);
                            var5 = var6.bind(var8)(var5);
                            var6 = null;
                            if(!(var6 != var5)) { _fun0028_ip = 10; continue _fun0028 }
case 175:
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
                            if(!(var6 != var5)) { _fun0028_ip = 176; continue _fun0028 }
case 177:
                            var8 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var6 = 71;
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
                            _fun0028_ip = 174; continue _fun0028;
case 176:
                            return var2;
case 10:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 77;
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
                            var7 = _closure1_slot65;
                            var3['limit'] = var7;
                            var3 = var5.bind(var6)(var3);
                            SaveGenerator(address=360);
case 91:
                            return var3;
case 178:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(var5) { _fun0028_ip = 179; continue _fun0028 }
case 142:
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
                            _fun0028_ip = 174; continue _fun0028;
case 179:
                            return var3;
case 174:
                            return var2;
case 172:
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
                        var1 = 73;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var6.bind(var1)(var3);
                        var3 = var6.isIOS;
                        var3 = var3.bind(var6)();
                        if(!var3) { _fun0029_ip = 65; continue _fun0029 }
case 154:
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
case 166:
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
                    var1 = 75;
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
                    var1 = 75;
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
                    var1 = arg1;
                    var4 = var1.nativeEvent;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 66;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleMediaPlayFinishedAnalytics;
                    var2 = var2.bind(var3)(var4);
                    return var1;
                };
                var1['handleMediaPlayFinishedAnalytics'] = var3;
                var3 = function() {
                    _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var3 = var2.props;
                        var2 = var3.messages;
                        var5 = var3.channel;
                        var7 = var2.jumpReturnTargetId;
                        var3 = null;
                        if(!(var3 != var7)) { _fun0030_ip = 150; continue _fun0030 }
case 180:
                        var6 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 77;
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
                        _fun0030_ip = 181; continue _fun0030;
case 150:
                        var3 = var2.loadingMore;
                        if(var3) { _fun0030_ip = 181; continue _fun0030 }
case 47:
                        var2 = var2.hasMoreAfter;
                        if(var2) { _fun0030_ip = 182; continue _fun0030 }
case 161:
                        var2 = _closure3_slot0;
                        var1 = var2.scrollToBottom;
                        var1 = var1.bind(var2)();
                        _fun0030_ip = 181; continue _fun0030;
case 182:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 77;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.fetchMessages;
                        var1 = {};
                        var5 = var5.id;
                        var1['channelId'] = var5;
                        var4 = _closure1_slot65;
                        var1['limit'] = var4;
                        var4 = {};
                        var5 = true;
                        var4['present'] = var5;
                        var1['jump'] = var4;
                        var1 = var2.bind(var3)(var1);
case 181:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['jumpToPresent'] = var3;
                var3 = function() {
                    _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var6 = var1.channel;
                        var4 = _closure1_slot56;
                        var3 = var4.ackMessageId;
                        var2 = var6.id;
                        var5 = var3.bind(var4)(var2);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 77;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.jumpToMessage;
                        var2 = {};
                        var7 = var6.id;
                        var2['channelId'] = var7;
                        var7 = null;
                        if(!(var7 == var5)) { _fun0031_ip = 183; continue _fun0031 }
case 184:
                        var5 = var6.id;
case 183:
                        var2['messageId'] = var5;
                        var5 = 1;
                        var2['offset'] = var5;
                        var5 = 'Mark As Read';
                        var2['context'] = var5;
                        var2 = var3.bind(var4)(var2);
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
                    var3 = 71;
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
                    _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
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
                        var6 = var4.timestampHourCycle;
                        var _closure4_slot15 = var6;
                        var6 = var4.currentUserId;
                        var _closure4_slot16 = var6;
                        var6 = var4.renderCommunicationDisabled;
                        var _closure4_slot17 = var6;
                        var6 = var4.selectedSummary;
                        var _closure4_slot18 = var6;
                        var6 = var4.enableSwipeActions;
                        var _closure4_slot19 = var6;
                        var6 = var4.isResourceChannel;
                        var _closure4_slot20 = var6;
                        var6 = var4.shouldObscureSpoiler;
                        var _closure4_slot21 = var6;
                        var6 = var4.shouldDisableInteractiveComponents;
                        var _closure4_slot22 = var6;
                        var4 = var4.unloadableContentEntryMessageIds;
                        var _closure4_slot23 = var4;
                        var4 = null;
                        var6 = var4 != var1;
                        var1 = null;
                        if(!var6) { _fun0032_ip = 185; continue _fun0032 }
case 186:
                        var5 = var4 != var5;
                        var1 = null;
                        if(!var5) { _fun0032_ip = 185; continue _fun0032 }
case 187:
                        var1 = null;
                        if(!var3) { _fun0032_ip = 185; continue _fun0032 }
case 188:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 81;
                        var4 = var4[var3];
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        var4 = var3.firstRowGenerator;
                        var3 = var4.measure;
                        var2 = function() {
                            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
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
                                var5 = _closure4_slot15;
                                var2['timestampHourCycle'] = var5;
                                var5 = _closure4_slot17;
                                var2['renderCommunicationDisabled'] = var5;
                                var5 = _closure4_slot2;
                                var2['ignoreEmbedDescriptionCache'] = var5;
                                var5 = _closure4_slot19;
                                var2['enableSwipeActions'] = var5;
                                var5 = _closure4_slot21;
                                var2['shouldObscureSpoiler'] = var5;
                                var5 = _closure4_slot22;
                                var2['shouldDisableInteractiveComponents'] = var5;
                                var2 = var3.bind(var4)(var2);
                                var3 = _closure1_slot77;
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
                                var8 = _closure4_slot16;
                                var2['currentUserId'] = var8;
                                var8 = var7.canAddNewReactions;
                                var8 = var8.bind(var7)();
                                var2['canAddNewReactions'] = var8;
                                var8 = _closure4_slot18;
                                var2['selectedSummary'] = var8;
                                var7 = var7.chatManager;
                                var2['chatManager'] = var7;
                                var7 = _closure4_slot6;
                                var2['roleStyle'] = var7;
                                var7 = _closure4_slot0;
                                var2['forceRender'] = var7;
                                var7 = _closure4_slot1;
                                var2['updateMessageIds'] = var7;
                                var7 = _closure4_slot20;
                                var2['isResourceChannel'] = var7;
                                var6 = _closure4_slot23;
                                var2['unloadableContentEntryMessageIds'] = var6;
                                var2 = var4.bind(var5)(var2);
                                var4 = var3.bind(var5)(var2);
                                var3 = var4.bind(var5)();
                                var2 = var3.done;
                                if(var2) { _fun0033_ip = 189; continue _fun0033 }
case 190:
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
                                if(!var2) { _fun0033_ip = 190; continue _fun0033 }
case 189:
                                var1 = _closure3_slot0;
                                var2 = var1.chatManager;
                                var1 = var2.createChangeset;
                                var1 = var1.bind(var2)();
                                return var1;
                            }
                        };
                        var1 = var3.bind(var4)(var2);
case 185:
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
        var1 = 'componentDidMount';
        var5['key'] = var1;
        var1 = function value() {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var5 = this;
                var1 = var5._chatRef;
                var1 = var1.current;
                var3 = null;
                var1 = var3 != var1;
                if(!var1) { _fun0034_ip = 191; continue _fun0034 }
case 31:
                var2 = var5.props;
                var2 = var2.firstScreenChatRef;
                var1 = var3 != var2;
case 191:
                if(!var1) { _fun0034_ip = 192; continue _fun0034 }
case 149:
                var1 = var5.props;
                var2 = var1.firstScreenChatRef;
                var1 = var5._chatRef;
                var1 = var1.current;
                var2['current'] = var1;
case 192:
                var2 = var5._frozen;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 83;
                var3 = var3[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var4 = var6.isScreenIndexFrozen;
                var3 = var5.props;
                var3 = var3.screenIndex;
                var3 = var4.bind(var6)(var3);
                var5['_frozen'] = var3;
                if(var2) { _fun0034_ip = 14; continue _fun0034 }
case 159:
                var2 = var5.startOrCancelChannelLatestMessagesLoad;
                var2 = var2.bind(var5)();
                var2 = var5.syncMessageDisplay;
                var2 = var2.bind(var5)();
                var2 = var5.recordTimings;
                var2 = var2.bind(var5)();
                _fun0034_ip = 19; continue _fun0034;
case 14:
                var4 = var5.componentDidUpdate;
                var3 = var5.prevPropsWhileFrozen;
                var2 = var5.prevStateWhileFrozen;
                var2 = var4.bind(var5)(var3, var2);
case 19:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = 'recordTimings';
        var5['key'] = var7;
        var7 = function value() {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
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
                if(var3) { _fun0035_ip = 193; continue _fun0035 }
case 194:
                var8 = var2.props;
                var8 = var8.messages;
                var8 = var8.ready;
                if(!var8) { _fun0035_ip = 195; continue _fun0035 }
case 170:
                var9 = var2.props;
                var9 = var9.messages;
                var9 = var9.cached;
                var8 = !var9;
case 195:
                var3 = var8;
case 193:
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
        var1[1] = var5;
        var5 = {};
        var7 = 'componentWillUnmount';
        var5['key'] = var7;
        var7 = function value() {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var2 = this;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 83;
                var1 = var3[var1];
                var3 = undefined;
                var6 = var5.bind(var3)(var1);
                var5 = var6.isScreenIndexFrozen;
                var1 = var2.props;
                var1 = var1.screenIndex;
                var1 = var5.bind(var6)(var1);
                var2['_frozen'] = var1;
                var5 = var2._frozen;
                var1 = var2.props;
                if(var5) { _fun0036_ip = 152; continue _fun0036 }
case 35:
                var5 = var1.firstScreenChatRef;
                var6 = null;
                if(!(var6 != var5)) { _fun0036_ip = 57; continue _fun0036 }
case 68:
                var5 = var2.props;
                var5 = var5.firstScreenChatRef;
                var5['current'] = var6;
case 57:
                var6 = var2._chatUpdatesQueue;
                var5 = var6.cleanup;
                var5 = var5.bind(var6)();
                var6 = var2.channelLatestMessageLoadingStatsManager;
                var5 = var6.cancel;
                var5 = var5.bind(var6)();
                var5 = var2.clearRows;
                var5 = var5.bind(var2)();
                var7 = _closure1_slot19;
                var4 = var2.props;
                var6 = var4.channelId;
                var4 = var2.props;
                var5 = var4.screenIndex;
                var4 = false;
                var4 = var7.bind(var3)(var6, var5, var4);
                return var3;
case 152:
                var2['prevPropsWhileFrozen'] = var1;
                var1 = var2.state;
                var2['prevStateWhileFrozen'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'shouldComponentUpdate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
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
                if(var1) { _fun0037_ip = 157; continue _fun0037 }
case 196:
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
                if(var2) { _fun0037_ip = 197; continue _fun0037 }
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
case 197:
                var1 = var2;
case 157:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'componentDidUpdate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                var4 = arg1;
                var2 = this;
                var _closure3_slot0 = var2;
                var _closure3_slot1 = var4;
                var1 = var2.props;
                var1 = var1.currentUserId;
                var21 = null;
                if(!(var21 != var1)) { _fun0038_ip = 198; continue _fun0038 }
case 44:
                var1 = var2.props;
                var1 = var1.messages;
                var3 = var4.messages;
                var6 = var4.channelId;
                var5 = var2.props;
                var5 = var5.channelId;
                if(!(var6 !== var5)) { _fun0038_ip = 199; continue _fun0038 }
case 37:
                var5 = var2.clearRows;
                var5 = var5.bind(var2)();
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var5 = 85;
                var5 = var6[var5];
                var6 = undefined;
                var8 = var7.bind(var6)(var5);
                var7 = var8.clearChannelDimensions;
                var5 = var2.props;
                var5 = var5.channelId;
                var5 = var7.bind(var8)(var5);
                var5 = var2.startOrCancelChannelLatestMessagesLoad;
                var5 = var5.bind(var2)();
                var5 = var2._firstIgnoredScrollEventTimestampRef;
                var5['current'] = var6;
case 199:
                var5 = var4.isMessagesAckable;
                var5 = !var5;
                if(!var5) { _fun0038_ip = 200; continue _fun0038 }
case 201:
                var6 = var2.props;
                var5 = var6.isMessagesAckable;
case 200:
                if(!var5) { _fun0038_ip = 81; continue _fun0038 }
case 130:
                var5 = false;
                var2['hasHandledScroll'] = var5;
case 81:
                var5 = var2.shouldJumpToOriginalPost;
                var5 = var5.bind(var2)();
                if(!var5) { _fun0038_ip = 202; continue _fun0038 }
case 203:
                var6 = var2.scrollToTop;
                var5 = false;
                var5 = var6.bind(var2)(var5);
                var6 = var3.jumpSequenceId;
                var5 = var1.jumpSequenceId;
                if(!(var6 === var5)) { _fun0038_ip = 202; continue _fun0038 }
case 87:
                var6 = var2.setState;
                var5 = {};
                var7 = true;
                var5['hasJumpedToOriginalPost'] = var7;
                var5 = var6.bind(var2)(var5);
case 202:
                var5 = var2.props;
                var7 = var5.isMessagesReady;
                if(!var7) { _fun0038_ip = 204; continue _fun0038 }
case 52:
                var5 = var2.props;
                var5 = var5.isMessagesCached;
                var7 = !var5;
case 204:
                if(!var7) { _fun0038_ip = 10; continue _fun0038 }
case 205:
                var7 = var4.isMessagesCached;
case 10:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 86;
                var5 = var8[var5];
                var20 = undefined;
                var8 = var6.bind(var20)(var5);
                var6 = var2.props;
                var5 = {};
                var9 = var2.isAtBottom;
                var5['isAtBottom'] = var9;
                var10 = var2.chatManager;
                var9 = var10.getPreviousMessages;
                var9 = var9.bind(var10)();
                var9 = var21 != var9;
                var5['hasPreviousMessages'] = var9;
                var6 = var8.bind(var20)(var6, var5, var4);
                var12 = var6.scrollToMessageId;
                var11 = var6.jumpTargetId;
                var10 = var6.jumpType;
                var5 = var6.minimizeScrolling;
                var9 = var6.focusTargetId;
                var6 = var6.shouldInitialScroll;
                var13 = var4.theme;
                var8 = var2.props;
                var8 = var8.theme;
                var14 = var13 !== var8;
                if(var14) { _fun0038_ip = 206; continue _fun0038 }
case 207:
                var13 = var4.saturation;
                var8 = var2.props;
                var8 = var8.saturation;
                var14 = var13 !== var8;
case 206:
                var15 = var14;
                if(var15) { _fun0038_ip = 147; continue _fun0038 }
case 208:
                var13 = var4.inlineAttachmentMedia;
                var8 = var2.props;
                var8 = var8.inlineAttachmentMedia;
                var15 = var13 !== var8;
case 147:
                if(var15) { _fun0038_ip = 209; continue _fun0038 }
case 210:
                var13 = var4.inlineEmbedMedia;
                var8 = var2.props;
                var8 = var8.inlineEmbedMedia;
                var15 = var13 !== var8;
case 209:
                if(var15) { _fun0038_ip = 211; continue _fun0038 }
case 212:
                var13 = var4.renderEmbeds;
                var8 = var2.props;
                var8 = var8.renderEmbeds;
                var15 = var13 !== var8;
case 211:
                if(var15) { _fun0038_ip = 213; continue _fun0038 }
case 214:
                var13 = var4.renderReactions;
                var8 = var2.props;
                var8 = var8.renderReactions;
                var15 = var13 !== var8;
case 213:
                if(var15) { _fun0038_ip = 215; continue _fun0038 }
case 216:
                var13 = var4.animateEmoji;
                var8 = var2.props;
                var8 = var8.animateEmoji;
                var15 = var13 !== var8;
case 215:
                if(var15) { _fun0038_ip = 217; continue _fun0038 }
case 218:
                var13 = var4.animateStickers;
                var8 = var2.props;
                var8 = var8.animateStickers;
                var15 = var13 !== var8;
case 217:
                if(var15) { _fun0038_ip = 219; continue _fun0038 }
case 220:
                var13 = var4.gifAutoPlay;
                var8 = var2.props;
                var8 = var8.gifAutoPlay;
                var15 = var13 !== var8;
case 219:
                if(var15) { _fun0038_ip = 221; continue _fun0038 }
case 222:
                var13 = var4.timestampHourCycle;
                var8 = var2.props;
                var8 = var8.timestampHourCycle;
                var15 = var13 !== var8;
case 221:
                if(var15) { _fun0038_ip = 223; continue _fun0038 }
case 224:
                var13 = var4.containerWidth;
                var8 = var2.props;
                var8 = var8.containerWidth;
                var15 = var13 !== var8;
case 223:
                if(var15) { _fun0038_ip = 225; continue _fun0038 }
case 226:
                var13 = var4.guildSystemChannelFlags;
                var8 = var2.props;
                var8 = var8.guildSystemChannelFlags;
                var15 = var13 !== var8;
case 225:
                if(var15) { _fun0038_ip = 227; continue _fun0038 }
case 228:
                var13 = var4.userSettingsLocale;
                var8 = var2.props;
                var8 = var8.userSettingsLocale;
                var15 = var13 !== var8;
case 227:
                if(var15) { _fun0038_ip = 229; continue _fun0038 }
case 230:
                var13 = var4.roleStyle;
                var8 = var2.props;
                var8 = var8.roleStyle;
                var15 = var13 !== var8;
case 229:
                if(var15) { _fun0038_ip = 231; continue _fun0038 }
case 232:
                var13 = var4.canSendMessages;
                var8 = var2.props;
                var8 = var8.canSendMessages;
                var15 = var13 !== var8;
case 231:
                if(var15) { _fun0038_ip = 233; continue _fun0038 }
case 234:
                var13 = var4.showPushFeedback;
                var8 = var2.props;
                var8 = var8.showPushFeedback;
                var15 = var13 !== var8;
case 233:
                if(var15) { _fun0038_ip = 235; continue _fun0038 }
case 236:
                var13 = var4.selectedSummary;
                var8 = var2.props;
                var8 = var8.selectedSummary;
                var15 = var13 !== var8;
case 235:
                if(var15) { _fun0038_ip = 237; continue _fun0038 }
case 238:
                var13 = var4.shouldObscureSpoiler;
                var8 = var2.props;
                var8 = var8.shouldObscureSpoiler;
                var15 = var13 !== var8;
case 237:
                if(var15) { _fun0038_ip = 239; continue _fun0038 }
case 240:
                var13 = var4.explicitMediaFalsePositiveInfo;
                var8 = var2.props;
                var8 = var8.explicitMediaFalsePositiveInfo;
                var15 = var13 !== var8;
case 239:
                if(var15) { _fun0038_ip = 241; continue _fun0038 }
case 242:
                var13 = var4.isStaff;
                var8 = var2.props;
                var8 = var8.isStaff;
                var15 = var13 !== var8;
case 241:
                if(var15) { _fun0038_ip = 243; continue _fun0038 }
case 244:
                var13 = var4.isAgeVerified;
                var8 = var2.props;
                var8 = var8.isAgeVerified;
                var15 = var13 !== var8;
case 243:
                if(var15) { _fun0038_ip = 245; continue _fun0038 }
case 246:
                var8 = arg2;
                var13 = var8.shouldForceRender;
                var8 = var2.state;
                var8 = var8.shouldForceRender;
                var8 = var13 !== var8;
                if(!var8) { _fun0038_ip = 247; continue _fun0038 }
case 248:
                var13 = var2.state;
                var8 = var13.shouldForceRender;
case 247:
                var15 = var8;
case 245:
                if(var15) { _fun0038_ip = 249; continue _fun0038 }
case 250:
                var13 = var4.displayNameStylesEnabled;
                var8 = var2.props;
                var8 = var8.displayNameStylesEnabled;
                var15 = var13 !== var8;
case 249:
                if(var15) { _fun0038_ip = 251; continue _fun0038 }
case 252:
                var13 = var4.officialMessageColor;
                var8 = var2.props;
                var8 = var8.officialMessageColor;
                var15 = var13 !== var8;
case 251:
                var13 = var4.resolvingGiftCodes;
                var8 = var2.props;
                var8 = var8.resolvingGiftCodes;
                var47 = var13 !== var8;
                if(var47) { _fun0038_ip = 253; continue _fun0038 }
case 254:
                var13 = var4.resolvedGiftCodes;
                var8 = var2.props;
                var8 = var8.resolvedGiftCodes;
                var47 = var13 !== var8;
case 253:
                if(var47) { _fun0038_ip = 255; continue _fun0038 }
case 256:
                var13 = var4.acceptingGiftCodes;
                var8 = var2.props;
                var8 = var8.acceptingGiftCodes;
                var47 = var13 !== var8;
case 255:
                var _closure3_slot2 = var47;
                var46 = var4.uploads;
                var8 = var2.props;
                var45 = var8.uploads;
                var13 = _closure1_slot1;
                var8 = _closure1_slot2;
                var17 = 84;
                var8 = var8[var17];
                var19 = var13.bind(var20)(var8);
                var13 = var4.interactionStates;
                var8 = var2.props;
                var8 = var8.interactionStates;
                var8 = var19.bind(var20)(var13, var8);
                var36 = !var8;
                var _closure3_slot3 = var36;
                var13 = var4.channelPolls;
                var8 = var2.props;
                var8 = var8.channelPolls;
                var33 = var13 !== var8;
                var _closure3_slot4 = var33;
                var13 = var4.messageReferencePolls;
                var8 = var2.props;
                var8 = var8.messageReferencePolls;
                var32 = var13 !== var8;
                var _closure3_slot5 = var32;
                var13 = var4.interactionComponentStatesVersion;
                var8 = var2.props;
                var8 = var8.interactionComponentStatesVersion;
                var35 = var13 !== var8;
                var _closure3_slot6 = var35;
                var13 = var4.shouldDisableInteractiveComponents;
                var8 = var2.props;
                var8 = var8.shouldDisableInteractiveComponents;
                var8 = var13 !== var8;
                var _closure3_slot7 = var8;
                var13 = var4.communicationDisabledVersion;
                var8 = var2.props;
                var8 = var8.communicationDisabledVersion;
                var42 = var13 !== var8;
                var _closure3_slot8 = var42;
                var13 = var4.messageAuthorMembers;
                var8 = var2.props;
                var8 = var8.messageAuthorMembers;
                var41 = var13 !== var8;
                var _closure3_slot9 = var41;
                var13 = var4.failedMessagesVersion;
                var8 = var2.props;
                var8 = var8.failedMessagesVersion;
                var40 = var13 !== var8;
                var _closure3_slot10 = var40;
                var13 = var4.renderCommunicationDisabled;
                var8 = var2.props;
                var8 = var8.renderCommunicationDisabled;
                var37 = var13 !== var8;
                var _closure3_slot11 = var37;
                var39 = var4.forwardGuildsVersion;
                var8 = var2.props;
                var38 = var8.forwardGuildsVersion;
                var8 = var2.props;
                var13 = var8.channel;
                var8 = var13.isForumPost;
                var34 = var8.bind(var13)();
                if(!var34) { _fun0038_ip = 257; continue _fun0038 }
case 258:
                var13 = var4.isFollowingForumPost;
                var8 = var2.props;
                var8 = var8.isFollowingForumPost;
                var34 = var13 !== var8;
case 257:
                var _closure3_slot12 = var34;
                var13 = var4.showMediaPostSharePrompt;
                var8 = var2.props;
                var8 = var8.showMediaPostSharePrompt;
                var31 = var13 !== var8;
                var _closure3_slot13 = var31;
                var13 = var4.unloadedContentEntryMessageIds;
                var8 = var2.props;
                var8 = var8.unloadedContentEntryMessageIds;
                var30 = var13 !== var8;
                var _closure3_slot14 = var30;
                var13 = var4.invalidApplicationIds;
                var8 = var2.props;
                var8 = var8.invalidApplicationIds;
                var8 = var13 !== var8;
                var _closure3_slot15 = var8;
                var19 = var4.activityInstanceIds;
                var13 = var2.props;
                var13 = var13.activityInstanceIds;
                var44 = var19 !== var13;
                if(var44) { _fun0038_ip = 259; continue _fun0038 }
case 260:
                var19 = var4.activityParticipants;
                var13 = var2.props;
                var13 = var13.activityParticipants;
                var44 = var19 !== var13;
case 259:
                if(var44) { _fun0038_ip = 261; continue _fun0038 }
case 262:
                var19 = var4.applicationAssetFetchingIds;
                var13 = var2.props;
                var13 = var13.applicationAssetFetchingIds;
                var44 = var19 !== var13;
case 261:
                if(var44) { _fun0038_ip = 263; continue _fun0038 }
case 264:
                var19 = var4.activityInstancePresenceDetails;
                var13 = var2.props;
                var13 = var13.activityInstancePresenceDetails;
                var44 = var19 !== var13;
case 263:
                if(var44) { _fun0038_ip = 265; continue _fun0038 }
case 266:
                var19 = var4.messagesWithActivitiesLaunching;
                var13 = var2.props;
                var13 = var13.messagesWithActivitiesLaunching;
                var44 = var19 !== var13;
case 265:
                if(var44) { _fun0038_ip = 267; continue _fun0038 }
case 268:
                var44 = var8;
case 267:
                var _closure3_slot16 = var44;
                var13 = _closure1_slot0;
                var8 = _closure1_slot2;
                var19 = var8[var17];
                var24 = var13.bind(var20)(var19);
                var23 = var24.areArraysShallowEqual;
                var22 = var4.activityInviteMessageIds;
                var19 = var2.props;
                var19 = var19.activityInviteMessageIds;
                var19 = var23.bind(var24)(var22, var19);
                var29 = !var19;
                var _closure3_slot17 = var29;
                var8 = var8[var17];
                var19 = var13.bind(var20)(var8);
                var17 = var19.areArraysShallowEqual;
                var13 = var4.resolvedReferralTrialOfferIds;
                var8 = var2.props;
                var8 = var8.resolvedReferralTrialOfferIds;
                var8 = var17.bind(var19)(var13, var8);
                var28 = !var8;
                if(var28) { _fun0038_ip = 269; continue _fun0038 }
case 270:
                var13 = var4.referralTrialOfferId;
                var8 = var2.props;
                var8 = var8.referralTrialOfferId;
                var28 = var13 !== var8;
case 269:
                if(var28) { _fun0038_ip = 271; continue _fun0038 }
case 272:
                var13 = var4.isPremiumTier2User;
                var8 = var2.props;
                var8 = var8.isPremiumTier2User;
                var28 = var13 !== var8;
case 271:
                var _closure3_slot18 = var28;
                var13 = var4.guildInviteColorsFetched;
                var8 = var2.props;
                var8 = var8.guildInviteColorsFetched;
                var27 = var13 !== var8;
                var _closure3_slot19 = var27;
                var13 = var4.guildEmojis;
                var8 = var2.props;
                var8 = var8.guildEmojis;
                var26 = var13 !== var8;
                var _closure3_slot20 = var26;
                var13 = var4.selfActivities;
                var8 = var2.props;
                var8 = var8.selfActivities;
                var25 = var13 !== var8;
                var _closure3_slot21 = var25;
                var13 = var4.currentClientVoiceChannelId;
                var8 = var2.props;
                var8 = var8.currentClientVoiceChannelId;
                var43 = var13 !== var8;
                var _closure3_slot22 = var43;
                var13 = var4.voiceStateChannelIdSummaryForGuild;
                var8 = var2.props;
                var8 = var8.voiceStateChannelIdSummaryForGuild;
                var19 = var13 !== var8;
                var _closure3_slot23 = var19;
                var13 = var4.voiceStatePrivateChannelId;
                var8 = var2.props;
                var8 = var8.voiceStatePrivateChannelId;
                var8 = var13 !== var8;
                var17 = var4.activityLaunchJoinStates;
                var13 = var2.props;
                var13 = var13.activityLaunchJoinStates;
                var24 = var17 !== var13;
                var _closure3_slot24 = var24;
                var17 = var4.authorizedAppsTokens;
                var13 = var2.props;
                var13 = var13.authorizedAppsTokens;
                var23 = var17 !== var13;
                var _closure3_slot25 = var23;
                var22 = var4.displayNameStylesEnabled;
                var13 = var2.props;
                var17 = var13.displayNameStylesEnabled;
                var13 = var4.currentUserDisplayNameStyles;
                var49 = var21 == var13;
                var48 = undefined;
                if(var49) { _fun0038_ip = 273; continue _fun0038 }
case 274:
                var48 = var13.fontId;
case 273:
                var13 = var2.props;
                var49 = var13.currentUserDisplayNameStyles;
                var50 = var21 == var49;
                var13 = undefined;
                if(var50) { _fun0038_ip = 275; continue _fun0038 }
case 276:
                var13 = var49.fontId;
case 275:
                var13 = var48 !== var13;
                var _closure3_slot26 = var13;
                if(var15) { _fun0038_ip = 277; continue _fun0038 }
case 278:
                if(var47) { _fun0038_ip = 277; continue _fun0038 }
case 279:
                if(!(var46 === var45)) { _fun0038_ip = 277; continue _fun0038 }
case 280:
                if(var44) { _fun0038_ip = 277; continue _fun0038 }
case 281:
                var45 = var4.messages;
                var44 = var2.props;
                var44 = var44.messages;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 282:
                var45 = var4.editingMessageId;
                var44 = var2.props;
                var44 = var44.editingMessageId;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 283:
                var45 = var4.replyingMessageId;
                var44 = var2.props;
                var44 = var44.replyingMessageId;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 284:
                if(var8) { _fun0038_ip = 277; continue _fun0038 }
case 285:
                var45 = var4.messageAuthorActivities;
                var44 = var2.props;
                var44 = var44.messageAuthorActivities;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 286:
                var45 = var4.oldestUnreadMessageId;
                var44 = var2.props;
                var44 = var44.oldestUnreadMessageId;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 287:
                var45 = var4.invites;
                var44 = var2.props;
                var44 = var44.invites;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 288:
                var45 = var4.appDirectoryEmbedApplications;
                var44 = var2.props;
                var44 = var44.appDirectoryEmbedApplications;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 289:
                var45 = var4.invalidAppDirectoryEmbedApplicationIds;
                var44 = var2.props;
                var44 = var44.invalidAppDirectoryEmbedApplicationIds;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 290:
                var45 = var4.appDirectoryEmbedApplicationFetchStates;
                var44 = var2.props;
                var44 = var44.appDirectoryEmbedApplicationFetchStates;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 291:
                var45 = var4.guildTemplates;
                var44 = var2.props;
                var44 = var44.guildTemplates;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 292:
                var45 = var4.buildOverrides;
                var44 = var2.props;
                var44 = var44.buildOverrides;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 293:
                var45 = var4.experimentEmbeds;
                var44 = var2.props;
                var44 = var44.experimentEmbeds;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 294:
                var45 = var4.quests;
                var44 = var2.props;
                var44 = var44.quests;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 295:
                var45 = var4.isFetchingCurrentQuests;
                var44 = var2.props;
                var44 = var44.isFetchingCurrentQuests;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 296:
                var45 = var4.participantsLength;
                var44 = var2.props;
                var44 = var44.participantsLength;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 297:
                var45 = var4.isMessagesReady;
                var44 = var2.props;
                var44 = var44.isMessagesReady;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 298:
                var45 = var4.channelThreadsVersion;
                var44 = var2.props;
                var44 = var44.channelThreadsVersion;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 299:
                var45 = var4.rsvpVersion;
                var44 = var2.props;
                var44 = var44.rsvpVersion;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 300:
                var45 = var4.repliedIds;
                var44 = var2.props;
                var44 = var44.repliedIds;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 301:
                var45 = var4.hasLoadedExperiments;
                var44 = var2.props;
                var44 = var44.hasLoadedExperiments;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 302:
                var45 = var4.isMessageRequest;
                var44 = var2.props;
                var44 = var44.isMessageRequest;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 303:
                var45 = var4.isSpamMessageRequest;
                var44 = var2.props;
                var44 = var44.isSpamMessageRequest;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 304:
                var45 = var4.currentUserCommunicationDisabled;
                var44 = var2.props;
                var44 = var44.currentUserCommunicationDisabled;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 305:
                var45 = var4.userSettingsLocale;
                var44 = var2.props;
                var44 = var44.userSettingsLocale;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 306:
                var45 = var4.selectedSummary;
                var44 = var2.props;
                var44 = var44.selectedSummary;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 307:
                var45 = var4.showPushFeedback;
                var44 = var2.props;
                var44 = var44.showPushFeedback;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 308:
                var45 = var4.cacheStoreLoaded;
                var44 = var2.props;
                var44 = var44.cacheStoreLoaded;
                if(!(var45 === var44)) { _fun0038_ip = 277; continue _fun0038 }
case 309:
                if(var43) { _fun0038_ip = 277; continue _fun0038 }
case 310:
                if(var42) { _fun0038_ip = 277; continue _fun0038 }
case 311:
                if(var41) { _fun0038_ip = 277; continue _fun0038 }
case 312:
                if(var40) { _fun0038_ip = 277; continue _fun0038 }
case 313:
                if(!(var39 === var38)) { _fun0038_ip = 277; continue _fun0038 }
case 314:
                if(var37) { _fun0038_ip = 277; continue _fun0038 }
case 315:
                if(var36) { _fun0038_ip = 277; continue _fun0038 }
case 316:
                if(var35) { _fun0038_ip = 277; continue _fun0038 }
case 317:
                if(var34) { _fun0038_ip = 277; continue _fun0038 }
case 318:
                if(!(var21 == var11)) { _fun0038_ip = 277; continue _fun0038 }
case 319:
                if(!(var21 == var9)) { _fun0038_ip = 277; continue _fun0038 }
case 320:
                var35 = var4.androidKeyboardHeight;
                var34 = var2.props;
                var34 = var34.androidKeyboardHeight;
                if(!(var35 === var34)) { _fun0038_ip = 277; continue _fun0038 }
case 321:
                var35 = var4.mediaPostPreviewEmbeds;
                var34 = var2.props;
                var34 = var34.mediaPostPreviewEmbeds;
                if(!(var35 === var34)) { _fun0038_ip = 277; continue _fun0038 }
case 322:
                var35 = var4.shouldObscureSpoiler;
                var34 = var2.props;
                var34 = var34.shouldObscureSpoiler;
                if(!(var35 === var34)) { _fun0038_ip = 277; continue _fun0038 }
case 323:
                var35 = var4.shouldDisableInteractiveComponents;
                var34 = var2.props;
                var34 = var34.shouldDisableInteractiveComponents;
                if(!(var35 === var34)) { _fun0038_ip = 277; continue _fun0038 }
case 324:
                if(var33) { _fun0038_ip = 277; continue _fun0038 }
case 325:
                if(var32) { _fun0038_ip = 277; continue _fun0038 }
case 326:
                if(var31) { _fun0038_ip = 277; continue _fun0038 }
case 327:
                var32 = var4.threadStartingReferenceMessage;
                var31 = var2.props;
                var31 = var31.threadStartingReferenceMessage;
                if(!(var32 === var31)) { _fun0038_ip = 277; continue _fun0038 }
case 328:
                if(var30) { _fun0038_ip = 277; continue _fun0038 }
case 329:
                if(var29) { _fun0038_ip = 277; continue _fun0038 }
case 330:
                if(var28) { _fun0038_ip = 277; continue _fun0038 }
case 331:
                if(var27) { _fun0038_ip = 277; continue _fun0038 }
case 332:
                if(var26) { _fun0038_ip = 277; continue _fun0038 }
case 333:
                if(var25) { _fun0038_ip = 277; continue _fun0038 }
case 334:
                if(var24) { _fun0038_ip = 277; continue _fun0038 }
case 335:
                if(var23) { _fun0038_ip = 277; continue _fun0038 }
case 336:
                if(!(var22 === var17)) { _fun0038_ip = 277; continue _fun0038 }
case 337:
                if(var13) { _fun0038_ip = 277; continue _fun0038 }
case 338:
                if(var19) { _fun0038_ip = 277; continue _fun0038 }
case 339:
                var13 = var2.recordTimings;
                var13 = var13.bind(var2)();
                _fun0038_ip = 198; continue _fun0038;
case 277:
                var13 = global;
                var13 = var13.Set;
                var17 = var13.prototype;
                var17 = Object.create(var17, {constructor: {value: var13}});
                var54 = var17;
                var13 = new var54[var13](var53);
                var13 = var13 instanceof Object ? var13 : var17;
                var _closure3_slot27 = var13;
                var22 = var4.editingMessageId;
                var17 = var2.props;
                var17 = var17.editingMessageId;
                if(!(var22 !== var17)) { _fun0038_ip = 340; continue _fun0038 }
case 341:
                var17 = var2.props;
                var17 = var17.editingMessageId;
                if(!(var21 != var17)) { _fun0038_ip = 342; continue _fun0038 }
case 343:
                var22 = var13.add;
                var17 = var2.props;
                var17 = var17.editingMessageId;
                var17 = var22.bind(var13)(var17);
case 342:
                var17 = var4.editingMessageId;
                if(!(var21 != var17)) { _fun0038_ip = 340; continue _fun0038 }
case 344:
                var22 = var13.add;
                var17 = var4.editingMessageId;
                var17 = var22.bind(var13)(var17);
case 340:
                var22 = var4.replyingMessageId;
                var17 = var2.props;
                var17 = var17.replyingMessageId;
                if(!(var22 !== var17)) { _fun0038_ip = 345; continue _fun0038 }
case 346:
                var17 = var2.props;
                var17 = var17.replyingMessageId;
                if(!(var21 != var17)) { _fun0038_ip = 347; continue _fun0038 }
case 348:
                var22 = var13.add;
                var17 = var2.props;
                var17 = var17.replyingMessageId;
                var17 = var22.bind(var13)(var17);
case 347:
                var17 = var4.replyingMessageId;
                if(!(var21 != var17)) { _fun0038_ip = 345; continue _fun0038 }
case 349:
                var22 = var13.add;
                var17 = var4.replyingMessageId;
                var17 = var22.bind(var13)(var17);
case 345:
                var22 = var4.isMessagesReady;
                var17 = var2.props;
                var17 = var17.isMessagesReady;
                if(!(var22 === var17)) { _fun0038_ip = 350; continue _fun0038 }
case 351:
                var22 = var4.isCallActive;
                var17 = var2.props;
                var17 = var17.isCallActive;
                if(!(var22 === var17)) { _fun0038_ip = 350; continue _fun0038 }
case 352:
                if(var8) { _fun0038_ip = 350; continue _fun0038 }
case 353:
                var17 = var4.participantsLength;
                var8 = var2.props;
                var8 = var8.participantsLength;
                if(!(var17 !== var8)) { _fun0038_ip = 354; continue _fun0038 }
case 350:
                var17 = _closure1_slot1;
                var22 = _closure1_slot2;
                var8 = 68;
                var8 = var22[var8];
                var23 = var17.bind(var20)(var8);
                var22 = var23.find;
                var8 = var2.props;
                var17 = var8.messages;
                var8 = var17.toArray;
                var17 = var8.bind(var17)();
                var8 = var17.reverse;
                var17 = var8.bind(var17)();
                var8 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = _closure1_slot68;
                    var1 = var1.CALL;
                    var1 = var2 === var1;
                    return var1;
                };
                var8 = var22.bind(var23)(var17, var8);
                if(!(var21 != var8)) { _fun0038_ip = 354; continue _fun0038 }
case 355:
                var17 = var13.add;
                var8 = var8.id;
                var8 = var17.bind(var13)(var8);
case 354:
                var17 = var4.channelThreadsVersion;
                var8 = var2.props;
                var8 = var8.channelThreadsVersion;
                var8 = var17 !== var8;
                var _closure3_slot28 = var8;
                var17 = var4.rsvpVersion;
                var8 = var2.props;
                var8 = var8.rsvpVersion;
                var8 = var17 !== var8;
                var _closure3_slot29 = var8;
                var17 = var4.repliedIds;
                var8 = var2.props;
                var8 = var8.repliedIds;
                var8 = var17 !== var8;
                var _closure3_slot30 = var8;
                var17 = var4.hasLoadedExperiments;
                var8 = var2.props;
                var8 = var8.hasLoadedExperiments;
                var8 = var17 !== var8;
                var _closure3_slot31 = var8;
                var17 = var4.communicationDisabledVersion;
                var22 = var21 != var17;
                var8 = -1;
                if(!var22) { _fun0038_ip = 356; continue _fun0038 }
case 357:
                var8 = var17;
case 356:
                var _closure3_slot32 = var8;
                var8 = var4.cacheStoreLoaded;
                var8 = !var8;
                if(!var8) { _fun0038_ip = 358; continue _fun0038 }
case 359:
                var17 = var2.props;
                var8 = var17.cacheStoreLoaded;
case 358:
                var _closure3_slot33 = var8;
                var17 = null;
                if(!var19) { _fun0038_ip = 360; continue _fun0038 }
case 361:
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var18 = 66;
                var18 = var22[var18];
                var20 = var19.bind(var20)(var18);
                var19 = var20.getVoiceChannelIdChangedAuthorIds;
                var22 = var4.voiceStateChannelIdSummaryForGuild;
                var23 = var21 != var22;
                var18 = null;
                if(!var23) { _fun0038_ip = 362; continue _fun0038 }
case 363:
                var18 = var22;
case 362:
                var22 = var2.props;
                var22 = var22.voiceStateChannelIdSummaryForGuild;
                var23 = var21 != var22;
                var21 = null;
                if(!var23) { _fun0038_ip = 364; continue _fun0038 }
case 365:
                var21 = var22;
case 364:
                var17 = var19.bind(var20)(var18, var21);
case 360:
                var _closure3_slot34 = var17;
                var17 = var2.props;
                var18 = var17.messages;
                var17 = var18.forEach;
                var16 = function(arg1) {
                    _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                        var1 = arg1;
                        var3 = _closure3_slot23;
                        if(!var3) { _fun0039_ip = 366; continue _fun0039 }
case 141:
                        var3 = _closure3_slot34;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0039_ip = 366; continue _fun0039 }
case 31:
                        var3 = var1.author;
                        if(!(var4 != var3)) { _fun0039_ip = 366; continue _fun0039 }
case 33:
                        var5 = _closure3_slot34;
                        var4 = var5.has;
                        var3 = var1.author;
                        var3 = var3.id;
                        var3 = var4.bind(var5)(var3);
                        if(var3) { _fun0039_ip = 367; continue _fun0039 }
case 366:
                        var3 = _closure3_slot22;
                        if(!var3) { _fun0039_ip = 161; continue _fun0039 }
case 368:
                        var3 = var1.activity;
                        var4 = null;
                        var5 = var4 == var3;
                        var4 = undefined;
                        if(var5) { _fun0039_ip = 151; continue _fun0039 }
case 124:
                        var4 = var3.type;
case 151:
                        var3 = _closure1_slot63;
                        var3 = var3.STREAM_REQUEST;
                        if(!(var4 !== var3)) { _fun0039_ip = 369; continue _fun0039 }
case 161:
                        var3 = _closure3_slot31;
                        if(!var3) { _fun0039_ip = 128; continue _fun0039 }
case 41:
                        var4 = var1.type;
                        var3 = _closure1_slot68;
                        var3 = var3.USER_JOIN;
                        if(!(var4 !== var3)) { _fun0039_ip = 288; continue _fun0039 }
case 128:
                        var3 = _closure3_slot30;
                        if(!var3) { _fun0039_ip = 370; continue _fun0039 }
case 371:
                        var4 = var1.type;
                        var3 = _closure1_slot68;
                        var3 = var3.REPLY;
                        if(!(var4 === var3)) { _fun0039_ip = 370; continue _fun0039 }
case 372:
                        var3 = var1.messageReference;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0039_ip = 370; continue _fun0039 }
case 156:
                        var4 = _closure3_slot0;
                        var4 = var4.props;
                        var5 = var4.repliedIds;
                        var4 = var5.has;
                        var3 = var3.message_id;
                        var3 = var4.bind(var5)(var3);
                        if(var3) { _fun0039_ip = 373; continue _fun0039 }
case 370:
                        var3 = _closure3_slot28;
                        if(!var3) { _fun0039_ip = 52; continue _fun0039 }
case 374:
                        var4 = var1.hasFlag;
                        var3 = _closure1_slot67;
                        var3 = var3.HAS_THREAD;
                        var3 = var4.bind(var1)(var3);
                        if(var3) { _fun0039_ip = 375; continue _fun0039 }
case 52:
                        var3 = _closure3_slot29;
                        if(!var3) { _fun0039_ip = 188; continue _fun0039 }
case 376:
                        var3 = var1.codedLinks;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(!(var4 > var3))) { _fun0039_ip = 377; continue _fun0039 }
case 188:
                        var3 = _closure3_slot20;
                        if(!var3) { _fun0039_ip = 378; continue _fun0039 }
case 379:
                        var4 = var1.type;
                        var3 = _closure1_slot68;
                        var3 = var3.EMOJI_ADDED;
                        if(!(var4 !== var3)) { _fun0039_ip = 380; continue _fun0039 }
case 378:
                        var3 = _closure3_slot11;
                        if(var3) { _fun0039_ip = 381; continue _fun0039 }
case 382:
                        var3 = _closure3_slot8;
                        if(!var3) { _fun0039_ip = 383; continue _fun0039 }
case 185:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var4 = var3.guildId;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0039_ip = 383; continue _fun0039 }
case 384:
                        var6 = _closure1_slot48;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var5 = var3.guildId;
                        var3 = var1.author;
                        var4 = var3.id;
                        var3 = undefined;
                        var4 = var6.bind(var3)(var5, var4);
                        var3 = _closure3_slot32;
                        if(!(!(var4 > var3))) { _fun0039_ip = 381; continue _fun0039 }
case 383:
                        var3 = _closure3_slot9;
                        if(!var3) { _fun0039_ip = 385; continue _fun0039 }
case 386:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.guildId;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0039_ip = 385; continue _fun0039 }
case 387:
                        var5 = var1.author;
                        var6 = var4 == var5;
                        var3 = undefined;
                        if(var6) { _fun0039_ip = 388; continue _fun0039 }
case 389:
                        var3 = var5.id;
case 388:
                        if(!(var4 == var3)) { _fun0039_ip = 390; continue _fun0039 }
case 385:
                        var3 = _closure3_slot10;
                        if(!var3) { _fun0039_ip = 105; continue _fun0039 }
case 391:
                        var3 = var1.author;
                        var4 = var3.id;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.currentUserId;
                        if(!(var4 !== var3)) { _fun0039_ip = 392; continue _fun0039 }
case 105:
                        var3 = _closure3_slot3;
                        if(!var3) { _fun0039_ip = 393; continue _fun0039 }
case 394:
                        var3 = _closure3_slot1;
                        var4 = var3.interactionStates;
                        var3 = var1.id;
                        var4 = var4[var3];
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var5 = var3.interactionStates;
                        var3 = var1.id;
                        var3 = var5[var3];
                        if(!(var4 === var3)) { _fun0039_ip = 395; continue _fun0039 }
case 393:
                        var3 = _closure3_slot6;
                        if(!var3) { _fun0039_ip = 396; continue _fun0039 }
case 218:
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
                        if(!(var4 === var3)) { _fun0039_ip = 397; continue _fun0039 }
case 396:
                        var3 = _closure3_slot7;
                        if(!var3) { _fun0039_ip = 98; continue _fun0039 }
case 221:
                        var3 = var1.components;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(var3 === var4)) { _fun0039_ip = 398; continue _fun0039 }
case 98:
                        var3 = _closure3_slot4;
                        if(!var3) { _fun0039_ip = 399; continue _fun0039 }
case 226:
                        var3 = _closure3_slot1;
                        var4 = var3.channelPolls;
                        var3 = var1.id;
                        var4 = var4[var3];
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var5 = var3.channelPolls;
                        var3 = var1.id;
                        var3 = var5[var3];
                        if(!(var4 === var3)) { _fun0039_ip = 400; continue _fun0039 }
case 399:
                        var3 = _closure3_slot5;
                        if(!var3) { _fun0039_ip = 112; continue _fun0039 }
case 401:
                        var4 = var1.messageReference;
                        var3 = null;
                        var6 = var3 == var4;
                        var5 = undefined;
                        if(var6) { _fun0039_ip = 402; continue _fun0039 }
case 403:
                        var5 = var4.message_id;
case 402:
                        if(!(var3 != var5)) { _fun0039_ip = 112; continue _fun0039 }
case 404:
                        var3 = _closure3_slot1;
                        var3 = var3.messageReferencePolls;
                        var4 = var3[var5];
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.messageReferencePolls;
                        var3 = var3[var5];
                        if(!(var4 === var3)) { _fun0039_ip = 405; continue _fun0039 }
case 112:
                        var3 = _closure3_slot14;
                        if(!var3) { _fun0039_ip = 406; continue _fun0039 }
case 407:
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
                        if(!(var4 === var3)) { _fun0039_ip = 408; continue _fun0039 }
case 406:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var4 = var3.channel;
                        var3 = var4.isForumPost;
                        var3 = var3.bind(var4)();
                        if(!var3) { _fun0039_ip = 409; continue _fun0039 }
case 410:
                        var3 = _closure3_slot12;
                        if(var3) { _fun0039_ip = 411; continue _fun0039 }
case 412:
                        var3 = _closure3_slot13;
                        if(!var3) { _fun0039_ip = 409; continue _fun0039 }
case 411:
                        var4 = var1.id;
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 69;
                        var5 = var5[var3];
                        var3 = undefined;
                        var6 = var6.bind(var3)(var5);
                        var5 = var6.castChannelIdAsMessageId;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.channelId;
                        var3 = var5.bind(var6)(var3);
                        if(!(var4 !== var3)) { _fun0039_ip = 413; continue _fun0039 }
case 409:
                        var3 = _closure3_slot16;
                        if(!var3) { _fun0039_ip = 414; continue _fun0039 }
case 415:
                        var4 = var1.activityInstance;
                        var3 = null;
                        if(!(var3 == var4)) { _fun0039_ip = 416; continue _fun0039 }
case 414:
                        var3 = _closure3_slot17;
                        if(!var3) { _fun0039_ip = 417; continue _fun0039 }
case 418:
                        var6 = var1.activity;
                        var5 = null;
                        var7 = var5 == var6;
                        var4 = undefined;
                        if(var7) { _fun0039_ip = 419; continue _fun0039 }
case 420:
                        var4 = var6.party_id;
case 419:
                        var3 = var5 != var4;
case 417:
                        if(!var3) { _fun0039_ip = 253; continue _fun0039 }
case 421:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
case 253:
                        var3 = _closure3_slot25;
                        if(!var3) { _fun0039_ip = 422; continue _fun0039 }
case 423:
                        var4 = var1.application;
                        var3 = null;
                        if(!(var3 == var4)) { _fun0039_ip = 424; continue _fun0039 }
case 422:
                        var3 = _closure3_slot26;
                        if(!var3) { _fun0039_ip = 425; continue _fun0039 }
case 426:
                        var3 = var1.author;
                        var4 = null;
                        var5 = var4 == var3;
                        var4 = undefined;
                        if(var5) { _fun0039_ip = 427; continue _fun0039 }
case 428:
                        var4 = var3.id;
case 427:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.currentUserId;
                        if(!(var4 !== var3)) { _fun0039_ip = 429; continue _fun0039 }
case 425:
                        var3 = var1.author;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0039_ip = 430; continue _fun0039 }
case 431:
                        var7 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var8 = 87;
                        var6 = var3[var8];
                        var3 = undefined;
                        var10 = var7.bind(var3)(var6);
                        var9 = var10.messageAuthorActivitiesChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var9.bind(var10)(var1, var7, var6);
                        if(var6) { _fun0039_ip = 432; continue _fun0039 }
case 433:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var10 = var7.bind(var3)(var6);
                        var9 = var10.codedLinksChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var9.bind(var10)(var1, var7, var6);
                        if(var6) { _fun0039_ip = 432; continue _fun0039 }
case 434:
                        var6 = _closure3_slot2;
                        if(!var6) { _fun0039_ip = 435; continue _fun0039 }
case 436:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var10 = var7.bind(var3)(var6);
                        var9 = var10.giftCodesChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var9.bind(var10)(var1, var7, var6);
                        if(var6) { _fun0039_ip = 432; continue _fun0039 }
case 435:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var9 = var7.bind(var3)(var6);
                        var8 = var9.mediaPostPreviewEmbedsChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var8.bind(var9)(var1, var7, var6);
                        if(var6) { _fun0039_ip = 432; continue _fun0039 }
case 437:
                        var6 = _closure3_slot33;
                        if(!var6) { _fun0039_ip = 438; continue _fun0039 }
case 439:
                        var7 = var1.embeds;
                        var8 = var7.length;
                        var7 = 0;
                        var6 = var8 > var7;
case 438:
                        if(!var6) { _fun0039_ip = 440; continue _fun0039 }
case 441:
                        var8 = _closure3_slot27;
                        var7 = var8.add;
                        var6 = var1.id;
                        var6 = var7.bind(var8)(var6);
case 440:
                        var6 = var1.type;
                        var5 = _closure1_slot68;
                        var5 = var5.THREAD_STARTER_MESSAGE;
                        var5 = var6 === var5;
                        if(!var5) { _fun0039_ip = 442; continue _fun0039 }
case 443:
                        var6 = _closure3_slot1;
                        var7 = var6.threadStartingReferenceMessage;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var6.threadStartingReferenceMessage;
                        var5 = var7 !== var6;
case 442:
                        if(!var5) { _fun0039_ip = 444; continue _fun0039 }
case 445:
                        var7 = _closure3_slot27;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
case 444:
                        var5 = _closure3_slot15;
                        if(!var5) { _fun0039_ip = 446; continue _fun0039 }
case 447:
                        var6 = var1.applicationId;
                        var5 = var4 != var6;
case 446:
                        if(!var5) { _fun0039_ip = 448; continue _fun0039 }
case 449:
                        var6 = _closure3_slot1;
                        var8 = var6.invalidApplicationIds;
                        var7 = var8.includes;
                        var6 = var1.applicationId;
                        var5 = var7.bind(var8)(var6);
case 448:
                        if(!var5) { _fun0039_ip = 262; continue _fun0039 }
case 450:
                        var7 = _closure3_slot27;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
case 262:
                        var5 = _closure3_slot18;
                        if(!var5) { _fun0039_ip = 451; continue _fun0039 }
case 452:
                        var8 = var1.referralTrialOfferId;
                        var5 = var4 != var8;
                        if(!var5) { _fun0039_ip = 263; continue _fun0039 }
case 453:
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var7 = var6.resolvedReferralTrialOfferIds;
                        var6 = var7.includes;
                        var5 = var6.bind(var7)(var8);
case 263:
                        if(!var5) { _fun0039_ip = 451; continue _fun0039 }
case 266:
                        var7 = _closure3_slot27;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
case 451:
                        var5 = _closure3_slot19;
                        if(!var5) { _fun0039_ip = 454; continue _fun0039 }
case 455:
                        var6 = var1.codedLinks;
                        var7 = var6.length;
                        var6 = 0;
                        var5 = var7 > var6;
case 454:
                        if(!var5) { _fun0039_ip = 456; continue _fun0039 }
case 457:
                        var7 = _closure3_slot27;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
case 456:
                        var5 = _closure3_slot21;
                        if(var5) { _fun0039_ip = 458; continue _fun0039 }
case 459:
                        var5 = _closure3_slot24;
                        if(!var5) { _fun0039_ip = 430; continue _fun0039 }
case 458:
                        var5 = var1.activity;
                        var6 = var4 == var5;
                        var3 = undefined;
                        if(var6) { _fun0039_ip = 460; continue _fun0039 }
case 461:
                        var3 = var5.party_id;
case 460:
                        if(!(var4 != var3)) { _fun0039_ip = 430; continue _fun0039 }
case 462:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 430; continue _fun0039;
case 432:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 430; continue _fun0039;
case 429:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 430; continue _fun0039;
case 424:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 430; continue _fun0039;
case 416:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 430; continue _fun0039;
case 413:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 430; continue _fun0039;
case 408:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 430; continue _fun0039;
case 405:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        var3 = undefined;
                        return var3;
case 400:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 430; continue _fun0039;
case 398:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 430; continue _fun0039;
case 397:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 430; continue _fun0039;
case 395:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 430; continue _fun0039;
case 392:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 430; continue _fun0039;
case 390:
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
                        if(!(var4 !== var3)) { _fun0039_ip = 430; continue _fun0039 }
case 463:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 430; continue _fun0039;
case 381:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 430; continue _fun0039;
case 380:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 430; continue _fun0039;
case 377:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 430; continue _fun0039;
case 375:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 430; continue _fun0039;
case 373:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        var3 = undefined;
                        return var3;
case 288:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 430; continue _fun0039;
case 369:
                        var5 = _closure3_slot27;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0039_ip = 430; continue _fun0039;
case 367:
                        var3 = _closure3_slot27;
                        var2 = var3.add;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
case 430:
                        var1 = undefined;
                        return var1;
                    }
                };
                var16 = var17.bind(var18)(var16);
                var16 = var4.channelId;
                var4 = var2.props;
                var4 = var4.channelId;
                var4 = var16 !== var4;
                if(var4) { _fun0038_ip = 464; continue _fun0038 }
case 465:
                var3 = var3.suppressRowAnimationSequenceId;
                var1 = var1.suppressRowAnimationSequenceId;
                var4 = var3 === var1;
case 464:
                var3 = var2.updateRows;
                var1 = {};
                var1['forceRender'] = var15;
                var1['forceReload'] = var14;
                var1['updateMessageIds'] = var13;
                var1['scrollToMessageId'] = var12;
                var1['jumpTargetId'] = var11;
                var1['jumpType'] = var10;
                var1['focusTargetId'] = var9;
                var1['ignoreEmbedDescriptionCache'] = var8;
                var1['messagesNewlyLoaded'] = var7;
                var1['shouldInitialScroll'] = var6;
                var1['minimizeScrolling'] = var5;
                var1['isAnimated'] = var4;
                var1 = var3.bind(var2)(var1);
                var3 = var2.setState;
                var1 = {};
                var4 = false;
                var1['shouldForceRender'] = var4;
                var1 = var3.bind(var2)(var1);
                var1 = var2.recordTimings;
                var1 = var1.bind(var2)();
case 198:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'handleScrollCallbacks';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var11 = var3.eventTimestamp;
                var2 = var3.isAtBottom;
                var12 = var3.isNearBottom;
                var4 = undefined;
                if(!(var12 === var4)) { _fun0040_ip = 466; continue _fun0040 }
case 3:
                var12 = false;
case 466:
                var13 = var3.isNearTop;
                if(!(var13 === var4)) { _fun0040_ip = 467; continue _fun0040 }
case 66:
                var13 = false;
case 467:
                var14 = var3.dragging;
                if(!(var14 === var4)) { _fun0040_ip = 28; continue _fun0040 }
case 468:
                var14 = false;
case 28:
                var16 = var3.decelerating;
                if(!(var16 === var4)) { _fun0040_ip = 164; continue _fun0040 }
case 49:
                var16 = false;
case 164:
                var5 = var3.isFirstMessageVisible;
                if(!(var5 === var4)) { _fun0040_ip = 469; continue _fun0040 }
case 121:
                var5 = false;
case 469:
                var3 = var1.props;
                var9 = var3.messages;
                var6 = var3.channel;
                var3 = var3.onScroll;
                var7 = null;
                if(!(var7 != var6)) { _fun0040_ip = 470; continue _fun0040 }
case 471:
                var7 = var9.length;
                var10 = 0;
                if(!(var10 === var7)) { _fun0040_ip = 195; continue _fun0040 }
case 46:
                var7 = var9.loadingMore;
                if(var7) { _fun0040_ip = 470; continue _fun0040 }
case 195:
                var15 = _closure1_slot0;
                var17 = _closure1_slot2;
                var8 = 88;
                var8 = var17[var8];
                var15 = var15.bind(var4)(var8);
                var8 = var15.getIsScreenReaderEnabled;
                var15 = var8.bind(var15)();
                var8 = var9.loadingMore;
                var8 = !var8;
                if(!var8) { _fun0040_ip = 84; continue _fun0040 }
case 16:
                if(var14) { _fun0040_ip = 472; continue _fun0040 }
case 82:
                var14 = var16;
case 472:
                if(var14) { _fun0040_ip = 473; continue _fun0040 }
case 474:
                var14 = var15;
case 473:
                var8 = var14;
case 84:
                if(!var8) { _fun0040_ip = 475; continue _fun0040 }
case 203:
                var14 = var1.pendingUpdatesQueue;
                var14 = var14.length;
                var8 = var10 === var14;
case 475:
                var14 = var1.isNearTop;
                if(var14) { _fun0040_ip = 476; continue _fun0040 }
case 477:
                if(!var13) { _fun0040_ip = 476; continue _fun0040 }
case 88:
                var13 = var9.hasMoreBefore;
                if(!var13) { _fun0040_ip = 476; continue _fun0040 }
case 478:
                if(!var8) { _fun0040_ip = 476; continue _fun0040 }
case 479:
                var13 = var1.loadMoreBefore;
                var13 = var13.bind(var1)();
                _fun0040_ip = 480; continue _fun0040;
case 476:
                var13 = var1.isNearBottom;
                if(var13) { _fun0040_ip = 188; continue _fun0040 }
case 52:
                if(!var12) { _fun0040_ip = 188; continue _fun0040 }
case 481:
                var9 = var9.hasMoreAfter;
                if(!var9) { _fun0040_ip = 188; continue _fun0040 }
case 482:
                if(!var8) { _fun0040_ip = 188; continue _fun0040 }
case 483:
                var8 = var1.loadMoreAfter;
                var8 = var8.bind(var1)();
                _fun0040_ip = 480; continue _fun0040;
case 188:
                var8 = var1.isAtBottom;
                var8 = var8 === var2;
                if(!var8) { _fun0040_ip = 484; continue _fun0040 }
case 135:
                var8 = var1.hasHandledScroll;
case 484:
                if(var8) { _fun0040_ip = 480; continue _fun0040 }
case 485:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 85;
                var7 = var9[var7];
                var9 = var8.bind(var4)(var7);
                var8 = var9.updateChannelDimensions;
                var7 = var6.id;
                var6 = 0;
                if(!var2) { _fun0040_ip = 486; continue _fun0040 }
case 6:
                var6 = 1;
case 486:
                var19 = 1;
                var23 = var9;
                var22 = var7;
                var21 = var11;
                var20 = var6;
                var18 = 0;
                var2 = var23[var8](var22, var21, var20, var19, var18, var17);
                var2 = true;
                var1['hasHandledScroll'] = var2;
case 480:
                var2 = {};
                var2['isFirstMessageVisible'] = var5;
                var2 = var3.bind(var4)(var2);
                var2 = var1._chatUpdatesQueue;
                var1 = var2.tryFlush;
                var1 = var1.bind(var2)();
                var1 = true;
                return var1;
case 470:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'handleVisibleMessagesChange';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
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
                var1 = 66;
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
                if(!(!(var5 <= var4))) { _fun0041_ip = 25; continue _fun0041 }
case 487:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 89;
                var3 = var5[var3];
                var8 = var4.bind(var1)(var3);
                var6 = var8.questsVisibleMobileMessagesChanged;
                var3 = {};
                var3['visibleMessages'] = var7;
                var3['source'] = var9;
                var3 = var6.bind(var8)(var3);
                var3 = 90;
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
        var1[6] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            var9 = this;
            var1 = var9.props;
            var13 = var1.animateEmoji;
            var14 = var1.onPressKey;
            var16 = var1.style;
            var12 = var1.children;
            var11 = var1.HACK_fixModalInteraction;
            var15 = var1.alwaysRespectKeyboard;
            var4 = _closure1_slot74;
            var3 = _closure1_slot73;
            var2 = {};
            var8 = _closure1_slot72;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 91;
            var5 = var10[var1];
            var1 = undefined;
            var7 = var7.bind(var1)(var5);
            var5 = {};
            var17 = var9._chatRef;
            var5['ref'] = var17;
            var5['style'] = var16;
            var16 = true;
            var5['inverted'] = var16;
            var5['alwaysRespectKeyboard'] = var15;
            var15 = var9.handleScrollPosition;
            var5['onChatScrollPosition'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapImage;
            var5['onTapImage'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapChannel;
            var5['onTapChannel'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleLongPressChannel;
            var5['onLongPressChannel'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapAttachmentLink;
            var5['onTapAttachmentLink'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleLongPressAttachmentLink;
            var5['onLongPressAttachmentLink'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapCall;
            var5['onTapCall'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapMention;
            var5['onTapMention'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapCommandMention;
            var5['onTapCommandMention'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleLongPressCommandMention;
            var5['onLongPressCommandMention'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapLink;
            var5['onTapLink'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleLongPressLink;
            var5['onLongPressLink'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapReaction;
            var5['onTapReaction'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleLongPressReaction;
            var5['onLongPressReaction'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapAvatar;
            var5['onTapAvatar'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapUsername;
            var5['onTapUsername'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleLongPressUsername;
            var5['onLongPressUsername'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleOpenSticker;
            var5['onTapSticker'] = var15;
            var15 = var9.handleLongPressSticker;
            var5['onLongPressSticker'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleLongPressMessage;
            var5['onLongPressMessage'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleInitiateReply;
            var5['onInitiateReply'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleInitiateEdit;
            var5['onInitiateEdit'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleInitiateThread;
            var5['onInitiateThread'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapMessage;
            var5['onTapMessage'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleDoubleTapMessage;
            var5['onDoubleTapMessage'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapSeparator;
            var5['onTapSeparator'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapInviteEmbed;
            var5['onTapInviteEmbed'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapInviteEmbedAccept;
            var5['onTapInviteEmbedAccept'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapJoinActivity;
            var5['onTapJoinActivity'] = var15;
            var15 = var9.handlers;
            var15 = var15.handleTapJoinRichPresence;
            var5['onTapJoinRichPresence'] = var15;
            var5['onPressKey'] = var14;
            var5['animateEmoji'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapGiftCodeEmbed;
            var5['onTapGiftCodeEmbed'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapCancelUploadItem;
            var5['onTapCancelUploadItem'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapReply;
            var5['onTapMessageReply'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapSummary;
            var5['onTapSummary'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapSummaryJump;
            var5['onTapSummaryJump'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapGiftCodeAccept;
            var5['onTapGiftCodeAccept'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapReferralRedeem;
            var5['onTapReferralRedeem'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapThreadEmbed;
            var5['onTapThreadEmbed'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapEmoji;
            var5['onTapEmoji'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapTimestamp;
            var5['onTapTimestamp'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapInlineCode;
            var5['onTapInlineCode'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapRoleIcon;
            var5['onTapRoleIcon'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapVoiceChannelBadge;
            var5['onTapVoiceChannelBadge'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapGameIcon;
            var5['onTapGameIcon'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapSuppressNotificationsIcon;
            var5['onTapSuppressNotificationsIcon'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapConnectionsRoleTag;
            var5['onTapConnectionsRoleTag'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapTimeoutIcon;
            var5['onTapTimeoutIcon'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapButtonActionComponent;
            var5['onTapButtonActionComponent'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapSelectActionComponent;
            var5['onTapSelectActionComponent'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapWelcomeReply;
            var5['onTapWelcomeReply'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapInviteToSpeak;
            var5['onTapInviteToSpeak'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapAutoModerationActions;
            var5['onTapAutoModerationActions'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapAutoModerationFeedback;
            var5['onTapAutoModerationFeedback'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapFollowForumPost;
            var5['onTapFollowForumPost'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapShareForumPost;
            var5['onTapShareForumPost'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapReactionOverflow;
            var5['onTapReactionOverflow'] = var13;
            var13 = var9.handleTapNavBar;
            var5['onTapNavBar'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleCopyText;
            var5['onTapCopyText'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapOpTag;
            var5['onTapOpTag'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapTag;
            var5['onTapTag'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleMediaAttachmentPlaybackEnded;
            var5['onMediaAttachmentPlaybackEnded'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleMediaAttachmentPlaybackStarted;
            var5['onMediaAttachmentPlaybackStarted'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleVoiceMessagePlaybackFailed;
            var5['onVoiceMessagePlaybackFailed'] = var13;
            var13 = var9.handleTapShowAltText;
            var5['onTapShowAltText'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapPostPreviewEmbed;
            var5['onTapPostPreviewEmbed'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapDismissMediaPostSharePrompt;
            var5['onTapDismissMediaPostSharePrompt'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapObscuredMediaLearnMore;
            var5['onTapObscuredMediaLearnMore'] = var13;
            var13 = var9.handlers;
            var13 = var13.onTapObscuredMediaToggle;
            var5['onTapObscuredMediaToggle'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapSafetyPolicyNoticeEmbed;
            var5['onTapSafetyPolicyNoticeEmbed'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapSafetySystemNotificationCta;
            var5['onTapSafetySystemNotificationCta'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapPollAnswer;
            var5['onTapPollAnswer'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapPollSubmitVote;
            var5['onTapPollSubmitVote'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapPollAction;
            var5['onTapPollAction'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleLongPressPollImage;
            var5['onLongPressPollImage'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapCtaButton;
            var5['onTapCtaButton'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleMessageAccessibilityAction;
            var5['onMessageAccessibilityAction'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapForwardFooter;
            var5['onTapForwardFooter'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapInlineForward;
            var5['onTapInlineForward'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapClanTagChiplet;
            var5['onTapClanTagChiplet'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapContentInventoryEntryEmbed;
            var5['onTapContentInventoryEntryEmbed'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapCheckpointCard;
            var5['onTapCheckpointCard'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapSoundmoji;
            var5['onTapSoundmoji'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapAppMessageEmbed;
            var5['onTapAppMessageEmbed'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleTapPreviewSharedClientTheme;
            var5['onTapPreviewSharedClientTheme'] = var13;
            var13 = var9.handlers;
            var13 = var13.handleSharedClientThemeViewed;
            var5['onSharedClientThemeViewed'] = var13;
            var5['children'] = var12;
            var5['HACK_fixModalInteraction'] = var11;
            var11 = var9.handleTapTableView;
            var5['onTapTableView'] = var11;
            var11 = var9.handleFirstLayout;
            var5['onFirstLayout'] = var11;
            var11 = var9.handleMediaPlayFinishedAnalytics;
            var5['onMediaPlayFinishedAnalytics'] = var11;
            var11 = var9.handleMessageVisibilityChanged;
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
            var9 = var9.props;
            var9 = var9.messages;
            var6['messages'] = var9;
            var6 = var8.bind(var1)(var7, var6);
            var5[1] = var6;
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var5['value'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var8);
    var _closure1_slot76 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
            var9 = arg1;
            var7 = var9.channel;
            var _closure2_slot0 = var7;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = 93;
            var8 = var2[var5];
            var4 = undefined;
            var13 = var3.bind(var4)(var8);
            var12 = var13.useStateFromStores;
            var8 = _closure1_slot52;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = var7.id;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                var3 = _closure1_slot52;
                var2 = var3.getMessages;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var85 = var12.bind(var13)(var11, var8, var10);
            var _closure2_slot1 = var85;
            var96 = var7.id;
            var _closure2_slot2 = var96;
            var8 = var7.getGuildId;
            var98 = var8.bind(var7)();
            var _closure2_slot3 = var98;
            var2 = var2[var5];
            var10 = var3.bind(var4)(var2);
            var8 = var10.useStateFromStores;
            var2 = _closure1_slot49;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot49;
                var2 = var3.getGuild;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var8.bind(var10)(var3, var2);
            var _closure2_slot4 = var12;
            var10 = null;
            var2 = var10 == var12;
            var45 = undefined;
            if(var2) { _fun0042_ip = 80; continue _fun0042 }
case 56:
            var45 = var12.systemChannelFlags;
case 80:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = var13[var5];
            var15 = var8.bind(var4)(var2);
            var14 = var15.useStateFromStores;
            var2 = _closure1_slot43;
            var11 = new Array(1);
            var11[0] = var2;
            var3 = function() {
                var2 = _closure1_slot43;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var97 = var14.bind(var15)(var11, var3, var2);
            var _closure2_slot5 = var97;
            var2 = 96;
            var3 = var13[var2];
            var3 = var8.bind(var4)(var3);
            var11 = var3.InlineAttachmentMedia;
            var3 = var11.useSetting;
            r103 = var3.bind(var11)();
            var3 = var13[var2];
            var3 = var8.bind(var4)(var3);
            var11 = var3.InlineEmbedMedia;
            var3 = var11.useSetting;
            r102 = var3.bind(var11)();
            var3 = var13[var2];
            var3 = var8.bind(var4)(var3);
            var11 = var3.RenderEmbeds;
            var3 = var11.useSetting;
            r101 = var3.bind(var11)();
            var3 = var13[var2];
            var3 = var8.bind(var4)(var3);
            var11 = var3.RenderReactions;
            var3 = var11.useSetting;
            r100 = var3.bind(var11)();
            var3 = var13[var2];
            var3 = var8.bind(var4)(var3);
            var11 = var3.DeveloperMode;
            var3 = var11.useSetting;
            var100 = var3.bind(var11)();
            var3 = var13[var2];
            var3 = var8.bind(var4)(var3);
            var11 = var3.AnimateEmoji;
            var3 = var11.useSetting;
            r108 = var3.bind(var11)();
            var3 = var13[var2];
            var3 = var8.bind(var4)(var3);
            var11 = var3.AnimateStickers;
            var3 = var11.useSetting;
            r107 = var3.bind(var11)();
            var3 = var13[var2];
            var3 = var8.bind(var4)(var3);
            var11 = var3.GifAutoPlay;
            var3 = var11.useSetting;
            r105 = var3.bind(var11)();
            var2 = var13[var2];
            var2 = var8.bind(var4)(var2);
            var3 = var2.TimestampHourCycle;
            var2 = var3.useSetting;
            r104 = var2.bind(var3)();
            var2 = var13[var5];
            var15 = var8.bind(var4)(var2);
            var14 = var15.useStateFromStores;
            var2 = _closure1_slot42;
            var11 = new Array(1);
            var11[0] = var2;
            var3 = function() {
                var1 = _closure1_slot42;
                var1 = var1.theme;
                return var1;
            };
            var2 = new Array(0);
            r111 = var14.bind(var15)(var11, var3, var2);
            var2 = 97;
            var2 = var13[var2];
            var3 = var8.bind(var4)(var2);
            var2 = var3.useIsMessageSwipeActionsEnabled;
            var16 = var2.bind(var3)();
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
                        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                            var1 = arg1;
                            var2 = var1.author;
                            var3 = null;
                            var2 = var3 != var2;
                            if(!var2) { _fun0043_ip = 34; continue _fun0043 }
case 488:
                            var4 = var1.activity;
                            var2 = var3 != var4;
case 34:
                            if(!var2) { _fun0043_ip = 42; continue _fun0043 }
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
                    var1 = 68;
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
            var91 = var2.bind(var4)(var85);
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
                        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                            var1 = arg1;
                            var2 = var1.applicationId;
                            var4 = null;
                            var2 = var4 != var2;
                            if(!var2) { _fun0044_ip = 163; continue _fun0044 }
case 489:
                            var3 = var1.application;
                            var2 = var4 == var3;
case 163:
                            if(!var2) { _fun0044_ip = 196; continue _fun0044 }
case 119:
                            var3 = _closure4_slot0;
                            var2 = var3.add;
                            var1 = var1.applicationId;
                            var1 = var2.bind(var3)(var1);
case 196:
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
                    _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
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
                        if(var3) { _fun0045_ip = 79; continue _fun0045 }
case 28:
                        var5 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var3 = 94;
                        var3 = var10[var3];
                        var7 = var5.bind(var1)(var3);
                        var6 = var7.fetchApplications;
                        var3 = 68;
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
case 79:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var1 = undefined;
                return var1;
            };
            var2 = var2.bind(var4)(var85);
            var17 = _closure1_slot1;
            var2 = 98;
            var2 = var13[var2];
            var2 = var17.bind(var4)(var2);
            var2 = var2.bind(var4)(var85, var7);
            var15 = _closure1_slot3;
            var11 = 2;
            var2 = var15.bind(var4)(var2, var11);
            var14 = 0;
            var20 = var2[var14];
            var3 = 1;
            var2 = var2[var3];
            var2 = var13[var5];
            var22 = var8.bind(var4)(var2);
            var21 = var22.useStateFromStores;
            var2 = _closure1_slot51;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = function() {
                var2 = _closure1_slot51;
                var1 = var2.getInvites;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var90 = var21.bind(var22)(var19, var18, var2);
            var2 = var13[var5];
            var22 = var8.bind(var4)(var2);
            var21 = var22.useStateFromStoresObject;
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
            var2 = var21.bind(var22)(var19, var18, var2);
            var89 = var2.appDirectoryEmbedApplications;
            var88 = var2.invalidAppDirectoryEmbedApplicationIds;
            var80 = var2.appDirectoryEmbedApplicationFetchStates;
            var2 = var13[var5];
            var21 = var8.bind(var4)(var2);
            var19 = var21.useStateFromStoresArray;
            var2 = _closure1_slot15;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = function() {
                var2 = _closure1_slot15;
                var1 = var2.getFetchingOrFailedFetchingIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var87 = var19.bind(var21)(var18, var2);
            var2 = var13[var5];
            var21 = var8.bind(var4)(var2);
            var19 = var21.useStateFromStoresArray;
            var2 = _closure1_slot14;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = function() {
                var2 = _closure1_slot14;
                var1 = var2.getFetchingIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var86 = var19.bind(var21)(var18, var2);
            var2 = var13[var5];
            var23 = var8.bind(var4)(var2);
            var22 = var23.useStateFromStoresArray;
            var2 = _closure1_slot13;
            var21 = new Array(1);
            var21[0] = var2;
            var19 = new Array(1);
            var19[0] = var96;
            var18 = function() {
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
            var83 = var22.bind(var23)(var21, var18, var19);
            var18 = var13[var5];
            var22 = var8.bind(var4)(var18);
            var21 = var22.useStateFromStoresArray;
            var19 = new Array(2);
            var19[0] = var2;
            var18 = _closure1_slot54;
            var19[1] = var18;
            var18 = function() {
                _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                    var1 = new Array(0);
                    var _closure3_slot0 = var1;
                    var6 = function _loop(arg1) {
                        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
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
                            if(var6) { _fun0047_ip = 490; continue _fun0047 }
case 60:
                            var3 = var2.details;
case 490:
                            if(!(var4 != var3)) { _fun0047_ip = 491; continue _fun0047 }
case 492:
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
case 491:
                            return var1;
                        }
                    };
                    var3 = _closure1_slot77;
                    var5 = _closure1_slot13;
                    var4 = var5.getEmbeddedActivitiesForChannel;
                    var2 = _closure2_slot2;
                    var2 = var4.bind(var5)(var2);
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if(var2) { _fun0046_ip = 183; continue _fun0046 }
case 55:
                    var2 = var3.value;
                    var2 = var6.bind(var5)(var2);
                    var7 = var4.bind(var5)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0046_ip = 55; continue _fun0046 }
case 183:
                    return var1;
                }
            };
            var81 = var21.bind(var22)(var19, var18);
            var18 = var13[var5];
            var22 = var8.bind(var4)(var18);
            var21 = var22.useStateFromStoresArray;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = function() {
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
            var82 = var21.bind(var22)(var19, var18);
            var18 = var13[var5];
            var21 = var8.bind(var4)(var18);
            var19 = var21.useStateFromStoresArray;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = function() {
                _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                    var1 = new Array(0);
                    var3 = _closure1_slot77;
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
                    if(var2) { _fun0048_ip = 199; continue _fun0048 }
case 28:
                    var11 = var3.value;
                    var2 = _closure1_slot3;
                    var2 = var2.bind(var9)(var11, var5);
                    var11 = var2[var7];
                    var2 = var2[var4];
                    var11 = var2.isLaunching;
                    if(!var11) { _fun0048_ip = 65; continue _fun0048 }
case 124:
                    var12 = var2.componentId;
                    var11 = var6 != var12;
case 65:
                    if(!var11) { _fun0048_ip = 493; continue _fun0048 }
case 45:
                    var12 = var2.componentId;
                    var12 = var12.length;
                    var11 = var12 > var7;
case 493:
                    if(!var11) { _fun0048_ip = 125; continue _fun0048 }
case 62:
                    var11 = var1.push;
                    var2 = var2.componentId;
                    var2 = var11.bind(var1)(var2);
case 125:
                    var11 = var8.bind(var9)();
                    var2 = var11.done;
                    var3 = var11;
                    if(!var2) { _fun0048_ip = 28; continue _fun0048 }
case 199:
                    return var1;
                }
            };
            var84 = var19.bind(var21)(var18, var2);
            var2 = var13[var5];
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
            var79 = var19.bind(var21)(var18, var2);
            var2 = var13[var5];
            var22 = var8.bind(var4)(var2);
            var21 = var22.useStateFromStores;
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
            var78 = var21.bind(var22)(var19, var18, var2);
            var2 = var13[var5];
            var22 = var8.bind(var4)(var2);
            var21 = var22.useStateFromStores;
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
            var77 = var21.bind(var22)(var19, var18, var2);
            var2 = 99;
            var2 = var13[var2];
            var18 = var8.bind(var4)(var2);
            var2 = var18.useCodedLinksExperimentEmbeds;
            var76 = var2.bind(var18)();
            var2 = 100;
            var2 = var13[var2];
            var19 = var8.bind(var4)(var2);
            var18 = var19.useQuests;
            var2 = {'fetchPolicy': 'cache-or-network', 'callerSource': 'messages_native'};
            var2 = var18.bind(var19)(var2);
            var75 = var2.quests;
            var74 = var2.isFetchingCurrentQuests;
            var18 = var85.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot68;
                var1 = var1.PREMIUM_REFERRAL;
                var1 = var2 === var1;
                return var1;
            };
            var19 = var18.bind(var85)(var2);
            var18 = var19.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.referralTrialOfferId;
                return var1;
            };
            var19 = var18.bind(var19)(var2);
            var18 = var19.filter;
            var2 = 95;
            var2 = var13[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.isNotNullish;
            var2 = var18.bind(var19)(var2);
            var _closure2_slot6 = var2;
            var2 = var13[var5];
            var21 = var8.bind(var4)(var2);
            var19 = var21.useStateFromStoresArray;
            var2 = _closure1_slot34;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = function() {
                var3 = _closure2_slot6;
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
                        var3 = _closure1_slot34;
                        var2 = var3.getRelevantUserTrialOffer;
                        var1 = arg1;
                        var2 = var2.bind(var3)(var1);
                        var1 = null;
                        var3 = var1 == var2;
                        var1 = undefined;
                        if(var3) { _fun0049_ip = 494; continue _fun0049 }
case 466:
                        var1 = var2.id;
case 494:
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
            var22 = var19.bind(var21)(var18, var2);
            var2 = 101;
            var2 = var13[var2];
            var19 = var8.bind(var4)(var2);
            var18 = var19.useTrialOffer;
            var2 = _closure1_slot70;
            var23 = var18.bind(var19)(var2);
            var2 = var13[var5];
            var21 = var8.bind(var4)(var2);
            var19 = var21.useStateFromStores;
            var2 = _closure1_slot59;
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
                var5 = _closure1_slot59;
                var2 = var5.getCurrentUser;
                var2 = var2.bind(var5)();
                var1 = _closure1_slot71;
                var1 = var1.TIER_2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var21 = var19.bind(var21)(var18, var2);
            var2 = var13[var5];
            var25 = var8.bind(var4)(var2);
            var24 = var25.useStateFromStores;
            var2 = _closure1_slot45;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = new Array(1);
            var18[0] = var96;
            var2 = function() {
                var3 = _closure1_slot45;
                var2 = var3.getEditingMessageId;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var73 = var24.bind(var25)(var19, var2, var18);
            var2 = var13[var5];
            var25 = var8.bind(var4)(var2);
            var24 = var25.useStateFromStores;
            var2 = _closure1_slot36;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = new Array(1);
            var18[0] = var96;
            var2 = function() {
                _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
                    var3 = _closure1_slot36;
                    var2 = var3.getPendingReply;
                    var1 = _closure2_slot2;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0050_ip = 2; continue _fun0050 }
case 44:
                    var2 = var2.message;
                    var1 = var2.id;
case 2:
                    return var1;
                }
            };
            var72 = var24.bind(var25)(var19, var2, var18);
            var2 = var13[var5];
            var25 = var8.bind(var4)(var2);
            var24 = var25.useStateFromStores;
            var2 = _closure1_slot56;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = new Array(1);
            var18[0] = var96;
            var2 = function() {
                var3 = _closure1_slot56;
                var2 = var3.getOldestUnreadMessageId;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var71 = var24.bind(var25)(var19, var2, var18);
            var2 = var13[var5];
            var25 = var8.bind(var4)(var2);
            var24 = var25.useStateFromStores;
            var2 = _closure1_slot50;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = new Array(1);
            var18[0] = var98;
            var2 = function() {
                _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0051_ip = 191; continue _fun0051 }
case 495:
                    var4 = _closure1_slot50;
                    var3 = var4.canChatInGuild;
                    var2 = _closure2_slot3;
                    var1 = var3.bind(var4)(var2);
case 191:
                    return var1;
                }
            };
            var70 = var24.bind(var25)(var19, var2, var18);
            var2 = var13[var5];
            var25 = var8.bind(var4)(var2);
            var24 = var25.useStateFromStores;
            var2 = _closure1_slot53;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = new Array(1);
            var18[0] = var7;
            var2 = function() {
                var4 = _closure1_slot53;
                var3 = var4.can;
                var1 = _closure1_slot69;
                var2 = var1.SEND_MESSAGES;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var69 = var24.bind(var25)(var19, var2, var18);
            var2 = 103;
            var2 = var13[var2];
            var2 = var17.bind(var4)(var2);
            var68 = var2.bind(var4)(var96);
            var2 = var13[var5];
            var24 = var8.bind(var4)(var2);
            var19 = var24.useStateFromStores;
            var2 = _closure1_slot60;
            var18 = new Array(1);
            var18[0] = var2;
            var17 = new Array(1);
            var17[0] = var97;
            var2 = function() {
                var4 = _closure1_slot60;
                var3 = var4.getUserVoiceChannelId;
                var2 = _closure1_slot66;
                var1 = _closure2_slot5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var67 = var19.bind(var24)(var18, var2, var17);
            var2 = var13[var5];
            var24 = var8.bind(var4)(var2);
            var19 = var24.useStateFromStores;
            var2 = _closure1_slot55;
            var18 = new Array(1);
            var18[0] = var2;
            var17 = function() {
                var2 = _closure1_slot55;
                var1 = var2.getChannelId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var66 = var19.bind(var24)(var18, var17, var2);
            var2 = var13[var5];
            var25 = var8.bind(var4)(var2);
            var24 = var25.useStateFromStores;
            var2 = _closure1_slot37;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = new Array(1);
            var18[0] = var7;
            var17 = function() {
                _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
                    var1 = _closure1_slot64;
                    var4 = var1.THREADS;
                    var3 = var4.has;
                    var1 = _closure2_slot0;
                    var1 = var1.type;
                    var3 = var3.bind(var4)(var1);
                    var4 = null;
                    var1 = null;
                    if(!var3) { _fun0052_ip = 493; continue _fun0052 }
case 66:
                    var3 = _closure2_slot0;
                    var3 = var3.parent_id;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0052_ip = 493; continue _fun0052 }
case 7:
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
case 493:
                    return var1;
                }
            };
            var26 = var24.bind(var25)(var19, var17, var18);
            var17 = var13[var5];
            var25 = var8.bind(var4)(var17);
            var24 = var25.useStateFromStoresObject;
            var17 = _closure1_slot46;
            var19 = new Array(1);
            var19[0] = var17;
            var18 = function() {
                var1 = {};
                var3 = _closure1_slot46;
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
            var17 = new Array(0);
            var17 = var24.bind(var25)(var19, var18, var17);
            var64 = var17.resolvingGiftCodes;
            var63 = var17.resolvedGiftCodes;
            var62 = var17.acceptingGiftCodes;
            var17 = var13[var5];
            var25 = var8.bind(var4)(var17);
            var24 = var25.useStateFromStores;
            var17 = _closure1_slot18;
            var19 = new Array(1);
            var19[0] = var17;
            var18 = new Array(1);
            var18[0] = var96;
            var17 = function() {
                var3 = _closure1_slot18;
                var2 = var3.getParticipants;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                var1 = var1.length;
                return var1;
            };
            var61 = var24.bind(var25)(var19, var17, var18);
            var17 = var13[var5];
            var25 = var8.bind(var4)(var17);
            var24 = var25.useStateFromStores;
            var17 = _closure1_slot58;
            var19 = new Array(1);
            var19[0] = var17;
            var18 = new Array(1);
            var18[0] = var96;
            var17 = function() {
                var3 = _closure1_slot58;
                var2 = var3.getFiles;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var60 = var24.bind(var25)(var19, var17, var18);
            var17 = var13[var5];
            var24 = var8.bind(var4)(var17);
            var19 = var24.useStateFromStores;
            var18 = new Array(1);
            var18[0] = var2;
            var17 = new Array(1);
            var17[0] = var96;
            var2 = function() {
                var3 = _closure1_slot37;
                var2 = var3.getReplyIdsForChannel;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var59 = var19.bind(var24)(var18, var2, var17);
            var2 = var13[var5];
            var24 = var8.bind(var4)(var2);
            var19 = var24.useStateFromStoresObject;
            var2 = _closure1_slot12;
            var18 = new Array(1);
            var18[0] = var2;
            var17 = function() {
                var1 = {};
                var2 = _closure1_slot12;
                var3 = var2.useReducedMotion;
                var1['useReducedMotion'] = var3;
                var3 = var2.roleStyle;
                var1['roleStyle'] = var3;
                var3 = var2.saturation;
                var1['saturation'] = var3;
                var2 = var2.displayNameStylesEnabled;
                var1['displayNameStylesEnabled'] = var2;
                return var1;
            };
            var2 = new Array(0);
            var2 = var19.bind(var24)(var18, var17, var2);
            var58 = var2.useReducedMotion;
            var99 = var2.roleStyle;
            r110 = var2.saturation;
            var57 = var2.displayNameStylesEnabled;
            var2 = var13[var5];
            var24 = var8.bind(var4)(var2);
            var19 = var24.useStateFromStores;
            var2 = _closure1_slot40;
            var18 = new Array(1);
            var18[0] = var2;
            var17 = new Array(1);
            var17[0] = var96;
            var2 = function() {
                var3 = _closure1_slot40;
                var2 = var3.getChannelThreadsVersion;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var56 = var19.bind(var24)(var18, var2, var17);
            var2 = var13[var5];
            var19 = var8.bind(var4)(var2);
            var18 = var19.useStateFromStoresObject;
            var2 = _closure1_slot29;
            var17 = new Array(1);
            var17[0] = var2;
            var2 = function() {
                var2 = _closure1_slot29;
                var1 = var2.getMessageInteractionStates;
                var1 = var1.bind(var2)();
                return var1;
            };
            var50 = var18.bind(var19)(var17, var2);
            var2 = var13[var5];
            var25 = var8.bind(var4)(var2);
            var24 = var25.useStateFromStores;
            var2 = _closure1_slot28;
            var19 = new Array(1);
            var19[0] = var2;
            var2 = 104;
            var2 = var13[var2];
            var2 = var8.bind(var4)(var2);
            r115 = var2.isVersionEqual;
            r117 = function() {
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
            r116 = new Array(0);
            r119 = var25;
            r118 = var19;
            var2 = r119[var24](r118, r117, r116, r115, r114);
            var2 = var15.bind(var4)(var2, var11);
            var49 = var2[var14];
            var48 = var2[var3];
            var2 = var13[var5];
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
            var2 = 105;
            var2 = var13[var2];
            var15 = var8.bind(var4)(var2);
            var14 = var15.useIsSpamMessageRequest;
            var2 = var7.id;
            var92 = var14.bind(var15)(var2);
            var2 = 106;
            var2 = var13[var2];
            var13 = var8.bind(var4)(var2);
            var8 = var13.useIsMessageRequest;
            var2 = var7.id;
            var93 = var8.bind(var13)(var2);
            var47 = var10 != var85;
            if(!var47) { _fun0042_ip = 496; continue _fun0042 }
case 497:
            var2 = var85.ready;
            if(var2) { _fun0042_ip = 498; continue _fun0042 }
case 499:
            var2 = var85.cached;
case 498:
            var47 = var2;
case 496:
            var95 = var10 != var85;
            if(!var95) { _fun0042_ip = 500; continue _fun0042 }
case 501:
            var95 = var85.cached;
case 500:
            var94 = var10 != var85;
            if(!var94) { _fun0042_ip = 502; continue _fun0042 }
case 503:
            var94 = var85.ready;
case 502:
            if(!var94) { _fun0042_ip = 504; continue _fun0042 }
case 505:
            var2 = var85.loadingMore;
            var94 = !var2;
case 504:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = var13[var5];
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
            var2 = var13[var5];
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
            var2 = var13[var5];
            var18 = var8.bind(var4)(var2);
            var17 = var18.useStateFromStores;
            var2 = _closure1_slot47;
            var15 = new Array(1);
            var15[0] = var2;
            var14 = function() {
                var2 = _closure1_slot47;
                var1 = var2.getCommunicationDisabledVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var53 = var17.bind(var18)(var15, var14);
            var14 = var13[var5];
            var18 = var8.bind(var4)(var14);
            var17 = var18.useStateFromStoresObject;
            var15 = new Array(1);
            var15[0] = var2;
            var14 = new Array(2);
            var14[0] = var98;
            var14[1] = var85;
            var2 = function() {
                _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0053_ip = 160; continue _fun0053 }
case 506:
                    var1 = _closure2_slot1;
                    if(!(var4 != var1)) { _fun0053_ip = 160; continue _fun0053 }
case 31:
                    var1 = {};
                    var _closure3_slot0 = var1;
                    var4 = _closure2_slot1;
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
                            var2 = arg1;
                            var5 = var2.author;
                            var3 = null;
                            var6 = var3 == var5;
                            var1 = undefined;
                            var4 = undefined;
                            if(var6) { _fun0054_ip = 120; continue _fun0054 }
case 507:
                            var4 = var5.id;
case 120:
                            if(!(var3 != var4)) { _fun0054_ip = 194; continue _fun0054 }
case 50:
                            var7 = _closure1_slot47;
                            var6 = var7.getMember;
                            var5 = _closure2_slot3;
                            var4 = var2.author;
                            var4 = var4.id;
                            var4 = var6.bind(var7)(var5, var4);
                            if(!(var3 != var4)) { _fun0054_ip = 194; continue _fun0054 }
case 37:
                            var3 = _closure3_slot0;
                            var2 = var2.author;
                            var2 = var2.id;
                            var3[var2] = var4;
case 194:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 160:
                    var1 = {};
                    return var1;
                }
            };
            var52 = var17.bind(var18)(var15, var2, var14);
            var2 = var13[var5];
            var17 = var8.bind(var4)(var2);
            var15 = var17.useStateFromStores;
            var2 = _closure1_slot53;
            var14 = new Array(1);
            var14[0] = var2;
            var2 = function() {
                var4 = _closure1_slot53;
                var3 = var4.can;
                var1 = _closure1_slot69;
                var2 = var1.MODERATE_MEMBERS;
                var1 = _closure2_slot4;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var43 = var15.bind(var17)(var14, var2);
            var2 = 107;
            var2 = var13[var2];
            var13 = var8.bind(var4)(var2);
            var8 = var13.useCurrentUserCommunicationDisabled;
            var14 = var10 == var12;
            var2 = undefined;
            if(var14) { _fun0042_ip = 508; continue _fun0042 }
case 509:
            var2 = var12.id;
case 508:
            var8 = var8.bind(var13)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var8, var11);
            var44 = var2[var3];
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var8 = var3[var5];
            var14 = var2.bind(var4)(var8);
            var13 = var14.useStateFromStores;
            var8 = _closure1_slot41;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = function() {
                var1 = _closure1_slot41;
                var1 = var1.locale;
                return var1;
            };
            var42 = var13.bind(var14)(var11, var8);
            var8 = 108;
            var8 = var3[var8];
            var11 = var2.bind(var4)(var8);
            var8 = var11.useIsPaymentsBlocked;
            var41 = var8.bind(var11)();
            var8 = var3[var5];
            var14 = var2.bind(var4)(var8);
            var13 = var14.useStateFromStores;
            var8 = _closure1_slot39;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = function() {
                _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = var3.isForumPost;
                    var1 = var1.bind(var3)();
                    var3 = !var1;
                    var1 = !var3;
                    if(var3) { _fun0055_ip = 510; continue _fun0055 }
case 163:
                    var4 = _closure1_slot39;
                    var3 = var4.hasJoined;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
case 510:
                    return var1;
                }
            };
            var40 = var13.bind(var14)(var11, var8);
            var8 = var3[var5];
            var14 = var2.bind(var4)(var8);
            var13 = var14.useStateFromStores;
            var8 = _closure1_slot31;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = function() {
                var3 = _closure1_slot31;
                var2 = var3.shouldDisplayPrompt;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var39 = var13.bind(var14)(var11, var8);
            var8 = var3[var5];
            var14 = var2.bind(var4)(var8);
            var13 = var14.useStateFromStores;
            var8 = _closure1_slot35;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = function() {
                var2 = _closure1_slot35;
                var1 = var2.isEligible;
                var1 = var1.bind(var2)();
                return var1;
            };
            var37 = var13.bind(var14)(var11, var8);
            var8 = var3[var5];
            var14 = var2.bind(var4)(var8);
            var13 = var14.useStateFromStores;
            var8 = _closure1_slot17;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = function() {
                var2 = _closure1_slot17;
                var1 = var2.getLazyCacheStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var38 = var13.bind(var14)(var11, var8);
            var8 = 86;
            var8 = var3[var8];
            var11 = var2.bind(var4)(var8);
            var8 = var11.useMessageJumpAndroidKeyboardHeight;
            var36 = var8.bind(var11)();
            var11 = _closure1_slot1;
            var8 = 109;
            var8 = var3[var8];
            var8 = var11.bind(var4)(var8);
            var34 = var8.bind(var4)();
            var8 = 110;
            var8 = var3[var8];
            var13 = var2.bind(var4)(var8);
            var8 = var13.useChannelSummariesExperiment;
            var8 = var8.bind(var13)(var7);
            var _closure2_slot7 = var8;
            var13 = var3[var5];
            var17 = var2.bind(var4)(var13);
            var15 = var17.useStateFromStores;
            var13 = _closure1_slot38;
            var14 = new Array(1);
            var14[0] = var13;
            var13 = new Array(2);
            var13[0] = var8;
            var8 = var7.id;
            var13[1] = var8;
            var8 = function() {
                _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
                    var3 = _closure2_slot7;
                    var1 = null;
                    if(!var3) { _fun0056_ip = 71; continue _fun0056 }
case 173:
                    var4 = _closure1_slot38;
                    var3 = var4.selectedSummary;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 71:
                    return var1;
                }
            };
            var35 = var15.bind(var17)(var14, var8, var13);
            var15 = _closure1_slot10;
            var14 = var15.useEffect;
            var8 = var7.id;
            var13 = new Array(5);
            var13[0] = var8;
            var8 = var85.hasMoreAfter;
            var13[1] = var8;
            var8 = var85.hasMoreBefore;
            var13[2] = var8;
            var8 = var85.length;
            var13[3] = var8;
            var8 = var85.ready;
            var13[4] = var8;
            var8 = function() {
                _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var2 = var2.ready;
                    var2 = !var2;
                    if(var2) { _fun0057_ip = 53; continue _fun0057 }
case 511:
                    var3 = _closure2_slot1;
                    var4 = var3.length;
                    var3 = 0;
                    var2 = var3 !== var4;
case 53:
                    if(var2) { _fun0057_ip = 61; continue _fun0057 }
case 494:
                    var3 = _closure2_slot1;
                    var2 = var3.hasMoreBefore;
case 61:
                    if(var2) { _fun0057_ip = 59; continue _fun0057 }
case 512:
                    var3 = _closure2_slot1;
                    var2 = var3.hasMoreAfter;
case 59:
                    if(var2) { _fun0057_ip = 513; continue _fun0057 }
case 514:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 85;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var3);
                    var5 = var6.updateChannelDimensions;
                    var1 = _closure2_slot0;
                    var11 = var1.id;
                    var1 = global;
                    var2 = var1.Date;
                    var1 = var2.now;
                    var10 = var1.bind(var2)();
                    var2 = 1;
                    var7 = 0;
                    var12 = var6;
                    var9 = var2;
                    var8 = var2;
                    var1 = var12[var5](var11, var10, var9, var8, var7, var6);
case 513:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var14.bind(var15)(var8, var13);
            var8 = 90;
            var13 = var3[var8];
            var17 = var2.bind(var4)(var13);
            var14 = var17.useShouldTrackAnnouncementMessageViews;
            var13 = {};
            var13['guild'] = var12;
            var13['channel'] = var7;
            var13['messages'] = var85;
            var13['isMessagesReady'] = var47;
            var33 = var14.bind(var17)(var13);
            var8 = var3[var8];
            var14 = var2.bind(var4)(var8);
            var13 = var14.useShouldTrackRichPresenceInviteEmbedViews;
            var8 = {};
            var8['messages'] = var85;
            var8['isMessagesReady'] = var47;
            var32 = var13.bind(var14)(var8);
            var8 = 111;
            var8 = var3[var8];
            var13 = var2.bind(var4)(var8);
            var8 = var13.useShouldDisplaySpoilerObscurity;
            var31 = var8.bind(var13)(var7);
            var8 = 112;
            var8 = var3[var8];
            var13 = var2.bind(var4)(var8);
            var8 = var13.useIsAgeVerified;
            var18 = var8.bind(var13)();
            var14 = var15.useEffect;
            var13 = new Array(2);
            var13[0] = var96;
            var13[1] = var98;
            var8 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 113;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.handleChannelSelect;
                var1 = var1.bind(var2)();
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 113;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleChannelSelect;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                return var1;
            };
            var8 = var14.bind(var15)(var8, var13);
            var8 = 114;
            var8 = var3[var8];
            var14 = var2.bind(var4)(var8);
            var13 = var14.useShouldDisableInteractiveComponents;
            var8 = var7.id;
            var30 = var13.bind(var14)(var8);
            var13 = _closure1_slot32;
            var8 = var7.id;
            var29 = var13.bind(var4)(var8);
            var13 = new Array(0);
            var _closure2_slot8 = var13;
            var14 = var85.forEach;
            var8 = function(arg1) {
                _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.messageReference;
                    var2 = null;
                    var5 = var2 == var3;
                    var1 = undefined;
                    var4 = undefined;
                    if(var5) { _fun0058_ip = 34; continue _fun0058 }
case 507:
                    var4 = var3.message_id;
case 34:
                    if(!(var2 != var4)) { _fun0058_ip = 5; continue _fun0058 }
case 466:
                    var3 = _closure2_slot8;
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var4);
case 5:
                    return var1;
                }
            };
            var8 = var14.bind(var85)(var8);
            var8 = _closure1_slot33;
            var28 = var8.bind(var4)(var13);
            var8 = var3[var5];
            var17 = var2.bind(var4)(var8);
            var15 = var17.useStateFromStores;
            var8 = _closure1_slot22;
            var14 = new Array(1);
            var14[0] = var8;
            var13 = new Array(1);
            var13[0] = var96;
            var8 = function() {
                var3 = _closure1_slot22;
                var2 = var3.getChannelFpInfo;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var27 = var15.bind(var17)(var14, var8, var13);
            var8 = 115;
            var8 = var3[var8];
            var8 = var11.bind(var4)(var8);
            r106 = var8.bind(var4)();
            var8 = 116;
            var8 = var3[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.bind(var4)(var85);
            var25 = var8.unloadedContentEntryMessageIds;
            var24 = var8.unloadableContentEntryMessageIds;
            var8 = var3[var5];
            var14 = var2.bind(var4)(var8);
            var13 = var14.useStateFromStores;
            r112 = _closure1_slot59;
            var11 = new Array(1);
            var11[0] = r112;
            var8 = function() {
                _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
case 0:
                    var2 = _closure1_slot59;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0059_ip = 494; continue _fun0059 }
case 120:
                    var3 = var4.isStaff;
                    var2 = var3.bind(var4)();
case 494:
                    var1 = var1 != var2;
                    if(!var1) { _fun0059_ip = 61; continue _fun0059 }
case 467:
                    var1 = var2;
case 61:
                    return var1;
                }
            };
            r109 = var13.bind(var14)(var11, var8);
            var8 = var3[var5];
            var14 = var2.bind(var4)(var8);
            var13 = var14.useStateFromStores;
            var8 = _closure1_slot24;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = function() {
                var2 = _closure1_slot24;
                var1 = var2.getVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var51 = var13.bind(var14)(var11, var8);
            var8 = 117;
            var8 = var3[var8];
            var13 = var2.bind(var4)(var8);
            var11 = var13.useColorStore;
            var8 = function(arg1) {
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var1 = arg1;
                var1 = var1.palette;
                var1 = var2.bind(var3)(var1);
                var1 = var1.length;
                return var1;
            };
            var19 = var11.bind(var13)(var8);
            var8 = var3[var5];
            var14 = var2.bind(var4)(var8);
            var13 = var14.useStateFromStores;
            var8 = _closure1_slot20;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = function() {
                var3 = _closure1_slot20;
                var2 = var3.getGuildEmoji;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var13.bind(var14)(var11, var8);
            var8 = var3[var5];
            var15 = var2.bind(var4)(var8);
            var14 = var15.useStateFromStores;
            var8 = _closure1_slot60;
            var13 = new Array(1);
            var13[0] = var8;
            var11 = new Array(1);
            var11[0] = var98;
            var8 = function() {
                _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0060_ip = 35; continue _fun0060 }
case 141:
                    var5 = _closure1_slot60;
                    var4 = var5.getVoiceStates;
                    var3 = _closure2_slot3;
                    var4 = var4.bind(var5)(var3);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 66;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.getVoiceStateChannelSummaryFromVoiceStates;
                    var2 = var2.bind(var3)(var4);
                    return var2;
case 35:
                    return var1;
                }
            };
            var65 = var14.bind(var15)(var13, var8, var11);
            var8 = var3[var5];
            var14 = var2.bind(var4)(var8);
            var13 = var14.useStateFromStoresArray;
            var8 = _closure1_slot57;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = function() {
                var5 = _closure1_slot57;
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
                var1 = 95;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = var13.bind(var14)(var11, var8);
            var _closure2_slot9 = var15;
            var8 = var3[var5];
            var14 = var2.bind(var4)(var8);
            var13 = var14.useStateFromStoresObject;
            var8 = _closure1_slot61;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = function() {
                var4 = _closure2_slot9;
                var3 = var4.reduce;
                var2 = function(arg1, arg2) {
                    _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
case 0:
                        var1 = arg1;
                        var2 = arg2;
                        var3 = var2.application_id;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0061_ip = 192; continue _fun0061 }
case 488:
                        var7 = _closure1_slot61;
                        var6 = var7.getState;
                        var5 = var2.application_id;
                        var3 = _closure1_slot63;
                        var3 = var3.JOIN;
                        var3 = var6.bind(var7)(var5, var3);
                        if(!(var4 != var3)) { _fun0061_ip = 30; continue _fun0061 }
case 515:
                        var2 = var2.application_id;
                        var1[var2] = var3;
case 30:
                        return var1;
case 192:
                        return var1;
                    }
                };
                var1 = {};
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var14 = var13.bind(var14)(var11, var8);
            var8 = var3[var5];
            r114 = var2.bind(var4)(var8);
            r113 = r114.useStateFromStoresArray;
            var8 = _closure1_slot44;
            var13 = new Array(1);
            var13[0] = var8;
            var11 = function() {
                var3 = _closure1_slot44;
                var1 = var3.getNewestTokens;
                var2 = var1.bind(var3)();
                var1 = new Array(2);
                var1[0] = var2;
                var2 = var3.getApplicationFetchStateVersion;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            var8 = new Array(0);
            var13 = r113.bind(r114)(var13, var11, var8);
            var5 = var3[var5];
            var11 = var2.bind(var4)(var5);
            var8 = var11.useStateFromStores;
            var5 = new Array(1);
            var5[0] = r112;
            var1 = function() {
                _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
case 0:
                    var2 = _closure1_slot59;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0062_ip = 33; continue _fun0062 }
case 120:
                    var1 = var2.displayNameStyles;
case 33:
                    return var1;
                }
            };
            var11 = var8.bind(var11)(var5, var1);
            var1 = 118;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useMessagesClassToFunctional;
            var1 = var1.bind(var2)();
            if(var1) { _fun0042_ip = 516; continue _fun0042 }
case 517:
            var8 = _closure1_slot76;
            _fun0042_ip = 518; continue _fun0042;
case 516:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 119;
            var1 = var3[var1];
            var8 = var2.bind(var4)(var1);
case 518:
            var3 = _closure1_slot74;
            var2 = _closure1_slot1;
            r113 = _closure1_slot2;
            var5 = 120;
            var1 = r113[var5];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            r112 = _closure1_slot0;
            var5 = r113[var5];
            var5 = r112.bind(var4)(var5);
            var5 = var5.Profiles;
            var5 = var5.Messages;
            var1['profile'] = var5;
            var5 = var7.isThread;
            var7 = var5.bind(var7)();
            if(!var7) { _fun0042_ip = 519; continue _fun0042 }
case 520:
            r113 = _closure1_slot72;
            r112 = _closure1_slot1;
            r114 = _closure1_slot2;
            var5 = 121;
            var5 = r114[var5];
            r112 = r112.bind(var4)(var5);
            var5 = {};
            r114 = true;
            var5['absolute'] = r114;
            var7 = r113.bind(var4)(r112, var5);
case 519:
            var5 = new Array(2);
            var5[0] = var7;
            var7 = _closure1_slot72;
            var6 = {};
            r112 = arg2;
            var6['ref'] = r112;
            var6['theme'] = r111;
            var6['saturation'] = r110;
            var6['isStaff'] = r109;
            var6['animateEmoji'] = r108;
            var6['animateStickers'] = r107;
            var6['containerWidth'] = r106;
            var6['gifAutoPlay'] = r105;
            var6['timestampHourCycle'] = r104;
            var6['inlineAttachmentMedia'] = r103;
            var6['inlineEmbedMedia'] = r102;
            var6['renderEmbeds'] = r101;
            var6['renderReactions'] = r100;
            var6['developerMode'] = var100;
            var6['roleStyle'] = var99;
            var6['guildId'] = var98;
            var6['currentUserId'] = var97;
            var6['channelId'] = var96;
            var6['isMessagesReady'] = var47;
            var6['isMessagesCached'] = var95;
            var6['isMessagesAckable'] = var94;
            var6['isMessageRequest'] = var93;
            var6['isSpamMessageRequest'] = var92;
            var6['messageAuthorActivities'] = var91;
            var6['invites'] = var90;
            var6['appDirectoryEmbedApplications'] = var89;
            var6['invalidAppDirectoryEmbedApplicationIds'] = var88;
            var6['invalidApplicationIds'] = var87;
            var6['applicationAssetFetchingIds'] = var86;
            var6['messages'] = var85;
            var6['messagesWithActivitiesLaunching'] = var84;
            var6['activityInstanceIds'] = var83;
            var6['activityParticipants'] = var82;
            var6['activityInstancePresenceDetails'] = var81;
            var6['appDirectoryEmbedApplicationFetchStates'] = var80;
            var6['mediaPostPreviewEmbeds'] = var79;
            var6['guildTemplates'] = var78;
            var6['buildOverrides'] = var77;
            var6['experimentEmbeds'] = var76;
            var6['quests'] = var75;
            var6['isFetchingCurrentQuests'] = var74;
            var6['editingMessageId'] = var73;
            var6['replyingMessageId'] = var72;
            var6['oldestUnreadMessageId'] = var71;
            var6['canChat'] = var70;
            var6['canSendMessages'] = var69;
            var6['isCallActive'] = var68;
            var6['voiceStatePrivateChannelId'] = var67;
            var6['currentClientVoiceChannelId'] = var66;
            var6['voiceStateChannelIdSummaryForGuild'] = var65;
            var6['resolvingGiftCodes'] = var64;
            var6['resolvedGiftCodes'] = var63;
            var6['acceptingGiftCodes'] = var62;
            var6['participantsLength'] = var61;
            var6['uploads'] = var60;
            var6['repliedIds'] = var59;
            var6['useReducedMotion'] = var58;
            var6['displayNameStylesEnabled'] = var57;
            var6['channelThreadsVersion'] = var56;
            var6['rsvpVersion'] = var55;
            var6['failedMessagesVersion'] = var54;
            var6['communicationDisabledVersion'] = var53;
            var6['messageAuthorMembers'] = var52;
            var6['forwardGuildsVersion'] = var51;
            var6['interactionStates'] = var50;
            var6['interactionComponentStates'] = var49;
            var6['interactionComponentStatesVersion'] = var48;
            if(!var46) { _fun0042_ip = 521; continue _fun0042 }
case 522:
            var46 = var47;
case 521:
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
            var6['messageReferencePolls'] = var28;
            var6['explicitMediaFalsePositiveInfo'] = var27;
            var6['threadStartingReferenceMessage'] = var26;
            var6['unloadedContentEntryMessageIds'] = var25;
            var6['unloadableContentEntryMessageIds'] = var24;
            var6['resolvedReferralTrialOfferIds'] = var22;
            var24 = var10 == var23;
            var22 = undefined;
            if(var24) { _fun0042_ip = 523; continue _fun0042 }
case 524:
            var22 = var23.id;
case 523:
            var6['referralTrialOfferId'] = var22;
            var6['isPremiumTier2User'] = var21;
            var6['activityInviteMessageIds'] = var20;
            var6['guildInviteColorsFetched'] = var19;
            var6['isAgeVerified'] = var18;
            var6['guildEmojis'] = var17;
            var6['enableSwipeActions'] = var16;
            var6['selfActivities'] = var15;
            var6['activityLaunchJoinStates'] = var14;
            var6['authorizedAppsTokens'] = var13;
            var6['currentUserDisplayNameStyles'] = var11;
            var13 = var10 == var12;
            var11 = undefined;
            if(var13) { _fun0042_ip = 525; continue _fun0042 }
case 526:
            var11 = var12.officialMessageColor;
case 525:
            var12 = var10 != var11;
            var10 = undefined;
            if(!var12) { _fun0042_ip = 527; continue _fun0042 }
case 528:
            var10 = var11;
case 527:
            var6['officialMessageColor'] = var10;
            r118 = var6;
            r117 = var9;
            var9 = copyDataProperties(r118, r117);
            var6 = var7.bind(var4)(var8, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 'MessagesConnected';
    var2['displayName'] = var4;
    var4 = 122;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/Messages.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();