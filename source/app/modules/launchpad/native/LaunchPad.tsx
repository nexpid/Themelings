// app/modules/launchpad/native/LaunchPad.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var16 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var16;
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
            var9 = _closure1_slot37;
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
            var7 = _closure1_slot37;
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
    var _closure1_slot36 = var1;
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
    var _closure1_slot37 = var1;
    var1 = function TabButton(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var9 = var1.onPress;
            var6 = var1.icon;
            var8 = var1.accessibilityLabel;
            var5 = var1.selected;
            var10 = var1.style;
            var1 = _closure1_slot27;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot25;
            var2 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 21;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableHighlight;
            var1 = {};
            var1['onPress'] = var9;
            var12 = var11.tab;
            var9 = new Array(3);
            var9[0] = var12;
            var9[1] = var10;
            var10 = undefined;
            if(!var5) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var10 = var11.tabSelected;
case 36:
            var9[2] = var10;
            var1['style'] = var9;
            var1['accessibilityLabel'] = var8;
            var8 = 'tab';
            var1['accessibilityRole'] = var8;
            var8 = {};
            var8['selected'] = var5;
            var1['accessibilityState'] = var8;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 19;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.colors;
            if(var5) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var5 = var7.INTERACTIVE_NORMAL;
            _fun0004_ip = 40; continue _fun0004;
case 38:
            var5 = var7.INTERACTIVE_ACTIVE;
case 40:
            var5 = var6.bind(var4)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function TabHeader(arg1) {
        var1 = arg1;
        var5 = var1.text;
        var2 = _closure1_slot27;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var3 = _closure1_slot25;
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 22;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.Text;
        var1 = {'style': null, 'variant': 'heading-md/extrabold', 'maxFontSizeMultiplier': 1.75, 'accessibilityRole': 'header'};
        var6 = var6.subheader;
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot39 = var1;
    var1 = function createAndAppendChannel(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var5 = arg3;
            var1 = var2.has;
            var1 = var1.bind(var2)(var3);
            if(var1) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 34;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var6.bind(var4)(var1);
            var4 = var1.bind(var4)(var3);
            var1 = null;
            if(!(var1 != var4)) { _fun0005_ip = 41; continue _fun0005 }
case 43:
            var1 = var5.push;
            var1 = var1.bind(var5)(var4);
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
case 41:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var1 = function useInitialResults(arg1) {
        var2 = arg1;
        var14 = var2.disabled;
        var _closure2_slot0 = var14;
        var13 = var2.visible;
        var _closure2_slot1 = var13;
        var10 = _closure1_slot0;
        var12 = _closure1_slot2;
        var2 = 35;
        var3 = var12[var2];
        var11 = undefined;
        var4 = var10.bind(var11)(var3);
        var3 = var4.getSelectedGuildFromRoute;
        var4 = var3.bind(var4)();
        var _closure2_slot2 = var4;
        var2 = var12[var2];
        var3 = var10.bind(var11)(var2);
        var2 = var3.getSelectedChannelFromRoute;
        var8 = var2.bind(var3)();
        var _closure2_slot3 = var8;
        var3 = _closure1_slot4;
        var2 = var3.useState;
        var5 = var2.bind(var3)(var11);
        var3 = _closure1_slot3;
        var2 = 2;
        var5 = var3.bind(var11)(var5, var2);
        var2 = 0;
        var3 = var5[var2];
        var _closure2_slot4 = var3;
        var2 = 1;
        var2 = var5[var2];
        var _closure2_slot5 = var2;
        var15 = _closure1_slot4;
        var9 = var15.useEffect;
        var6 = new Array(1);
        var6[0] = var13;
        var5 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                var2 = _closure2_slot5;
                var1 = undefined;
                var1 = var2.bind(var1)(var1);
case 44:
                var1 = undefined;
                return var1;
            }
        };
        var5 = var9.bind(var15)(var5, var6);
        var9 = _closure1_slot4;
        var6 = var9.useRef;
        var5 = new Array(0);
        var5 = var6.bind(var9)(var5);
        var _closure2_slot6 = var5;
        var9 = 23;
        var5 = var12[var9];
        var16 = var10.bind(var11)(var5);
        var15 = var16.useStateFromStores;
        var5 = _closure1_slot19;
        var6 = new Array(1);
        var6[0] = var5;
        var5 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                var1 = _closure2_slot6;
                var1 = var1.current;
                _fun0007_ip = 46; continue _fun0007;
case 44:
                var3 = _closure1_slot19;
                var2 = var3.getUnreadPrivateChannelIds;
                var1 = var2.bind(var3)();
case 46:
                return var1;
            }
        };
        var6 = var15.bind(var16)(var6, var5);
        var _closure2_slot7 = var6;
        var16 = _closure1_slot4;
        var15 = var16.useEffect;
        var5 = function() {
            var2 = _closure2_slot6;
            var1 = _closure2_slot7;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var5 = var15.bind(var16)(var5);
        var16 = _closure1_slot4;
        var15 = var16.useRef;
        var5 = new Array(0);
        var5 = var15.bind(var16)(var5);
        var _closure2_slot8 = var5;
        var5 = var12[var9];
        var18 = var10.bind(var11)(var5);
        var17 = var18.useStateFromStoresArray;
        var5 = _closure1_slot18;
        var16 = new Array(2);
        var16[0] = var5;
        var5 = _closure1_slot21;
        var16[1] = var5;
        var15 = new Array(2);
        var15[0] = var13;
        var15[1] = var4;
        var5 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = _closure2_slot1;
                if(var1) { _fun0008_ip = 44; continue _fun0008 }
case 45:
                var1 = _closure2_slot8;
                var1 = var1.current;
                return var1;
case 44:
                var1 = new Array(0);
                var5 = new Array(0);
                var3 = _closure1_slot36;
                var4 = _closure1_slot21;
                var2 = var4.getFlattenedGuildIds;
                var2 = var2.bind(var4)();
                var7 = undefined;
                var6 = var3.bind(var7)(var2);
                var3 = var6.bind(var7)();
                var2 = var3.done;
                var4 = 0;
                if(var2) { _fun0008_ip = 15; continue _fun0008 }
case 47:
                var10 = var3.value;
                var2 = _closure2_slot2;
                if(!(var10 !== var2)) { _fun0008_ip = 48; continue _fun0008 }
case 49:
                var11 = _closure1_slot18;
                var2 = var11.getMentionCount;
                var2 = var2.bind(var11)(var10);
                if(!(!(var2 > var4))) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                var11 = _closure1_slot18;
                var2 = var11.hasUnread;
                var2 = var2.bind(var11)(var10);
                if(!var2) { _fun0008_ip = 48; continue _fun0008 }
case 52:
                var2 = var5.push;
                var2 = var2.bind(var5)(var10);
                _fun0008_ip = 48; continue _fun0008;
case 50:
                var2 = var1.push;
                var2 = var2.bind(var1)(var10);
case 48:
                var10 = var6.bind(var7)();
                var2 = var10.done;
                var3 = var10;
                if(!var2) { _fun0008_ip = 47; continue _fun0008 }
case 15:
                var3 = var1.push;
                var2 = new Array(0);
                var14 = var2;
                var13 = var5;
                var12 = 0;
                var4 = arraySpread(var14, var13, var12);
                var14 = var3;
                var13 = var2;
                var12 = var1;
                var2 = apply(var14, var13, var12);
                return var1;
            }
        };
        var5 = var17.bind(var18)(var16, var5, var15);
        var _closure2_slot9 = var5;
        var17 = _closure1_slot4;
        var16 = var17.useEffect;
        var15 = function() {
            var2 = _closure2_slot8;
            var1 = _closure2_slot9;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var15 = var16.bind(var17)(var15);
        var17 = _closure1_slot4;
        var16 = var17.useRef;
        var15 = new Array(0);
        var15 = var16.bind(var17)(var15);
        var _closure2_slot10 = var15;
        var9 = var12[var9];
        var16 = var10.bind(var11)(var9);
        var15 = var16.useStateFromStoresArray;
        var9 = _closure1_slot7;
        var12 = new Array(5);
        var12[0] = var9;
        var9 = _closure1_slot23;
        var12[1] = var9;
        var9 = _closure1_slot20;
        var12[2] = var9;
        var9 = _closure1_slot22;
        var12[3] = var9;
        var9 = _closure1_slot12;
        var12[4] = var9;
        var10 = new Array(4);
        var10[0] = var14;
        var10[1] = var4;
        var10[2] = var13;
        var10[3] = var3;
        var9 = function() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = _closure2_slot4;
                var3 = null;
                if(!(var3 == var4)) { _fun0009_ip = 44; continue _fun0009 }
case 53:
                var9 = _closure2_slot2;
                _fun0009_ip = 54; continue _fun0009;
case 44:
                var9 = _closure2_slot4;
case 54:
                var4 = _closure2_slot0;
                if(var4) { _fun0009_ip = 55; continue _fun0009 }
case 56:
                if(!(var3 != var9)) { _fun0009_ip = 55; continue _fun0009 }
case 57:
                var3 = _closure2_slot1;
                if(var3) { _fun0009_ip = 58; continue _fun0009 }
case 5:
                var1 = _closure2_slot10;
                var1 = var1.current;
                return var1;
case 58:
                var1 = new Array(0);
                var _closure3_slot0 = var1;
                var7 = new Array(0);
                var _closure3_slot1 = var7;
                var5 = new Array(0);
                var _closure3_slot2 = var5;
                var6 = new Array(0);
                var _closure3_slot3 = var6;
                var3 = global;
                var10 = var3.Object;
                var8 = var10.values;
                var11 = _closure1_slot12;
                var4 = var11.getActiveJoinedUnreadThreadsForGuild;
                var4 = var4.bind(var11)(var9);
                var11 = var8.bind(var10)(var4);
                var8 = var11.length;
                var4 = 0;
                var8 = var4 < var8;
                var10 = 0;
                if(!var8) { _fun0009_ip = 20; continue _fun0009 }
case 59:
                var8 = var11[var10];
                var14 = var8;
                for(var8 in var14)
case 60:
                {
case 61:
                    var17 = var8;
                    var16 = var7.push;
                    var16 = var16.bind(var7)(var17);
                    _fun0009_ip = 60; continue _fun0009;
                }
case 62:
                var10 = var10 + 1;
                var8 = var11.length;
                if(var10 < var8) { _fun0009_ip = 59; continue _fun0009 }
case 20:
                var8 = _closure1_slot7;
                var3 = var8.getGuild;
                var3 = var3.bind(var8)(var9);
                var9 = var3.guildChannels;
                var8 = var9.forEachChannel;
                var3 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var2 = arg1;
                        var5 = _closure1_slot14;
                        var4 = var2.type;
                        var1 = undefined;
                        var4 = var5.bind(var1)(var4);
                        if(var4) { _fun0010_ip = 63; continue _fun0010 }
case 54:
                        var6 = _closure1_slot13;
                        var5 = var2.type;
                        var5 = var6.bind(var1)(var5);
                        if(!var5) { _fun0010_ip = 64; continue _fun0010 }
case 63:
                        var8 = _closure1_slot22;
                        var7 = var8.isChannelMuted;
                        var6 = var2.guild_id;
                        var5 = var2.id;
                        var5 = var7.bind(var8)(var6, var5);
                        if(var5) { _fun0010_ip = 64; continue _fun0010 }
case 65:
                        var6 = var2.parent_id;
                        var5 = null;
                        if(!(var5 != var6)) { _fun0010_ip = 66; continue _fun0010 }
case 67:
                        var8 = _closure1_slot22;
                        var7 = var8.isChannelMuted;
                        var6 = var2.guild_id;
                        var5 = var2.parent_id;
                        var5 = var7.bind(var8)(var6, var5);
                        if(var5) { _fun0010_ip = 64; continue _fun0010 }
case 66:
                        var7 = _closure1_slot20;
                        var6 = var7.getMentionCount;
                        var5 = var2.id;
                        var6 = var6.bind(var7)(var5);
                        var5 = 0;
                        if(!(!(var6 > var5))) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                        if(var4) { _fun0010_ip = 70; continue _fun0010 }
case 71:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 36;
                        var5 = var7[var5];
                        var6 = var6.bind(var1)(var5);
                        var5 = var6.getHasImportantUnread;
                        var5 = var5.bind(var6)(var2);
                        if(!var5) { _fun0010_ip = 70; continue _fun0010 }
case 72:
                        var7 = _closure3_slot1;
                        var6 = var7.push;
                        var5 = var2.id;
                        var5 = var6.bind(var7)(var5);
                        _fun0010_ip = 64; continue _fun0010;
case 70:
                        if(var4) { _fun0010_ip = 73; continue _fun0010 }
case 74:
                        var4 = !var4;
                        if(!var4) { _fun0010_ip = 75; continue _fun0010 }
case 76:
                        var7 = _closure1_slot20;
                        var6 = var7.hasUnread;
                        var5 = var2.id;
                        var4 = var6.bind(var7)(var5);
case 75:
                        if(!var4) { _fun0010_ip = 64; continue _fun0010 }
case 23:
                        var6 = _closure3_slot2;
                        var5 = var6.push;
                        var4 = var2.id;
                        var4 = var5.bind(var6)(var4);
                        _fun0010_ip = 64; continue _fun0010;
case 73:
                        var9 = _closure1_slot23;
                        var8 = var9.getVoiceStatesForChannel;
                        var3 = var2.id;
                        var6 = var8.bind(var9)(var3);
                        for(var3 in var6)
case 77:
                        {
case 78:
                            var5 = _closure3_slot3;
                            var4 = var5.push;
                            var3 = var2.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0010_ip = 64; continue _fun0010;
case 68:
                            var4 = _closure3_slot0;
                            var3 = var4.push;
                            var2 = var2.id;
                            var2 = var3.bind(var4)(var2);
                        }
case 64:
                        return var1;
                    }
                };
                var2 = {'ignoreRecents': true, 'withThreads': true};
                var2 = var8.bind(var9)(var3, var2);
                var3 = var1.push;
                var2 = new Array(0);
                var20 = var2;
                var19 = var7;
                var18 = 0;
                var7 = arraySpread(var20, var19, var18);
                var20 = var3;
                var19 = var2;
                var18 = var1;
                var2 = apply(var20, var19, var18);
                var3 = var1.push;
                var2 = new Array(0);
                var20 = var2;
                var19 = var6;
                var18 = 0;
                var6 = arraySpread(var20, var19, var18);
                var20 = var3;
                var19 = var2;
                var18 = var1;
                var2 = apply(var20, var19, var18);
                var3 = var1.push;
                var2 = new Array(0);
                var20 = var2;
                var19 = var5;
                var18 = 0;
                var4 = arraySpread(var20, var19, var18);
                var20 = var3;
                var19 = var2;
                var18 = var1;
                var2 = apply(var20, var19, var18);
                return var1;
