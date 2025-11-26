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
            var9 = _closure1_slot73;
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
            var7 = _closure1_slot73;
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
    var _closure1_slot72 = var1;
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
    var _closure1_slot73 = var1;
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
            _closure1_slot74 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot74 = var1;
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.findNodeHandle;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.updateShouldShowJumpToPresentButton;
    var _closure1_slot18 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.useChannelPollInteractions;
    var _closure1_slot31 = var4;
    var4 = 29;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
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
    var9 = var6[var4];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot44 = var9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getUserCommunicationDisabledVersion;
    var _closure1_slot45 = var4;
    var4 = 42;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
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
    var4 = var5.bind(var1)(var4);
    var9 = var4.ActivityActionTypes;
    var _closure1_slot59 = var9;
    var9 = var4.ChannelTypesSets;
    var _closure1_slot60 = var9;
    var9 = var4.ME;
    var _closure1_slot61 = var9;
    var9 = var4.MessageFlags;
    var _closure1_slot62 = var9;
    var9 = var4.MessageTypes;
    var _closure1_slot63 = var9;
    var4 = var4.Permissions;
    var _closure1_slot64 = var4;
    var4 = 56;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot65 = var9;
    var4 = var4.PremiumTypes;
    var _closure1_slot66 = var4;
    var4 = 57;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot67 = var9;
    var9 = var4.Fragment;
    var _closure1_slot68 = var9;
    var4 = var4.jsxs;
    var _closure1_slot69 = var4;
    var4 = 58;
    var4 = var6[var4];
    var9 = var8.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var12 = 'Messages';
    var13 = var8;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot70 = var4;
    var8 = var7.Component;
    var4 = function(arg1) {
        var4 = function Messages(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot4;
                var4 = _closure2_slot0;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot7;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot6;
                var1 = _closure1_slot74;
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
                var7 = _closure1_slot7;
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
                var6 = _closure1_slot9;
                var4 = var6.createRef;
                var4 = var4.bind(var6)();
                var1['_chatRef'] = var4;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 59;
                var4 = var6[var4];
                var10 = var7.bind(var5)(var4);
                var4 = var10.prototype;
                var8 = Object.create(var4, {constructor: {value: var10}});
                var14 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1._chatRef;
                        var3 = var1.current;
                        var1 = null;
                        if(!(var1 !== var3)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                        var4 = _closure1_slot10;
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
                var15 = var8;
                var4 = new var15[var10](var14, var13, var12);
                var4 = var4 instanceof Object ? var4 : var8;
                var1['_chatUpdatesQueue'] = var4;
                var4 = {'shouldForceRender': false, 'hasJumpedToOriginalPost': false};
                var1['state'] = var4;
                var4 = var1.props;
                var1['prevPropsWhileFrozen'] = var4;
                var4 = var1.state;
                var1['prevStateWhileFrozen'] = var4;
                var4 = 60;
                var4 = var6[var4];
                var4 = var7.bind(var5)(var4);
                var8 = var4.prototype;
                var8 = Object.create(var8, {constructor: {value: var4}});
                var15 = var8;
                var4 = new var15[var4](var14);
                var4 = var4 instanceof Object ? var4 : var8;
                var1['chatManager'] = var4;
                var4 = 61;
                var4 = var6[var4];
                var4 = var7.bind(var5)(var4);
                var7 = var4.prototype;
                var7 = Object.create(var7, {constructor: {value: var4}});
                var15 = var7;
                var4 = new var15[var4](var14);
                var4 = var4 instanceof Object ? var4 : var7;
                var1['rowGenerator'] = var4;
                var4 = _closure1_slot0;
                var3 = 62;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var5 = var3.MessagesHandlers;
                var3 = var5.prototype;
                var4 = Object.create(var3, {constructor: {value: var5}});
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
                var15 = var4;
                var3 = new var15[var5](var14, var13);
                var3 = var3 instanceof Object ? var3 : var4;
                var1['handlers'] = var3;
                var3 = function(arg1) {
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
                var1['getMessage'] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 64;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.shouldJumpToOriginalPost;
                    var1 = _closure3_slot0;
                    var2 = var1.props;
                    var10 = var2.channel;
                    var2 = var1.props;
                    var9 = var2.channelId;
                    var2 = var1.props;
                    var8 = var2.messages;
                    var1 = var1.state;
                    var7 = var1.hasJumpedToOriginalPost;
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    return var1;
                };
                var1['shouldJumpToOriginalPost'] = var3;
                var3 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var6 = arguments[1];
                        var2 = arguments[2];
                        var1 = undefined;
                        if(!(var6 === var1)) { _fun0008_ip = 32; continue _fun0008 }
case 45:
                        var6 = false;
case 32:
                        if(!(var2 === var1)) { _fun0008_ip = 42; continue _fun0008 }
case 46:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 65;
                        var3 = var5[var3];
                        var3 = var4.bind(var1)(var3);
                        var3 = var3.JumpTypes;
                        var2 = var3.INSTANT;
case 42:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 64;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.maybeRescrollToMessageId;
                        var3 = {};
                        var7 = _closure3_slot0;
                        var8 = var7._chatRef;
                        var3['chatRef'] = var8;
                        var8 = var7.findMessageIndex;
                        var3['findMessageIndex'] = var8;
                        var7 = var7.updateRows;
                        var3['updateRows'] = var7;
                        var3['updateRowsEnabled'] = var6;
                        var3['jumpType'] = var2;
                        var2 = arg1;
                        var2 = var4.bind(var5)(var2, var3);
                        return var1;
                    }
                };
                var1['maybeRescrollToMessageId'] = var3;
                var3 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var3 = arg1;
                        var2 = _closure3_slot0;
                        var2 = var2._chatUpdatesQueue;
                        var2 = var2.isBlocking;
                        if(var2) { _fun0009_ip = 47; continue _fun0009 }
case 48:
                        var2 = var3.isLoadingAtTop;
                        if(!var2) { _fun0009_ip = 49; continue _fun0009 }
case 50:
                        var2 = _closure3_slot0;
                        var2 = var2.decelerating;
                        if(var2) { _fun0009_ip = 51; continue _fun0009 }
case 52:
                        var2 = _closure3_slot0;
                        var2 = var2.dragging;
                        if(var2) { _fun0009_ip = 51; continue _fun0009 }
case 49:
                        var4 = _closure3_slot0;
                        var2 = var4.applyNativeRowsUpdate;
                        var2 = var2.bind(var4)(var3);
                        _fun0009_ip = 53; continue _fun0009;
case 51:
                        var2 = _closure3_slot0;
                        var4 = var2._chatUpdatesQueue;
                        var2 = var4.add;
                        var2 = var2.bind(var4)(var3);
                        _fun0009_ip = 53; continue _fun0009;
case 47:
                        var1 = _closure3_slot0;
                        var2 = var1._chatUpdatesQueue;
                        var1 = var2.add;
                        var1 = var1.bind(var2)(var3);
case 53:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['updateNativeRows'] = var3;
                var3 = function(arg1) {
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
                    var1 = 66;
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
                var1['applyNativeRowsUpdate'] = var3;
                var3 = function(arg1, arg2) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 64;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.isLoadingAtTop;
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1['isLoadingAtTop'] = var3;
                var3 = function() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var2 = arguments[0];
                        var1 = undefined;
                        if(!(var2 === var1)) { _fun0010_ip = 54; continue _fun0010 }
case 55:
                        var2 = {};
case 54:
                        var16 = var2.forceRender;
                        if(!(var16 === var1)) { _fun0010_ip = 31; continue _fun0010 }
case 56:
                        var16 = false;
case 31:
                        var7 = var2.forceReload;
                        var12 = var2.updateMessageIds;
                        if(!(var12 === var1)) { _fun0010_ip = 30; continue _fun0010 }
case 57:
                        var3 = global;
                        var3 = var3.Set;
                        var4 = var3.prototype;
                        var4 = Object.create(var4, {constructor: {value: var3}});
                        var23 = var4;
                        var3 = new var23[var3](var22);
                        var12 = var3 instanceof Object ? var3 : var4;
case 30:
                        var15 = var2.scrollToMessageId;
                        if(!(var15 === var1)) { _fun0010_ip = 58; continue _fun0010 }
case 51:
                        var15 = null;
case 58:
                        var14 = var2.jumpTargetId;
                        if(!(var14 === var1)) { _fun0010_ip = 59; continue _fun0010 }
case 60:
                        var14 = null;
case 59:
                        var19 = var2.jumpType;
                        if(!(var19 === var1)) { _fun0010_ip = 61; continue _fun0010 }
case 62:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 65;
                        var3 = var5[var3];
                        var3 = var4.bind(var1)(var3);
                        var3 = var3.JumpTypes;
                        var19 = var3.ANIMATED;
case 61:
                        var9 = var2.focusTargetId;
                        if(!(var9 === var1)) { _fun0010_ip = 63; continue _fun0010 }
case 64:
                        var9 = null;
case 63:
                        var10 = var2.ignoreEmbedDescriptionCache;
                        if(!(var10 === var1)) { _fun0010_ip = 65; continue _fun0010 }
case 15:
                        var10 = false;
case 65:
                        var8 = var2.messagesNewlyLoaded;
                        if(!(var8 === var1)) { _fun0010_ip = 66; continue _fun0010 }
case 67:
                        var8 = false;
case 66:
                        var11 = var2.shouldInitialScroll;
                        if(!(var11 === var1)) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                        var11 = false;
case 68:
                        var18 = var2.minimizeScrolling;
                        if(!(var18 === var1)) { _fun0010_ip = 70; continue _fun0010 }
case 71:
                        var18 = false;
case 70:
                        var17 = var2.isRescrolling;
                        if(!(var17 === var1)) { _fun0010_ip = 72; continue _fun0010 }
case 73:
                        var17 = false;
case 72:
                        var6 = var2.overrideScrollJumpType;
                        var2 = _closure3_slot0;
                        var2 = var2._chatRef;
                        var2 = var2.current;
                        var13 = null;
                        if(!(var13 != var2)) { _fun0010_ip = 74; continue _fun0010 }
case 75:
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
                        if(!var4) { _fun0010_ip = 76; continue _fun0010 }
case 77:
                        var2 = var2.startId;
                        var10 = undefined;
                        if(!(var2 === var15)) { _fun0010_ip = 76; continue _fun0010 }
case 78:
                        var4 = _closure1_slot0;
                        var16 = _closure1_slot2;
                        var2 = 66;
                        var2 = var16[var2];
                        var2 = var4.bind(var1)(var2);
                        var2 = var2.ChatScrollPosition;
                        var10 = var2.MIDDLE;
case 76:
                        if(!(var13 != var12)) { _fun0010_ip = 79; continue _fun0010 }
case 80:
                        var4 = var12.length;
                        var2 = 0;
                        if(!(!(var4 > var2))) { _fun0010_ip = 81; continue _fun0010 }
case 79:
                        var2 = _closure3_slot0;
                        var2 = var2._loaded;
                        if(!var2) { _fun0010_ip = 82; continue _fun0010 }
case 83:
                        var2 = _closure3_slot0;
                        var4 = var2._chatUpdatesQueue;
                        var2 = var4.hasUpdates;
                        var2 = var2.bind(var4)();
                        if(var2) { _fun0010_ip = 84; continue _fun0010 }
case 82:
                        var2 = _closure3_slot0;
                        var2 = var2._loaded;
                        if(var2) { _fun0010_ip = 85; continue _fun0010 }
case 86:
                        if(!(var13 != var12)) { _fun0010_ip = 85; continue _fun0010 }
case 87:
                        var4 = var12.length;
                        var2 = 0;
                        if(!(var2 === var4)) { _fun0010_ip = 85; continue _fun0010 }
case 88:
                        var4 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var2 = 66;
                        var2 = var16[var2];
                        var16 = var4.bind(var1)(var2);
                        var4 = var16.fadeIn;
                        var2 = _closure3_slot0;
                        var2 = var2._chatRef;
                        var2 = var2.current;
                        var2 = var4.bind(var16)(var2);
                        _fun0010_ip = 89; continue _fun0010;
case 85:
                        if(!(var13 != var15)) { _fun0010_ip = 90; continue _fun0010 }
case 91:
                        var4 = _closure3_slot0;
                        var2 = var4.shouldJumpToOriginalPost;
                        var2 = var2.bind(var4)();
                        if(var2) { _fun0010_ip = 90; continue _fun0010 }
case 92:
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
                        _fun0010_ip = 89; continue _fun0010;
case 90:
                        if(!(var13 != var9)) { _fun0010_ip = 89; continue _fun0010 }
case 93:
                        var4 = _closure3_slot0;
                        var2 = var4.findMessageIndex;
                        var17 = var2.bind(var4)(var9);
                        if(!(var13 != var17)) { _fun0010_ip = 89; continue _fun0010 }
case 94:
                        var4 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var2 = 66;
                        var2 = var16[var2];
                        var16 = var4.bind(var1)(var2);
                        var4 = var16.focus;
                        var2 = _closure3_slot0;
                        var2 = var2._chatRef;
                        var2 = var2.current;
                        var2 = var4.bind(var16)(var2, var17);
                        _fun0010_ip = 89; continue _fun0010;
case 84:
                        var2 = _closure3_slot0;
                        var4 = var2._chatUpdatesQueue;
                        var2 = var4.tryFlush;
                        var2 = var2.bind(var4)();
                        _fun0010_ip = 89; continue _fun0010;
case 81:
                        var4 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var2 = 67;
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
                        if(!(var13 == var6)) { _fun0010_ip = 95; continue _fun0010 }
case 96:
                        var13 = _closure3_slot0;
                        var13 = var13.props;
                        var13 = var13.messages;
                        var6 = var13.jumpType;
case 95:
                        var2['jumpType'] = var6;
                        var6 = _closure3_slot0;
                        var6 = var6._loaded;
                        var6 = !var6;
                        if(var6) { _fun0010_ip = 97; continue _fun0010 }
case 98:
                        var6 = var11;
case 97:
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
case 89:
                        var2 = _closure3_slot0;
                        var2 = var2._loaded;
                        if(!var2) { _fun0010_ip = 99; continue _fun0010 }
case 100:
                        var4 = _closure3_slot0;
                        var4 = var4._loaded;
                        var2 = var4 !== var5;
case 99:
                        if(!var2) { _fun0010_ip = 101; continue _fun0010 }
case 102:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var2 = var3.isResourceChannel;
case 101:
                        if(!var2) { _fun0010_ip = 74; continue _fun0010 }
case 103:
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
case 74:
                        return var1;
                    }
                };
                var1['updateRows'] = var3;
                var3 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var3 = arg1;
                        var10 = var3.scrollToMessageId;
                        var _closure4_slot0 = var10;
                        var9 = var3.jumpTargetId;
                        var1 = undefined;
                        if(!(var9 === var1)) { _fun0011_ip = 104; continue _fun0011 }
