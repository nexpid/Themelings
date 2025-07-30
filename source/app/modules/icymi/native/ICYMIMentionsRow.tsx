// app/modules/icymi/native/ICYMIMentionsRow.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var7 = native4;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
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
            var9 = _closure1_slot17;
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
            var7 = _closure1_slot17;
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
    var _closure1_slot16 = var1;
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
    var _closure1_slot17 = var1;
    var1 = function MoreUnreadsRow(arg1) {
        var2 = arg1;
        var18 = var2.messages;
        var _closure2_slot0 = var18;
        var2 = _closure1_slot15;
        var4 = undefined;
        var9 = var2.bind(var4)();
        var6 = _closure1_slot4;
        var5 = var6.useMemo;
        var3 = new Array(1);
        var3[0] = var18;
        var2 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var8 = new Array(0);
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var15 = var2;
                var1 = new var15[var1](var14);
                var6 = var1 instanceof Object ? var1 : var2;
                var2 = _closure1_slot16;
                var1 = _closure2_slot0;
                var9 = undefined;
                var5 = var2.bind(var9)(var1);
                var2 = var5.bind(var9)();
                var1 = var2.done;
                var4 = null;
                if(var1) { _fun0004_ip = 205; continue _fun0004 }
 70:
                var11 = var2.value;
                var10 = _closure1_slot6;
                var7 = var10.getChannel;
                var1 = var11.getChannelId;
                var1 = var1.bind(var11)();
                var12 = var7.bind(var10)(var1);
                var7 = var4 != var12;
                var1 = null;
                if(!var7) { _fun0004_ip = 132; continue _fun0004 }
 108:
                var11 = _closure1_slot9;
                var10 = var11.getGuild;
                var7 = var12.getGuildId;
                var7 = var7.bind(var12)();
                var1 = var10.bind(var11)(var7);
 132:
                var7 = var4 == var1;
                if(var7) { _fun0004_ip = 154; continue _fun0004 }
 139:
                var11 = var6.has;
                var10 = var1.id;
                var7 = var11.bind(var6)(var10);
 154:
                if(var7) { _fun0004_ip = 187; continue _fun0004 }
 157:
                var10 = var8.push;
                var7 = var1.name;
                var7 = var10.bind(var8)(var7);
                var7 = var6.add;
                var1 = var1.id;
                var1 = var7.bind(var6)(var1);
 187:
                var7 = var5.bind(var9)();
                var1 = var7.done;
                var2 = var7;
                if(!var1) { _fun0004_ip = 70; continue _fun0004 }
 205:
                var2 = var8.length;
                var1 = '';
                var7 = 0;
                if(!(var7 !== var2)) { _fun0004_ip = 498; continue _fun0004 }
 223:
                var2 = var8.length;
                var11 = 1;
                if(!(var11 !== var2)) { _fun0004_ip = 426; continue _fun0004 }
 238:
                var2 = var8.length;
                var12 = 2;
                if(!(var12 !== var2)) { _fun0004_ip = 346; continue _fun0004 }
 250:
                var4 = _closure1_slot0;
                var10 = _closure1_slot3;
                var2 = 14;
                var5 = var10[var2];
                var5 = var4.bind(var9)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var2 = var10[var2];
                var2 = var4.bind(var9)(var2);
                var2 = var2.t;
                var4 = var2.1P7pvb;
                var2 = {};
                var10 = var8[var7];
                var2['guildName1'] = var10;
                var10 = var8[var11];
                var2['guildName2'] = var10;
                var10 = var8.length;
                var10 = var10 - var12;
                var2['numGuildsRemaining'] = var10;
                var2 = var5.bind(var6)(var4, var2);
                _fun0004_ip = 424; continue _fun0004;
 346:
                var5 = _closure1_slot0;
                var12 = _closure1_slot3;
                var4 = 14;
                var6 = var12[var4];
                var6 = var5.bind(var9)(var6);
                var10 = var6.intl;
                var6 = var10.formatToPlainString;
                var4 = var12[var4];
                var4 = var5.bind(var9)(var4);
                var4 = var4.t;
                var5 = var4.QiuZ+P;
                var4 = {};
                var12 = var8[var7];
                var4['guildName1'] = var12;
                var11 = var8[var11];
                var4['guildName2'] = var11;
                var2 = var6.bind(var10)(var5, var4);
 424:
                _fun0004_ip = 495; continue _fun0004;
 426:
                var4 = _closure1_slot0;
                var10 = _closure1_slot3;
                var3 = 14;
                var5 = var10[var3];
                var5 = var4.bind(var9)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var3 = var10[var3];
                var3 = var4.bind(var9)(var3);
                var3 = var3.t;
                var4 = var3.90AwBw;
                var3 = {};
                var7 = var8[var7];
                var3['guildName'] = var7;
                var2 = var5.bind(var6)(var4, var3);
 495:
                var1 = var2;
 498:
                return var1;
            }
        };
        var8 = var5.bind(var6)(var2, var3);
        var6 = _closure1_slot0;
        var10 = _closure1_slot3;
        var2 = 15;
        var2 = var10[var2];
        var3 = var6.bind(var4)(var2);
        var2 = var3.useNavigation;
        var11 = var2.bind(var3)();
        var _closure2_slot1 = var11;
        var5 = _closure1_slot4;
        var3 = var5.useCallback;
        var2 = new Array(1);
        var2[0] = var11;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var5 = var2.ICYMIAnalytics;
            var4 = var5.trackItemInteraction;
            var3 = 'more_unreads_button';
            var2 = 'press_more_unreads_button';
            var2 = var4.bind(var5)(var3, var3, var2);
            var4 = _closure2_slot1;
            var3 = var4.push;
            var2 = 'notifications-screen';
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5 = var3.bind(var5)(var1, var2);
        var3 = _closure1_slot12;
        var1 = 17;
        var1 = var10[var1];
        var1 = var6.bind(var4)(var1);
        var2 = var1.TableRow;
        var1 = {};
        var13 = _closure1_slot12;
        var11 = 18;
        var11 = var10[var11];
        var11 = var6.bind(var4)(var11);
        var12 = var11.ArrowSmallRightIcon;
        var11 = {};
        var14 = var9.rightArrow;
        var11['style'] = var14;
        var14 = 'custom';
        var11['size'] = var14;
        var11 = var13.bind(var4)(var12, var11);
        var1['icon'] = var11;
        var1['onPress'] = var5;
        var13 = _closure1_slot12;
        var5 = 11;
        var11 = var10[var5];
        var11 = var6.bind(var4)(var11);
        var12 = var11.Text;
        var11 = {'style': null, 'lineClamp': 1, 'variant': 'text-sm/semibold', 'color': 'text-brand'};
        var14 = var9.noTouchContainer;
        var11['style'] = var14;
        var14 = 14;
        var15 = var10[var14];
        var15 = var6.bind(var4)(var15);
        var17 = var15.intl;
        var16 = var17.formatToPlainString;
        var14 = var10[var14];
        var14 = var6.bind(var4)(var14);
        var14 = var14.t;
        var15 = var14.66UdFh;
        var14 = {};
        var18 = var18.length;
        var14['unreadsCount'] = var18;
        var14 = var16.bind(var17)(var15, var14);
        var11['children'] = var14;
        var11 = var13.bind(var4)(var12, var11);
        var1['label'] = var11;
        var7 = _closure1_slot12;
        var5 = var10[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.Text;
        var5 = {'style': null, 'lineClamp': 1, 'variant': 'text-xs/normal', 'color': 'text-muted'};
        var9 = var9.noTouchContainer;
        var5['style'] = var9;
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['subLabel'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function MentionRow(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var11 = var2.message;
            var _closure2_slot0 = var11;
            var2 = _closure1_slot15;
            var4 = undefined;
            var15 = var2.bind(var4)();
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var5 = 19;
            var2 = var3[var5];
            var9 = var6.bind(var4)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var4 = _closure2_slot0;
                var1 = var4.getChannelId;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var8.bind(var9)(var7, var2);
            var _closure2_slot1 = var2;
            var3 = var3[var5];
            var8 = var6.bind(var4)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0006_ip = 47; continue _fun0006 }
 16:
                    var4 = _closure1_slot9;
                    var3 = var4.getGuild;
                    var5 = _closure2_slot1;
                    var2 = var5.getGuildId;
                    var2 = var2.bind(var5)();
                    var1 = var3.bind(var4)(var2);
 47:
                    return var1;
                }
            };
            var24 = var7.bind(var8)(var6, var3);
            var _closure2_slot2 = var24;
            var8 = _closure1_slot4;
            var7 = var8.useMemo;
            var6 = new Array(2);
            var6[0] = var24;
            var3 = var11.author;
            var3 = var3.id;
            var6[1] = var3;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0007_ip = 54; continue _fun0007 }
 13:
                    var1 = {};
                    var3 = _closure2_slot2;
                    var3 = var3.id;
                    var2 = _closure2_slot0;
                    var2 = var2.author;
                    var4 = var2.id;
                    var2 = new Array(1);
                    var2[0] = var4;
                    var1[var3] = var2;
                    _fun0007_ip = 56; continue _fun0007;
 54:
                    var1 = {};
 56:
                    return var1;
                }
            };
            var9 = var7.bind(var8)(var3, var6);
            var8 = _closure1_slot4;
            var7 = var8.useEffect;
            var22 = null;
            var6 = var22 == var24;
            var3 = undefined;
            if(var6) { _fun0005_ip = 194; continue _fun0005 }
 189:
            var3 = var24.id;
 194:
            var6 = new Array(2);
            var6[0] = var3;
            var3 = var11.author;
            var3 = var3.id;
            var6[1] = var3;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot2;
                    var6 = null;
                    var4 = var6 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0008_ip = 29; continue _fun0008 }
 20:
                    var4 = _closure2_slot2;
                    var3 = var4.id;
 29:
                    if(!(var6 != var3)) { _fun0008_ip = 123; continue _fun0008 }
 33:
                    var7 = _closure1_slot10;
                    var5 = var7.getUser;
                    var4 = _closure2_slot0;
                    var4 = var4.author;
                    var4 = var4.id;
                    var4 = var5.bind(var7)(var4);
                    if(!(var6 == var4)) { _fun0008_ip = 123; continue _fun0008 }
 70:
                    var5 = _closure1_slot7;
                    var4 = var5.requestMember;
                    var3 = _closure2_slot2;
                    var6 = var6 == var3;
                    var3 = undefined;
                    if(var6) { _fun0008_ip = 102; continue _fun0008 }
 93:
                    var6 = _closure2_slot2;
                    var3 = var6.id;
 102:
                    var2 = _closure2_slot0;
                    var2 = var2.author;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var3, var2);
 123:
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var3, var6);
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 20;
            var3 = var7[var3];
            var8 = var6.bind(var4)(var3);
            var3 = var8.useSubscribeGuildMembers;
            var3 = var3.bind(var8)(var9);
            var8 = _closure1_slot2;
            var3 = 13;
            var3 = var7[var3];
            var9 = var8.bind(var4)(var3);
            var8 = var9.getParser;
            var3 = _closure1_slot14;
            var3 = var3.bind(var4)();
            var14 = var8.bind(var9)(var3);
            var3 = 21;
            var3 = var7[var3];
            var8 = var6.bind(var4)(var3);
            var7 = var8.useName;
            var3 = var22 == var24;
            var6 = undefined;
            if(var3) { _fun0005_ip = 328; continue _fun0005 }
 323:
            var6 = var24.id;
 328:
            var9 = var22 == var2;
            var3 = undefined;
            if(var9) { _fun0005_ip = 342; continue _fun0005 }
 337:
            var3 = var2.id;
 342:
            var2 = var11.author;
            var25 = var7.bind(var8)(var6, var3, var2);
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var5];
            var6 = var3.bind(var4)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0009_ip = 59; continue _fun0009 }
 16:
                    var5 = _closure1_slot8;
                    var4 = var5.getMember;
                    var3 = _closure2_slot2;
                    var3 = var3.id;
                    var2 = _closure2_slot0;
                    var2 = var2.author;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
 59:
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var3, var2);
            var3 = var22 == var2;
            var21 = undefined;
            if(var3) { _fun0005_ip = 417; continue _fun0005 }
 411:
            var21 = var2.colorString;
 417:
            if(!(var22 == var21)) { _fun0005_ip = 425; continue _fun0005 }
 421:
            var21 = _closure1_slot11;
 425:
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = var22 == var24;
            var6 = undefined;
            if(var2) { _fun0005_ip = 448; continue _fun0005 }
 443:
            var6 = var24.id;
 448:
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var11;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var1 = 16;
                    var2 = var6[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var10 = var2.ICYMIAnalytics;
                    var9 = var10.trackItemInteraction;
                    var4 = _closure2_slot0;
                    var8 = var4.id;
                    var7 = 'unread_mention';
                    var3 = 'press_unread_mention';
                    var3 = var9.bind(var10)(var8, var7, var3);
                    var3 = 22;
                    var3 = var6[var3];
                    var6 = var5.bind(var1)(var3);
                    var5 = var6.navigateToPost;
                    var3 = var4.getChannelId;
                    var4 = var3.bind(var4)();
                    var7 = _closure2_slot2;
                    var3 = null;
                    var7 = var3 == var7;
                    var3 = undefined;
                    if(var7) { _fun0010_ip = 120; continue _fun0010 }
 111:
                    var7 = _closure2_slot2;
                    var3 = var7.id;
 120:
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                }
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 17;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var8 = _closure1_slot12;
            var7 = _closure1_slot1;
            var9 = 23;
            var6 = var6[var9];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var10 = true;
            var6['animate'] = var10;
            var13 = var22 == var24;
            var10 = undefined;
            if(var13) { _fun0005_ip = 548; continue _fun0005 }
 543:
            var10 = var24.id;
 548:
            var6['guildId'] = var10;
            var10 = var11.author;
            var6['user'] = var10;
            var18 = _closure1_slot0;
            var23 = _closure1_slot3;
            var9 = var23[var9];
            var9 = var18.bind(var4)(var9);
            var9 = var9.AvatarSizes;
            var9 = var9.REFRESH_MEDIUM_32;
            var6['size'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var1['icon'] = var6;
            var1['onPress'] = var5;
            var7 = _closure1_slot13;
            var6 = _closure1_slot5;
            var5 = {};
            var9 = var15.textContainer;
            var8 = new Array(3);
            var8[0] = var9;
            var9 = var15.labelContainer;
            var8[1] = var9;
            var9 = var15.noTouchContainer;
            var8[2] = var9;
            var5['style'] = var8;
            var13 = _closure1_slot13;
            var8 = 11;
            var9 = var23[var8];
            var9 = var18.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'style': null, 'lineClamp': 1, 'variant': 'text-md/medium', 'color': 'header-primary'};
            var16 = var15.label;
            var9['style'] = var16;
            var20 = _closure1_slot12;
            var16 = var23[var8];
            var16 = var18.bind(var4)(var16);
            var17 = var16.Text;
            var16 = {};
            var19 = {};
            var19['color'] = var21;
            var16['style'] = var19;
            var19 = 'text-md/semibold';
            var16['variant'] = var19;
            var19 = 22;
            var19 = var23[var19];
            var21 = var18.bind(var4)(var19);
            var19 = var21.truncateUsername;
            var21 = var19.bind(var21)(var25);
            var19 = ' ';
            var21 = var21 + var19;
            var16['children'] = var21;
            var17 = var20.bind(var4)(var17, var16);
            var16 = new Array(2);
            var16[0] = var17;
            var17 = 14;
            var20 = var23[var17];
            var20 = var18.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.formatToPlainString;
            var17 = var23[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.t;
            var18 = var17.jM1jAA;
            var17 = {};
            var25 = var22 == var24;
            var23 = undefined;
            if(var25) { _fun0005_ip = 850; continue _fun0005 }
 845:
            var23 = var24.name;
 850:
            var24 = var22 != var23;
            var22 = '';
            if(!var24) { _fun0005_ip = 864; continue _fun0005 }
 861:
            var22 = var23;
 864:
            var17['guildName'] = var22;
            var17 = var20.bind(var21)(var18, var17);
            var16[1] = var17;
            var9['children'] = var16;
            var9 = var13.bind(var4)(var10, var9);
            var10 = new Array(2);
            var10[0] = var9;
            var20 = _closure1_slot12;
            var9 = _closure1_slot0;
            var16 = _closure1_slot3;
            var13 = var16[var8];
            var13 = var9.bind(var4)(var13);
            var18 = var13.Text;
            var17 = {'style': null, 'variant': 'text-xs/normal', 'color': 'header-muted'};
            var13 = var15.timestamp;
            var17['style'] = var13;
            var13 = 24;
            var13 = var16[var13];
            var23 = var9.bind(var4)(var13);
            var22 = var23.getRelativeTimestamp;
            var13 = _closure1_slot1;
            var21 = 25;
            var21 = var16[var21];
            var25 = var13.bind(var4)(var21);
            var24 = var25.extractTimestamp;
            var21 = var11.id;
            var21 = var24.bind(var25)(var21);
            var21 = var22.bind(var23)(var21);
            var17['children'] = var21;
            var17 = var20.bind(var4)(var18, var17);
            var10[1] = var17;
            var5['children'] = var10;
            var5 = var7.bind(var4)(var6, var5);
            var1['label'] = var5;
            var7 = _closure1_slot13;
            var6 = _closure1_slot5;
            var5 = {};
            var17 = var15.textContainer;
            var10 = new Array(3);
            var10[0] = var17;
            var17 = var15.noTouchContainer;
            var10[2] = var17;
            var5['style'] = var10;
            var10 = _closure1_slot12;
            var8 = var16[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'style': null, 'lineClamp': 1, 'variant': 'text-sm/normal', 'color': 'header-muted'};
            var17 = var15.label;
            var8['style'] = var17;
            var18 = var11.content;
            var17 = var18.replace;
            var11 = /\n+/g;
            var11 = var17.bind(var18)(var11, var19);
            var11 = var14.bind(var4)(var11);
            var8['children'] = var11;
            var9 = var10.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot12;
            var10 = _closure1_slot5;
            var9 = {};
            var14 = var15.badgeContainer;
            var9['style'] = var14;
            var14 = _closure1_slot12;
            var12 = 26;
            var12 = var16[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var15 = var15.badge;
            var12['badgeStyle'] = var15;
            var15 = 8;
            var12['size'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['subLabel'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var13 = 2;
    var4 = var6[var13];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var12 = var4.ICYMI_MARGIN;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 10;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var14 = {};
    var15 = 11;
    var10 = var6[var15];
    var10 = var5.bind(var1)(var10);
    var10 = var10.TextStyleSheet;
    var19 = var10.text-sm/normal;
    var20 = var14;
    var10 = copyDataProperties(var20, var19);
    var10 = 12;
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.colors;
    var17 = var16.TEXT_MUTED;
    var16 = 'color';
    var14[var16] = var17;
    var7['strong'] = var14;
    var14 = {};
    var15 = var6[var15];
    var15 = var5.bind(var1)(var15);
    var15 = var15.TextStyleSheet;
    var19 = var15.text-sm/semibold;
    var20 = var14;
    var15 = copyDataProperties(var20, var19);
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.TEXT_BRAND;
    var14[var16] = var15;
    var16 = 'transparent';
    var15 = 'backgroundColor';
    var14[var15] = var16;
    var7['mention'] = var14;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot14 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['height'] = var12;
    var4['arrowContainer'] = var9;
    var9 = {'width': 0, 'height': 0, 'borderStyle': 'solid', 'borderLeftColor': 'transparent', 'borderRightColor': 'transparent', 'borderTopColor': null, 'borderBottomColor': null, 'position': 'absolute'};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.CARD_PRIMARY_BG;
    var9['borderTopColor'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.CARD_PRIMARY_BG;
    var9['borderBottomColor'] = var14;
    var14 = 32;
    var15 = var12 + var14;
    var14 = var12 / var13;
    var14 = var15 + var14;
    var9['right'] = var14;
    var4['arrow'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    var4['textContainer'] = var9;
    var9 = {};
    var9['marginBottom'] = var13;
    var4['labelContainer'] = var9;
    var9 = {};
    var9['flexShrink'] = var13;
    var4['label'] = var9;
    var9 = {};
    var9['marginHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['paddingTop'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['paddingBottom'] = var12;
    var4['container'] = var9;
    var9 = {};
    var12 = 18;
    var9['width'] = var12;
    var4['badgeContainer'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['marginLeft'] = var12;
    var4['timestamp'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.STATUS_DANGER;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['marginLeft'] = var12;
    var4['badge'] = var9;
    var9 = {'tintColor': null, 'height': 20, 'width': 20, 'marginHorizontal': 6};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_BRAND;
    var9['tintColor'] = var10;
    var4['rightArrow'] = var9;
    var9 = {};
    var10 = 'none';
    var9['pointerEvents'] = var10;
    var4['noTouchContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/ICYMIMentionsRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ICYMIMentionsRow(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var1 = var1.messages;
            var _closure2_slot0 = var1;
            var2 = _closure1_slot15;
            var4 = undefined;
            var15 = var2.bind(var4)();
            var5 = _closure1_slot4;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = {};
                var4 = _closure2_slot0;
                var9 = var4.slice;
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 27;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var8 = var3.MAX_NUM_MENTIONS_SHOWN;
                var3 = 0;
                var3 = var9.bind(var4)(var3, var8);
                var1['displayMessages'] = var3;
                var3 = var4.slice;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.MAX_NUM_MENTIONS_SHOWN;
                var2 = var3.bind(var4)(var2);
                var1['remainingMessages'] = var2;
                return var1;
            };
            var1 = var3.bind(var5)(var1, var2);
            var12 = var1.displayMessages;
            var14 = var1.remainingMessages;
            var3 = _closure1_slot13;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var15.container;
            var1['style'] = var5;
            var7 = _closure1_slot12;
            var6 = _closure1_slot5;
            var5 = {};
            var8 = var15.arrowContainer;
            var5['style'] = var8;
            var13 = _closure1_slot12;
            var10 = _closure1_slot5;
            var8 = {};
            var16 = var15.arrow;
            var15 = new Array(2);
            var15[0] = var16;
            var16 = {'borderLeftWidth': 12, 'borderRightWidth': 12, 'borderBottomWidth': 12};
            var15[1] = var16;
            var8['style'] = var15;
            var8 = var13.bind(var4)(var10, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot0;
            var10 = _closure1_slot3;
            var6 = 28;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.TableRowGroup;
            var6 = {};
            var10 = var12.map;
            var9 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot12;
                var4 = _closure1_slot19;
                var3 = {};
                var3['message'] = var1;
                var2 = var1.id;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var10 = var10.bind(var12)(var9);
            var9 = new Array(2);
            var9[0] = var10;
            var12 = var14.length;
            var10 = 0;
            var10 = var12 > var10;
            if(!var10) { _fun0011_ip = 271; continue _fun0011 }
 250:
            var13 = _closure1_slot12;
            var12 = _closure1_slot18;
            var11 = {};
            var11['messages'] = var14;
            var10 = var13.bind(var4)(var12, var11);
 271:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();