case 55:
                var1 = new Array(0);
                return var1;
            }
        };
        var12 = var15.bind(var16)(var12, var9, var10);
        var _closure2_slot11 = var12;
        var15 = _closure1_slot4;
        var10 = var15.useEffect;
        var9 = function() {
            var2 = _closure2_slot10;
            var1 = _closure2_slot11;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var9 = var10.bind(var15)(var9);
        var15 = _closure1_slot4;
        var10 = var15.useRef;
        var9 = new Array(0);
        var9 = var10.bind(var15)(var9);
        var _closure2_slot12 = var9;
        var15 = _closure1_slot4;
        var10 = var15.useMemo;
        var9 = new Array(4);
        var9[0] = var14;
        var9[1] = var13;
        var9[2] = var4;
        var9[3] = var5;
        var4 = function() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = _closure2_slot0;
                if(var2) { _fun0011_ip = 79; continue _fun0011 }
case 80:
                var2 = _closure2_slot1;
                if(!var2) { _fun0011_ip = 79; continue _fun0011 }
case 31:
                var3 = global;
                var5 = var3.Set;
                var18 = _closure2_slot9;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var19 = var4;
                var2 = new var19[var5](var18, var17);
                var12 = var2 instanceof Object ? var2 : var4;
                var2 = _closure2_slot2;
                var11 = null;
                if(!(var11 != var2)) { _fun0011_ip = 81; continue _fun0011 }
case 82:
                var4 = var12.add;
                var2 = _closure2_slot2;
                var2 = var4.bind(var12)(var2);
case 81:
                var2 = _closure1_slot10;
                var9 = undefined;
                var8 = var2.bind(var9)();
                var2 = new Array(0);
                var3 = var3.Set;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var19 = var4;
                var3 = new var19[var3](var18);
                var7 = var3 instanceof Object ? var3 : var4;
                var4 = var8.length;
                var3 = 1;
                var6 = var4 - var3;
                var5 = 0;
                var4 = 20;
                var3 = undefined;
                if(!(var6 >= var5)) { _fun0011_ip = 83; continue _fun0011 }
case 84:
                var17 = var8[var6];
                if(!(var11 != var17)) { _fun0011_ip = 83; continue _fun0011 }
case 60:
                var14 = var17.startsWith;
                var13 = _closure1_slot8;
                var13 = var14.bind(var17)(var13);
                if(var13) { _fun0011_ip = 72; continue _fun0011 }
case 85:
                var13 = _closure1_slot9;
                var14 = var13.bind(var9)(var17);
                _fun0011_ip = 86; continue _fun0011;
case 72:
                var16 = _closure1_slot16;
                var15 = var16.getChannel;
                var13 = _closure1_slot9;
                var13 = var13.bind(var9)(var17);
                var15 = var15.bind(var16)(var13);
                var16 = var11 == var15;
                var13 = undefined;
                if(var16) { _fun0011_ip = 87; continue _fun0011 }
case 88:
                var13 = var15.guild_id;
case 87:
                var14 = var13;
                var3 = var15;
case 86:
                var13 = var11 == var14;
                if(var13) { _fun0011_ip = 89; continue _fun0011 }
case 90:
                var15 = var12.has;
                var13 = var15.bind(var12)(var14);
case 89:
                if(var13) { _fun0011_ip = 91; continue _fun0011 }
case 92:
                var15 = var7.has;
                var13 = var15.bind(var7)(var14);
case 91:
                if(var13) { _fun0011_ip = 93; continue _fun0011 }
case 94:
                var13 = var7.add;
                var13 = var13.bind(var7)(var14);
                var13 = var2.push;
                var13 = var13.bind(var2)(var14);
case 93:
                var13 = var2.length;
                if(!(!(var13 >= var4))) { _fun0011_ip = 83; continue _fun0011 }
case 95:
                var6 = var6 - 1;
                if(var6 >= var5) { _fun0011_ip = 84; continue _fun0011 }
case 83:
                return var2;
case 79:
                var1 = _closure2_slot12;
                var1 = var1.current;
                return var1;
            }
        };
        var4 = var10.bind(var15)(var4, var9);
        var _closure2_slot13 = var4;
        var15 = _closure1_slot4;
        var10 = var15.useEffect;
        var9 = function() {
            var2 = _closure2_slot12;
            var1 = _closure2_slot13;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var9 = var10.bind(var15)(var9);
        var10 = _closure1_slot4;
        var9 = var10.useRef;
        var9 = var9.bind(var10)(var11);
        var _closure2_slot14 = var9;
        var11 = _closure1_slot4;
        var10 = var11.useMemo;
        var9 = new Array(5);
        var9[0] = var14;
        var9[1] = var13;
        var9[2] = var12;
        var9[3] = var8;
        var9[4] = var3;
        var8 = function() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = _closure2_slot0;
                if(var1) { _fun0012_ip = 96; continue _fun0012 }
case 80:
                var1 = _closure2_slot1;
                if(var1) { _fun0012_ip = 97; continue _fun0012 }
case 29:
                var1 = _closure2_slot14;
                var1 = var1.current;
                return var1;
case 97:
                var7 = _closure2_slot3;
                var3 = _closure1_slot10;
                var1 = undefined;
                var10 = var3.bind(var1)();
                var8 = null;
                var3 = var8 != var7;
                var6 = undefined;
                if(!var3) { _fun0012_ip = 9; continue _fun0012 }
case 98:
                var5 = _closure1_slot8;
                var3 = global;
                var3 = var3.HermesInternal;
                var4 = var3.concat;
                var3 = '';
                var6 = var4.bind(var3)(var5, var7);
case 9:
                var7 = new Array(0);
                var4 = var10.length;
                var3 = 1;
                var4 = var4 - var3;
                var5 = 0;
                var3 = 20;
                if(!(var4 >= var5)) { _fun0012_ip = 99; continue _fun0012 }
case 100:
                var13 = var10[var4];
                if(!(var8 != var13)) { _fun0012_ip = 99; continue _fun0012 }
case 101:
                var12 = var13.startsWith;
                var11 = _closure1_slot11;
                var11 = var12.bind(var13)(var11);
                if(var11) { _fun0012_ip = 17; continue _fun0012 }
case 102:
                if(!(var13 !== var6)) { _fun0012_ip = 17; continue _fun0012 }
case 103:
                var12 = var7.push;
                var11 = _closure1_slot9;
                var11 = var11.bind(var1)(var13);
                var11 = var12.bind(var7)(var11);
                var11 = var7.length;
                if(!(!(var11 >= var3))) { _fun0012_ip = 99; continue _fun0012 }
case 17:
                var4 = var4 - 1;
                if(var4 >= var5) { _fun0012_ip = 100; continue _fun0012 }
case 99:
                var3 = new Array(0);
                var4 = new Array(0);
                var6 = _closure2_slot4;
                if(!(var8 == var6)) { _fun0012_ip = 104; continue _fun0012 }
case 105:
                var6 = global;
                var6 = var6.Set;
                var8 = var6.prototype;
                var8 = Object.create(var8, {constructor: {value: var6}});
                var17 = var8;
                var6 = new var17[var6](var16);
                var10 = var6 instanceof Object ? var6 : var8;
                var6 = _closure1_slot36;
                var8 = var6.bind(var1)(var7);
                var7 = var8.bind(var1)();
                var6 = var7.done;
                if(var6) { _fun0012_ip = 104; continue _fun0012 }
case 106:
                var12 = var7.value;
                var11 = _closure1_slot40;
                var6 = _closure1_slot9;
                var6 = var6.bind(var1)(var12);
                var6 = var11.bind(var1)(var6, var10, var4);
                var11 = var8.bind(var1)();
                var6 = var11.done;
                var7 = var11;
                if(!var6) { _fun0012_ip = 106; continue _fun0012 }
case 104:
                var6 = global;
                var6 = var6.Set;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var17 = var7;
                var6 = new var17[var6](var16);
                var8 = var6 instanceof Object ? var6 : var7;
                var6 = _closure2_slot11;
                var6 = var6.length;
                if(!(var6 > var5)) { _fun0012_ip = 107; continue _fun0012 }
case 108:
                var6 = _closure1_slot36;
                var2 = _closure2_slot11;
                var7 = var6.bind(var1)(var2);
                var6 = var7.bind(var1)();
                var2 = var6.done;
                if(var2) { _fun0012_ip = 107; continue _fun0012 }
case 109:
                var10 = _closure1_slot40;
                var2 = var6.value;
                var2 = var10.bind(var1)(var2, var8, var3);
                var10 = var7.bind(var1)();
                var2 = var10.done;
                var6 = var10;
                if(!var2) { _fun0012_ip = 109; continue _fun0012 }
case 107:
                var2 = var4.length;
                if(!(!(var2 > var5))) { _fun0012_ip = 110; continue _fun0012 }
case 111:
                var2 = var3.length;
                var2 = var2 > var5;
                var1 = undefined;
                if(!var2) { _fun0012_ip = 112; continue _fun0012 }
case 110:
                var2 = {};
                var2['channelHistory'] = var4;
                var2['unreads'] = var3;
                var1 = var2;
case 112:
                return var1;
case 96:
                var1 = undefined;
                return var1;
            }
        };
        var9 = var10.bind(var11)(var8, var9);
        var _closure2_slot15 = var9;
        var10 = _closure1_slot4;
        var8 = var10.useEffect;
        var1 = function() {
            var2 = _closure2_slot14;
            var1 = _closure2_slot15;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var1 = var8.bind(var10)(var1);
        var1 = {};
        var8 = _closure1_slot4;
        var7 = var8.useDeferredValue;
        var7 = var7.bind(var8)(var9);
        var1['initialResults'] = var7;
        var1['unreadPrivateChannelIds'] = var6;
        var1['unreadGuilds'] = var5;
        var1['guildHistory'] = var4;
        var1['selectedUnreadGuild'] = var3;
        var1['setSelectedUnreadGuild'] = var2;
        return var1;
    };
    var _closure1_slot41 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var12 = 0;
    var4 = var6[var12];
    var1 = undefined;
    var4 = var16.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var7 = var6[var11];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var10 = 2;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var9 = 3;
    var4 = var6[var9];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var18 = 5;
    var4 = var6[var18];
    var4 = var5.bind(var1)(var4);
    var8 = var4.CHANNEL_PREFIX;
    var _closure1_slot8 = var8;
    var8 = var4.getIdFromHistoryItem;
    var _closure1_slot9 = var8;
    var8 = var4.getNavigationHistory;
    var _closure1_slot10 = var8;
    var4 = var4.GUILD_PREFIX;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.isGuildSelectableChannelType;
    var _closure1_slot13 = var8;
    var4 = var4.isGuildVocalChannelType;
    var _closure1_slot14 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot17 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot18 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot19 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot20 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot21 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot22 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot23 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot24 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot25 = var8;
    var4 = var4.jsxs;
    var _closure1_slot26 = var4;
    var15 = 19;
    var4 = var6[var15];
    var4 = var16.bind(var1)(var4);
    var4 = var4.radii;
    var17 = var4.md;
    var4 = 20;
    var4 = var6[var4];
    var13 = var5.bind(var1)(var4);
    var8 = var13.createStyles;
    var4 = {};
    var14 = {'flexGrow': 0, 'marginHorizontal': 16, 'marginBottom': 16, 'flexShrink': 1, 'borderRadius': 24, 'backgroundColor': null, 'flexDirection': 'column', 'justifyContent': 'flex-start', 'alignItems': 'stretch', 'overflow': 'hidden'};
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.BACKGROUND_PRIMARY;
    var14['backgroundColor'] = var19;
    var4['wrapper'] = var14;
    var14 = {'flex': 4294967295, 'overflow': 'hidden', 'borderBottomLeftRadius': 24, 'borderBottomRightRadius': 24};
    var4['launchPadContent'] = var14;
    var14 = {'paddingHorizontal': 16, 'paddingTop': 16, 'flexDirection': 'row', 'flexShrink': 0, 'flexGrow': 0};
    var4['header'] = var14;
    var14 = {'flexGrow': 1, 'flexShrink': 1, 'flexDirection': 'row', 'alignItems': 'center', 'alignSelf': 'center', 'paddingStart': 8};
    var4['subheader'] = var14;
    var14 = {'marginStart': 8, 'flexDirection': 'row', 'flexShrink': 0, 'backgroundColor': null, 'borderRadius': null, 'padding': 5, 'alignItems': 'stretch', 'justifyContent': 'center', 'gap': 5, 'borderWidth': 1};
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.INPUT_BACKGROUND;
    var14['backgroundColor'] = var19;
    var14['borderRadius'] = var17;
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.INPUT_BORDER;
    var14['borderColor'] = var19;
    var4['tabs'] = var14;
    var14 = {'width': 32, 'height': 32, 'borderRadius': null, 'alignItems': 'center', 'justifyContent': 'center'};
    var17 = var17 - var18;
    var14['borderRadius'] = var17;
    var4['tab'] = var14;
    var14 = {};
    var15 = var6[var15];
    var15 = var16.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_PRIMARY;
    var14['backgroundColor'] = var15;
    var4['tabSelected'] = var14;
    var4 = var8.bind(var13)(var4);
    var _closure1_slot27 = var4;
    var4 = {};
    var4['SEARCH'] = var12;
    var8 = 'SEARCH';
    var4[var12] = var8;
    var4['MEMBERS'] = var11;
    var8 = 'MEMBERS';
    var4[var11] = var8;
    var4['NOTIFICATIONS'] = var10;
    var8 = 'NOTIFICATIONS';
    var4[var10] = var8;
    var4['DEV_TOOLS'] = var9;
    var8 = 'DEV_TOOLS';
    var4[var9] = var8;
    var _closure1_slot28 = var4;
    var4 = {};
    var8 = 'function LaunchPadTsx1(){const{sharedState}=this.__closure;return sharedState.get();}';
    var4['code'] = var8;
    var _closure1_slot29 = var4;
    var4 = {};
    var8 = 'function LaunchPadTsx2(sharedState){const{keyboardShown,runOnJS,setFocused}=this.__closure;if(!keyboardShown.get()&&sharedState>0.75){runOnJS(setFocused)(true);}else if(keyboardShown.get()&&sharedState<=0){runOnJS(setFocused)(false);}}';
    var4['code'] = var8;
    var _closure1_slot30 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var16 = var1.tab;
            var _closure2_slot0 = var16;
            var2 = var1.setTab;
            var _closure2_slot1 = var2;
            var10 = var1.updateQuery;
            var6 = var1.sharedState;
            var _closure2_slot2 = var6;
            var12 = var1.searchRef;
            var _closure2_slot3 = var12;
            var1 = _closure1_slot27;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var13 = _closure1_slot0;
            var17 = _closure1_slot2;
            var1 = 23;
            var2 = var17[var1];
            var7 = var13.bind(var4)(var2);
            var5 = var7.useStateFromStores;
            var2 = _closure1_slot17;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot17;
                var1 = var1.isDeveloper;
                return var1;
            };
            var11 = var5.bind(var7)(var3, var2);
            var3 = _closure1_slot4;
            var2 = var3.useRef;
            var5 = false;
            var2 = var2.bind(var3)(var5);
            var _closure2_slot4 = var2;
            var8 = 24;
            var2 = var17[var8];
            var3 = var13.bind(var4)(var2);
            var2 = var3.useSharedValue;
            var18 = var2.bind(var3)(var5);
            var _closure2_slot5 = var18;
            var3 = _closure1_slot4;
            var2 = var3.useRef;
            var2 = var2.bind(var3)(var16);
            var _closure2_slot6 = var2;
            var5 = _closure1_slot4;
            var3 = var5.useEffect;
            var2 = function() {
                var2 = _closure2_slot6;
                var1 = _closure2_slot0;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var5)(var2);
            var7 = _closure1_slot4;
            var5 = var7.useCallback;
            var3 = new Array(2);
            var3[0] = var18;
            var3[1] = var12;
            var2 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = arg1;
                    if(!var3) { _fun0014_ip = 46; continue _fun0014 }