case 105:
                        var9 = null;
case 104:
                        var _closure4_slot1 = var9;
                        var11 = var3.jumpType;
                        if(!(var11 === var1)) { _fun0011_ip = 106; continue _fun0011 }
case 107:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 65;
                        var4 = var6[var4];
                        var4 = var5.bind(var1)(var4);
                        var4 = var4.JumpTypes;
                        var11 = var4.ANIMATED;
case 106:
                        var8 = var3.scrollPosition;
                        if(!(var8 === var1)) { _fun0011_ip = 108; continue _fun0011 }
case 109:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 66;
                        var4 = var6[var4];
                        var4 = var5.bind(var1)(var4);
                        var4 = var4.ChatScrollPosition;
                        var8 = var4.TOP;
case 108:
                        var5 = var3.minimizeScrolling;
                        if(!(var5 === var1)) { _fun0011_ip = 110; continue _fun0011 }
case 111:
                        var5 = false;
case 110:
                        var6 = var3.isRescrolling;
                        if(!(var6 === var1)) { _fun0011_ip = 112; continue _fun0011 }
case 113:
                        var6 = false;
case 112:
                        var _closure4_slot2 = var1;
                        var _closure4_slot3 = var1;
                        var4 = _closure3_slot0;
                        var4 = var4.props;
                        var4 = var4.useReducedMotion;
                        if(var4) { _fun0011_ip = 114; continue _fun0011 }
case 115:
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var7 = 65;
                        var7 = var13[var7];
                        var7 = var12.bind(var1)(var7);
                        var7 = var7.JumpTypes;
                        var7 = var7.INSTANT;
                        var4 = var11 === var7;
case 114:
                        var11 = !var4;
                        _closure4_slot2 = var11;
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var7 = 68;
                        var7 = var13[var7];
                        var12 = var12.bind(var1)(var7);
                        var7 = var12.isIOS;
                        var7 = var7.bind(var12)();
                        if(!var7) { _fun0011_ip = 116; continue _fun0011 }
case 117:
                        if(var6) { _fun0011_ip = 116; continue _fun0011 }
case 118:
                        var13 = _closure3_slot0;
                        var12 = var13.maybeRescrollToMessageId;
                        var7 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var6 = 65;
                        var6 = var14[var6];
                        var6 = var7.bind(var1)(var6);
                        var6 = var6.JumpTypes;
                        if(var11) { _fun0011_ip = 119; continue _fun0011 }
case 120:
                        var7 = var6.INSTANT;
                        _fun0011_ip = 121; continue _fun0011;
case 119:
                        var7 = var6.ANIMATED;
case 121:
                        var6 = true;
                        var6 = var12.bind(var13)(var10, var6, var7);
                        _fun0011_ip = 122; continue _fun0011;
case 116:
                        var7 = _closure3_slot0;
                        var6 = var7.findMessageIndex;
                        var7 = var6.bind(var7)(var10);
                        _closure4_slot3 = var7;
                        var6 = null;
                        if(!(var6 != var7)) { _fun0011_ip = 122; continue _fun0011 }
case 80:
                        if(var5) { _fun0011_ip = 123; continue _fun0011 }
case 124:
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
                        _fun0011_ip = 122; continue _fun0011;
case 123:
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
case 122:
                        return var1;
                    }
                };
                var1['scrollToMessageId'] = var3;
                var3 = function(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 64;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.findMessageIndexInRows;
                    var1 = _closure3_slot0;
                    var2 = var1.chatManager;
                    var1 = var2.getPreviousRows;
                    var2 = var1.bind(var2)();
                    var1 = arg1;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1['findMessageIndex'] = var3;
                var3 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
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
                        var1 = 69;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var2);
                        var4 = var7.getChangesetIdForChat;
                        var3 = _closure3_slot0;
                        var3 = var3._chatRef;
                        var3 = var3.current;
                        var19 = var4.bind(var7)(var3);
                        if(!(var20 !== var19)) { _fun0012_ip = 72; continue _fun0012 }
case 125:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.isStaff;
                        if(!var3) { _fun0012_ip = 126; continue _fun0012 }
case 65:
                        var18 = _closure1_slot70;
                        var7 = var18.log;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var23 = var3.channelId;
                        var24 = 'STAFF-ACK-LOG: Ignoring outdated scroll event.';
                        var25 = var18;
                        var22 = var20;
                        var21 = var19;
                        var3 = var25[var7](var24, var23, var22, var21, var20);
                        _fun0012_ip = 126; continue _fun0012;
case 72:
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
case 126:
                        return var1;
                    }
                };
                var1['handleScrollPosition'] = var3;
                var3 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var3 = arg1;
                        var8 = var3.isAtBottom;
                        var7 = var3.isNearBottom;
                        var1 = undefined;
                        if(!(var7 === var1)) { _fun0013_ip = 48; continue _fun0013 }
case 31:
                        var7 = false;
case 48:
                        var6 = var3.isNearTop;
                        if(!(var6 === var1)) { _fun0013_ip = 127; continue _fun0013 }
case 128:
                        var6 = false;
case 127:
                        var5 = var3.dragging;
                        if(!(var5 === var1)) { _fun0013_ip = 5; continue _fun0013 }
case 52:
                        var5 = false;
case 5:
                        var4 = var3.decelerating;
                        if(!(var4 === var1)) { _fun0013_ip = 7; continue _fun0013 }
case 129:
                        var4 = false;
case 7:
                        var13 = var3.shouldShowJumpToPresent;
                        if(!(var13 === var1)) { _fun0013_ip = 40; continue _fun0013 }
case 130:
                        var13 = false;
case 40:
                        var _closure4_slot0 = var13;
                        var12 = var3.isFirstMessageVisible;
                        if(!(var12 === var1)) { _fun0013_ip = 60; continue _fun0013 }
case 131:
                        var12 = false;
case 60:
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
                        if(!var9) { _fun0013_ip = 75; continue _fun0013 }
case 132:
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
                            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                                var5 = _closure1_slot18;
                                var1 = _closure3_slot0;
                                var2 = var1.props;
                                var4 = var2.channelId;
                                var1 = var1.props;
                                var3 = var1.screenIndex;
                                var2 = _closure4_slot0;
                                if(var2) { _fun0014_ip = 4; continue _fun0014 }
case 133:
                                var1 = _closure4_slot1;
                                var2 = var1.hasMoreAfter;
case 4:
                                var1 = undefined;
                                var2 = var5.bind(var1)(var4, var3, var2);
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
case 75:
                        return var1;
                    }
                };
                var1['handleScroll'] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 64;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.syncMessageDisplay;
                    var2 = {};
                    var5 = _closure3_slot0;
                    var6 = var5.props;
                    var6 = var6.messages;
                    var2['messages'] = var6;
                    var6 = var5.props;
                    var6 = var6.isMessagesReady;
                    var2['isMessagesReady'] = var6;
                    var6 = var5.props;
                    var6 = var6.oldestUnreadMessageId;
                    var2['oldestUnreadMessageId'] = var6;
                    var6 = var5.props;
                    var6 = var6.channelId;
                    var2['channelId'] = var6;
                    var6 = var5.props;
                    var6 = var6.screenIndex;
                    var2['screenIndex'] = var6;
                    var6 = var5.updateRows;
                    var2['updateRows'] = var6;
                    var5 = var5.scrollToMessageId;
                    var2['scrollToMessageId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['syncMessageDisplay'] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 64;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.loadMoreBefore;
                    var2 = _closure3_slot0;
                    var3 = var2.props;
                    var4 = var3.channelId;
                    var2 = var2.props;
                    var3 = var2.messages;
                    var2 = function(arg1) {
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var2['animated'] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                };
                var1['loadMoreBefore'] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 64;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.loadMoreAfter;
                    var2 = _closure3_slot0;
                    var3 = var2.props;
                    var4 = var3.channelId;
                    var2 = var2.props;
                    var3 = var2.messages;
                    var2 = function(arg1) {
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var2['animated'] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                };
                var1['loadMoreAfter'] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 64;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.canAddNewReactions;
                    var1 = _closure3_slot0;
                    var2 = var1.props;
                    var2 = var2.channel;
                    var1 = var1.props;
                    var1 = var1.canChat;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1['canAddNewReactions'] = var3;
                var3 = function(arg1) {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 72;
                    var2 = var5[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var2);
                    var3 = var6.getNativeSyntheticEventData;
                    var2 = arg1;
                    var2 = var3.bind(var6)(var2);
                    var7 = var2.messageId;
                    var3 = _closure3_slot0;
                    var2 = 64;
                    var2 = var5[var2];
                    var6 = var4.bind(var1)(var2);
                    var5 = var6.handleLongPressSticker;
                    var4 = var3.animatingStickerMessageId;
                    var2 = var3.updateRows;
                    var2 = var5.bind(var6)(var7, var4, var2);
                    var3['animatingStickerMessageId'] = var2;
                    return var1;
                };
                var1['handleLongPressSticker'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var4 = var1.description;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 64;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleTapShowAltText;
                    var2 = var2.bind(var3)(var4);
                    return var1;
                };
                var1['handleTapShowAltText'] = var3;
                var3 = function() {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var7 = arguments[0];
                        var1 = undefined;
                        if(!(var7 === var1)) { _fun0015_ip = 54; continue _fun0015 }
case 55:
                        var7 = true;
case 54:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 64;
                        var2 = var4[var2];
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.scrollToBottom;
                        var2 = _closure3_slot0;
                        var11 = var2._chatRef;
                        var3 = var2.props;
                        var10 = var3.useReducedMotion;
                        var9 = var2.handleScrollCallbacks;
                        var12 = var6;
                        var8 = var7;
                        var2 = var12[var5](var11, var10, var9, var8, var7);
                        return var1;
                    }
                };
                var1['scrollToBottom'] = var3;
                var3 = function() {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var6 = arguments[0];
                        var1 = undefined;
                        if(!(var6 === var1)) { _fun0016_ip = 54; continue _fun0016 }
case 55:
                        var6 = true;
case 54:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 64;
                        var2 = var4[var2];
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.scrollToTop;
                        var2 = _closure3_slot0;
                        var3 = var2._chatRef;
                        var2 = var2.props;
                        var2 = var2.useReducedMotion;
                        var2 = var4.bind(var5)(var3, var2, var6);
                        return var1;
                    }
                };
                var1['scrollToTop'] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 64;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.scrollToTopMessage;
                    var2 = _closure3_slot0;
                    var3 = var2._chatRef;
                    var2 = var2.chatManager;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['scrollToTopMessage'] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 64;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleTapNavBar;
                    var2 = {};
                    var5 = _closure3_slot0;
                    var6 = var5.props;
                    var6 = var6.channel;
                    var2['channel'] = var6;
                    var6 = var5.props;
                    var6 = var6.useReducedMotion;
                    var2['useReducedMotion'] = var6;
                    var6 = var5.isNearTop;
                    var2['isNearTop'] = var6;
                    var6 = var5.props;
                    var6 = var6.messages;
                    var2['messages'] = var6;
                    var6 = var5.findMessageIndex;
                    var2['findMessageIndex'] = var6;
                    var6 = var5.scrollToTop;
                    var2['scrollToTop'] = var6;
                    var5 = var5._chatRef;
                    var2['chatRef'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleTapNavBar'] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 64;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.handleTapTableView;
                    var2 = _closure3_slot0;
                    var3 = var2.props;
                    var3 = var3.chatInputRef;
                    var2 = var2.props;
                    var2 = var2.keyboardType;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
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
                    var1 = arg1;
                    var4 = var1.nativeEvent;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 64;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleMediaPlayFinishedAnalytics;
                    var2 = var2.bind(var3)(var4);
                    return var1;
                };
                var1['handleMediaPlayFinishedAnalytics'] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 64;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.jumpToPresent;
                    var2 = _closure3_slot0;
                    var3 = var2.props;
                    var4 = var3.messages;
                    var3 = var2.props;
                    var3 = var3.channel;
                    var2 = var2.scrollToBottom;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                };
                var1['jumpToPresent'] = var3;
                var3 = function() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 64;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.scrollToNewMessages;
                        var2 = {};
                        var6 = _closure3_slot0;
                        var7 = var6.props;
                        var7 = var7.channel;
                        var2['channel'] = var7;
                        var7 = var6.props;
                        var7 = var7.channelId;
                        var2['channelId'] = var7;
                        var7 = var6.props;
                        var7 = var7.messages;
                        var2['messages'] = var7;
                        var7 = var6.shouldJumpToOriginalPost;
                        var7 = var7.bind(var6)();
                        var2['hasJumpedToOriginalPost'] = var7;
                        var7 = var6.props;
                        var7 = var7.useReducedMotion;
                        var2['useReducedMotion'] = var7;
                        var6 = var6.props;
                        var7 = var6.oldestUnreadMessageId;
                        var6 = null;
                        var8 = var6 != var7;
                        if(!var8) { _fun0017_ip = 134; continue _fun0017 }
case 110:
                        var6 = var7;