case 113:
                    var1 = _closure2_slot6;
                    var5 = var1.current;
                    var4 = _closure1_slot28;
                    var4 = var4.SEARCH;
                    if(!(var5 !== var4)) { _fun0014_ip = 14; continue _fun0014 }
case 46:
                    if(var3) { _fun0014_ip = 114; continue _fun0014 }
case 115:
                    var4 = _closure2_slot4;
                    var4 = var4.current;
                    if(!var4) { _fun0014_ip = 13; continue _fun0014 }
case 98:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 25;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.getBestActiveInput;
                    var5 = var4.bind(var5)();
                    var4 = null;
                    if(!(var4 != var5)) { _fun0014_ip = 13; continue _fun0014 }
case 116:
                    var4 = var5.focus;
                    var4 = var4.bind(var5)();
case 13:
                    var4 = _closure2_slot3;
                    var5 = var4.current;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0014_ip = 117; continue _fun0014 }
case 118:
                    var4 = var5.blur;
                    var4 = var4.bind(var5)();
case 117:
                    var4 = _closure2_slot4;
                    var5 = false;
                    var4['current'] = var5;
                    var4 = _closure2_slot5;
                    var3 = var4.set;
                    var3 = var3.bind(var4)(var5);
                    _fun0014_ip = 114; continue _fun0014;
case 14:
                    var4 = _closure2_slot4;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 25;
                    var1 = var3[var1];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var1);
                    var1 = var5.getBestActiveInput;
                    var6 = var1.bind(var5)();
                    var1 = null;
                    var5 = var1 == var6;
                    if(var5) { _fun0014_ip = 74; continue _fun0014 }
case 119:
                    var5 = var6.isFocused;
                    var3 = var5.bind(var6)();
case 74:
                    var5 = true;
                    var3 = var5 === var3;
                    var4['current'] = var3;
                    var3 = _closure2_slot3;
                    var3 = var3.current;
                    if(!(var1 != var3)) { _fun0014_ip = 114; continue _fun0014 }
case 120:
                    var4 = _closure2_slot5;
                    var3 = var4.set;
                    var3 = var3.bind(var4)(var5);
                    var2 = _closure2_slot3;
                    var2 = var2.current;
                    if(!(var1 != var2)) { _fun0014_ip = 114; continue _fun0014 }
case 12:
                    var1 = var2.focus;
                    var1 = var1.bind(var2)();
case 114:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var5.bind(var7)(var2, var3);
            var _closure2_slot7 = var7;
            var1 = var17[var1];
            var5 = var13.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot6;
                var1 = var2.isOpen;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var3.bind(var5)(var2, var1);
            var _closure2_slot8 = var1;
            var5 = _closure1_slot4;
            var3 = var5.useEffect;
            var2 = new Array(2);
            var2[0] = var1;
            var2[1] = var7;
            var1 = function() {
                var3 = _closure2_slot7;
                var1 = _closure2_slot8;
                var2 = !var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var3.bind(var5)(var1, var2);
            var5 = _closure1_slot4;
            var3 = var5.useEffect;
            var2 = new Array(3);
            var2[0] = var16;
            var2[1] = var6;
            var2[2] = var7;
            var1 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot28;
                    var2 = var2.SEARCH;
                    var2 = var3 === var2;
                    if(!var2) { _fun0015_ip = 121; continue _fun0015 }
case 122:
                    var4 = _closure2_slot2;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = 1;
                    var2 = var3 === var4;
case 121:
                    if(!var2) { _fun0015_ip = 123; continue _fun0015 }
case 124:
                    var3 = _closure2_slot7;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 123:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var1 = var17[var8];
            var5 = var13.bind(var4)(var1);
            var3 = var5.useAnimatedReaction;
            var2 = function v() {
                var2 = _closure2_slot2;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = {};
            var1['sharedState'] = var6;
            var2['__closure'] = var1;
            var1 = 17067823098320.0;
            var2['__workletHash'] = var1;
            var1 = _closure1_slot29;
            var2['__initData'] = var1;
            var1 = function S(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure2_slot5;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0016_ip = 49; continue _fun0016 }
case 42:
                    var2 = 0.75;
                    if(!(var4 > var2)) { _fun0016_ip = 49; continue _fun0016 }
case 125:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 24;
                    var2 = var5[var2];
                    var5 = undefined;
                    var6 = var3.bind(var5)(var2);
                    var3 = var6.runOnJS;
                    var2 = _closure2_slot7;
                    var3 = var3.bind(var6)(var2);
                    var2 = true;
                    var2 = var3.bind(var5)(var2);
                    _fun0016_ip = 126; continue _fun0016;
case 49:
                    var3 = _closure2_slot5;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0016_ip = 127; continue _fun0016 }
case 116:
                    var3 = 0;
                    var2 = var4 <= var3;
case 127:
                    if(!var2) { _fun0016_ip = 126; continue _fun0016 }
case 128:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 24;
                    var2 = var3[var2];
                    var3 = undefined;
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.runOnJS;
                    var1 = _closure2_slot7;
                    var2 = var2.bind(var4)(var1);
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
case 126:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = {};
            var6['keyboardShown'] = var18;
            var8 = var17[var8];
            var8 = var13.bind(var4)(var8);
            var8 = var8.runOnJS;
            var6['runOnJS'] = var8;
            var6['setFocused'] = var7;
            var1['__closure'] = var6;
            var6 = 3784684686013.0;
            var1['__workletHash'] = var6;
            var6 = _closure1_slot30;
            var1['__initData'] = var6;
            var1 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot26;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var9.header;
            var1['style'] = var5;
            var5 = _closure1_slot28;
            var5 = var5.SEARCH;
            if(!(var16 !== var5)) { _fun0013_ip = 129; continue _fun0013 }
case 130:
            var5 = _closure1_slot28;
            var5 = var5.MEMBERS;
            if(!(var16 !== var5)) { _fun0013_ip = 131; continue _fun0013 }
case 132:
            var5 = _closure1_slot28;
            var5 = var5.NOTIFICATIONS;
            if(!(var16 !== var5)) { _fun0013_ip = 133; continue _fun0013 }
case 134:
            var7 = _closure1_slot25;
            var6 = _closure1_slot39;
            var5 = {};
            var8 = 'Dev Tools';
            var5['text'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            _fun0013_ip = 135; continue _fun0013;
case 133:
            var8 = _closure1_slot25;
            var7 = _closure1_slot39;
            var5 = {};
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var13 = 27;
            var17 = var20[var13];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var13 = var20[var13];
            var13 = var19.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.HcoRu7;
            var13 = var17.bind(var18)(var13);
            var5['text'] = var13;
            var6 = var8.bind(var4)(var7, var5);
case 135:
            _fun0013_ip = 136; continue _fun0013;
case 131:
            var8 = _closure1_slot25;
            var7 = _closure1_slot39;
            var5 = {};
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var13 = 27;
            var17 = var20[var13];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var13 = var20[var13];
            var13 = var19.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.9Oq93t;
            var13 = var17.bind(var18)(var13);
            var5['text'] = var13;
            var6 = var8.bind(var4)(var7, var5);
case 136:
            _fun0013_ip = 137; continue _fun0013;
case 129:
            var8 = _closure1_slot25;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 26;
            var5 = var13[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.SearchField;
            var5 = {'size': 'md', 'returnKeyType': 'done', 'ref': null, 'onChange': null, 'autoComplete': 'off', 'spellCheck': false, 'autoFocus': false};
            var5['ref'] = var12;
            var5['onChange'] = var10;
            var6 = var8.bind(var4)(var7, var5);
case 137:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot26;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = var9.tabs;
            var6['style'] = var9;
            var10 = _closure1_slot25;
            var13 = _closure1_slot38;
            var9 = {};
            var12 = function icon(arg1) {
                var4 = _closure1_slot25;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 28;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.FlashIcon;
                var1 = {};
                var5 = 'sm';
                var1['size'] = var5;
                var5 = arg1;
                var1['color'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var9['icon'] = var12;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var18 = 27;
            var12 = var22[var18];
            var12 = var21.bind(var4)(var12);
            var19 = var12.intl;
            var17 = var19.string;
            var12 = var22[var18];
            var12 = var21.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.JqV7IC;
            var12 = var17.bind(var19)(var12);
            var9['accessibilityLabel'] = var12;
            var12 = function onPress() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var1 = _closure1_slot28;
                    var3 = var1.SEARCH;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var2 = _closure2_slot3;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0017_ip = 138; continue _fun0017 }
case 57:
                    var2 = var3.focus;
                    var2 = var2.bind(var3)();
case 138:
                    return var1;
                }
            };
            var9['onPress'] = var12;
            var17 = _closure1_slot28;
            var12 = var17.SEARCH;
            var12 = var16 === var12;
            var9['selected'] = var12;
            var10 = var10.bind(var4)(var13, var9);
            var9 = new Array(3);
            var9[0] = var10;
            var12 = _closure1_slot25;
            var10 = {};
            var19 = function icon(arg1) {
                var4 = _closure1_slot25;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 29;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.BellIcon;
                var1 = {};
                var5 = 'sm';
                var1['size'] = var5;
                var5 = arg1;
                var1['color'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var10['icon'] = var19;
            var19 = var22[var18];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var22[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.HcoRu7;
            var18 = var19.bind(var20)(var18);
            var10['accessibilityLabel'] = var18;
            var18 = function onPress() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var1 = _closure1_slot28;
                    var3 = var1.NOTIFICATIONS;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var2 = _closure2_slot3;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0018_ip = 138; continue _fun0018 }
case 57:
                    var2 = var3.blur;
                    var2 = var2.bind(var3)();
case 138:
                    return var1;
                }
            };
            var10['onPress'] = var18;
            var17 = var17.NOTIFICATIONS;
            var17 = var16 === var17;
            var10['selected'] = var17;
            var10 = var12.bind(var4)(var13, var10);
            var9[1] = var10;
            var10 = null;
            if(!var11) { _fun0013_ip = 139; continue _fun0013 }
case 140:
            var13 = _closure1_slot25;
            var12 = _closure1_slot38;
            var11 = {};
            var17 = function icon(arg1) {
                var4 = _closure1_slot25;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 30;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.StaffBadgeIcon;
                var1 = {};
                var5 = 'sm';
                var1['size'] = var5;
                var5 = arg1;
                var1['color'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var11['icon'] = var17;
            var17 = 'Dev Tools';
            var11['accessibilityLabel'] = var17;
            var15 = _closure1_slot28;
            var15 = var15.DEV_TOOLS;
            var15 = var16 === var15;
            var11['selected'] = var15;
            var14 = function onPress() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 31;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isAndroid;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0019_ip = 7; continue _fun0019 }
case 141:
                    var4 = _closure2_slot1;
                    var3 = _closure1_slot28;
                    var3 = var3.DEV_TOOLS;
                    var3 = var4.bind(var1)(var3);
                    _fun0019_ip = 100; continue _fun0019;
case 7:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 32;
                    var3 = var4[var3];
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.navigateToDevTools;
                    var3 = var3.bind(var5)();
                    var3 = _closure1_slot1;
                    var2 = 33;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.bind(var1)();
case 100:
                    var2 = _closure2_slot3;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0019_ip = 142; continue _fun0019 }
case 143:
                    var2 = var3.blur;
                    var2 = var2.bind(var3)();
case 142:
                    return var1;
                }
            };
            var11['onPress'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 139:
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot31 = var4;
    var4 = new Array(0);
    var _closure1_slot32 = var4;
    var8 = 37;
    var4 = var6[var8];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AutocompleterResultTypes;
    var9 = var4.GUILD;
    var4 = new Array(5);
    var4[0] = var9;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.AutocompleterResultTypes;
    var9 = var9.TEXT_CHANNEL;
    var4[1] = var9;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.AutocompleterResultTypes;
    var9 = var9.GROUP_DM;
    var4[2] = var9;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.AutocompleterResultTypes;
    var9 = var9.VOICE_CHANNEL;
    var4[3] = var9;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AutocompleterResultTypes;
    var8 = var8.USER;
    var4[4] = var8;
    var _closure1_slot33 = var4;
    var4 = {};
    var8 = 'function LaunchPadTsx3(){const{sharedState}=this.__closure;return sharedState.get()===0;}';
    var4['code'] = var8;
    var _closure1_slot34 = var4;
    var4 = {};
    var8 = 'function LaunchPadTsx4(hidden,prevHidden){const{runOnJS,clearQuery,cancelTimeout}=this.__closure;if(hidden===prevHidden)return;if(hidden&&hidden!==prevHidden){runOnJS(clearQuery)();}else if(!hidden&&hidden!==prevHidden){runOnJS(cancelTimeout)();}}';
    var4['code'] = var8;
    var _closure1_slot35 = var4;
    var4 = var7.memo;
    var2 = function LaunchPad(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var2 = arg1;
            var21 = var2.visible;
            var12 = var2.sharedState;
            var2 = _closure1_slot27;
            var4 = undefined;
            var11 = var2.bind(var4)();
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var6 = false;
            var3 = var2.bind(var3)(var6);
            var2 = _closure1_slot3;
            var8 = 2;
            var2 = var2.bind(var4)(var3, var8);
            var7 = 0;
            var18 = var2[var7];
            var5 = 1;
            var2 = var2[var5];
            var _closure2_slot0 = var2;
            var10 = _closure1_slot4;
            var9 = var10.useCallback;
            var3 = function() {
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = !var1;
                    return var1;
                };
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var2 = new Array(0);
            var17 = var9.bind(var10)(var3, var2);
            var3 = _closure1_slot4;
            var2 = var3.useRef;
            var16 = null;
            var26 = var2.bind(var3)(var16);
            var2 = function useAutocompleterResults(arg1) {
                var5 = arg1;
                var _closure3_slot0 = var5;
                var6 = _closure1_slot4;
                var4 = var6.useState;
                var3 = '';
                var4 = var4.bind(var6)(var3);
                var3 = _closure1_slot3;
                var10 = undefined;
                var8 = 2;
                var4 = var3.bind(var10)(var4, var8);
                var7 = 0;
                var3 = var4[var7];
                var9 = 1;
                var4 = var4[var9];
                var _closure3_slot1 = var4;
                var11 = _closure1_slot4;
                var6 = var11.useState;
                var4 = _closure1_slot32;
                var6 = var6.bind(var11)(var4);
                var4 = _closure1_slot3;
                var6 = var4.bind(var10)(var6, var8);
                var4 = var6[var7];
                var6 = var6[var9];
                var _closure3_slot2 = var6;
                var11 = _closure1_slot4;
                var8 = var11.useState;
                var6 = function() {
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 40;
                    var2 = var4[var2];
                    var6 = undefined;
                    var5 = var3.bind(var6)(var2);
                    var9 = _closure1_slot33;
                    var3 = {};
                    var1 = true;
                    var3['frecencyBoosters'] = var1;
                    var1 = var5.prototype;
                    var2 = Object.create(var1, {constructor: {value: var5}});
                    var10 = function(arg1, arg2) {
                        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                            var2 = arg2;
                            var1 = var2.trim;
                            var2 = var1.bind(var2)();
                            var1 = var2.trim;
                            var2 = var1.bind(var2)();
                            var1 = '';
                            if(!(var1 !== var2)) { _fun0021_ip = 124; continue _fun0021 }
case 97:
                            var3 = _closure3_slot2;
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var3.bind(var2)(var1);
                            _fun0021_ip = 47; continue _fun0021;
case 124:
                            var3 = _closure3_slot2;
                            var2 = _closure1_slot32;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
case 47:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var11 = var2;
                    var8 = undefined;
                    var7 = var3;
                    var1 = new var11[var5](var10, var9, var8, var7, var6);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                };
                var8 = var8.bind(var11)(var6);
                var6 = _closure1_slot3;
                var6 = var6.bind(var10)(var8, var9);
                var7 = var6[var7];
                var _closure3_slot3 = var7;
                var10 = _closure1_slot4;
                var9 = var10.useEffect;
                var8 = new Array(1);
                var8[0] = var7;
                var6 = function() {
                    var1 = function() {
                        var2 = _closure3_slot3;
                        var1 = var2.clean;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    return var1;
                };
                var6 = var9.bind(var10)(var6, var8);
                var10 = _closure1_slot4;
                var9 = var10.useEffect;
                var8 = new Array(1);
                var8[0] = var7;
                var6 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 41;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.addRouteChangeListener;
                    var1 = function() {
                        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                            var3 = global;
                            var5 = var3.Set;
                            var4 = _closure1_slot15;
                            var2 = var4.getId;
                            var6 = var2.bind(var4)();
                            var2 = var3.HermesInternal;
                            var4 = var2.concat;
                            var2 = 'user:';
                            var4 = var4.bind(var2)(var6);
                            var2 = new Array(1);
                            var2[0] = var4;
                            var4 = var5.prototype;
                            var4 = Object.create(var4, {constructor: {value: var5}});
                            var9 = var4;
                            var8 = var2;
                            var2 = new var9[var5](var8, var7);
                            var2 = var2 instanceof Object ? var2 : var4;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 35;
                            var4 = var4[var1];
                            var1 = undefined;
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.getSelectedGuildFromRoute;
                            var6 = var4.bind(var5)();
                            var4 = null;
                            if(!(var4 != var6)) { _fun0022_ip = 84; continue _fun0022 }
case 144:
                            var4 = var2.add;
                            var3 = var3.HermesInternal;
                            var5 = var3.concat;
                            var3 = 'guild:';
                            var3 = var5.bind(var3)(var6);
                            var3 = var4.bind(var2)(var3);
case 84:
                            var5 = _closure3_slot3;
                            var4 = var5.setOptions;
                            var3 = {};
                            var3['blacklist'] = var2;
                            var2 = true;
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var6 = var9.bind(var10)(var6, var8);
                var9 = _closure1_slot4;
                var8 = var9.useEffect;
                var6 = new Array(2);
                var6[0] = var5;
                var6[1] = var7;
                var5 = function() {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var2 = _closure3_slot3;
                        if(var1) { _fun0023_ip = 145; continue _fun0023 }
case 32:
                        var1 = var2.pause;
                        var1 = var1.bind(var2)();
                        _fun0023_ip = 125; continue _fun0023;
case 145:
                        var1 = var2.resume;
                        var1 = var1.bind(var2)();
case 125:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = var8.bind(var9)(var5, var6);
                var6 = _closure1_slot4;
                var5 = var6.useCallback;
                var2 = new Array(1);
                var2[0] = var7;
                var1 = function(arg1) {
                    var4 = arg1;
                    var3 = _closure3_slot1;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4);
                    var3 = _closure3_slot3;
                    var2 = var3.search;
                    var2 = var2.bind(var3)(var4);
                    return var1;
                };
                var2 = var5.bind(var6)(var1, var2);
                var1 = {};
                var1['queryResults'] = var4;
                var1['query'] = var3;
                var1['updateQuery'] = var2;
                return var1;
            };
            var2 = var2.bind(var4)(var21);
            var13 = var2.query;
            var _closure2_slot1 = var13;
            var27 = var2.updateQuery;
            var14 = var2.queryResults;
            var3 = _closure1_slot41;
            var2 = {};
            var9 = var13.trim;
            var9 = var9.bind(var13)();
            var9 = var9.length;
            var9 = var9 > var7;
            var2['disabled'] = var9;
            var2['visible'] = var21;
            var2 = var3.bind(var4)(var2);
            var20 = var2.initialResults;
            var24 = var2.unreadPrivateChannelIds;
            var23 = var2.unreadGuilds;
            var22 = var2.guildHistory;
            var19 = var2.selectedUnreadGuild;
            var25 = var2.setSelectedUnreadGuild;
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var3 = var2.bind(var3)(var6);
            var2 = _closure1_slot3;
            var3 = var2.bind(var4)(var3, var8);
            var2 = var3[var7];
            var _closure2_slot2 = var2;
            var9 = var3[var5];
            var _closure2_slot3 = var9;
            var10 = _closure1_slot4;
            var6 = var10.useState;
            var3 = _closure1_slot28;
            var3 = var3.SEARCH;
            var6 = var6.bind(var10)(var3);
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)(var6, var8);
            var10 = var3[var7];
            var28 = var3[var5];
            var3 = function useWrapperStyles() {
                var3 = _closure1_slot27;
                var4 = undefined;
                var5 = var3.bind(var4)();
                var _closure3_slot0 = var5;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 38;
                var3 = var7[var3];
                var3 = var6.bind(var4)(var3);
                var3 = var3.bind(var4)();
                var8 = var3.height;
                var _closure3_slot1 = var8;
                var3 = 39;
                var3 = var7[var3];
                var3 = var6.bind(var4)(var3);
                var3 = var3.bind(var4)();
                var7 = var3.top;
                var _closure3_slot2 = var7;
                var6 = var3.bottom;
                var _closure3_slot3 = var6;
                var4 = _closure1_slot4;
                var3 = var4.useMemo;
                var2 = new Array(4);
                var2[0] = var8;
                var2[1] = var7;
                var2[2] = var6;
                var2[3] = var5;
                var1 = function() {
                    var1 = _closure3_slot0;
                    var2 = var1.wrapper;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = {};
                    var5 = _closure3_slot1;
                    var4 = _closure3_slot2;
                    var4 = var5 - var4;
                    var3 = _closure3_slot3;
                    var4 = var4 - var3;
                    var3 = 16;
                    var3 = var4 - var3;
                    var2['maxHeight'] = var3;
                    var1[1] = var2;
                    return var1;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var5 = var3.bind(var4)();
            var8 = _closure1_slot4;
            var6 = var8.useEffect;
            var3 = new Array(3);
            var3[0] = var13;
            var3[1] = var9;
            var3[2] = var2;
            var2 = function() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var2 = var2.length;
                    var3 = 0;
                    if(!(var2 > var3)) { _fun0024_ip = 146; continue _fun0024 }
case 147:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0024_ip = 146; continue _fun0024 }
case 54:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 42;
                    var4 = var5[var4];
                    var5 = undefined;
                    var6 = var6.bind(var5)(var4);
                    var4 = var6.track;
                    var2 = _closure1_slot24;
                    var2 = var2.LAUNCHPAD_SEARCHED;
                    var2 = var4.bind(var6)(var2);
                    var4 = _closure2_slot3;
                    var2 = true;
                    var2 = var4.bind(var5)(var2);
                    _fun0024_ip = 128; continue _fun0024;
case 146:
                    var2 = _closure2_slot1;
                    var2 = var2.length;
                    if(!(var3 === var2)) { _fun0024_ip = 128; continue _fun0024 }
case 11:
                    var3 = _closure2_slot3;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
case 128:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var8)(var2, var3);
            var1 = function useDeferredQueryClear(arg1, arg2, arg3) {
                var7 = arg1;
                var1 = arg2;
                var13 = arg3;
                var _closure3_slot0 = var7;
                var _closure3_slot1 = var1;
                var _closure3_slot2 = var13;
                var5 = _closure1_slot4;
                var4 = var5.useRef;
                var3 = -1;
                var3 = var4.bind(var5)(var3);
                var _closure3_slot3 = var3;
                var5 = _closure1_slot4;
                var4 = var5.useCallback;
                var3 = new Array(2);
                var3[0] = var7;
                var3[1] = var1;
                var1 = function() {
                    var2 = global;
                    var5 = var2.clearTimeout;
                    var3 = _closure3_slot3;
                    var4 = var3.current;
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var5 = var2.setTimeout;
                    var4 = function() {
                        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                            var1 = global;
                            var4 = var1.clearTimeout;
                            var1 = _closure3_slot3;
                            var3 = var1.current;
                            var1 = undefined;
                            var3 = var4.bind(var1)(var3);
                            var3 = _closure3_slot0;
                            var4 = '';
                            var3 = var3.bind(var1)(var4);
                            var2 = _closure3_slot1;
                            var3 = var2.current;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0025_ip = 148; continue _fun0025 }
case 4:
                            var2 = var3.setText;
                            var2 = var2.bind(var3)(var4);
case 148:
                            return var1;
                        }
                    };
                    var2 = 100;
                    var2 = var5.bind(var1)(var4, var2);
                    var3['current'] = var2;
                    return var1;
                };
                var9 = var4.bind(var5)(var1, var3);
                var _closure3_slot4 = var9;
                var5 = _closure1_slot4;
                var4 = var5.useCallback;
                var3 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var1 = _closure3_slot3;
                    var2 = var1.current;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = new Array(0);
                var8 = var4.bind(var5)(var3, var1);
                var _closure3_slot5 = var8;
                var5 = _closure1_slot4;
                var4 = var5.useEffect;
                var3 = function() {
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var1 = _closure3_slot3;
                        var2 = var1.current;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                };
                var1 = new Array(0);
                var1 = var4.bind(var5)(var3, var1);
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var10 = 24;
                var3 = var12[var10];
                var1 = undefined;
                var5 = var11.bind(var1)(var3);
                var4 = var5.useAnimatedReaction;
                var3 = function u() {
                    var2 = _closure3_slot2;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = 0;
                    var1 = var1 === var2;
                    return var1;
                };
                var7 = {};
                var7['sharedState'] = var13;
                var3['__closure'] = var7;
                var7 = 7315121230879.0;
                var3['__workletHash'] = var7;
                var7 = _closure1_slot34;
                var3['__initData'] = var7;
                var2 = function a(arg1, arg2) {
                    _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                        var3 = arg1;
                        var2 = arg2;
                        var1 = var3 !== var2;
                        if(!var1) { _fun0026_ip = 149; continue _fun0026 }
case 80:
                        if(!var3) { _fun0026_ip = 150; continue _fun0026 }
case 151:
                        if(var1) { _fun0026_ip = 152; continue _fun0026 }
case 150:
                        var1 = var3;
                        if(var1) { _fun0026_ip = 153; continue _fun0026 }
case 54:
                        var1 = var3 === var2;
case 153:
                        if(var1) { _fun0026_ip = 149; continue _fun0026 }
case 154:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 24;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.runOnJS;
                        var1 = _closure3_slot5;
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.bind(var2)();
                        _fun0026_ip = 149; continue _fun0026;
case 152:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 24;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.runOnJS;
                        var1 = _closure3_slot4;
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.bind(var2)();
case 149:
                        var1 = undefined;
                        return var1;
                    }
                };
                var7 = {};
                var10 = var12[var10];
                var10 = var11.bind(var1)(var10);
                var10 = var10.runOnJS;
                var7['runOnJS'] = var10;
                var7['clearQuery'] = var9;
                var7['cancelTimeout'] = var8;
                var2['__closure'] = var7;
                var7 = 6379173436444.0;
                var2['__workletHash'] = var7;
                var6 = _closure1_slot35;
                var2['__initData'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1 = var1.bind(var4)(var27, var26, var12);
            var1 = var13.trim;
            var1 = var1.bind(var13)();
            var1 = var1.length;
            var9 = var1 > var7;
            var3 = _closure1_slot26;
            var2 = _closure1_slot5;
            var1 = {};
            var1['style'] = var5;
            var8 = _closure1_slot25;
            var6 = _closure1_slot31;
            var5 = {};
            var5['tab'] = var10;
            var5['setTab'] = var28;
            var5['updateQuery'] = var27;
            var5['searchRef'] = var26;
            var5['sharedState'] = var12;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var6 = var13.trim;
            var6 = var6.bind(var13)();
            var6 = var6.length;
            var6 = var7 === var6;
            if(!var6) { _fun0020_ip = 155; continue _fun0020 }
case 156:
            var7 = _closure1_slot28;
            var7 = var7.SEARCH;
            var6 = var10 === var7;
case 155:
            if(!var6) { _fun0020_ip = 157; continue _fun0020 }
case 158:
            var12 = _closure1_slot25;
            var8 = _closure1_slot1;
            var26 = _closure1_slot2;
            var7 = 43;
            var7 = var26[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['selectedGuildId'] = var19;
            var7['setSelectedGuild'] = var25;
            var7['unreadPrivateChannelIds'] = var24;
            var7['unreadGuilds'] = var23;
            var7['guildHistory'] = var22;
            var7['visible'] = var21;
            var6 = var12.bind(var4)(var8, var7);
case 157:
            var5[1] = var6;
            var8 = _closure1_slot25;
            var7 = _closure1_slot5;
            var6 = {};
            var11 = var11.launchPadContent;
            var6['style'] = var11;
            var11 = _closure1_slot28;
            var11 = var11.SEARCH;
            if(!(var10 === var11)) { _fun0020_ip = 159; continue _fun0020 }
case 160:
            if(var9) { _fun0020_ip = 161; continue _fun0020 }
case 159:
            var9 = _closure1_slot28;
            var9 = var9.SEARCH;
            if(!(var10 !== var9)) { _fun0020_ip = 162; continue _fun0020 }
case 163:
            var9 = _closure1_slot28;
            var9 = var9.DEV_TOOLS;
            if(!(var10 !== var9)) { _fun0020_ip = 164; continue _fun0020 }
case 165:
            var9 = _closure1_slot28;
            var9 = var9.MEMBERS;
            if(!(var10 !== var9)) { _fun0020_ip = 166; continue _fun0020 }
case 167:
            var11 = _closure1_slot25;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 47;
            var9 = var12[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9 = var11.bind(var4)(var10, var9);
            _fun0020_ip = 168; continue _fun0020;
case 166:
            var12 = _closure1_slot25;
            var11 = _closure1_slot1;
            var21 = _closure1_slot2;
            var10 = 46;
            var10 = var21[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var9 = var12.bind(var4)(var11, var10);
case 168:
            _fun0020_ip = 169; continue _fun0020;
case 164:
            var12 = _closure1_slot25;
            var11 = _closure1_slot1;
            var21 = _closure1_slot2;
            var10 = 45;
            var10 = var21[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var9 = var12.bind(var4)(var11, var10);
case 169:
            _fun0020_ip = 170; continue _fun0020;
case 162:
            var12 = _closure1_slot25;
            var11 = _closure1_slot0;
            var21 = _closure1_slot2;
            var10 = 44;
            var10 = var21[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.InitialResults;
            var10 = {};
            var10['selectedGuildId'] = var19;
            var21 = var16 == var20;
            var19 = undefined;
            if(var21) { _fun0020_ip = 137; continue _fun0020 }
case 171:
            var19 = var20.unreads;
case 137:
            if(!(var16 == var19)) { _fun0020_ip = 172; continue _fun0020 }
case 173:
            var19 = _closure1_slot32;
case 172:
            var10['unreads'] = var19;
            var21 = var16 == var20;
            var19 = undefined;
            if(var21) { _fun0020_ip = 174; continue _fun0020 }
case 175:
            var19 = var20.channelHistory;
case 174:
            if(!(var16 == var19)) { _fun0020_ip = 176; continue _fun0020 }
case 177:
            var19 = _closure1_slot32;
case 176:
            var10['history'] = var19;
            var10['expandedHistory'] = var18;
            var10['toggleExpandedHistory'] = var17;
            var9 = var12.bind(var4)(var11, var10);
case 170:
            _fun0020_ip = 178; continue _fun0020;
case 161:
            var12 = _closure1_slot25;
            var11 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = 44;
            var10 = var17[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.SearchResults;
            var10 = {};
            if(!(var16 == var14)) { _fun0020_ip = 179; continue _fun0020 }
case 180:
            var14 = _closure1_slot32;
case 179:
            var10['results'] = var14;
            var10['query'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 178:
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 48;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/launchpad/native/LaunchPad.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();