case 134:
                        var2['oldestUnreadMessageId'] = var6;
                        var5 = _closure3_slot0;
                        var7 = var5.chatManager;
                        var6 = var7.getPreviousRows;
                        var6 = var6.bind(var7)();
                        var2['chatManagerRows'] = var6;
                        var6 = var5.findMessageIndex;
                        var2['findMessageIndex'] = var6;
                        var6 = var5._chatRef;
                        var2['chatRef'] = var6;
                        var5 = var5.loadMoreBefore;
                        var2['loadMoreBefore'] = var5;
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
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 64;
                    var2 = var2[var1];
                    var1 = undefined;
                    var8 = var3.bind(var1)(var2);
                    var7 = var8.clearRows;
                    var2 = _closure3_slot0;
                    var13 = var2._chatRef;
                    var12 = var2.chatManager;
                    var3 = var2.props;
                    var11 = var3.channelId;
                    var2 = var2.props;
                    var10 = var2.screenIndex;
                    var9 = function(arg1) {
                        var1 = arg1;
                        var2 = _closure3_slot0;
                        var3 = var1.animated;
                        var2['animated'] = var3;
                        var3 = var1.hasHandledScroll;
                        var2['hasHandledScroll'] = var3;
                        var3 = var1.isNearBottom;
                        var2['isNearBottom'] = var3;
                        var3 = var1.isAtBottom;
                        var2['isAtBottom'] = var3;
                        var3 = var1.isNearTop;
                        var2['isNearTop'] = var3;
                        var3 = var1.decelerating;
                        var2['decelerating'] = var3;
                        var3 = var1.dragging;
                        var2['dragging'] = var3;
                        var3 = var1.hasMoreMessagesAfterForLastUpdate;
                        var2['hasMoreMessagesAfterForLastUpdate'] = var3;
                        var3 = var1.pendingUpdatesQueue;
                        var2['pendingUpdatesQueue'] = var3;
                        var3 = var1._loaded;
                        var2['_loaded'] = var3;
                        var1 = var1.animatingStickerMessageId;
                        var2['animatingStickerMessageId'] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var14 = var8;
                    var2 = var14[var7](var13, var12, var11, var10, var9, var8);
                    return var1;
                };
                var1['clearRows'] = var3;
                var2 = function(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
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
                        if(!var6) { _fun0018_ip = 135; continue _fun0018 }
case 136:
                        var5 = var4 != var5;
                        var1 = null;
                        if(!var5) { _fun0018_ip = 135; continue _fun0018 }
case 137:
                        var1 = null;
                        if(!var3) { _fun0018_ip = 135; continue _fun0018 }
case 138:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 73;
                        var4 = var4[var3];
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        var4 = var3.firstRowGenerator;
                        var3 = var4.measure;
                        var2 = function() {
                            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
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
                                var3 = _closure1_slot72;
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var2 = 74;
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
                                if(var2) { _fun0019_ip = 139; continue _fun0019 }
case 140:
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
                                if(!var2) { _fun0019_ip = 140; continue _fun0019 }
case 139:
                                var1 = _closure3_slot0;
                                var2 = var1.chatManager;
                                var1 = var2.createChangeset;
                                var1 = var1.bind(var2)();
                                return var1;
                            }
                        };
                        var1 = var3.bind(var4)(var2);
case 135:
                        return var1;
                    }
                };
                var1['createRows'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'componentDidMount';
        var5['key'] = var1;
        var1 = function value() {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var5 = this;
                var2 = var5._frozen;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 75;
                var3 = var3[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var4 = var6.isScreenIndexFrozen;
                var3 = var5.props;
                var3 = var3.screenIndex;
                var3 = var4.bind(var6)(var3);
                var5['_frozen'] = var3;
                if(var2) { _fun0020_ip = 131; continue _fun0020 }
case 141:
                var2 = var5.syncMessageDisplay;
                var2 = var2.bind(var5)();
                var2 = var5.recordTimings;
                var2 = var2.bind(var5)();
                _fun0020_ip = 142; continue _fun0020;
case 131:
                var4 = var5.componentDidUpdate;
                var3 = var5.prevPropsWhileFrozen;
                var2 = var5.prevStateWhileFrozen;
                var2 = var4.bind(var5)(var3, var2);
case 142:
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
            var2 = this;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 64;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.recordTimings;
            var3 = var2.props;
            var3 = var3.channelId;
            var2 = var2.props;
            var2 = var2.messages;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'componentWillUnmount';
        var5['key'] = var7;
        var7 = function value() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var2 = this;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 75;
                var4 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.isScreenIndexFrozen;
                var4 = var2.props;
                var4 = var4.screenIndex;
                var4 = var5.bind(var6)(var4);
                var2['_frozen'] = var4;
                var4 = var2._frozen;
                if(var4) { _fun0021_ip = 143; continue _fun0021 }
case 141:
                var5 = var2._chatUpdatesQueue;
                var4 = var5.cleanup;
                var4 = var4.bind(var5)();
                var4 = var2.clearRows;
                var4 = var4.bind(var2)();
                var6 = _closure1_slot18;
                var3 = var2.props;
                var5 = var3.channelId;
                var3 = var2.props;
                var4 = var3.screenIndex;
                var3 = false;
                var3 = var6.bind(var1)(var5, var4, var3);
                return var1;
case 143:
                var1 = var2.props;
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
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var3 = arg1;
                var4 = this;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var8 = 76;
                var1 = var1[var8];
                var6 = undefined;
                var7 = var2.bind(var6)(var1);
                var2 = var4.state;
                var1 = arg2;
                var1 = var7.bind(var6)(var2, var1);
                var1 = !var1;
                if(var1) { _fun0022_ip = 144; continue _fun0022 }
case 145:
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
                if(var2) { _fun0022_ip = 146; continue _fun0022 }
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
case 146:
                var1 = var2;
case 144:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'componentDidUpdate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var3 = arg1;
                var2 = this;
                var _closure3_slot0 = var2;
                var _closure3_slot1 = var3;
                var4 = var2.props;
                var4 = var4.currentUserId;
                var7 = null;
                if(!(var7 != var4)) { _fun0023_ip = 147; continue _fun0023 }
case 44:
                var4 = var2.props;
                var4 = var4.messages;
                var5 = var3.messages;
                var8 = var3.channelId;
                var6 = var2.props;
                var6 = var6.channelId;
                if(!(var8 !== var6)) { _fun0023_ip = 148; continue _fun0023 }
case 37:
                var6 = var2.clearRows;
                var6 = var6.bind(var2)();
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 77;
                var8 = var8[var6];
                var6 = undefined;
                var9 = var9.bind(var6)(var8);
                var8 = var9.clearChannelDimensions;
                var6 = var2.props;
                var6 = var6.channelId;
                var6 = var8.bind(var9)(var6);
case 148:
                var6 = var3.isMessagesAckable;
                var6 = !var6;
                if(!var6) { _fun0023_ip = 149; continue _fun0023 }
case 150:
                var8 = var2.props;
                var6 = var8.isMessagesAckable;
case 149:
                if(!var6) { _fun0023_ip = 151; continue _fun0023 }
case 152:
                var6 = false;
                var2['hasHandledScroll'] = var6;
case 151:
                var6 = var2.shouldJumpToOriginalPost;
                var6 = var6.bind(var2)();
                if(!var6) { _fun0023_ip = 153; continue _fun0023 }
case 154:
                var8 = var2.scrollToTop;
                var6 = false;
                var6 = var8.bind(var2)(var6);
                var5 = var5.jumpSequenceId;
                var4 = var4.jumpSequenceId;
                if(!(var5 === var4)) { _fun0023_ip = 153; continue _fun0023 }
case 155:
                var5 = var2.setState;
                var4 = {};
                var6 = true;
                var4['hasJumpedToOriginalPost'] = var6;
                var4 = var5.bind(var2)(var4);
case 153:
                var4 = var2.props;
                var6 = var4.isMessagesReady;
                if(!var6) { _fun0023_ip = 156; continue _fun0023 }
case 157:
                var4 = var2.props;
                var4 = var4.isMessagesCached;
                var6 = !var4;
case 156:
                if(!var6) { _fun0023_ip = 118; continue _fun0023 }
case 158:
                var6 = var3.isMessagesCached;
case 118:
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 78;
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
                if(var13) { _fun0023_ip = 159; continue _fun0023 }
case 160:
                var14 = var3.saturation;
                var12 = var2.props;
                var12 = var12.saturation;
                var13 = var14 !== var12;
case 159:
                var14 = var13;
                if(var14) { _fun0023_ip = 161; continue _fun0023 }
case 123:
                var16 = var3.inlineAttachmentMedia;
                var12 = var2.props;
                var12 = var12.inlineAttachmentMedia;
                var14 = var16 !== var12;
case 161:
                if(var14) { _fun0023_ip = 162; continue _fun0023 }
case 122:
                var16 = var3.inlineEmbedMedia;
                var12 = var2.props;
                var12 = var12.inlineEmbedMedia;
                var14 = var16 !== var12;
case 162:
                if(var14) { _fun0023_ip = 163; continue _fun0023 }
case 164:
                var16 = var3.renderEmbeds;
                var12 = var2.props;
                var12 = var12.renderEmbeds;
                var14 = var16 !== var12;
case 163:
                if(var14) { _fun0023_ip = 165; continue _fun0023 }
case 166:
                var16 = var3.renderReactions;
                var12 = var2.props;
                var12 = var12.renderReactions;
                var14 = var16 !== var12;
case 165:
                if(var14) { _fun0023_ip = 167; continue _fun0023 }
case 168:
                var16 = var3.animateEmoji;
                var12 = var2.props;
                var12 = var12.animateEmoji;
                var14 = var16 !== var12;
case 167:
                if(var14) { _fun0023_ip = 169; continue _fun0023 }
case 170:
                var16 = var3.animateStickers;
                var12 = var2.props;
                var12 = var12.animateStickers;
                var14 = var16 !== var12;
case 169:
                if(var14) { _fun0023_ip = 171; continue _fun0023 }
case 172:
                var16 = var3.gifAutoPlay;
                var12 = var2.props;
                var12 = var12.gifAutoPlay;
                var14 = var16 !== var12;
case 171:
                if(var14) { _fun0023_ip = 173; continue _fun0023 }
case 174:
                var16 = var3.containerWidth;
                var12 = var2.props;
                var12 = var12.containerWidth;
                var14 = var16 !== var12;
case 173:
                if(var14) { _fun0023_ip = 175; continue _fun0023 }
case 176:
                var16 = var3.guildSystemChannelFlags;
                var12 = var2.props;
                var12 = var12.guildSystemChannelFlags;
                var14 = var16 !== var12;
case 175:
                if(var14) { _fun0023_ip = 177; continue _fun0023 }
case 178:
                var16 = var3.userSettingsLocale;
                var12 = var2.props;
                var12 = var12.userSettingsLocale;
                var14 = var16 !== var12;
case 177:
                if(var14) { _fun0023_ip = 179; continue _fun0023 }
case 180:
                var16 = var3.roleStyle;
                var12 = var2.props;
                var12 = var12.roleStyle;
                var14 = var16 !== var12;
case 179:
                if(var14) { _fun0023_ip = 181; continue _fun0023 }
case 182:
                var16 = var3.canSendMessages;
                var12 = var2.props;
                var12 = var12.canSendMessages;
                var14 = var16 !== var12;
case 181:
                if(var14) { _fun0023_ip = 183; continue _fun0023 }
case 184:
                var16 = var3.showPushFeedback;
                var12 = var2.props;
                var12 = var12.showPushFeedback;
                var14 = var16 !== var12;
case 183:
                if(var14) { _fun0023_ip = 185; continue _fun0023 }
case 186:
                var16 = var3.selectedSummary;
                var12 = var2.props;
                var12 = var12.selectedSummary;
                var14 = var16 !== var12;
case 185:
                if(var14) { _fun0023_ip = 187; continue _fun0023 }
case 188:
                var16 = var3.shouldObscureSpoiler;
                var12 = var2.props;
                var12 = var12.shouldObscureSpoiler;
                var14 = var16 !== var12;
case 187:
                if(var14) { _fun0023_ip = 189; continue _fun0023 }
case 190:
                var16 = var3.shouldFilterKeywords;
                var12 = var2.props;
                var12 = var12.shouldFilterKeywords;
                var14 = var16 !== var12;
case 189:
                if(var14) { _fun0023_ip = 191; continue _fun0023 }
case 192:
                var16 = var3.explicitMediaFalsePositiveInfo;
                var12 = var2.props;
                var12 = var12.explicitMediaFalsePositiveInfo;
                var14 = var16 !== var12;
case 191:
                if(var14) { _fun0023_ip = 193; continue _fun0023 }
case 194:
                var16 = var3.isStaff;
                var12 = var2.props;
                var12 = var12.isStaff;
                var14 = var16 !== var12;
case 193:
                if(var14) { _fun0023_ip = 195; continue _fun0023 }
case 196:
                var16 = var3.isAgeVerified;
                var12 = var2.props;
                var12 = var12.isAgeVerified;
                var14 = var16 !== var12;
case 195:
                if(var14) { _fun0023_ip = 197; continue _fun0023 }
case 198:
                var12 = arg2;
                var16 = var12.shouldForceRender;
                var12 = var2.state;
                var12 = var12.shouldForceRender;
                var12 = var16 !== var12;
                if(!var12) { _fun0023_ip = 199; continue _fun0023 }
case 200:
                var16 = var2.state;
                var12 = var16.shouldForceRender;
case 199:
                var14 = var12;
case 197:
                if(var14) { _fun0023_ip = 201; continue _fun0023 }
case 202:
                var16 = var3.doubleTapToReactEnabled;
                var12 = var2.props;
                var12 = var12.doubleTapToReactEnabled;
                var14 = var16 !== var12;
case 201:
                var16 = var3.resolvingGiftCodes;
                var12 = var2.props;
                var12 = var12.resolvingGiftCodes;
                var39 = var16 !== var12;
                if(var39) { _fun0023_ip = 203; continue _fun0023 }
case 204:
                var16 = var3.resolvedGiftCodes;
                var12 = var2.props;
                var12 = var12.resolvedGiftCodes;
                var39 = var16 !== var12;
case 203:
                if(var39) { _fun0023_ip = 205; continue _fun0023 }
case 206:
                var16 = var3.acceptingGiftCodes;
                var12 = var2.props;
                var12 = var12.acceptingGiftCodes;
                var39 = var16 !== var12;
case 205:
                var _closure3_slot2 = var39;
                var38 = var3.uploads;
                var12 = var2.props;
                var37 = var12.uploads;
                var16 = _closure1_slot1;
                var12 = _closure1_slot2;
                var18 = 76;
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
                if(!var26) { _fun0023_ip = 207; continue _fun0023 }
case 208:
                var16 = var3.isFollowingForumPost;
                var12 = var2.props;
                var12 = var12.isFollowingForumPost;
                var26 = var16 !== var12;
case 207:
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
                if(var36) { _fun0023_ip = 209; continue _fun0023 }
case 210:
                var19 = var3.activityParticipants;
                var16 = var2.props;
                var16 = var16.activityParticipants;
                var36 = var19 !== var16;
case 209:
                if(var36) { _fun0023_ip = 211; continue _fun0023 }
case 212:
                var19 = var3.applicationAssetFetchingIds;
                var16 = var2.props;
                var16 = var16.applicationAssetFetchingIds;
                var36 = var19 !== var16;
case 211:
                if(var36) { _fun0023_ip = 213; continue _fun0023 }
case 214:
                var19 = var3.activityInstancePresenceDetails;
                var16 = var2.props;
                var16 = var16.activityInstancePresenceDetails;
                var36 = var19 !== var16;
case 213:
                if(var36) { _fun0023_ip = 215; continue _fun0023 }
case 216:
                var19 = var3.messagesWithActivitiesLaunching;
                var16 = var2.props;
                var16 = var16.messagesWithActivitiesLaunching;
                var36 = var19 !== var16;
case 215:
                if(var36) { _fun0023_ip = 217; continue _fun0023 }
case 218:
                var36 = var12;
case 217:
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
                if(var21) { _fun0023_ip = 219; continue _fun0023 }
case 220:
                var16 = var3.referralTrialOfferId;
                var12 = var2.props;
                var12 = var12.referralTrialOfferId;
                var21 = var16 !== var12;
case 219:
                if(var21) { _fun0023_ip = 221; continue _fun0023 }
case 222:
                var16 = var3.isPremiumTier2User;
                var12 = var2.props;
                var12 = var12.isPremiumTier2User;
                var21 = var16 !== var12;
case 221:
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
                if(var14) { _fun0023_ip = 223; continue _fun0023 }
case 224:
                if(var39) { _fun0023_ip = 223; continue _fun0023 }
case 225:
                if(!(var38 === var37)) { _fun0023_ip = 223; continue _fun0023 }
case 226:
                if(var36) { _fun0023_ip = 223; continue _fun0023 }
case 227:
                var37 = var3.messages;
                var36 = var2.props;
                var36 = var36.messages;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 228:
                var37 = var3.editingMessageId;
                var36 = var2.props;
                var36 = var36.editingMessageId;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 229:
                var37 = var3.replyingMessageId;
                var36 = var2.props;
                var36 = var36.replyingMessageId;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 230:
                if(var16) { _fun0023_ip = 223; continue _fun0023 }
case 231:
                var37 = var3.messageAuthorActivities;
                var36 = var2.props;
                var36 = var36.messageAuthorActivities;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 232:
                var37 = var3.oldestUnreadMessageId;
                var36 = var2.props;
                var36 = var36.oldestUnreadMessageId;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 233:
                var37 = var3.invites;
                var36 = var2.props;
                var36 = var36.invites;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 234:
                var37 = var3.appDirectoryEmbedApplications;
                var36 = var2.props;
                var36 = var36.appDirectoryEmbedApplications;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 235:
                var37 = var3.invalidAppDirectoryEmbedApplicationIds;
                var36 = var2.props;
                var36 = var36.invalidAppDirectoryEmbedApplicationIds;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 236:
                var37 = var3.appDirectoryEmbedApplicationFetchStates;
                var36 = var2.props;
                var36 = var36.appDirectoryEmbedApplicationFetchStates;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 237:
                var37 = var3.guildTemplates;
                var36 = var2.props;
                var36 = var36.guildTemplates;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 238:
                var37 = var3.buildOverrides;
                var36 = var2.props;
                var36 = var36.buildOverrides;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 239:
                var37 = var3.experimentEmbeds;
                var36 = var2.props;
                var36 = var36.experimentEmbeds;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 240:
                var37 = var3.quests;
                var36 = var2.props;
                var36 = var36.quests;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 241:
                var37 = var3.isFetchingCurrentQuests;
                var36 = var2.props;
                var36 = var36.isFetchingCurrentQuests;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 242:
                var37 = var3.participantsLength;
                var36 = var2.props;
                var36 = var36.participantsLength;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 243:
                var37 = var3.isMessagesReady;
                var36 = var2.props;
                var36 = var36.isMessagesReady;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 244:
                var37 = var3.channelThreadsVersion;
                var36 = var2.props;
                var36 = var36.channelThreadsVersion;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 245:
                var37 = var3.rsvpVersion;
                var36 = var2.props;
                var36 = var36.rsvpVersion;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 246:
                var37 = var3.repliedIds;
                var36 = var2.props;
                var36 = var36.repliedIds;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 247:
                var37 = var3.hasLoadedExperiments;
                var36 = var2.props;
                var36 = var36.hasLoadedExperiments;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 248:
                var37 = var3.isMessageRequest;
                var36 = var2.props;
                var36 = var36.isMessageRequest;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 249:
                var37 = var3.isSpamMessageRequest;
                var36 = var2.props;
                var36 = var36.isSpamMessageRequest;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 250:
                var37 = var3.currentUserCommunicationDisabled;
                var36 = var2.props;
                var36 = var36.currentUserCommunicationDisabled;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 251:
                var37 = var3.userSettingsLocale;
                var36 = var2.props;
                var36 = var36.userSettingsLocale;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 252:
                var37 = var3.selectedSummary;
                var36 = var2.props;
                var36 = var36.selectedSummary;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 253:
                var37 = var3.showPushFeedback;
                var36 = var2.props;
                var36 = var36.showPushFeedback;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 254:
                var37 = var3.cacheStoreLoaded;
                var36 = var2.props;
                var36 = var36.cacheStoreLoaded;
                if(!(var37 === var36)) { _fun0023_ip = 223; continue _fun0023 }
case 255:
                if(var35) { _fun0023_ip = 223; continue _fun0023 }
case 256:
                if(var34) { _fun0023_ip = 223; continue _fun0023 }
case 257:
                if(var33) { _fun0023_ip = 223; continue _fun0023 }
case 258:
                if(var32) { _fun0023_ip = 223; continue _fun0023 }
case 259:
                if(!(var31 === var30)) { _fun0023_ip = 223; continue _fun0023 }
case 260:
                if(var29) { _fun0023_ip = 223; continue _fun0023 }
case 261:
                if(var28) { _fun0023_ip = 223; continue _fun0023 }
case 262:
                if(var27) { _fun0023_ip = 223; continue _fun0023 }
case 263:
                if(var26) { _fun0023_ip = 223; continue _fun0023 }
case 264:
                if(!(var7 == var10)) { _fun0023_ip = 223; continue _fun0023 }
case 265:
                if(!(var7 == var8)) { _fun0023_ip = 223; continue _fun0023 }
case 266:
                var27 = var3.androidKeyboardHeight;
                var26 = var2.props;
                var26 = var26.androidKeyboardHeight;
                if(!(var27 === var26)) { _fun0023_ip = 223; continue _fun0023 }
case 267:
                var27 = var3.mediaPostPreviewEmbeds;
                var26 = var2.props;
                var26 = var26.mediaPostPreviewEmbeds;
                if(!(var27 === var26)) { _fun0023_ip = 223; continue _fun0023 }
case 268:
                var27 = var3.shouldObscureSpoiler;
                var26 = var2.props;
                var26 = var26.shouldObscureSpoiler;
                if(!(var27 === var26)) { _fun0023_ip = 223; continue _fun0023 }
case 269:
                var27 = var3.shouldFilterKeywords;
                var26 = var2.props;
                var26 = var26.shouldFilterKeywords;
                if(!(var27 === var26)) { _fun0023_ip = 223; continue _fun0023 }
case 270:
                var27 = var3.shouldDisableInteractiveComponents;
                var26 = var2.props;
                var26 = var26.shouldDisableInteractiveComponents;
                if(!(var27 === var26)) { _fun0023_ip = 223; continue _fun0023 }
case 271:
                if(var25) { _fun0023_ip = 223; continue _fun0023 }
case 272:
                if(var24) { _fun0023_ip = 223; continue _fun0023 }
case 273:
                var25 = var3.threadStartingReferenceMessage;
                var24 = var2.props;
                var24 = var24.threadStartingReferenceMessage;
                if(!(var25 === var24)) { _fun0023_ip = 223; continue _fun0023 }
case 274:
                if(var23) { _fun0023_ip = 223; continue _fun0023 }
case 275:
                if(var22) { _fun0023_ip = 223; continue _fun0023 }
case 276:
                if(var21) { _fun0023_ip = 223; continue _fun0023 }
case 277:
                if(var20) { _fun0023_ip = 223; continue _fun0023 }
case 278:
                if(var19) { _fun0023_ip = 223; continue _fun0023 }
case 279:
                if(var18) { _fun0023_ip = 223; continue _fun0023 }
case 280:
                if(var12) { _fun0023_ip = 223; continue _fun0023 }
case 281:
                var12 = var2.recordTimings;
                var12 = var12.bind(var2)();
                _fun0023_ip = 147; continue _fun0023;
case 223:
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
                if(!(var19 !== var18)) { _fun0023_ip = 282; continue _fun0023 }
case 283:
                var18 = var2.props;
                var18 = var18.editingMessageId;
                if(!(var7 != var18)) { _fun0023_ip = 284; continue _fun0023 }
case 285:
                var19 = var12.add;
                var18 = var2.props;
                var18 = var18.editingMessageId;
                var18 = var19.bind(var12)(var18);
case 284:
                var18 = var3.editingMessageId;
                if(!(var7 != var18)) { _fun0023_ip = 282; continue _fun0023 }
case 286:
                var19 = var12.add;
                var18 = var3.editingMessageId;
                var18 = var19.bind(var12)(var18);
case 282:
                var19 = var3.replyingMessageId;
                var18 = var2.props;
                var18 = var18.replyingMessageId;
                if(!(var19 !== var18)) { _fun0023_ip = 287; continue _fun0023 }
case 288:
                var18 = var2.props;
                var18 = var18.replyingMessageId;
                if(!(var7 != var18)) { _fun0023_ip = 289; continue _fun0023 }
case 290:
                var19 = var12.add;
                var18 = var2.props;
                var18 = var18.replyingMessageId;
                var18 = var19.bind(var12)(var18);
case 289:
                var18 = var3.replyingMessageId;
                if(!(var7 != var18)) { _fun0023_ip = 287; continue _fun0023 }
case 291:
                var19 = var12.add;
                var18 = var3.replyingMessageId;
                var18 = var19.bind(var12)(var18);
case 287:
                var19 = var3.isMessagesReady;
                var18 = var2.props;
                var18 = var18.isMessagesReady;
                if(!(var19 === var18)) { _fun0023_ip = 292; continue _fun0023 }
case 293:
                var19 = var3.isCallActive;
                var18 = var2.props;
                var18 = var18.isCallActive;
                if(!(var19 === var18)) { _fun0023_ip = 292; continue _fun0023 }
case 294:
                if(var16) { _fun0023_ip = 292; continue _fun0023 }
case 295:
                var18 = var3.participantsLength;
                var16 = var2.props;
                var16 = var16.participantsLength;
                if(!(var18 !== var16)) { _fun0023_ip = 296; continue _fun0023 }
case 292:
                var16 = _closure1_slot1;
                var18 = _closure1_slot2;
                var15 = 63;
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
                    var1 = _closure1_slot63;
                    var1 = var1.CALL;
                    var1 = var2 === var1;
                    return var1;
                };
                var15 = var17.bind(var18)(var16, var15);
                if(!(var7 != var15)) { _fun0023_ip = 296; continue _fun0023 }
case 297:
                var16 = var12.add;
                var15 = var15.id;
                var15 = var16.bind(var12)(var15);
case 296:
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
                if(!var16) { _fun0023_ip = 298; continue _fun0023 }
case 299:
                var7 = var15;
case 298:
                var _closure3_slot28 = var7;
                var3 = var3.cacheStoreLoaded;
                var7 = !var3;
                if(!var7) { _fun0023_ip = 300; continue _fun0023 }
case 301:
                var3 = var2.props;
                var7 = var3.cacheStoreLoaded;
case 300:
                var _closure3_slot29 = var7;
                var3 = var2.props;
                var15 = var3.messages;
                var3 = var15.forEach;
                var1 = function(arg1) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                        var1 = arg1;
                        var3 = _closure3_slot21;
                        if(!var3) { _fun0024_ip = 4; continue _fun0024 }
case 302:
                        var3 = var1.activity;
                        var4 = null;
                        var5 = var4 == var3;
                        var4 = undefined;
                        if(var5) { _fun0024_ip = 128; continue _fun0024 }
case 3:
                        var4 = var3.type;
case 128:
                        var3 = _closure1_slot59;
                        var3 = var3.STREAM_REQUEST;
                        if(!(var4 !== var3)) { _fun0024_ip = 303; continue _fun0024 }
case 4:
                        var3 = _closure3_slot27;
                        if(!var3) { _fun0024_ip = 131; continue _fun0024 }
case 304:
                        var4 = var1.type;
                        var3 = _closure1_slot63;
                        var3 = var3.USER_JOIN;
                        if(!(var4 !== var3)) { _fun0024_ip = 305; continue _fun0024 }
case 131:
                        var3 = _closure3_slot26;
                        if(!var3) { _fun0024_ip = 306; continue _fun0024 }
case 307:
                        var4 = var1.type;
                        var3 = _closure1_slot63;
                        var3 = var3.REPLY;
                        if(!(var4 === var3)) { _fun0024_ip = 306; continue _fun0024 }
case 308:
                        var3 = var1.messageReference;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0024_ip = 306; continue _fun0024 }
case 148:
                        var4 = _closure3_slot0;
                        var4 = var4.props;
                        var5 = var4.repliedIds;
                        var4 = var5.has;
                        var3 = var3.message_id;
                        var3 = var4.bind(var5)(var3);
                        if(var3) { _fun0024_ip = 309; continue _fun0024 }
case 306:
                        var3 = _closure3_slot24;
                        if(!var3) { _fun0024_ip = 310; continue _fun0024 }
case 66:
                        var4 = var1.hasFlag;
                        var3 = _closure1_slot62;
                        var3 = var3.HAS_THREAD;
                        var3 = var4.bind(var1)(var3);
                        if(var3) { _fun0024_ip = 311; continue _fun0024 }
case 310:
                        var3 = _closure3_slot25;
                        if(!var3) { _fun0024_ip = 312; continue _fun0024 }
case 313:
                        var3 = var1.codedLinks;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(!(var4 > var3))) { _fun0024_ip = 227; continue _fun0024 }
case 312:
                        var3 = _closure3_slot19;
                        if(!var3) { _fun0024_ip = 118; continue _fun0024 }
case 314:
                        var4 = var1.type;
                        var3 = _closure1_slot63;
                        var3 = var3.EMOJI_ADDED;
                        if(!(var4 !== var3)) { _fun0024_ip = 315; continue _fun0024 }
case 118:
                        var3 = _closure3_slot10;
                        if(var3) { _fun0024_ip = 316; continue _fun0024 }
case 317:
                        var3 = _closure3_slot7;
                        if(!var3) { _fun0024_ip = 318; continue _fun0024 }
case 319:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var4 = var3.guildId;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0024_ip = 318; continue _fun0024 }
case 320:
                        var6 = _closure1_slot45;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var5 = var3.guildId;
                        var3 = var1.author;
                        var4 = var3.id;
                        var3 = undefined;
                        var4 = var6.bind(var3)(var5, var4);
                        var3 = _closure3_slot28;
                        if(!(!(var4 > var3))) { _fun0024_ip = 316; continue _fun0024 }
case 318:
                        var3 = _closure3_slot8;
                        if(!var3) { _fun0024_ip = 82; continue _fun0024 }
case 321:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.guildId;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0024_ip = 82; continue _fun0024 }
case 322:
                        var5 = var1.author;
                        var6 = var4 == var5;
                        var3 = undefined;
                        if(var6) { _fun0024_ip = 160; continue _fun0024 }
case 323:
                        var3 = var5.id;
case 160:
                        if(!(var4 == var3)) { _fun0024_ip = 324; continue _fun0024 }
case 82:
                        var3 = _closure3_slot9;
                        if(!var3) { _fun0024_ip = 325; continue _fun0024 }
case 326:
                        var3 = var1.author;
                        var4 = var3.id;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.currentUserId;
                        if(!(var4 !== var3)) { _fun0024_ip = 327; continue _fun0024 }
case 325:
                        var3 = _closure3_slot3;
                        if(!var3) { _fun0024_ip = 328; continue _fun0024 }
case 329:
                        var3 = _closure3_slot1;
                        var4 = var3.interactionStates;
                        var3 = var1.id;
                        var4 = var4[var3];
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var5 = var3.interactionStates;
                        var3 = var1.id;
                        var3 = var5[var3];
                        if(!(var4 === var3)) { _fun0024_ip = 330; continue _fun0024 }
case 328:
                        var3 = _closure3_slot5;
                        if(!var3) { _fun0024_ip = 331; continue _fun0024 }
case 332:
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
                        if(!(var4 === var3)) { _fun0024_ip = 333; continue _fun0024 }
case 331:
                        var3 = _closure3_slot6;
                        if(!var3) { _fun0024_ip = 334; continue _fun0024 }
case 335:
                        var3 = var1.components;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(var3 === var4)) { _fun0024_ip = 336; continue _fun0024 }
case 334:
                        var3 = _closure3_slot4;
                        if(!var3) { _fun0024_ip = 337; continue _fun0024 }
case 338:
                        var3 = _closure3_slot1;
                        var4 = var3.channelPolls;
                        var3 = var1.id;
                        var4 = var4[var3];
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var5 = var3.channelPolls;
                        var3 = var1.id;
                        var3 = var5[var3];
                        if(!(var4 === var3)) { _fun0024_ip = 339; continue _fun0024 }
case 337:
                        var3 = _closure3_slot13;
                        if(!var3) { _fun0024_ip = 340; continue _fun0024 }
case 177:
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
                        if(!(var4 === var3)) { _fun0024_ip = 341; continue _fun0024 }
case 340:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var4 = var3.channel;
                        var3 = var4.isForumPost;
                        var3 = var3.bind(var4)();
                        if(!var3) { _fun0024_ip = 342; continue _fun0024 }
case 343:
                        var3 = _closure3_slot11;
                        if(var3) { _fun0024_ip = 344; continue _fun0024 }
case 185:
                        var3 = _closure3_slot12;
                        if(!var3) { _fun0024_ip = 342; continue _fun0024 }
case 344:
                        var4 = var1.id;
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 79;
                        var5 = var5[var3];
                        var3 = undefined;
                        var6 = var6.bind(var3)(var5);
                        var5 = var6.castChannelIdAsMessageId;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.channelId;
                        var3 = var5.bind(var6)(var3);
                        if(!(var4 !== var3)) { _fun0024_ip = 345; continue _fun0024 }
case 342:
                        var3 = _closure3_slot15;
                        if(!var3) { _fun0024_ip = 346; continue _fun0024 }
case 347:
                        var4 = var1.activityInstance;
                        var3 = null;
                        if(!(var3 == var4)) { _fun0024_ip = 348; continue _fun0024 }
case 346:
                        var3 = _closure3_slot16;
                        if(!var3) { _fun0024_ip = 349; continue _fun0024 }
case 350:
                        var6 = var1.activity;
                        var5 = null;
                        var7 = var5 == var6;
                        var4 = undefined;
                        if(var7) { _fun0024_ip = 351; continue _fun0024 }
case 352:
                        var4 = var6.party_id;
case 351:
                        var3 = var5 != var4;
case 349:
                        if(!var3) { _fun0024_ip = 353; continue _fun0024 }
case 354:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
case 353:
                        var3 = var1.author;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0024_ip = 355; continue _fun0024 }
case 356:
                        var7 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var8 = 80;
                        var6 = var3[var8];
                        var3 = undefined;
                        var10 = var7.bind(var3)(var6);
                        var9 = var10.messageAuthorActivitiesChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var9.bind(var10)(var1, var7, var6);
                        if(var6) { _fun0024_ip = 357; continue _fun0024 }
case 358:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var10 = var7.bind(var3)(var6);
                        var9 = var10.codedLinksChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var9.bind(var10)(var1, var7, var6);
                        if(var6) { _fun0024_ip = 357; continue _fun0024 }
case 359:
                        var6 = _closure3_slot2;
                        if(!var6) { _fun0024_ip = 360; continue _fun0024 }
case 361:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var10 = var7.bind(var3)(var6);
                        var9 = var10.giftCodesChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var9.bind(var10)(var1, var7, var6);
                        if(var6) { _fun0024_ip = 357; continue _fun0024 }
case 360:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var9 = var7.bind(var3)(var6);
                        var8 = var9.mediaPostPreviewEmbedsChanged;
                        var7 = _closure3_slot1;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var8.bind(var9)(var1, var7, var6);
                        if(var6) { _fun0024_ip = 357; continue _fun0024 }
case 362:
                        var6 = _closure3_slot29;
                        if(!var6) { _fun0024_ip = 363; continue _fun0024 }
case 364:
                        var7 = var1.embeds;
                        var8 = var7.length;
                        var7 = 0;
                        var6 = var8 > var7;
case 363:
                        if(!var6) { _fun0024_ip = 365; continue _fun0024 }
case 366:
                        var8 = _closure3_slot23;
                        var7 = var8.add;
                        var6 = var1.id;
                        var6 = var7.bind(var8)(var6);
case 365:
                        var6 = var1.type;
                        var5 = _closure1_slot63;
                        var5 = var5.THREAD_STARTER_MESSAGE;
                        var5 = var6 === var5;
                        if(!var5) { _fun0024_ip = 367; continue _fun0024 }
case 368:
                        var6 = _closure3_slot1;
                        var7 = var6.threadStartingReferenceMessage;
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var6.threadStartingReferenceMessage;
                        var5 = var7 !== var6;
case 367:
                        if(!var5) { _fun0024_ip = 369; continue _fun0024 }
case 370:
                        var7 = _closure3_slot23;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
case 369:
                        var5 = _closure3_slot14;
                        if(!var5) { _fun0024_ip = 371; continue _fun0024 }
case 372:
                        var6 = var1.applicationId;
                        var5 = var4 != var6;
case 371:
                        if(!var5) { _fun0024_ip = 373; continue _fun0024 }
case 374:
                        var6 = _closure3_slot1;
                        var8 = var6.invalidApplicationIds;
                        var7 = var8.includes;
                        var6 = var1.applicationId;
                        var5 = var7.bind(var8)(var6);
case 373:
                        if(!var5) { _fun0024_ip = 375; continue _fun0024 }
case 376:
                        var7 = _closure3_slot23;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
case 375:
                        var5 = _closure3_slot17;
                        if(!var5) { _fun0024_ip = 377; continue _fun0024 }
case 378:
                        var8 = var1.referralTrialOfferId;
                        var5 = var4 != var8;
                        if(!var5) { _fun0024_ip = 379; continue _fun0024 }
case 380:
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var7 = var6.resolvedReferralTrialOfferIds;
                        var6 = var7.includes;
                        var5 = var6.bind(var7)(var8);
case 379:
                        if(!var5) { _fun0024_ip = 377; continue _fun0024 }
case 381:
                        var7 = _closure3_slot23;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
case 377:
                        var5 = _closure3_slot18;
                        if(!var5) { _fun0024_ip = 382; continue _fun0024 }
case 383:
                        var6 = var1.codedLinks;
                        var7 = var6.length;
                        var6 = 0;
                        var5 = var7 > var6;
case 382:
                        if(!var5) { _fun0024_ip = 384; continue _fun0024 }
case 385:
                        var7 = _closure3_slot23;
                        var6 = var7.add;
                        var5 = var1.id;
                        var5 = var6.bind(var7)(var5);
case 384:
                        var5 = _closure3_slot20;
                        if(var5) { _fun0024_ip = 209; continue _fun0024 }
case 386:
                        var5 = _closure3_slot22;
                        if(!var5) { _fun0024_ip = 355; continue _fun0024 }
case 209:
                        var5 = var1.activity;
                        var6 = var4 == var5;
                        var3 = undefined;
                        if(var6) { _fun0024_ip = 387; continue _fun0024 }
case 388:
                        var3 = var5.party_id;
case 387:
                        if(!(var4 != var3)) { _fun0024_ip = 355; continue _fun0024 }
case 389:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0024_ip = 355; continue _fun0024;
case 357:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0024_ip = 355; continue _fun0024;
case 348:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0024_ip = 355; continue _fun0024;
case 345:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0024_ip = 355; continue _fun0024;
case 341:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0024_ip = 355; continue _fun0024;
case 339:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0024_ip = 355; continue _fun0024;
case 336:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0024_ip = 355; continue _fun0024;
case 333:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0024_ip = 355; continue _fun0024;
case 330:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0024_ip = 355; continue _fun0024;
case 327:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0024_ip = 355; continue _fun0024;
case 324:
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
                        if(!(var4 !== var3)) { _fun0024_ip = 355; continue _fun0024 }
case 390:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0024_ip = 355; continue _fun0024;
case 316:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0024_ip = 355; continue _fun0024;
case 315:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0024_ip = 355; continue _fun0024;
case 227:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0024_ip = 355; continue _fun0024;
case 311:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0024_ip = 355; continue _fun0024;
case 309:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        var3 = undefined;
                        return var3;
case 305:
                        var5 = _closure3_slot23;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0024_ip = 355; continue _fun0024;
case 303:
                        var3 = _closure3_slot23;
                        var2 = var3.add;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
case 355:
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
case 147:
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
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var2 = var3.isAtBottom;
                var11 = var3.isNearBottom;
                var4 = undefined;
                if(!(var11 === var4)) { _fun0025_ip = 391; continue _fun0025 }
case 43:
                var11 = false;
case 391:
                var12 = var3.isNearTop;
                if(!(var12 === var4)) { _fun0025_ip = 392; continue _fun0025 }
case 44:
                var12 = false;
case 392:
                var13 = var3.dragging;
                if(!(var13 === var4)) { _fun0025_ip = 393; continue _fun0025 }
case 394:
                var13 = false;
case 393:
                var15 = var3.decelerating;
                if(!(var15 === var4)) { _fun0025_ip = 304; continue _fun0025 }
case 49:
                var15 = false;
case 304:
                var5 = var3.isFirstMessageVisible;
                if(!(var5 === var4)) { _fun0025_ip = 39; continue _fun0025 }
case 37:
                var5 = false;
case 39:
                var3 = var1.props;
                var9 = var3.messages;
                var6 = var3.channel;
                var3 = var3.onScroll;
                var7 = null;
                if(!(var7 != var6)) { _fun0025_ip = 395; continue _fun0025 }
case 396:
                var7 = var9.length;
                var10 = 0;
                if(!(var10 === var7)) { _fun0025_ip = 148; continue _fun0025 }
case 308:
                var7 = var9.loadingMore;
                if(var7) { _fun0025_ip = 395; continue _fun0025 }
case 148:
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var8 = 81;
                var8 = var16[var8];
                var14 = var14.bind(var4)(var8);
                var8 = var14.getIsScreenReaderEnabled;
                var14 = var8.bind(var14)();
                var8 = var9.loadingMore;
                var8 = !var8;
                if(!var8) { _fun0025_ip = 397; continue _fun0025 }
case 398:
                if(var13) { _fun0025_ip = 16; continue _fun0025 }
case 115:
                var13 = var15;
case 16:
                if(var13) { _fun0025_ip = 399; continue _fun0025 }
case 69:
                var13 = var14;
case 399:
                var8 = var13;
case 397:
                if(!var8) { _fun0025_ip = 73; continue _fun0025 }
case 400:
                var13 = var1.pendingUpdatesQueue;
                var13 = var13.length;
                var8 = var10 === var13;
case 73:
                var13 = var1.isNearTop;
                if(var13) { _fun0025_ip = 401; continue _fun0025 }
case 114:
                if(!var12) { _fun0025_ip = 401; continue _fun0025 }
case 402:
                var12 = var9.hasMoreBefore;
                if(!var12) { _fun0025_ip = 401; continue _fun0025 }
case 403:
                if(!var8) { _fun0025_ip = 401; continue _fun0025 }
case 404:
                var12 = var1.loadMoreBefore;
                var12 = var12.bind(var1)();
                _fun0025_ip = 405; continue _fun0025;
case 401:
                var12 = var1.isNearBottom;
                if(var12) { _fun0025_ip = 406; continue _fun0025 }
case 407:
                if(!var11) { _fun0025_ip = 406; continue _fun0025 }
case 408:
                var9 = var9.hasMoreAfter;
                if(!var9) { _fun0025_ip = 406; continue _fun0025 }
case 409:
                if(!var8) { _fun0025_ip = 406; continue _fun0025 }
case 410:
                var8 = var1.loadMoreAfter;
                var8 = var8.bind(var1)();
                _fun0025_ip = 405; continue _fun0025;
case 406:
                var8 = var1.isAtBottom;
                var8 = var8 === var2;
                if(!var8) { _fun0025_ip = 120; continue _fun0025 }
case 411:
                var8 = var1.hasHandledScroll;
case 120:
                if(var8) { _fun0025_ip = 405; continue _fun0025 }
case 412:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 77;
                var7 = var9[var7];
                var9 = var8.bind(var4)(var7);
                var8 = var9.updateChannelDimensions;
                var7 = var6.id;
                var6 = 0;
                if(!var2) { _fun0025_ip = 413; continue _fun0025 }
case 414:
                var6 = 1;
case 413:
                var18 = 1;
                var21 = var9;
                var20 = var7;
                var19 = var6;
                var17 = 0;
                var2 = var21[var8](var20, var19, var18, var17, var16);
                var2 = true;
                var1['hasHandledScroll'] = var2;
case 405:
                var2 = {};
                var2['isFirstMessageVisible'] = var5;
                var2 = var3.bind(var4)(var2);
                var2 = var1._chatUpdatesQueue;
                var1 = var2.tryFlush;
                var1 = var1.bind(var2)();
                var1 = true;
                return var1;
case 395:
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
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
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
                var1 = 64;
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
                if(!(!(var5 <= var4))) { _fun0026_ip = 25; continue _fun0026 }
case 415:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 82;
                var3 = var5[var3];
                var8 = var4.bind(var1)(var3);
                var6 = var8.questsVisibleMobileMessagesChanged;
                var3 = {};
                var3['visibleMessages'] = var7;
                var3['source'] = var9;
                var3 = var6.bind(var8)(var3);
                var3 = 83;
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
            var4 = _closure1_slot69;
            var3 = _closure1_slot68;
            var2 = {};
            var8 = _closure1_slot67;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 84;
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
            var13 = var13.handleTapChannelPromptButton;
            var5['onTapChannelPromptButton'] = var13;
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
            var6 = 85;
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
    var _closure1_slot71 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var9 = arg1;
            var7 = var9.channel;
            var _closure2_slot0 = var7;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 86;
            var8 = var2[var3];
            var4 = undefined;
            var13 = var5.bind(var4)(var8);
            var12 = var13.useStateFromStores;
            var8 = _closure1_slot49;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = var7.id;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                var3 = _closure1_slot49;
                var2 = var3.getMessages;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var81 = var12.bind(var13)(var11, var8, var10);
            var _closure2_slot1 = var81;
            var92 = var7.id;
            var _closure2_slot2 = var92;
            var8 = var7.getGuildId;
            var94 = var8.bind(var7)();
            var _closure2_slot3 = var94;
            var2 = var2[var3];
            var10 = var5.bind(var4)(var2);
            var8 = var10.useStateFromStores;
            var2 = _closure1_slot46;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot46;
                var2 = var3.getGuild;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var8.bind(var10)(var5, var2);
            var _closure2_slot4 = var12;
            var19 = null;
            var2 = var19 == var12;
            var43 = undefined;
            if(var2) { _fun0027_ip = 67; continue _fun0027 }
case 416:
            var43 = var12.systemChannelFlags;
case 67:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = var11[var3];
            var14 = var8.bind(var4)(var2);
            var13 = var14.useStateFromStores;
            var2 = _closure1_slot41;
            var10 = new Array(1);
            var10[0] = var2;
            var5 = function() {
                var2 = _closure1_slot41;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var93 = var13.bind(var14)(var10, var5, var2);
            var _closure2_slot5 = var93;
            var2 = 87;
            var5 = var11[var2];
            var5 = var8.bind(var4)(var5);
            var10 = var5.InlineAttachmentMedia;
            var5 = var10.useSetting;
            var100 = var5.bind(var10)();
            var5 = var11[var2];
            var5 = var8.bind(var4)(var5);
            var10 = var5.InlineEmbedMedia;
            var5 = var10.useSetting;
            var99 = var5.bind(var10)();
            var5 = var11[var2];
            var5 = var8.bind(var4)(var5);
            var10 = var5.RenderEmbeds;
            var5 = var10.useSetting;
            var98 = var5.bind(var10)();
            var5 = var11[var2];
            var5 = var8.bind(var4)(var5);
            var10 = var5.RenderReactions;
            var5 = var10.useSetting;
            var97 = var5.bind(var10)();
            var5 = var11[var2];
            var5 = var8.bind(var4)(var5);
            var10 = var5.DeveloperMode;
            var5 = var10.useSetting;
            var96 = var5.bind(var10)();
            var5 = var11[var2];
            var5 = var8.bind(var4)(var5);
            var10 = var5.AnimateEmoji;
            var5 = var10.useSetting;
            r103 = var5.bind(var10)();
            var5 = var11[var2];
            var5 = var8.bind(var4)(var5);
            var10 = var5.AnimateStickers;
            var5 = var10.useSetting;
            r102 = var5.bind(var10)();
            var2 = var11[var2];
            var2 = var8.bind(var4)(var2);
            var5 = var2.GifAutoPlay;
            var2 = var5.useSetting;
            r100 = var2.bind(var5)();
            var2 = var11[var3];
            var14 = var8.bind(var4)(var2);
            var13 = var14.useStateFromStores;
            var2 = _closure1_slot40;
            var10 = new Array(1);
            var10[0] = var2;
            var5 = function() {
                var1 = _closure1_slot40;
                var1 = var1.theme;
                return var1;
            };
            var2 = new Array(0);
            r106 = var13.bind(var14)(var10, var5, var2);
            var2 = 88;
            var2 = var11[var2];
            var5 = var8.bind(var4)(var2);
            var2 = var5.useIsMessageSwipeActionsEnabled;
            var13 = var2.bind(var5)();
            var2 = 89;
            var5 = var11[var2];
            var10 = var8.bind(var4)(var5);
            var5 = var10.useMessageAuthorActivities;
            var87 = var5.bind(var10)(var81);
            var2 = var11[var2];
            var5 = var8.bind(var4)(var2);
            var2 = var5.useFetchMessageApplications;
            var2 = var2.bind(var5)(var81);
            var16 = _closure1_slot1;
            var2 = 90;
            var2 = var11[var2];
            var2 = var16.bind(var4)(var2);
            var2 = var2.bind(var4)(var81, var7);
            var15 = _closure1_slot3;
            var10 = 2;
            var2 = var15.bind(var4)(var2, var10);
            var14 = 0;
            var17 = var2[var14];
            var5 = 1;
            var2 = var2[var5];
            var2 = var11[var3];
            var22 = var8.bind(var4)(var2);
            var21 = var22.useStateFromStores;
            var2 = _closure1_slot48;
            var20 = new Array(1);
            var20[0] = var2;
            var18 = function() {
                var2 = _closure1_slot48;
                var1 = var2.getInvites;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var86 = var21.bind(var22)(var20, var18, var2);
            var2 = var11[var3];
            var22 = var8.bind(var4)(var2);
            var21 = var22.useStateFromStoresObject;
            var2 = _closure1_slot22;
            var20 = new Array(1);
            var20[0] = var2;
            var18 = function() {
                var1 = {};
                var3 = _closure1_slot22;
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
            var85 = var2.appDirectoryEmbedApplications;
            var84 = var2.invalidAppDirectoryEmbedApplicationIds;
            var76 = var2.appDirectoryEmbedApplicationFetchStates;
            var2 = var11[var3];
            var21 = var8.bind(var4)(var2);
            var20 = var21.useStateFromStoresArray;
            var2 = _closure1_slot14;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = function() {
                var2 = _closure1_slot14;
                var1 = var2.getFetchingOrFailedFetchingIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var83 = var20.bind(var21)(var18, var2);
            var2 = var11[var3];
            var21 = var8.bind(var4)(var2);
            var20 = var21.useStateFromStoresArray;
            var2 = _closure1_slot13;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = function() {
                var2 = _closure1_slot13;
                var1 = var2.getFetchingIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var82 = var20.bind(var21)(var18, var2);
            var2 = var11[var3];
            var23 = var8.bind(var4)(var2);
            var22 = var23.useStateFromStoresArray;
            var2 = _closure1_slot12;
            var21 = new Array(1);
            var21[0] = var2;
            var20 = new Array(1);
            var20[0] = var92;
            var18 = function() {
                var4 = _closure1_slot12;
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
                var1 = 91;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var79 = var22.bind(var23)(var21, var18, var20);
            var18 = var11[var3];
            var22 = var8.bind(var4)(var18);
            var21 = var22.useStateFromStoresArray;
            var20 = new Array(2);
            var20[0] = var2;
            var18 = _closure1_slot51;
            var20[1] = var18;
            var18 = function() {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    var1 = new Array(0);
                    var _closure3_slot0 = var1;
                    var6 = function _loop(arg1) {
                        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                            var5 = arg1;
                            var _closure4_slot0 = var5;
                            var4 = _closure1_slot51;
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
                            if(var6) { _fun0029_ip = 417; continue _fun0029 }
case 51:
                            var3 = var2.details;
case 417:
                            if(!(var4 != var3)) { _fun0029_ip = 418; continue _fun0029 }
case 131:
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
case 418:
                            return var1;
                        }
                    };
                    var3 = _closure1_slot72;
                    var5 = _closure1_slot12;
                    var4 = var5.getEmbeddedActivitiesForChannel;
                    var2 = _closure2_slot2;
                    var2 = var4.bind(var5)(var2);
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if(var2) { _fun0028_ip = 419; continue _fun0028 }
case 141:
                    var2 = var3.value;
                    var2 = var6.bind(var5)(var2);
                    var7 = var4.bind(var5)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0028_ip = 141; continue _fun0028 }
case 419:
                    return var1;
                }
            };
            var77 = var21.bind(var22)(var20, var18);
            var18 = var11[var3];
            var22 = var8.bind(var4)(var18);
            var21 = var22.useStateFromStoresArray;
            var20 = new Array(1);
            var20[0] = var2;
            var18 = function() {
                var1 = global;
                var3 = var1.Set;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var7 = var4;
                var3 = new var7[var3](var6);
                var3 = var3 instanceof Object ? var3 : var4;
                var _closure3_slot0 = var3;
                var5 = _closure1_slot12;
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
            var78 = var21.bind(var22)(var20, var18);
            var18 = var11[var3];
            var21 = var8.bind(var4)(var18);
            var20 = var21.useStateFromStoresArray;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = function() {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                    var1 = new Array(0);
                    var3 = _closure1_slot72;
                    var4 = _closure1_slot12;
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
                    if(var2) { _fun0030_ip = 63; continue _fun0030 }
case 420:
                    var11 = var3.value;
                    var2 = _closure1_slot3;
                    var2 = var2.bind(var9)(var11, var5);
                    var11 = var2[var7];
                    var2 = var2[var4];
                    var11 = var2.isLaunching;
                    if(!var11) { _fun0030_ip = 11; continue _fun0030 }
case 9:
                    var12 = var2.componentId;
                    var11 = var6 != var12;
case 11:
                    if(!var11) { _fun0030_ip = 421; continue _fun0030 }
case 47:
                    var12 = var2.componentId;
                    var12 = var12.length;
                    var11 = var12 > var7;
case 421:
                    if(!var11) { _fun0030_ip = 111; continue _fun0030 }
case 422:
                    var11 = var1.push;
                    var2 = var2.componentId;
                    var2 = var11.bind(var1)(var2);
case 111:
                    var11 = var8.bind(var9)();
                    var2 = var11.done;
                    var3 = var11;
                    if(!var2) { _fun0030_ip = 420; continue _fun0030 }
case 63:
                    return var1;
                }
            };
            var80 = var20.bind(var21)(var18, var2);
            var2 = var11[var3];
            var21 = var8.bind(var4)(var2);
            var20 = var21.useStateFromStores;
            var2 = _closure1_slot29;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = function() {
                var2 = _closure1_slot29;
                var1 = var2.getMediaPostEmbeds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var75 = var20.bind(var21)(var18, var2);
            var2 = var11[var3];
            var22 = var8.bind(var4)(var2);
            var21 = var22.useStateFromStores;
            var2 = _closure1_slot26;
            var20 = new Array(1);
            var20[0] = var2;
            var18 = function() {
                var2 = _closure1_slot26;
                var1 = var2.getGuildTemplates;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var74 = var21.bind(var22)(var20, var18, var2);
            var2 = var11[var3];
            var22 = var8.bind(var4)(var2);
            var21 = var22.useStateFromStores;
            var2 = _closure1_slot15;
            var20 = new Array(1);
            var20[0] = var2;
            var18 = function() {
                var2 = _closure1_slot15;
                var1 = var2.getBuildOverrides;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var73 = var21.bind(var22)(var20, var18, var2);
            var2 = 92;
            var2 = var11[var2];
            var18 = var8.bind(var4)(var2);
            var2 = var18.useCodedLinksExperimentEmbeds;
            var72 = var2.bind(var18)();
            var2 = 93;
            var2 = var11[var2];
            var20 = var8.bind(var4)(var2);
            var18 = var20.useQuests;
            var2 = {'fetchPolicy': 'cache-or-network', 'callerSource': 'messages_native'};
            var2 = var18.bind(var20)(var2);
            var71 = var2.quests;
            var70 = var2.isFetchingCurrentQuests;
            var18 = var81.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot63;
                var1 = var1.PREMIUM_REFERRAL;
                var1 = var2 === var1;
                return var1;
            };
            var20 = var18.bind(var81)(var2);
            var18 = var20.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.referralTrialOfferId;
                return var1;
            };
            var20 = var18.bind(var20)(var2);
            var18 = var20.filter;
            var2 = 91;
            var2 = var11[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.isNotNullish;
            var2 = var18.bind(var20)(var2);
            var _closure2_slot6 = var2;
            var2 = var11[var3];
            var21 = var8.bind(var4)(var2);
            var20 = var21.useStateFromStoresArray;
            var2 = _closure1_slot32;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = function() {
                var3 = _closure2_slot6;
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                        var3 = _closure1_slot32;
                        var2 = var3.getRelevantUserTrialOffer;
                        var1 = arg1;
                        var2 = var2.bind(var3)(var1);
                        var1 = null;
                        var3 = var1 == var2;
                        var1 = undefined;
                        if(var3) { _fun0031_ip = 127; continue _fun0031 }
case 423:
                        var1 = var2.id;
case 127:
                        return var1;
                    }
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 91;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var21 = var20.bind(var21)(var18, var2);
            var2 = 94;
            var2 = var11[var2];
            var20 = var8.bind(var4)(var2);
            var18 = var20.useTrialOffer;
            var2 = _closure1_slot65;
            var20 = var18.bind(var20)(var2);
            var2 = var11[var3];
            var23 = var8.bind(var4)(var2);
            var22 = var23.useStateFromStores;
            var2 = _closure1_slot56;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 95;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.isPremiumExactly;
                var5 = _closure1_slot56;
                var2 = var5.getCurrentUser;
                var2 = var2.bind(var5)();
                var1 = _closure1_slot66;
                var1 = var1.TIER_2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var18 = var22.bind(var23)(var18, var2);
            var2 = var11[var3];
            var25 = var8.bind(var4)(var2);
            var24 = var25.useStateFromStores;
            var2 = _closure1_slot42;
            var23 = new Array(1);
            var23[0] = var2;
            var22 = new Array(1);
            var22[0] = var92;
            var2 = function() {
                var3 = _closure1_slot42;
                var2 = var3.getEditingMessageId;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var69 = var24.bind(var25)(var23, var2, var22);
            var2 = var11[var3];
            var25 = var8.bind(var4)(var2);
            var24 = var25.useStateFromStores;
            var2 = _closure1_slot34;
            var23 = new Array(1);
            var23[0] = var2;
            var22 = new Array(1);
            var22[0] = var92;
            var2 = function() {
                _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                    var3 = _closure1_slot34;
                    var2 = var3.getPendingReply;
                    var1 = _closure2_slot2;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0032_ip = 2; continue _fun0032 }
case 44:
                    var2 = var2.message;
                    var1 = var2.id;
case 2:
                    return var1;
                }
            };
            var68 = var24.bind(var25)(var23, var2, var22);
            var2 = var11[var3];
            var25 = var8.bind(var4)(var2);
            var24 = var25.useStateFromStores;
            var2 = _closure1_slot53;
            var23 = new Array(1);
            var23[0] = var2;
            var22 = new Array(1);
            var22[0] = var92;
            var2 = function() {
                var3 = _closure1_slot53;
                var2 = var3.getOldestUnreadMessageId;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var67 = var24.bind(var25)(var23, var2, var22);
            var2 = var11[var3];
            var25 = var8.bind(var4)(var2);
            var24 = var25.useStateFromStores;
            var2 = _closure1_slot47;
            var23 = new Array(1);
            var23[0] = var2;
            var22 = new Array(1);
            var22[0] = var94;
            var2 = function() {
                _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0033_ip = 392; continue _fun0033 }
case 424:
                    var4 = _closure1_slot47;
                    var3 = var4.canChatInGuild;
                    var2 = _closure2_slot3;
                    var1 = var3.bind(var4)(var2);
case 392:
                    return var1;
                }
            };
            var66 = var24.bind(var25)(var23, var2, var22);
            var2 = var11[var3];
            var25 = var8.bind(var4)(var2);
            var24 = var25.useStateFromStores;
            var2 = _closure1_slot50;
            var23 = new Array(1);
            var23[0] = var2;
            var22 = new Array(1);
            var22[0] = var7;
            var2 = function() {
                var4 = _closure1_slot50;
                var3 = var4.can;
                var1 = _closure1_slot64;
                var2 = var1.SEND_MESSAGES;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var65 = var24.bind(var25)(var23, var2, var22);
            var2 = 96;
            var2 = var11[var2];
            var2 = var16.bind(var4)(var2);
            var64 = var2.bind(var4)(var92);
            var2 = var11[var3];
            var24 = var8.bind(var4)(var2);
            var23 = var24.useStateFromStores;
            var2 = _closure1_slot57;
            var22 = new Array(1);
            var22[0] = var2;
            var16 = new Array(1);
            var16[0] = var93;
            var2 = function() {
                var4 = _closure1_slot57;
                var3 = var4.getUserVoiceChannelId;
                var2 = _closure1_slot61;
                var1 = _closure2_slot5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var63 = var23.bind(var24)(var22, var2, var16);
            var2 = var11[var3];
            var24 = var8.bind(var4)(var2);
            var23 = var24.useStateFromStores;
            var2 = _closure1_slot52;
            var22 = new Array(1);
            var22[0] = var2;
            var16 = function() {
                var2 = _closure1_slot52;
                var1 = var2.getChannelId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var62 = var23.bind(var24)(var22, var16, var2);
            var2 = var11[var3];
            var25 = var8.bind(var4)(var2);
            var24 = var25.useStateFromStores;
            var2 = _closure1_slot35;
            var23 = new Array(1);
            var23[0] = var2;
            var22 = new Array(1);
            var22[0] = var7;
            var16 = function() {
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                    var1 = _closure1_slot60;
                    var4 = var1.THREADS;
                    var3 = var4.has;
                    var1 = _closure2_slot0;
                    var1 = var1.type;
                    var3 = var3.bind(var4)(var1);
                    var4 = null;
                    var1 = null;
                    if(!var3) { _fun0034_ip = 308; continue _fun0034 }
case 425:
                    var3 = _closure2_slot0;
                    var3 = var3.parent_id;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0034_ip = 308; continue _fun0034 }
case 7:
                    var4 = _closure1_slot35;
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
case 308:
                    return var1;
                }
            };
            var25 = var24.bind(var25)(var23, var16, var22);
            var16 = var11[var3];
            var26 = var8.bind(var4)(var16);
            var24 = var26.useStateFromStoresObject;
            var16 = _closure1_slot43;
            var23 = new Array(1);
            var23[0] = var16;
            var22 = function() {
                var1 = {};
                var3 = _closure1_slot43;
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
            var16 = var24.bind(var26)(var23, var22, var16);
            var61 = var16.resolvingGiftCodes;
            var60 = var16.resolvedGiftCodes;
            var59 = var16.acceptingGiftCodes;
            var16 = var11[var3];
            var26 = var8.bind(var4)(var16);
            var24 = var26.useStateFromStores;
            var16 = _closure1_slot17;
            var23 = new Array(1);
            var23[0] = var16;
            var22 = new Array(1);
            var22[0] = var92;
            var16 = function() {
                var3 = _closure1_slot17;
                var2 = var3.getParticipants;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                var1 = var1.length;
                return var1;
            };
            var58 = var24.bind(var26)(var23, var16, var22);
            var16 = var11[var3];
            var26 = var8.bind(var4)(var16);
            var24 = var26.useStateFromStores;
            var16 = _closure1_slot55;
            var23 = new Array(1);
            var23[0] = var16;
            var22 = new Array(1);
            var22[0] = var92;
            var16 = function() {
                var3 = _closure1_slot55;
                var2 = var3.getFiles;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var57 = var24.bind(var26)(var23, var16, var22);
            var16 = var11[var3];
            var24 = var8.bind(var4)(var16);
            var23 = var24.useStateFromStores;
            var22 = new Array(1);
            var22[0] = var2;
            var16 = new Array(1);
            var16[0] = var92;
            var2 = function() {
                var3 = _closure1_slot35;
                var2 = var3.getReplyIdsForChannel;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var56 = var23.bind(var24)(var22, var2, var16);
            var2 = var11[var3];
            var24 = var8.bind(var4)(var2);
            var23 = var24.useStateFromStoresObject;
            var2 = _closure1_slot11;
            var22 = new Array(1);
            var22[0] = var2;
            var16 = function() {
                var1 = {};
                var2 = _closure1_slot11;
                var3 = var2.useReducedMotion;
                var1['useReducedMotion'] = var3;
                var3 = var2.roleStyle;
                var1['roleStyle'] = var3;
                var2 = var2.saturation;
                var1['saturation'] = var2;
                return var1;
            };
            var2 = new Array(0);
            var2 = var23.bind(var24)(var22, var16, var2);
            var55 = var2.useReducedMotion;
            var95 = var2.roleStyle;
            r105 = var2.saturation;
            var2 = var11[var3];
            var24 = var8.bind(var4)(var2);
            var23 = var24.useStateFromStores;
            var2 = _closure1_slot38;
            var22 = new Array(1);
            var22[0] = var2;
            var16 = new Array(1);
            var16[0] = var92;
            var2 = function() {
                var3 = _closure1_slot38;
                var2 = var3.getChannelThreadsVersion;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var54 = var23.bind(var24)(var22, var2, var16);
            var2 = var11[var3];
            var23 = var8.bind(var4)(var2);
            var22 = var23.useStateFromStoresObject;
            var2 = _closure1_slot28;
            var16 = new Array(1);
            var16[0] = var2;
            var2 = function() {
                var2 = _closure1_slot28;
                var1 = var2.getMessageInteractionStates;
                var1 = var1.bind(var2)();
                return var1;
            };
            var48 = var22.bind(var23)(var16, var2);
            var2 = var11[var3];
            var26 = var8.bind(var4)(var2);
            var24 = var26.useStateFromStores;
            var2 = _closure1_slot27;
            var23 = new Array(1);
            var23[0] = var2;
            var2 = 97;
            var2 = var11[var2];
            var2 = var8.bind(var4)(var2);
            r109 = var2.isVersionEqual;
            r111 = function() {
                var3 = _closure1_slot27;
                var1 = var3.getInteractionComponentStates;
                var2 = var1.bind(var3)();
                var1 = new Array(2);
                var1[0] = var2;
                var2 = var3.getInteractionComponentStateVersion;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            r110 = new Array(0);
            r113 = var26;
            r112 = var23;
            var2 = r113[var24](r112, r111, r110, r109, r108);
            var2 = var15.bind(var4)(var2, var10);
            var47 = var2[var14];
            var46 = var2[var5];
            var2 = var11[var3];
            var16 = var8.bind(var4)(var2);
            var15 = var16.useStateFromStores;
            var2 = _closure1_slot20;
            var14 = new Array(1);
            var14[0] = var2;
            var2 = function() {
                var1 = _closure1_slot20;
                var1 = var1.hasLoadedExperiments;
                return var1;
            };
            var44 = var15.bind(var16)(var14, var2);
            var2 = 98;
            var2 = var11[var2];
            var15 = var8.bind(var4)(var2);
            var14 = var15.useIsSpamMessageRequest;
            var2 = var7.id;
            var88 = var14.bind(var15)(var2);
            var2 = 99;
            var2 = var11[var2];
            var11 = var8.bind(var4)(var2);
            var8 = var11.useIsMessageRequest;
            var2 = var7.id;
            var89 = var8.bind(var11)(var2);
            var45 = var19 != var81;
            if(!var45) { _fun0027_ip = 426; continue _fun0027 }
case 427:
            var2 = var81.ready;
            if(var2) { _fun0027_ip = 428; continue _fun0027 }
case 429:
            var2 = var81.cached;
case 428:
            var45 = var2;
case 426:
            var91 = var19 != var81;
            if(!var91) { _fun0027_ip = 430; continue _fun0027 }
case 431:
            var91 = var81.cached;
case 430:
            var90 = var19 != var81;
            if(!var90) { _fun0027_ip = 432; continue _fun0027 }
case 433:
            var90 = var81.ready;
case 432:
            if(!var90) { _fun0027_ip = 434; continue _fun0027 }
case 435:
            var2 = var81.loadingMore;
            var90 = !var2;
case 434:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = var11[var3];
            var16 = var8.bind(var4)(var2);
            var15 = var16.useStateFromStores;
            var2 = _closure1_slot25;
            var14 = new Array(1);
            var14[0] = var2;
            var2 = function() {
                var2 = _closure1_slot25;
                var1 = var2.getRsvpVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var53 = var15.bind(var16)(var14, var2);
            var2 = var11[var3];
            var16 = var8.bind(var4)(var2);
            var15 = var16.useStateFromStores;
            var2 = _closure1_slot24;
            var14 = new Array(1);
            var14[0] = var2;
            var2 = function() {
                var2 = _closure1_slot24;
                var1 = var2.getMessagesVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var52 = var15.bind(var16)(var14, var2);
            var2 = var11[var3];
            var22 = var8.bind(var4)(var2);
            var16 = var22.useStateFromStores;
            var2 = _closure1_slot44;
            var15 = new Array(1);
            var15[0] = var2;
            var14 = function() {
                var2 = _closure1_slot44;
                var1 = var2.getCommunicationDisabledVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var51 = var16.bind(var22)(var15, var14);
            var14 = var11[var3];
            var22 = var8.bind(var4)(var14);
            var16 = var22.useStateFromStoresObject;
            var15 = new Array(1);
            var15[0] = var2;
            var14 = new Array(2);
            var14[0] = var94;
            var14[1] = var81;
            var2 = function() {
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0035_ip = 436; continue _fun0035 }
case 437:
                    var1 = _closure2_slot1;
                    if(!(var4 != var1)) { _fun0035_ip = 436; continue _fun0035 }
case 31:
                    var1 = {};
                    var _closure3_slot0 = var1;
                    var4 = _closure2_slot1;
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                            var2 = arg1;
                            var5 = var2.author;
                            var3 = null;
                            var6 = var3 == var5;
                            var1 = undefined;
                            var4 = undefined;
                            if(var6) { _fun0036_ip = 105; continue _fun0036 }
case 438:
                            var4 = var5.id;
case 105:
                            if(!(var3 != var4)) { _fun0036_ip = 307; continue _fun0036 }
case 439:
                            var7 = _closure1_slot44;
                            var6 = var7.getMember;
                            var5 = _closure2_slot3;
                            var4 = var2.author;
                            var4 = var4.id;
                            var4 = var6.bind(var7)(var5, var4);
                            if(!(var3 != var4)) { _fun0036_ip = 307; continue _fun0036 }
case 37:
                            var3 = _closure3_slot0;
                            var2 = var2.author;
                            var2 = var2.id;
                            var3[var2] = var4;
case 307:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 436:
                    var1 = {};
                    return var1;
                }
            };
            var50 = var16.bind(var22)(var15, var2, var14);
            var2 = var11[var3];
            var16 = var8.bind(var4)(var2);
            var15 = var16.useStateFromStores;
            var2 = _closure1_slot50;
            var14 = new Array(1);
            var14[0] = var2;
            var2 = function() {
                var4 = _closure1_slot50;
                var3 = var4.can;
                var1 = _closure1_slot64;
                var2 = var1.MODERATE_MEMBERS;
                var1 = _closure2_slot4;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var41 = var15.bind(var16)(var14, var2);
            var2 = 100;
            var2 = var11[var2];
            var11 = var8.bind(var4)(var2);
            var8 = var11.useCurrentUserCommunicationDisabled;
            var14 = var19 == var12;
            var2 = undefined;
            if(var14) { _fun0027_ip = 440; continue _fun0027 }
case 441:
            var2 = var12.id;
case 440:
            var8 = var8.bind(var11)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var8, var10);
            var42 = var2[var5];
            var8 = _closure1_slot0;
            r107 = _closure1_slot2;
            var2 = r107[var3];
            var11 = var8.bind(var4)(var2);
            var10 = var11.useStateFromStores;
            var2 = _closure1_slot39;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var1 = _closure1_slot39;
                var1 = var1.locale;
                return var1;
            };
            var40 = var10.bind(var11)(var5, var2);
            var2 = _closure1_slot1;
            var5 = 101;
            var5 = r107[var5];
            var14 = var2.bind(var4)(var5);
            var11 = var14.useExperiment;
            var10 = {};
            var5 = '41de6d_2';
            var10['location'] = var5;
            var5 = {};
            r108 = false;
            var5['autoTrackExposure'] = r108;
            var5 = var11.bind(var14)(var10, var5);
            var39 = var5.paymentsBlocked;
            var5 = r107[var3];
            var14 = var8.bind(var4)(var5);
            var11 = var14.useStateFromStores;
            var5 = _closure1_slot37;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = var3.isForumPost;
                    var1 = var1.bind(var3)();
                    var3 = !var1;
                    var1 = !var3;
                    if(var3) { _fun0037_ip = 394; continue _fun0037 }
case 391:
                    var4 = _closure1_slot37;
                    var3 = var4.hasJoined;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
case 394:
                    return var1;
                }
            };
            var38 = var11.bind(var14)(var10, var5);
            var5 = r107[var3];
            var14 = var8.bind(var4)(var5);
            var11 = var14.useStateFromStores;
            var5 = _closure1_slot30;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                var3 = _closure1_slot30;
                var2 = var3.shouldDisplayPrompt;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var37 = var11.bind(var14)(var10, var5);
            var5 = r107[var3];
            var14 = var8.bind(var4)(var5);
            var11 = var14.useStateFromStores;
            var5 = _closure1_slot33;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                var2 = _closure1_slot33;
                var1 = var2.isEligible;
                var1 = var1.bind(var2)();
                return var1;
            };
            var35 = var11.bind(var14)(var10, var5);
            var5 = r107[var3];
            var14 = var8.bind(var4)(var5);
            var11 = var14.useStateFromStores;
            var5 = _closure1_slot16;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                var2 = _closure1_slot16;
                var1 = var2.getLazyCacheStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var36 = var11.bind(var14)(var10, var5);
            var5 = 78;
            var5 = r107[var5];
            var10 = var8.bind(var4)(var5);
            var5 = var10.useMessageJumpAndroidKeyboardHeight;
            var34 = var5.bind(var10)();
            var5 = 102;
            var5 = r107[var5];
            var5 = var2.bind(var4)(var5);
            var32 = var5.bind(var4)();
            var5 = 103;
            var5 = r107[var5];
            var10 = var8.bind(var4)(var5);
            var5 = var10.useChannelSummariesExperiment;
            var5 = var5.bind(var10)(var7);
            var _closure2_slot7 = var5;
            var10 = r107[var3];
            var15 = var8.bind(var4)(var10);
            var14 = var15.useStateFromStores;
            var10 = _closure1_slot36;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = new Array(2);
            var10[0] = var5;
            var5 = var7.id;
            var10[1] = var5;
            var5 = function() {
                _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                    var3 = _closure2_slot7;
                    var1 = null;
                    if(!var3) { _fun0038_ip = 57; continue _fun0038 }
case 45:
                    var4 = _closure1_slot36;
                    var3 = var4.selectedSummary;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 57:
                    return var1;
                }
            };
            var33 = var14.bind(var15)(var11, var5, var10);
            var14 = _closure1_slot9;
            var11 = var14.useEffect;
            var5 = var7.id;
            var10 = new Array(5);
            var10[0] = var5;
            var5 = var81.hasMoreAfter;
            var10[1] = var5;
            var5 = var81.hasMoreBefore;
            var10[2] = var5;
            var5 = var81.length;
            var10[3] = var5;
            var5 = var81.ready;
            var10[4] = var5;
            var5 = function() {
                _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var2 = var2.ready;
                    var2 = !var2;
                    if(var2) { _fun0039_ip = 50; continue _fun0039 }
case 442:
                    var3 = _closure2_slot1;
                    var4 = var3.length;
                    var3 = 0;
                    var2 = var3 !== var4;
case 50:
                    if(var2) { _fun0039_ip = 52; continue _fun0039 }
case 127:
                    var3 = _closure2_slot1;
                    var2 = var3.hasMoreBefore;
case 52:
                    if(var2) { _fun0039_ip = 49; continue _fun0039 }
case 393:
                    var3 = _closure2_slot1;
                    var2 = var3.hasMoreAfter;
case 49:
                    if(var2) { _fun0039_ip = 443; continue _fun0039 }
case 444:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 77;
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
case 443:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var11.bind(var14)(var5, var10);
            var5 = 83;
            var10 = r107[var5];
            var15 = var8.bind(var4)(var10);
            var11 = var15.useShouldTrackAnnouncementMessageViews;
            var10 = {};
            var10['guild'] = var12;
            var10['channel'] = var7;
            var10['messages'] = var81;
            var10['isMessagesReady'] = var45;
            var12 = 'Messages';
            var10['location'] = var12;
            var31 = var11.bind(var15)(var10);
            var5 = r107[var5];
            var11 = var8.bind(var4)(var5);
            var10 = var11.useShouldTrackRichPresenceInviteEmbedViews;
            var5 = {};
            var5['messages'] = var81;
            var5['isMessagesReady'] = var45;
            var30 = var10.bind(var11)(var5);
            var5 = 104;
            var5 = r107[var5];
            var10 = var8.bind(var4)(var5);
            var5 = var10.useShouldDisplaySpoilerObscurity;
            var29 = var5.bind(var10)(var7);
            var5 = 105;
            var5 = r107[var5];
            var10 = var8.bind(var4)(var5);
            var5 = var10.useIsAgeVerified;
            var15 = var5.bind(var10)();
            var11 = var14.useEffect;
            var10 = new Array(2);
            var10[0] = var92;
            var10[1] = var94;
            var5 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 106;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.handleChannelSelect;
                var1 = var1.bind(var2)();
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 106;
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
            var5 = 107;
            var5 = r107[var5];
            var11 = var8.bind(var4)(var5);
            var10 = var11.useShouldDisableInteractiveComponents;
            var5 = var7.id;
            var28 = var10.bind(var11)(var5);
            var10 = _closure1_slot31;
            var5 = var7.id;
            var27 = var10.bind(var4)(var5);
            var5 = r107[var3];
            var16 = var8.bind(var4)(var5);
            var14 = var16.useStateFromStores;
            var5 = _closure1_slot21;
            var11 = new Array(1);
            var11[0] = var5;
            var10 = new Array(1);
            var10[0] = var92;
            var5 = function() {
                var3 = _closure1_slot21;
                var2 = var3.getChannelFpInfo;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var26 = var14.bind(var16)(var11, var5, var10);
            var5 = 108;
            var5 = r107[var5];
            var5 = var2.bind(var4)(var5);
            r101 = var5.bind(var4)();
            var5 = 109;
            var5 = r107[var5];
            var5 = var2.bind(var4)(var5);
            var5 = var5.bind(var4)(var81);
            var23 = var5.unloadedContentEntryMessageIds;
            var22 = var5.unloadableContentEntryMessageIds;
            var5 = r107[var3];
            var14 = var8.bind(var4)(var5);
            var11 = var14.useStateFromStores;
            var5 = _closure1_slot56;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                    var2 = _closure1_slot56;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0040_ip = 127; continue _fun0040 }
case 105:
                    var3 = var4.isStaff;
                    var2 = var3.bind(var4)();
case 127:
                    var1 = var1 != var2;
                    if(!var1) { _fun0040_ip = 52; continue _fun0040 }
case 445:
                    var1 = var2;
case 52:
                    return var1;
                }
            };
            r104 = var11.bind(var14)(var10, var5);
            var5 = 110;
            var5 = r107[var5];
            var10 = var8.bind(var4)(var5);
            var5 = var10.useShouldFilterKeywords;
            var24 = var5.bind(var10)();
            var5 = r107[var3];
            var14 = var8.bind(var4)(var5);
            var11 = var14.useStateFromStores;
            var5 = _closure1_slot23;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                var2 = _closure1_slot23;
                var1 = var2.getVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var49 = var11.bind(var14)(var10, var5);
            var5 = 111;
            var5 = r107[var5];
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
            var16 = var10.bind(var11)(var5);
            var5 = r107[var3];
            var14 = var8.bind(var4)(var5);
            var11 = var14.useStateFromStores;
            var5 = _closure1_slot19;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                var3 = _closure1_slot19;
                var2 = var3.getGuildEmoji;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var11.bind(var14)(var10, var5);
            var5 = 112;
            var5 = r107[var5];
            var11 = var8.bind(var4)(var5);
            var10 = var11.useDoubleTapToReactExperiment;
            var5 = {};
            var5['autoTrackExposure'] = r108;
            var5 = var10.bind(var11)(var12, var5);
            var12 = var5.enabled;
            var5 = r107[var3];
            r108 = var8.bind(var4)(var5);
            var11 = r108.useStateFromStoresArray;
            var5 = _closure1_slot54;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                var5 = _closure1_slot54;
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
                var1 = 91;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var11.bind(r108)(var10, var5);
            var _closure2_slot8 = var11;
            var3 = r107[var3];
            var10 = var8.bind(var4)(var3);
            var5 = var10.useStateFromStoresObject;
            r108 = _closure1_slot58;
            var3 = new Array(1);
            var3[0] = r108;
            var1 = function() {
                var4 = _closure2_slot8;
                var3 = var4.reduce;
                var2 = function(arg1, arg2) {
                    _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                        var1 = arg1;
                        var2 = arg2;
                        var3 = var2.application_id;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0041_ip = 446; continue _fun0041 }
case 46:
                        var7 = _closure1_slot58;
                        var6 = var7.getState;
                        var5 = var2.application_id;
                        var3 = _closure1_slot59;
                        var3 = var3.JOIN;
                        var3 = var6.bind(var7)(var5, var3);
                        if(!(var4 != var3)) { _fun0041_ip = 30; continue _fun0041 }
case 447:
                        var2 = var2.application_id;
                        var1[var2] = var3;
case 30:
                        return var1;
case 446:
                        return var1;
                    }
                };
                var1 = {};
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var10 = var5.bind(var10)(var3, var1);
            var3 = _closure1_slot69;
            var5 = 113;
            var1 = r107[var5];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var5 = r107[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.Profiles;
            var5 = var5.Messages;
            var1['profile'] = var5;
            var5 = var7.isThread;
            var7 = var5.bind(var7)();
            if(!var7) { _fun0027_ip = 448; continue _fun0027 }
case 449:
            r107 = _closure1_slot67;
            var8 = _closure1_slot1;
            r108 = _closure1_slot2;
            var5 = 114;
            var5 = r108[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            r108 = true;
            var5['absolute'] = r108;
            var7 = r107.bind(var4)(var8, var5);
case 448:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot67;
            var7 = _closure1_slot71;
            var6 = {};
            r107 = arg2;
            var6['ref'] = r107;
            var6['theme'] = r106;
            var6['saturation'] = r105;
            var6['isStaff'] = r104;
            var6['animateEmoji'] = r103;
            var6['animateStickers'] = r102;
            var6['containerWidth'] = r101;
            var6['gifAutoPlay'] = r100;
            var6['inlineAttachmentMedia'] = var100;
            var6['inlineEmbedMedia'] = var99;
            var6['renderEmbeds'] = var98;
            var6['renderReactions'] = var97;
            var6['developerMode'] = var96;
            var6['roleStyle'] = var95;
            var6['guildId'] = var94;
            var6['currentUserId'] = var93;
            var6['channelId'] = var92;
            var6['isMessagesReady'] = var45;
            var6['isMessagesCached'] = var91;
            var6['isMessagesAckable'] = var90;
            var6['isMessageRequest'] = var89;
            var6['isSpamMessageRequest'] = var88;
            var6['messageAuthorActivities'] = var87;
            var6['invites'] = var86;
            var6['appDirectoryEmbedApplications'] = var85;
            var6['invalidAppDirectoryEmbedApplicationIds'] = var84;
            var6['invalidApplicationIds'] = var83;
            var6['applicationAssetFetchingIds'] = var82;
            var6['messages'] = var81;
            var6['messagesWithActivitiesLaunching'] = var80;
            var6['activityInstanceIds'] = var79;
            var6['activityParticipants'] = var78;
            var6['activityInstancePresenceDetails'] = var77;
            var6['appDirectoryEmbedApplicationFetchStates'] = var76;
            var6['mediaPostPreviewEmbeds'] = var75;
            var6['guildTemplates'] = var74;
            var6['buildOverrides'] = var73;
            var6['experimentEmbeds'] = var72;
            var6['quests'] = var71;
            var6['isFetchingCurrentQuests'] = var70;
            var6['editingMessageId'] = var69;
            var6['replyingMessageId'] = var68;
            var6['oldestUnreadMessageId'] = var67;
            var6['canChat'] = var66;
            var6['canSendMessages'] = var65;
            var6['isCallActive'] = var64;
            var6['voiceStatePrivateChannelId'] = var63;
            var6['currentClientVoiceChannelId'] = var62;
            var6['resolvingGiftCodes'] = var61;
            var6['resolvedGiftCodes'] = var60;
            var6['acceptingGiftCodes'] = var59;
            var6['participantsLength'] = var58;
            var6['uploads'] = var57;
            var6['repliedIds'] = var56;
            var6['useReducedMotion'] = var55;
            var6['channelThreadsVersion'] = var54;
            var6['rsvpVersion'] = var53;
            var6['failedMessagesVersion'] = var52;
            var6['communicationDisabledVersion'] = var51;
            var6['messageAuthorMembers'] = var50;
            var6['forwardGuildsVersion'] = var49;
            var6['interactionStates'] = var48;
            var6['interactionComponentStates'] = var47;
            var6['interactionComponentStatesVersion'] = var46;
            if(!var44) { _fun0027_ip = 450; continue _fun0027 }
case 451:
            var44 = var45;
case 450:
            var6['hasLoadedExperiments'] = var44;
            var6['guildSystemChannelFlags'] = var43;
            var6['currentUserCommunicationDisabled'] = var42;
            var6['renderCommunicationDisabled'] = var41;
            var6['userSettingsLocale'] = var40;
            var6['paymentsBlocked'] = var39;
            var6['isFollowingForumPost'] = var38;
            var6['showMediaPostSharePrompt'] = var37;
            var6['showPushFeedback'] = var35;
            var35 = 'initializing';
            var35 = var35 !== var36;
            var6['cacheStoreLoaded'] = var35;
            var6['androidKeyboardHeight'] = var34;
            var6['selectedSummary'] = var33;
            var6['keyboardType'] = var32;
            var6['shouldTrackAnnouncementMessageViews'] = var31;
            var6['shouldTrackRichPresenceInviteEmbedViews'] = var30;
            var6['shouldObscureSpoiler'] = var29;
            var6['shouldDisableInteractiveComponents'] = var28;
            var6['channelPolls'] = var27;
            var6['explicitMediaFalsePositiveInfo'] = var26;
            var6['threadStartingReferenceMessage'] = var25;
            var6['shouldFilterKeywords'] = var24;
            var6['unloadedContentEntryMessageIds'] = var23;
            var6['unloadableContentEntryMessageIds'] = var22;
            var6['resolvedReferralTrialOfferIds'] = var21;
            var21 = var19 == var20;
            var19 = undefined;
            if(var21) { _fun0027_ip = 452; continue _fun0027 }
case 453:
            var19 = var20.id;
case 452:
            var6['referralTrialOfferId'] = var19;
            var6['isPremiumTier2User'] = var18;
            var6['activityInviteMessageIds'] = var17;
            var6['guildInviteColorsFetched'] = var16;
            var6['isAgeVerified'] = var15;
            var6['guildEmojis'] = var14;
            var6['enableSwipeActions'] = var13;
            var6['doubleTapToReactEnabled'] = var12;
            var6['selfActivities'] = var11;
            var6['activityLaunchJoinStates'] = var10;
            r112 = var6;
            r111 = var9;
            var9 = copyDataProperties(r112, r111);
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 'MessagesConnected';
    var2['displayName'] = var4;
    var4 = 115;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/Messages.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();